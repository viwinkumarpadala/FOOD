const express=require('express')
const router=express.Router()

router.get('/fooddata',(req,res)=>{
    try{
        res.send([global.food_items,global.food_category])
    }
    catch(err){
        console.log(err)
        res.send("server error")
    }
})

module.exports=router