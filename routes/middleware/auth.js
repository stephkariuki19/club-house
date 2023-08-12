// authMiddleware.js

// This middleware checks if the user is authenticated
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { // Modify this based on your authentication approach
      return next(); // User is authenticated, proceed to the next middleware/route handler
    }
    res.redirect('/login'); // Redirect to the login page if user is not authenticated
  };
  
  module.exports = ensureAuthenticated;
  