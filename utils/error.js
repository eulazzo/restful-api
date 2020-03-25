module.exports = {
    send:(err,res,code = 400)=>{
        
        console.log(`Error:${err}`);
        res.status(code).json({
            error:err
        })
       
    }
}
    