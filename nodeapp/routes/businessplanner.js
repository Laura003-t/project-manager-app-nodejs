var express = require('express');
var router = express.Router();
var db = require('../Planner');
var fs = require('fs');
var email = require('../email');

let varProj = '';
let varMiles = '';
let varFormProj = '';
var session;
router.get('/login', function(req, res, next) {
    res.render('BusinessPlanner\\login');
});
router.get('/home', function(req, res, next) {
    session = req.session;
    if(session.userid) {
        res.render('BusinessPlanner\\home');
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/signup', function(req, res, next) {
    res.render('BusinessPlanner\\signup');
});
router.get('/home/viewreport', function(req, res, next) {
    session = req.session;
    if(session.userid) {
        const d = new Date();
    let today = Date.now();
    let day = d.getDay();
    let mon = today - ((day - 1) * 86400000);
    let fri = mon + (4 * 86400000);
    const frid = new Date(fri);
    let friday = frid.getDate();
    let fridm = frid.getMonth() + 1;
    let fridy = frid.getFullYear();
    var filepath = "public/files/LAPODevOpsTasks" + fridm + "-" + friday + "-" + fridy + ".html";
    fs.access(filepath, fs.F_OK, function(err) {
        if (err) {
            res.render('BusinessPlanner\\viewemptyreport');
        } else {
            res.render('BusinessPlanner\\viewreport');
        }
    });
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/successfulsignup', function(req, res, next) {
    res.render('BusinessPlanner\\signupsucces');
});
router.get('/home/addnewproject', function(req, res, next) {
    session = req.session;
    if (session.userid) {
        res.render('BusinessPlanner\\addproject');
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/home/addnewmilestone', function(req, res, next) {
    session = req.session;
    if (session.userid) {
        res.render('BusinessPlanner\\addmilestone', {data: varProj});
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/home/projects', function(req, res, next) {
    session = req.session;
    if (session.userid) {
        var sql = "CALL getprojects()";
    db.query(sql, function (err, rows) {
        if (err) {
            console.log(err);
            res.render('BusinessPlanner\\projectserr');
        } else {
            res.render("BusinessPlanner\\projects", {data: rows[0]});
        }
    });
    } else {
        res.redirect('/businessplanner/login');
    }
});


router.get('/home/projects/view', function(req, res, next) {
    session = req.session;
    if (session.userid) {
        var project = varProj;
    db.query("CALL getprojects()", function (err, rows) {
        if (err) {
            console.log(err);
            res.render('BusinessPlanner\\projecterr');
        }
        db.query("CALL getmilestones_by_time(?)", varProj, function(err, rows1) {
            if (err) {
                console.log(err);
                res.render('BusinessPlanner\\projecterr');
            }
            db.query("CALL get_single_project(?)", varProj, function(err, rows2) {
                if (err) {
                    console.log(err);
                    res.render('BusinessPlanner\\projecterr');
                }
                res.render('BusinessPlanner\\view', {data: rows[0], data1: rows1[0], data2: rows2[0]});
            });
        })
    });
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/home/projects/milestones/edit', function(req, res, next) {
    session = req.session;
    if (session.userid) {
        var milestone = varMiles;
    db.query("CALL get_single_milestone(?)", varMiles, function(err, row) {
        if (err) {
            console.log(err);
            res.render('BusinessPlanner\\projecterr');
        }
        res.render('BusinessPlanner\\editmilestone', {data: row[0]});
    });
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/home/projects/edit', function(req, res, next) {
    session = req.session;
    if (session.userid) {
        db.query("CALL get_single_project(?)", varProj, function(err, row) {
            if (err) {
                console.log(err);
                res.render('BusinessPlanner\\projecterr');
            }
            res.render('BusinessPlanner\\editproject', {data: row[0]});
        });
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/home/projects-deleted-proj', function(req, res, next) {
    session = req.session;
    if (session.userid) {
        db.query("CALL getprojects()", function (err, rows) {
            if (err) {
                res.render('BusinessPlanner\\projectserr');
            } else {
                res.render("BusinessPlanner\\projdel", {data: rows[0]});
            }
        });
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/home/projects/view/deletemilestone', function(req, res, next) {
    session = req.session;
    if (session.userid) {
        var project = varProj;
    db.query("CALL getprojects()", function (err, rows) {
        if (err) {
            console.log(err);
            res.render('BusinessPlanner\\projecterr');
        }
        db.query("CALL getmilestones_by_time(?)", project, function(err, rows1) {
            if (err) {
                console.log(err);
                res.render('BusinessPlanner\\projecterr');
            }
            db.query("CALL get_single_project(?)", project, function(err, rows2) {
                if (err) {
                    console.log(err);
                    res.render('BusinessPlanner\\projecterr');
                }
                res.render('BusinessPlanner\\delmilestone', {data: rows[0], data1: rows1[0], data2: rows2[0], data3: varMiles});
            });
        });
    });
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/home/addnewproject/addnewmilestone', function(req, res, next) {
    session = req.session;
    if (session.userid) {
        res.render('BusinessPlanner\\addmilestone0', {data: varProj});
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/home/submittingtasks/selectproj', function(req, res, next) {
    session = req.session;
    if (session.userid) {
        db.query("CALL getprojects()", function (err, rows) {
            if (err) {
                req.flash('error', err);
                res.render('BusinessPlanner\\selectprojerr', {data: ''});
            } else {
                console.log(err);
                res.render('BusinessPlanner\\selectproj', {data: rows[0]});
            }
        });
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/home/submittingtasks/selectproj/fillreport', function(req, res, next) {
    session = req.session;
    if (session.userid) {
        db.query("CALL getmilestones(?)", varFormProj, function(err, rows) {
            if (err) {
                console.log(err);
                res.render('BusinessPlanner\\selectprojagain');
            } else res.render('BusinessPlanner\\fillreport', {data: varFormProj, data1: rows[0]});
        });
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/home/projecterr', function(req, res, next) {
    session = req.session;
    if (session.userid) {
        res.render('BusinessPlanner\\projectserr');
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/loginfailed', function(req,res,next) {
    res.render('BusinessPlanner\\loginfailed');
});
router.get('/forgotpassword', function(req, res, next) {
    res.render('BusinessPlanner\\forgotpassword');
});
router.get('/home/bin', function(req, res, next) {
    session = req.session;
    if (session.userid) {
        db.query("CALL getprojects()", function(err, rows) {
            if (err) {
                console.log(err);
                res.render('BusinessPlanner\\projecterr');
            } else {
                db.query("CALL get_deleted_projects()", function(err, rows1) {
                    if (err) {
                        console.log(err);
                        res.render('BusinessPlanner\\projecterr');
                    } else {
                        db.query("CALL get_all_milestones()", function(err, rows2) {
                            if (err) {
                                console.log(err);
                                res.redirect('BusinessPlanner\\projecterr');
                            } else res.render('BusinessPlanner\\deletedprojects', {data: rows[0], data1: rows1[0], data2: rows2[0]});
                        });
                    } 
                });
            }
        });
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/home/projects/view/deletedmilestones', function(req, res, next) {
    session = req.session;
    if (session.userid) {
        db.query("CALL getprojects()", function (err, rows) {
            if (err) {
                console.log(err);
                res.render('BusinessPlanner\\projecterr');
            } else {
                db.query("CALL getmilestones(?)", varProj, function(err, rows1) {
                    if (err) {
                        console.log(err);
                        res.render('BusinessPlanner\\projecterr');
                    } else res.render('BusinessPlanner\\deletedmilestones', {data: rows[0], data1: rows1[0], data2: varProj});
                });
            }
        });
    } else {
        res.redirect('/businessplanner/login');
    }
});
router.get('/logout', function(req, res, next) {
    req.session.destroy();
    res.redirect('/businessplanner/login');
});
router.post('/submittingtasks...', function(req, res, next) {
    const d = new Date();
    let today = Date.now();
    let day = d.getDay();
    let mon = today - ((day - 1) * 86400000);
    let fri = mon + (4 * 86400000);
    const mond = new Date(mon);
    const frid = new Date(fri);
    let monday = mond.getDate();
    let mondm = mond.getMonth() + 1;
    let mondy = mond.getFullYear();
    let friday = frid.getDate();
    let fridm = frid.getMonth() + 1;
    let fridy = frid.getFullYear();
    const startdate = monday + "-" + mondm + "-" + mondy;
    const enddate = friday + "-" + fridm + "-" + fridy;
    var filepath = "public/files/LAPODevOpsTasks" + fridm + "-" + friday + "-" + fridy + ".html";
    fs.access(filepath, fs.F_OK, function(err) {
        if (err) {
            var html = "<!DOCTYPE html><html><HEAD><style>table, th, td {border: 1px solid black;border-collapse: collapse;text-align: center; font-size: 12px}</style></HEAD><body><img src='lapo_logo_plain.png' width='250px'><h6 style='color: blue; font-size: 19px'>DEPT: IT SOLUTION AND INNOVATION<BR>REPORTING PERIOD: " + startdate + " TO " + enddate + "<BR>DEPT HEAD NAME: OWEGIE OSASERE<BR>UNIT HEAD TEAM: NATHANIEL OMORAGBON<BR>TEAM MEMBERS: OLU EVANS, EBELE NMOEMENAM, CALEB NADOMA, PASCAL IKEJI</h6><table width='100%'><tr><th>ACTIVITY</th><th>REMARK</th><th>COMPLETION TIMELINE</th><th>STATUS</th></tr>";
            fs.appendFile(filepath, html, function(err) {
                if (err) req.flash(err);
                console.log('Report created');
            });
        }
    });
    function play() {var title = req.body.title;
    var milestone = req.body.milestone;
    var activity = req.body.activity;
    var status = req.body.status;
    var comment = req.body.comment;
    if(Array.isArray(title)) {
        for(var i=0; i<title.length; i++) {
            let tit = title[i];
            let mil = milestone[i];
            let act = activity[i];
            let stat = status[i];
            let com = comment[i];
            db.query("CALL gettimeline(?)", mil, function(err, row) {
                if (err) req.flash('error', err);
                else {
                    var timeline = JSON.stringify(row[0][0].timeline).slice(1, 11);
                    var doc = "<tr><td style='text-align: left'><b style='font-size: 15px'>" + tit + "</b><br><br><b>" + mil + "</b><br>" + act + "</td><td>" + com + "</td><td>" + timeline + "</td><td>" + stat + "</td></tr>";
                    fs.appendFile(filepath, doc, function(err) {
                        if (err) req.flash(err);
                        console.log('File uploaded');
                    });
                }
            });
        }
        res.redirect('/businessplanner/home/submittingtasks/selectproj');
    } else {
        db.query("CALL gettimeline(?)", milestone, function(err, row) {
            if(err) req.flash('error', err);
            else {
                var timeline = JSON.stringify(row[0][0].timeline).slice(1, 11);
                var doc = "<tr><td style='text-align: left'><b style='font-size: 15px'>" + title + "</b><br><br><b>" + milestone + "</b><br>" + activity + "</td><td>" + comment + "</td><td>" + timeline + "</td><td>" + status + "</td></tr>";
                fs.appendFile(filepath, doc, function(err) {
                    if (err) req.flash(err);
                    console.log('File uploaded');
                    res.redirect('/businessplanner/home/submittingtasks/selectproj');
                });
            }
        });
    }
    }
    setTimeout(play, 1000);
});
router.post('/signingup...', function(req, res, next) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    db.query("CALL createuser(?, ?, ?)", [username, email, password], function(err, data) {
        if (err) throw err;
        console.log('User data is inserted into lapoplanner');
    });
    res.redirect('/businessplanner/successfulsignup');
});
router.post('/loggingin...', function(req, res, next) {
    let username = req.body.user;
    const password = req.body.pswrd;
    db.query("CALL login(?, ?)", [username, password], function(err, result) {
        if (err) throw err;
        if(result[0]!= '') {
            session = req.session;
            session.userid = username;
            console.log('Session: ' + session);
            res.redirect('/businessplanner/home')
        } else {
            res.redirect('/businessplanner/loginfailed');
        }
    });
});
router.post('/addingnewprojects...', function(req, res, next) {
    const title = req.body.title;
    const desc = JSON.stringify(req.body.desc);
    var i=0;
    if(Array.isArray(title)) {
        for(var i=0; i<title.length; i++) {
            db.query("CALL add_new_project(?, ?)", [title[i], desc[i]], function(err, data) {
                if (err) console.log(err);
                console.log('Project entered into lapoplanner');
            });
        }
    } else {
        db.query("CALL add_new_project(?, ?)", [title, desc], function(err, data) {
            if (err) console.log(err);
            console.log('Project entered into lapoplanner');
        });
    }
    res.redirect("/businessplanner/home/projects");
});
router.post('/submittingnewprojects...', function(req, res, next) {
    const title = req.body.title;
    varProj = title;
    const desc = JSON.stringify(req.body.desc);
    var i=0;
    if(Array.isArray(title)) {
        for(var i=0; i<title.length; i++) {
            db.query("CALL add_new_project(?, ?)", [title[i], desc[i]], function(err, data) {
                if (err) console.log(err);
                console.log('Project entered into lapoplanner');
            });
        }
    } else {
        db.query("CALL add_new_project(?, ?)", [title, desc], function(err, data) {
            if (err) console.log(err);
            console.log('Project entered into lapoplanner');
        });
    }
    res.redirect('/businessplanner/home/addnewproject/addnewmilestone');
});
router.post('/addingmilestone...', function(req, res, next) {
    const title = req.body.title;
    const desc = req.body.desc;
    const priority = req.body.priority;
    const date = req.body.date;
    if(Array.isArray(title)) {
        for(var i=0; i<title.length; i++) {
            db.query("CALL add_new_milestone(?, ?, ?, ?, ?)", [title[i], varProj, JSON.stringify(desc[i]), priority[i], date[i]], function(err, data) {
                if (err) req.flash('error', err);
                else console.log('Milestone entered into lapoplanner');
            });
        }
        res.redirect('/businessplanner/home/projects/view');
    } else {
        db.query("CALL add_new_milestone(?, ?, ?, ?, ?)", [title, varProj, JSON.stringify(desc), priority, date], function(err, data) {
            if (err) {
                console.log(err);
                res.redirect("/businessplanner/home/projecterr");
            }
            else {
                console.log('Milestone entered into lapoplanner');
                res.redirect("/businessplanner/home/projects/view");
            }
        });
    }
});
router.post('/showmilestones', function(req, res, next) {
    varProj = req.body.project;
    res.redirect('/businessplanner/home/projects/view');
});
router.post('/editmilestone', function(req, res, next) {
    varMiles = req.body.milestone;
    res.redirect('/businessplanner/home/projects/milestones/edit');
});
router.post('/editmilestone...', function(req, res, next) {
    var milestone = req.body.milestone;
    var desc = JSON.stringify(req.body.desc);
    var priority = req.body.priority;
    var date = req.body.date;
    db.query("CALL edit_milestone(?, ?, ?, ?, ?, ?)", [milestone, desc, priority, date, varMiles, varProj], function(err, data) {
        if (err) {
            console.log(err);
            res.redirect('/businessplanner/home/projecterr');
        }
        console.log("Entry edited for milestone table");
        res.redirect('/businessplanner/home/projects/view');
    });
});
router.post('/editproject...', function(req, res, next) {
    var title = req.body.title;
    var desc = JSON.stringify(req.body.desc);
    db.query("CALL edit_project(?, ?, ?)", [title, desc, varProj], function(err, data) {
        if (err) {
            console.log(err);
            res.redirect('/businessplanner/home/projecterr');
        }
        console.log('Table projects has been updated');
        varProj = req.body.title;
        res.redirect('/businessplanner/home/projects/view');
    });
});
router.post('/delete', function(req, res, next) {
    var name = req.body.project;
    var date = new Date();
    db.query("CALL delete_status_project(?, ?)", [name, date], function(err, data) {
        if (err) {
            console.log(err);
            res.redirect('/businessplanner/home/projecterr');
        } else {
            console.log('The project has been successfully deleted');
            res.redirect('/businessplanner/home/projects-deleted-proj');
        }
    });
});
router.post('/getMilestonetoDel', function(req, res, next) {
    varMiles = req.body.milestone;
    res.redirect('/businessplanner/home/projects/view/deletemilestone');
});
router.post('/deletemilestone', function(req, res, next) {
    const milestone = req.body.milestone;
    const d = new Date();
    db.query("CALL del_milestone(?, ?, ?)", [varProj, milestone, d], function(err, result) {
        if (err) {
            console.log(err);
            res.redirect('/businessplanner/home/projecterr');
        } else {
            console.log('Milestone has been successfully deleted!');
            res.redirect('/businessplanner/home/projects/view');
        }
    });
});
router.post('/loadprojectsubmitreport', function(req, res, next) {
    varFormProj = req.body.project;
    res.redirect('/businessplanner/home/submittingtasks/selectproj/fillreport');
});

module.exports = router;