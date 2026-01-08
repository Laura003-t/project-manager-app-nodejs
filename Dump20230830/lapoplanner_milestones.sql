-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: lapoplanner
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `milestones`
--

DROP TABLE IF EXISTS `milestones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `milestones` (
  `title` varchar(100) NOT NULL,
  `project` varchar(100) NOT NULL,
  `brief` varchar(10000) NOT NULL,
  `priority` enum('High','Medium','Low') NOT NULL,
  `timeline` date NOT NULL,
  `stat` enum('Ongoing','Completed','Deleted') NOT NULL,
  `statdate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `milestones`
--

LOCK TABLES `milestones` WRITE;
/*!40000 ALTER TABLE `milestones` DISABLE KEYS */;
INSERT INTO `milestones` VALUES ('    ','Audit Portal Project','\" \"','High','2023-05-21','Ongoing',NULL),('wanfij','Audit Portal Project','\" \"','High','2023-07-07','Ongoing',NULL),('kjsenio4','Audit Portal Project','\" kjsdzblfkejfs\"','Medium','2023-07-22','Ongoing',NULL),('sekngop','Audit Portal Project','\" \"','High','2023-06-29','Ongoing',NULL),('Adding Payroll System for our e360 Portal Application to be used by HR','e360 Portal Project','\"Adding payroll system for HR to ensure effective payment of salary and others\"','Medium','2023-07-06','Ongoing',NULL),('ysjksdnj sknsik','Lapojdnjb',' n','High','2023-07-09','Ongoing',NULL),('Work on the login page','Ongoing Review Portal','\"Work on front end, back end and database for the login and sign up procedures\"','High','2023-06-29','Ongoing',NULL),('Export project','undefined','Export the project to the web so that the audit team can test it on their own.','High','2023-06-30','Ongoing',NULL),('Create Leave Requisition Module','e360 Portal Project','\"To enable employees request and track leave requsition process\"','High','2023-12-14','Ongoing',NULL),('Make system like the old one','e360 Portal Project','\"The stakeholders prefer to have the project simlar to the old one, so we have to remove the updates.\"','High','2023-07-07','Deleted','2023-07-17'),('Export project','e360 Portal Project','\"Export the project to the web so that the audit team can test it on their own.\"','High','2023-06-29','Ongoing',NULL),('Making final touch','e360 Portal Project','\"Making final edits to the front end design of the application\"','Low','2023-08-30','Ongoing',NULL),('Testing','e360 Portal Project','\"Giving access to the application to the HR team to test its functionality, and ease of use.\"','Medium','2023-07-13','Ongoing',NULL),('Start Front End Design','Original DevOps Project','\"Start with the front end design for the application\"','High','2023-07-27','Ongoing',NULL),('jhgghjhg','Letters','kjhkhhkhkhkhk','High','2023-07-13','Ongoing',NULL),('Unneeded','Test Project','\"This project is not an actual project, so it should be deleted.\"','Medium','2023-07-10','Ongoing',NULL),('kwjefkj','',' ','High','2023-07-14','Ongoing',NULL),('laweòdnoiwel ','Audit Portal Project','\" \"','High','2023-07-13','Ongoing',NULL),('skbcawlelwkj','e360 Portal Project','\"szmnbslujkdn.asdkjmklsaxm,\"','High','2023-07-31','Deleted','2023-08-29'),('lòewkfopsj4tml','e360 Portal Project','\"s4jrpow3sjfioe3ru938s4rfjkeht4f98joi34ou8thsed\"','High','2023-07-31','Ongoing',NULL),('4sheiuhfskti4gs','e360 Portal Project','\"krghke4ghs34tijiselfj8iuhgjde\"','High','2023-07-31','Ongoing',NULL),('lshcnlk','eeeejkcbz','\"<\"','High','2023-07-31','Ongoing',NULL),('òfoiweadnlkwa','eeeejkcbz','\"<\"','High','2023-07-31','Ongoing',NULL),('waedliwau','eeeejkcbz','\"<\"','High','2023-07-31','Ongoing',NULL),('eifheorif','eeeejkcbz','\".,@#\"','High','2023-07-31','Ongoing',NULL),('yufuygfkyug','eeeejkcbz','\"<>>><<<---°°°\"','High','2023-07-31','Ongoing',NULL),('hdchghjv','eeeejkcbz','\"----------->>>>>>>>>>>>>>><\"','High','2023-07-31','Ongoing',NULL),('jhsdbuiwe','eeeejkcbz','\"<<<<<<<<<<<<<<<<<<<<<<<\"','High','2023-08-06','Ongoing',NULL),('dkfvnluurejkdnc','eeeejkcbz','\"<<<<<<<<<<<<<<<<<<<<<<<<\"','High','2023-08-06','Ongoing',NULL),('lwmeofoèa','Add New Project','\"saekfmjacowfme\"','High','2023-07-31','Ongoing',NULL),('hjbkjhb','Add New Project','\"<<<<<<<<<<<<<<<<@@@\"','High','2023-07-27','Deleted','2023-08-29');
/*!40000 ALTER TABLE `milestones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-30 14:26:13
