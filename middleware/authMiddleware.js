function ensureAuthenticated(req, res, next) {
    if(process.env.NODE_ENV === 'development'){
        return next();
    }
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error', 'You must log in to access this information');
    res.redirect('/');
} 

module.exports = {ensureAuthenticated};