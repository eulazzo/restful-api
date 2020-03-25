 
module.exports = {
    send:(res,user,code = 200)=>{
        res.status(code).json(user),
        console.log(user)
    }

}
    

  