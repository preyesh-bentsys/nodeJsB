// import sequelize
import { Sequelize } from "sequelize";
 // create connection

 
//const db = new Sequelize('social_media_dev', 'Social-media-server', 'bent123#', {
 //   host: 'nodejs-social-medial-app-server.database.windows.net',
  //  dialect: 'mysql'
   
//});


const db = new Sequelize('social_media_dev', 'Social-media-server', 'bent123#', {
  host: 'nodejs-social-medial-app-server.database.windows.net',
  dialect: 'mssql',
  dialectOptions: {
    encrypt: true
  }
});

/*const db = new Sequelize('social_media_dev', 'Social-media-server','bent123#', {
    host:'nodejs-social-medial-app-server.database.windows.net',
    dialect: 'mssql',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
  */
  
  /*console.log('I am here going to connect ');
  db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  */

// export connection
export default db;