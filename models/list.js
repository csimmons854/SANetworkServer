const db = require('../db');

exports.getAll = function (done) {
  db.get().query('SELECT * FROM SmartAppliances',function (err,rows) {
      if(err) return done(err);
      done(null, rows);
  })
};