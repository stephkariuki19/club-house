const User = require('../models/clubmodel');

async function createUser(req,res){
    const {username,password,confirmation,email} = req.body;
    try{
        const user = await User.findOne({email});
        if (!user){
            if(password===confirmation){
                const newUser = new User({
                    username : username,
                    email : email,
                    password : password
                })
                await newUser.save()
                console.log('user created')
                res.redirect('/') //should go to page for non members
            }else{
                console.log('passwords do not match') //put a message through
            }

        }else{
            console.log('email already in use')//or put  message through
        }

    }catch(err){
        console.error(err);
        res.redirect('/error')
    }
}

module.exports = {
    createUser
};