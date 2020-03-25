module.exports = {
    user:(app,req,res)=>{
        
        req.assert('name','Nome obrigatório!').notEmpty();
        req.assert('email','E-mail nválido!').notEmpty();

        let errors = req.validationErrors(); 

        if(errors){
            app.utils.error.send(errors,req,res);
            return false;
        }else{
            return true
        }
    }
}