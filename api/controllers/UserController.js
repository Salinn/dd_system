/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var passport = require('passport');
FacebookStrategy = require('passport-facebook').Strategy;

module.exports = {

  login: function (req, res) {
    res.view();
  },

  dashboard: function (req, res) {
    res.view();
  },

  logout: function (req, res){
    req.session.user = null;
    req.session.flash = 'You have logged out';
    res.redirect('user/login');
  },

  'facebook': function (req, res, next) {
    passport.authenticate('facebook', { scope: ['email', 'user_about_me','user_friends']},
      function (err, user) {
        req.logIn(user, function (err) {
          if(err) {
            req.session.flash = 'There was an error';
            res.redirect('user/login');
          } else {
            req.session.user = user;
            res.redirect('/user/dashboard');
          }
        });
      })(req, res, next);
  },

  'facebook/callback': function (req, res, next) {
    passport.authenticate('facebook',
      function (req, res) {
        res.redirect('/user/dashboard');
      })(req, res, next);
  }
};
