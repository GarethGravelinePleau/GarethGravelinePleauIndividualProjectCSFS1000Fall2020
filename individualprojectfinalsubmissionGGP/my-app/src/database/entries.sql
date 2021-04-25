CREATE TABLE IF NOT EXISTS entries (
  `entry_id` int(20) NOT NULL AUTO_INCREMENT,
  `entry_name` varchar(100) NOT NULL DEFAULT '',
  `entry_email` varchar(100) NOT NULL DEFAULT '',
  `entry_number` varchar(100) NOT NULL DEFAULT '',
  `entry_content` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`entry_id`)
);

INSERT INTO `entries` VALUES (1,'Gareth GP','GarethGP@gmail.com','7055000181','Here is my entry!')