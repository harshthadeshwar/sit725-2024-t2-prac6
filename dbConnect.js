
/// DATABASE Connections
//database connection
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://admin:admin2@cluster0.l9hmwv8.mongodb.net/?retryWrites=true&w=majority";
let mongoClient = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });

let projectsCollection;

mongoClient.connect((err,db) => {
    // projectsCollection = mongoClient.db("deakinCrowds").collection("projects");
     if(!err){
       console.log('Database Connected')
     }else{
       console.log('[error]',err)
     }
 });
 

exports.mongoClient = mongoClient;

// this function is used to open the connection 
/*const dbConnect = ()=>{
    mongoClient.connect((err,db) => {
        projectsCollection = mongoClient.db("deakinCrowds").collection("projects");
        if(!err){
          console.log('Database Connected')
        }else{
          console.log('[error]',err)
        }
    });
    
}*/


 
