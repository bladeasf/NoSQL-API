const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/NoSQLnetworkAPI')

module.exports = mongoose.connection