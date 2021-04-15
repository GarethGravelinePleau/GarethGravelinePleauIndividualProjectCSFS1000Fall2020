CREATE TABLE IF NOT EXISTS `resume` (
  `resume_id` int(20) NOT NULL AUTO_INCREMENT,
  `employer_name` varchar(100) NOT NULL DEFAULT '',
  `position_name` varchar(100) NOT NULL DEFAULT '',
  `position_desc` varchar(100) NOT NULL DEFAULT '',
  `date` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`resume_id`)
);

INSERT INTO `resume` VALUES ('0','Project1','Project1','test project','1989-2021');