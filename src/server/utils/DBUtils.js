var conf = require("config");
var MongoClient = require('mongodb').MongoClient;
var mongodb_url = conf.get("mongodb_config.url")
const sql = require('mssql');


var config = {
    "user": conf.get("mssqlserver_config.user"),
    "password": conf.get("mssqlserver_config.password"),
    "server": conf.get("mssqlserver_config.server"),
    "database": conf.get("mssqlserver_config.database"),
    "port": conf.get("mssqlserver_config.port"),
    "dialect": conf.get("mssqlserver_config.dialect"),
    "dialectOptions": {
        "instanceName": conf.get("mssqlserver_config.dialectOptions.instanceName")
    },
    "pool": {
      "max": conf.get("mssqlserver_config.pool.max"),
      "min": conf.get("mssqlserver_config.pool.min"),
      "idleTimeoutMillis": conf.get("mssqlserver_config.pool.idleTimeoutMillis")
    }
  };
  
  


module.exports = {

    authenticate: async  (req, res, next) => {
            var data = [];
            const userData = req.body;
            try {
              const pool =  await new sql.ConnectionPool(config).connect();
              //let pool = await sql.connect(config)
             // await pool;
              const request =new sql.Request(pool);
              data =  await request.query(`select * from dbo.users where email='${userData.email}' and password='${userData.password}'`);

              if(data.recordset.length != 0){
                return res.status(200).json({message: 'login was successfull', data: data})
               
              }
              else{
                return res.status(401).json({message: 'login was not successfull', details: 'either your username or password is incorrect!'});
              }
              
            
          
          } catch (err) {
             console.log(err);
             res.status(500).json({message: "Internal Error occured while authenticating the user!", error: err});
          }

    },
    registerNewUser : async (req, res, next) => {
        var data = [];
        var row = [];
        try{

          const userData = req.body;
          const pool = await new sql.ConnectionPool(config).connect();
          const transaction =  await pool.transaction();
          await transaction.begin();
          const request = transaction.request();

          const selectQuery = `select first_name from dbo.users where email='${userData.email.trim()}'`;
          row = await request.query(selectQuery);
          console.log(JSON.stringify(row));
          
          if(row.recordset.length != 0){
            return res.status(401).json({message: 'registration was not completed', error: {message: "email already exists - Please use a different email address"}})
          }

          const fields = 'first_name,last_name,email,password,company,street_address,city,state,zip_code,country,telephone,screen_name,show_name,img_url,creation_date,last_login,disabled'
          const insertQuery = `insert into dbo.users (${fields}) values ('${userData.firstName}','${userData.lastName}',`+
          `'${userData.email}','${userData.password}','${userData.company}','${userData.street_address}',`+
          `'${userData.city}','${userData.state}','${userData.zip_code}','${userData.country}','${userData.telephone}',`+
          `'${userData.screen_name}','${userData.show_name}','${userData.img_url}','${new Date().toISOString().slice(0, 19).replace('T', ' ')}','${new Date().toISOString().slice(0, 19).replace('T', ' ')}','${userData.disabled}'`+`)`;
          data = await request.query(insertQuery);
          transaction.commit();
          return res.status(200).json({message: 'registration was successfull', data: data})

        }
        catch(err){
          console.log(err);
         res.status(500).json({message: "Internal Error occured while registering", error: err});
        }
    },
    findUserByEmail: async (req, res, next) => {
      const userData = req.body;
      const pool =  await new sql.ConnectionPool(config).connect();
      const request =new sql.Request(pool);
      const selectQuery = `select first_name from dbo.users where email='${userData.email.trim()}'`;
      row = await request.query(selectQuery);
      console.log(JSON.stringify(row));

      
      if(row.recordset.length != 0){
        return res.status(401).json({message: "That username is taken, please use a different username"})
      }
      return res.status(200).json({message: 'user not available - please proceed', userData})

    },
    getMongoDb : async () => {
        console.log('mongo db url => '+mongodb_url)
        var db = await MongoClient.connect(mongodb_url, { useNewUrlParser: true });
        return db;
    }
}

