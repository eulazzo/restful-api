module.exports = (app)=>{
    app.get('/',(req,res)=>{
        // res.statusCode = 200;
        // res.setHeader('Content-type','text/html');
        res.send(`<h1>Hey</h1>`);
    })
};