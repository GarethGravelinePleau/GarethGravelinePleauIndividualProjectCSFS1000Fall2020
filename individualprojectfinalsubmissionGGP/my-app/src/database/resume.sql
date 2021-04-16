CREATE TABLE IF NOT EXISTS `resume` (
  `resume_id` int(20) NOT NULL AUTO_INCREMENT,
  `employer_name` varchar(100) NOT NULL DEFAULT '',
  `position_name` varchar(100) NOT NULL DEFAULT '',
  `position_desc` varchar(100) NOT NULL DEFAULT '',
  `date` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`resume_id`)
);

INSERT INTO `resume` VALUES (1,'Elections Canada','Poll Clerk','- Tabulating official elections results for Elections Canada.','2019'), 
(2,'Highschool Math Tutor','Tutor','- Assisting students in university math preparation.','2007-Ongoing'),
(3,'Loblaws','Overnight Clerk','Store Preparation','2017-Ongoing');