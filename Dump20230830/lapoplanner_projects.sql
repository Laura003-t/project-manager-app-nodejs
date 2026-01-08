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
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `sn` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `brief` varchar(10000) DEFAULT NULL,
  `stat` enum('Accessible','Deleted') DEFAULT NULL,
  `statdate` date DEFAULT NULL,
  PRIMARY KEY (`sn`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'e360','\"This is a dummy application for the e360 portal application. This project doesn\'t actually exist\"','Accessible',NULL),(2,'e360','\"This is a dummy application for the e360 portal application. This project doesn\'t actually exist\"','Accessible',NULL),(3,'e360','\"This is a dummy application for the e360 portal application. This project doesn\'t actually exist\"','Accessible',NULL),(4,'e360','\"This is a dummy application for the e360 portal application. This project doesn\'t actually exist\"','Accessible',NULL),(5,'e360','\"This is a dummy application for the e360 portal application. This project doesn\'t actually exist\"','Accessible',NULL),(6,'e360','\"This is a dummy application for the e360 portal application. This project doesn\'t actually exist\"','Accessible',NULL),(7,'Audit Portal Project','\"Application for the auditors, lkksdncioòelkrne\"','Accessible',NULL),(8,'real project','\"This is an application that filters data according to the desired restrictions entered\"','Accessible',NULL),(9,'Audit Portal Project','\"Application for the auditors, lkksdncioòelkrne\"','Accessible',NULL),(10,'New portal project','\"This application is to keep a detailed record of new projects\"','Accessible',NULL),(11,'Audit Portal Project','\"Application for the auditors, lkksdncioòelkrne\"','Accessible',NULL),(12,'HR Application','\"This application is being built for use by the HR\"','Accessible',NULL),(13,'Job application portal','\"This application is to apply for a job at LAPO Microfinance Bank\"','Accessible',NULL),(14,'HR Application','\"This application is being built for use by the HR\"','Accessible',NULL),(15,'jkuhgjfrcvgbhntrer','\"sezjòfoieòflnsk,jrweiozklns.nduwilhkjnz\"','Deleted','2023-07-12'),(16,'ldkcmòoiwefkmaw.ik','\"k.erdhxluihekjlrslehunj\"','Deleted','2023-07-14'),(17,'oiòmwaomdkwa','\"jlscgbiekb,cfaehc,sjmnmal<sdkp<adkokc ndsu\"','Accessible',NULL),(18,'LAPO Planner','\" \"','Accessible',NULL),(19,'LAPO Planner','\" \"','Accessible',NULL),(20,'LAPO Planner','\" \"','Accessible',NULL),(22,'LAPO Planner','\" \"','Accessible',NULL),(24,'e','\" \"','Accessible',NULL),(29,'P','\"undefined\"','Accessible',NULL),(30,'o','\"undefined\"','Accessible',NULL),(31,'r','\"undefined\"','Accessible',NULL),(32,'t','\"undefined\"','Accessible',NULL),(34,'l','\"undefined\"','Accessible',NULL),(36,'P','\"undefined\"','Accessible',NULL),(37,'r','\"undefined\"','Accessible',NULL),(38,'o','\"undefined\"','Accessible',NULL),(39,'j','\"undefined\"','Accessible',NULL),(40,'e','\" \"','Accessible',NULL),(42,'t','\"undefined\"','Accessible',NULL),(43,'e','\" \"','Accessible',NULL),(48,'P','\"undefined\"','Accessible',NULL),(49,'o','\"undefined\"','Accessible',NULL),(50,'r','\"undefined\"','Accessible',NULL),(51,'t','\"undefined\"','Accessible',NULL),(53,'l','\"undefined\"','Accessible',NULL),(55,'P','\"undefined\"','Accessible',NULL),(56,'r','\"undefined\"','Accessible',NULL),(57,'o','\"undefined\"','Accessible',NULL),(58,'j','\"undefined\"','Accessible',NULL),(59,'e','\" \"','Accessible',NULL),(61,'t','\"undefined\"','Accessible',NULL),(62,'e360 project pro','\" \"','Accessible',NULL),(63,'e360 Portal Project','\"This application is for all LAPO staffs. It has different operations, and contains the details of all staffs in the organisation. This is for effective operation in the organisation.\"','Accessible',NULL),(64,'e360 Portal Project','\"This application is for all LAPO staffs. It has different operations, and contains the details of all staffs in the organisation. This is for effective operation in the organisation.\"','Accessible',NULL),(65,'Ongoing','\" \"','Accessible',NULL),(66,'Lapojdnjb','\"jkluijm\"','Deleted','2023-07-14'),(67,'e360 Mobile Application','\"e360 application for android\"','Accessible',NULL),(68,'Ongoing Review Portal','\"An application to plan meetings, reviews for different teams\"','Accessible',NULL),(69,'DevOps Application General','\"This application is created by the DevOps department of LAPO and has the DevOps signature to all its features.\"','Accessible',NULL),(72,'Original DevOps Project','\"This is the biggest project the DevOps team has handled, it is for the bank. This app will manage every operation in the bank, and every other app as well.\"','Accessible',NULL),(75,'DevOps Project Platform','\"This project is concerning the ongoing project application for the DevOps team\"','Accessible',NULL),(76,'Test Project 1','\"Test project 1\"','Accessible',NULL),(77,'Test project 2','\"Test project 2\"','Accessible',NULL),(78,'Test project 3','\"Test project 3\"','Accessible',NULL),(82,'Letters','\"kjhhkjhjkhkj\"','Deleted','2023-07-14'),(83,'Test Project','\"This is a test project. I am trying to test whether this function is working.\"','Accessible',NULL),(84,'Network Model Project','\"This project is to design an application for the network team to automatically generate a network model with entered data.\"','Accessible',NULL),(85,'Circular Application','\"This application is to enable the user to draw circles.\"','Accessible',NULL),(86,'Leave Portal','\"kjjsncloafnckwa, ediak jc\"','Accessible',NULL),(87,'Add New Project','\"Add a new project\"','Accessible',NULL),(88,'kjnadcolej','\"skehdcuiwekj\"','Accessible',NULL),(89,'eeeejkcbz','\"zslkcnisk\"','Accessible',NULL),(90,'xdnkdls','\"sjnlsknx\"','Accessible',NULL),(91,'xdnkdlszxkl','\"sjnlsknxzxm,\"','Accessible',NULL),(92,'drgkjbrkj','\"sgfbiuekx\"','Accessible',NULL);
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
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
