# GarethGravelinePleauIndividualProjectCSFS1000Fall2020

Hello Tarun, 
To run the app it's inside my individualprojectfinalsubmissionGGP folder - > and then the my-app folder. You just go through the usual NPM install and open two separate terminals. One with 'npm run dev' and the other with 'npm start' to get the react app running. 
You will need to create the user table first in the database and that can be found in the users.sql file. Once you login with an approved email address and password, you'll be take to the Admin dashboard. There'll be an area where entries are listed and you can use the entries.sql table to start that. My contact form will immediately put new entries to the top of the list on the admin dashboard. Underneath the entries section, you will find four buttons. One to log out. And CRUD each for user creation, resume section creation/deletion/update and portfolio creation/deletion/update. They coorespond to the resume.sql and portfolio.sql tables.

For entries: You can find sql statements at line 19 for create and 41 for get in the entriesRoute.js file in the my-app/src/routes folder. 

For users: you can find sql statments at line 18 to create a user and line 36 for the login authorization route in the usersRoute.js file in the my-app/src/routes folder. 

For portfolio: you can find sql statements at line 10 to get all portfolio items line 33 to get a specific portfolio item (not used in my app) line 64 to create a portfolio item line 98 to update a portfolio item and 123 to delete in the portfolioRoute.js file in the my-app/src/routes folder. 

For resume: you can find sql statments at line 10 to get all resume items, line 33 to get a specific resume item (not used in my app) line 64 to create a new item line 98 to update and line 123 to delete in the resumeRoute.js file in the my-app/src/routes folder.

Hopefully this is all clear. Thank you!
