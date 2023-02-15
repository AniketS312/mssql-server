const sql = require('mssql/msnodesqlv8')

const config = {
  server: "mysqlserver-aniket.database.windows.net",
  database: 'testhost',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true,
  }
}

sql.connect(config, function(err){
  if(err) {
    console.log(err)
  }

  const request = new sql.Request();
  request.query("select * from  dbo.books", function(err, records) {
    if(err) {
      console.log(err)
    } else {
      console.error.log(records)
    }
  })
})


  module.exports = { connection }