const config = {
  env: process.env.NODE_ENV || 'development',
  mongo: process.env.MONGOLAB_URI || 'mongodb://localhost/tikal-teq',
  google: {
    id: process.env.GOOGLE_CLIENT_ID,
    secret: process.env.GOOGLE_CLIENT_SECRET,
    port: process.env.PORT || 3000,
    callback: process.env.callback || 'http://dev.roninhosting.com/auth/google/callback'
  },
  secret: 'tikal teq secret'
};

module.exports = config;
