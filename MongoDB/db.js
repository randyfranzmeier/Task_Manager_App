const mongoose = require(mongoose)
const uri = "mongodb+srv://randyfranzmeier:Romanrich44@cluster0.portob0.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri).then(()=> console.log("connection successful")).catch((err) => console.log(err))