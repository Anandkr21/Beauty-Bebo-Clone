const authorise = (permittedRoles) => {
    return (req, res, next) => {
        const user_role = req.userid.role;
        console.log(user_role);
        if (permittedRoles.includes(user_role)) {
            next()
        } else {
            res.send('unauthorise')
        }
    }
}

module.exports = { authorise }