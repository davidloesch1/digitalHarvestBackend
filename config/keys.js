dbPassword = process.env.MONGO_URI
console.log(dbPassword)
module.exports = {
    mongoURI: dbPassword
};