module.exports = {

  database: process.env.DATABASE || 'mongodb://localhost:27017/fiverrclone',
  port: process.env.PORT || 3030,
  secret: process.env.SECRET || 'fiverrclone222222',

}
