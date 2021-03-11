const passport = require('passport')
const User = require("./api/model/user.model")
const OAuth2Strategy = require('passport-google-oauth20')
 passport.serializeUser((user, done)=>{
  done(null, user.id)
 })
passport.deserializeUser((user, done)=>{
    done(null, user ) 
 })

 

passport.use( new OAuth2Strategy({
    clientID: process.env.Google_client_id,
    clientSecret: process.env.Google_secret_key,
   //callbackURL: 'https://eva-restaurant.herokuapp.com/google/callback'
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // const user =User.create({email: profile.emails},function(err, user) {
    //     console.log("ERROR #########");
       console.log(profile)
    //     if(err) return done(err)
     // done(null, err);
   // });
  }
));
