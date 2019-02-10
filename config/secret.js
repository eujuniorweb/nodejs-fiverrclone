module.exports = {

  //database: process.env.DATABASE || 'mongodb://localhost:27017/fiverrclone',
  database: process.env.DATABASE || 'mongodb://developer:developer@cluster0-shard-00-00-mclee.mongodb.net:27017,cluster0-shard-00-01-mclee.mongodb.net:27017,cluster0-shard-00-02-mclee.mongodb.net:27017/fiverrclone?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
  port: process.env.PORT || 3030,
  secret: process.env.SECRET || 'fiverrclone222222',

}
