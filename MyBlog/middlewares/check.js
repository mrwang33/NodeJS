module.exports = {
    checkLogin : function checkLogin(req,res,next) {
        //如果session中user值是空的则跳转到登录页
        if (!req.session.user) {
            req.flash('error',"未登录");
            return res.redirect("/signin");
        }
        next();
    },
    checkNotLogin : function checkNotLogin(req,res,next) {
        //如果session中的user值不为空则跳转到之前的页面
        /*if (req.session.user) {
            req.flash('error',"已登录");
            return res.redirect("back");
        }*/
        next();
    }
}