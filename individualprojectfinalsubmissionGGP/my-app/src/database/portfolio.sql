CREATE TABLE IF NOT EXISTS `portfolio` (
  `portfolio_id` int(20) NOT NULL AUTO_INCREMENT,
  `portfolio_name` varchar(100) NOT NULL DEFAULT '',
  `portfolio_image` varchar(100) NOT NULL DEFAULT '',
  `portfolio_description` varchar(100) NOT NULL DEFAULT '',
  `portfolio_link` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`portfolio_id`)
);


INSERT INTO `portfolio` VALUES ('0','Project1','imgur.com','test project','github.com');