CREATE TABLE IF NOT EXISTS `portfolio` (
  `portfolio_id` int(20) NOT NULL AUTO_INCREMENT,
  `portfolio_name` varchar(100) NOT NULL DEFAULT '',
  `portfolio_image` varchar(100) NOT NULL DEFAULT '',
  `portfolio_description` varchar(100) NOT NULL DEFAULT '',
  `portfolio_link` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`portfolio_id`)
);


INSERT INTO `portfolio` VALUES (1,'Admin Login Page','https://i.imgur.com/45imQX6.jpeg','Creating Functional HTML CSS and Javascript Login Page for Site Admins','github.com/GarethGravelinePleau/csfs1000_fall2020_grp10_final'), 
(2,'Contact Page','https://i.imgur.com/h2nbpnO.jpeg','Creating Functional HTML CSS and Javascript Contact Page','github.com/GarethGravelinePleau/csfs1000_fall2020_grp10_final'),
(3,'Toronto Tourism Homepage','https://i.imgur.com/Y27pohC.png','Creating Functional and Responsive Tourism Homepage with Javascript CSS and HTML','github.com/GarethGravelinePleau/CSFS1010ASSIGN1');