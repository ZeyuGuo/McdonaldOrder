/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 5.7.17-log : Database - wxshop
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`wxshop` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `wxshop`;

/*Table structure for table `carts` */

DROP TABLE IF EXISTS `carts`;

CREATE TABLE `carts` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `title` varchar(40) DEFAULT NULL,
  `image` varchar(40) DEFAULT NULL,
  `num` int(10) DEFAULT '1',
  `price` float DEFAULT NULL,
  `selected` varchar(10) DEFAULT 'true',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `carts` */

insert  into `carts`(`id`,`title`,`image`,`num`,`price`,`selected`) values 
(1,'锡兰红茶','/image/yp7.png',1,19.9,'true'),
(2,'无肉不欢','/image/tc7.png',1,28.8,'true'),
(8,'就不怕辣','/image/tc4.png',1,18.8,'true');

/*Table structure for table `catedetail` */

DROP TABLE IF EXISTS `catedetail`;

CREATE TABLE `catedetail` (
  `id` varchar(20) NOT NULL,
  `banner` varchar(40) DEFAULT '/image/b3.png',
  `cate` varchar(20) DEFAULT NULL,
  `detail` int(255) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `detail` (`detail`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `catedetail` */

insert  into `catedetail`(`id`,`banner`,`cate`,`detail`) values 
('taocan','/image/b3.png','套餐',3),
('tehui','/image/b3.png','特惠',1),
('xiaoshi','/image/b3.png','小食',4),
('xinpin','/image/b3.png','新品',2),
('yinpin','/image/b3.png','饮品',5);

/*Table structure for table `detailmore` */

DROP TABLE IF EXISTS `detailmore`;

CREATE TABLE `detailmore` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `thumb` varchar(40) DEFAULT NULL,
  `name` varchar(40) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `pdetail` int(255) DEFAULT '3',
  PRIMARY KEY (`id`),
  KEY `pdetail` (`pdetail`),
  CONSTRAINT `detailmore_ibfk_1` FOREIGN KEY (`pdetail`) REFERENCES `catedetail` (`detail`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `detailmore` */

insert  into `detailmore`(`id`,`thumb`,`name`,`price`,`pdetail`) values 
(1,'/image/tc1.png','“鸡”不可失',28.8,3),
(2,'/image/tc2.png','“苹板”支撑',32,3),
(3,'/image/tc3.png','霸气五色',28.8,3),
(4,'/image/tc4.png','就不怕辣',18.8,3),
(5,'/image/tc5.png','来点小食',18.8,3),
(6,'/image/tc6.png','难得吃素',28.8,3),
(7,'/image/xp1.png','冰醇咖啡',9.9,2),
(8,'/image/xp2.png','大波浪',9.9,2),
(9,'/image/th1.png','无辣不欢冰火单人餐',19.9,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
