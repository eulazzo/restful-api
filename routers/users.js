const db = require('../database/db')
    
module.exports = app => {

    let route = app.route('/users');
    let routeId = app.route('/users/:id');

    routeId.delete(async(req,res)=>{
        await db.remove({_id:req.params.id},{},err=>{
            if(err) {
                app.utils.error.send(err,req,res);
            }else{
                res.status(200).json(req.params);
            }
        })
    })

    routeId.put(async (req,res)=>{
        
        if(!app.utils.validation.user(app,req,res))  return false

         await db.update({_id:req.params.id},req.body,err=>{
            if(err) {
                app.utils.error.send(err,req,res);
            }else{
                res.status(200).json(Object.assign(req.params,req.body));
            }
        })

       

    })
    
    routeId.get(async (req, res) => {
        
            await db.findOne({_id:req.params.id}).exec((err,user)=>{
                if(err) {
                    app.utils.error.send(err,req,res);
                }else{
                    app.utils.success.send(res,user);
                }
            })
             
    })


    route.get(async(req,res)=>{

        await db.find({}).sort({name:1}).exec((err,user)=>{
            if(err){
                app.utils.error.send(err,req,res);
            }else{
                app.utils.success.send(res,user);
            }
        })

    })

    route.post(async(req, res) => {

        if(!app.utils.validation.user(app,req,res))  return false

    

        await db.insert(req.body, (err, user) => {

            if (err) {
                app.utils.error.send(err,req,res);
            } else {
                app.utils.success.send(res,user);
            }

        })

    })
};