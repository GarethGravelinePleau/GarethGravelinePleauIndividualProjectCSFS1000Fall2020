CREATE TABLE IF NOT EXISTS entries (
  `entries_name` varchar(100) NOT NULL DEFAULT '',
  `entries_email` varchar(100) NOT NULL DEFAULT '',
  `entries_phone` varchar(100) NOT NULL DEFAULT '',
  `portfolio_description` varchar(100) NOT NULL DEFAULT '',
  `entries_comments` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`portfolio_name`),
);