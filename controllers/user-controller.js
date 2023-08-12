const User = require('../models/clubmodel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function createUser(req,res,next){
    const {username,password,confirmation,email} = req.body;
    try{
         // Hash the password using bcrypt
        bcrypt.hash(password,saltRounds,async(err,hashedPassword)=>{
            if(err){
                return next(err);
            } 
            const user = await User.findOne({username});
            if (!user){
                if(password===confirmation){
                    const newUser = new User({
                        username : username,
                        email : email,
                        password : hashedPassword
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

        })

  

    }catch(err){
        console.error(err);
        res.redirect('/error')
    }
}

module.exports = {
    createUser
};