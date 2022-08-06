var express=require('express');
var app=express()

const mongodb=require('mongodb')
const mongoClient=mongodb.MongoClient

app.use(express.json())

let dburl='mongodb+srv://mayurDB:Hello123db@prograd.vwimi.mongodb.net/?retryWrites=true&w=majority'

app.get('/', async function(req, res){

  res.send('<h2>Progression 2</h2><br><a href="/q1">Query 1</a><br><br><a href="/q2">Query 2</a><br><br><a href="/q3">Query 3</a><br><br><a href="/q4">Query 4</a><br><br><a href="/q5">Query 5</a><br><br><a href="/q6">Query 6</a><br><br><a href="/q7">Query 7</a><br><br><a href="/q8">Query 8</a><br><br><a href="/q9">Query 9</a><br><br><a href="/q10">Query 10</a><br><br><a href="/q11">Query 11</a><br><br><a href="/q12">Query 12</a><br><br><a href="/q13">Query 13</a><br><br><a href="/q14">Query 14</a><br><br><a href="/q15">Query 15</a><br><br><a href="/q16">Query 16</a><br><br><a href="/q17">Query 17</a><br><br><a href="/q18">Query 18</a><br><br><a href="/q19">Query 19</a>')   

})




app.get('/q1', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query1= await db.collection('companies').findOne({name:'Babelgum'},{_id:0, name:1});
     

       res.json({
          message:'Query 1',
          name : query1.name
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})



app.get('/q2', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query2=await db.collection('comapnies').find({number_of_employees:{$gt:5000}}).sort({number_of_employees:1}).limit(20);
        res.json({
            message:'Query 2',
            solution:query2
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})

app.get('/q3', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query3= await db.collection('companies').find({founded_year:{$gte:2000,$lte:2005}},{name:1,founded_year:1}).toArray();
        res.json({
            message:'Query 3',
           query3
        })

      
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})

app.get('/q4', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query4= await db.collection('companies').find({'ipo.valuation_amount':{$gt:100000000},founded_year:{$lt:2010}},{name:1,ipo:1}).toArray()
        let namearr=[]
        let year=[]


        for (let index = 0; index < query4.length; index++) {
             namearr[index]=query4[index].name
             year[index]=query4[index].founded_year
        }
        
     
       
        res.json({
            message:'Query 4',
            names: namearr,
            founded_year: year
        })
      
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})

app.get('/q5', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query5= await db.collection('companies').find({number_of_employees:{$lt:1000},founded_year:{$lt:2005}}).sort({number_of_employees:1}).limit(10).toArray();
     

       res.json({
          message:'Query 5',
          query5
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})
app.get('/q6', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query6= await db.collection('companies').find({},{name:1, partners:null});
     

       res.json({
          message:'Query 6',
          query6
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})

app.get('/q7', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query7= await db.collection('companies').find({category_code:null}).toArray();
     

       res.json({
          message:'Query 7',
          query7
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})


app.get('/q8', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query8=await db.collection('comapnies').find({number_of_employees:{$gte:100,$lt:1000}},{name:1,number_of_employees:1});
        


        res.json({
            message:'Query 8',
            query8
            
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})

app.get('/q9', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query9=await db.collection('comapnies').find().sort({'ipo.valuation_amount':-1});
        


        res.json({
            message:'Query 9',
            query9
            
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})

app.get('/q10', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query10=await db.collection('comapnies').find().sort({number_of_employees:-1}).limit(10);
        


        res.json({
            message:'Query 10',
            query10
            
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})

app.get('/q11', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query11=await db.collection('comapnies').find({founded_month:{$gt:6}}).limit(1000);
        


        res.json({
            message:'Query 11',
            query11
            
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})

app.get('/q12', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query12=await db.collection('comapnies').find({founded_year:{$lt:2000},'acquisition.price_amount':{$gt:10000000}});
        


        res.json({
            message:'Query 12',
            query12
            
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})

app.get('/q13', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query13=await db.collection('comapnies').find({'acquisition.acquired_year':{$gt:2010}},{name:1,acquisition:1}).sort({"acquisition.price_amount":1})
        


        res.json({
            message : 'Query 13',
            query13
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})




app.get('/q14', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query14=await db.collection('comapnies').find({},{name:1,founded_year:1}).sort({founded_year:1});
        
      

        res.json({
            message : 'Query 14',
            query14
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})

app.get('/q15', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query15=await db.collection('comapnies').find({founded_day:{$lte:7}}).sort({"acquisition.price_amount":-1}).limit(10)
      

        res.json({
            message : 'Query 15',
            query15
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})

app.get('/q16', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query16=await db.collection('comapnies').find({category_code:'web',number_of_employees:{$gt:4000}}).sort({number_of_employee:1})
      
        res.json({
            message : 'Query 16',
            query16
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})

app.get('/q17', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query17=await db.collection('comapnies').find({"acquisition.price_amount":{$gt:10000000}},{'acquisition.price_currency_code':"EUR"})
      
        res.json({
            message : 'Query 17',
            query17
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})


app.get('/q18', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query18=await db.collection('comapnies').find({"acquisition.acquired_month":{$lte:3}},{name:1,acquisition:1}).limit(10)
        res.json({
            message : 'Query 18',
            query18
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})

app.get('/q19', async function(req, res){

    let client=await mongoClient.connect(dburl)

    try {
        let db=await client.db('companiesDB');
        let query19=await db.collection('comapnies').find({"founded_year":{$gt:2000,$lt:2010},"acquisition.acquired_year":{$gt:2011}})
        res.json({
            message : 'Query 19',
            query19
        })
    } 
    
    catch (error) {
        console.log(error)
    }

    finally{
      client.close()
    }


})


app.listen(process.env.PORT || 8000,()=>console.log('Server running at the port 8000'));