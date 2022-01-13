const static = {};

static.register=(req,res)=>{
    res.render('registro')
}

static.login=(req,res)=>{
    res.render('login')
}


static.logout=(req, res, next) => {
    req.logout();
    res.redirect('/api/panel/login');
};



module.exports = static;