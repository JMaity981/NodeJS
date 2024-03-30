const mongoose = require("mongoose");

//connection creation and  creation a new db
mongoose.connect("mongodb://localhost:27017/technical")
.then( () => console.log("Connection Successfull..."))
.catch( (err) => console.log(err) );

const playlistScheema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type:Date,
        default: Date.now
    }
});

//collection creation
const Playlist = new mongoose.model("playlist",playlistScheema);

//create document or insert
const createCocument = async() =>{
    try{
        const nodePlaylist = new Playlist({
            name: "React JS",
            ctype: "Front End",
            videos: 40,
            author: "J. Maity",
            active: true
        });
        
        const result = await nodePlaylist.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

createCocument();
