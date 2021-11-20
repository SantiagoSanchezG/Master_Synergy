import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@cluster0.8vpll.mongodb.net/Master_Synergy?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Database is conected"))
    .catch(e => console.log(e));