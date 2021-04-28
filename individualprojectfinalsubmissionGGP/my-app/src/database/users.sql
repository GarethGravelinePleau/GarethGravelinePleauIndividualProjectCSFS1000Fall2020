CREATE TABLE IF NOT EXISTS `users` (
  `users_id` int(20) NOT NULL AUTO_INCREMENT,
  `users_name` varchar(100) NOT NULL DEFAULT '',
  `users_password` varchar(100) NOT NULL DEFAULT '',
  `users_email` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`users_id`)
);

INSERT INTO `users` VALUES (0,'Gareth GP','1234567','garethgp@gmail.com')