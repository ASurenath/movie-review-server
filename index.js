const jsonServer =require('json-server')
const mrServer=jsonServer.create()
const middleware=jsonServer.defaults()
const router=jsonServer.router('db.json')
const PORT=3000

mrServer.use(middleware)
mrServer.use(router)

mrServer.listen(PORT,()=>{
    console.log(`Movie review portal started at port ${PORT}`);
})