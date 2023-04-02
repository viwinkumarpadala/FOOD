const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

const connectdb=async(dburl)=>{
    await mongoose.connect(dburl,{usenewUrlparser:true},(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('connected')
            const fetcheddata = mongoose.connection.db.collection("items")
            fetcheddata.find({}).toArray( async function(err,data){
                const foodcategory = await mongoose.connection.db.collection("category")
                foodcategory.find({}).toArray(function(err,catdata){
                    if(err){
                        console.log(err)
                    }
                    else{
                        global.food_items=data;
                        global.food_category=catdata
                    }
                })
            })
        }
        
    })
}

module.exports=connectdb

