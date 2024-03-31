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
const createDocument = async() =>{
    try{

        /*const nodePlaylist = new Playlist({
            name: "Mode JS",
            ctype: "Front End",
            videos: 40,
            author: "J. Maity",
            active: true
        });
        // Insert one Document
        const result = await nodePlaylist.save();*/

        const phpPlaylist = new Playlist({
            name: "PHP",
            ctype: "Back End",
            videos: 70,
            author: "J. Maity",
            active: true
        });
        const laravelPlaylist = new Playlist({
            name: "Laravel",
            ctype: "Back End",
            videos: 45,
            author: "J. Maity",
            active: true
        });
        const mysqlPlaylist = new Playlist({
            name: "mySQL",
            ctype: "Database",
            videos: 12,
            author: "J. Maity",
            active: true
        });

        const result = await Playlist.insertMany([phpPlaylist,laravelPlaylist,mysqlPlaylist]);

        console.log(result);
    }catch(err){
        console.log(err);
    }
}
// createDocument();

const getDocument = async() =>{
    try{
        // const result = await Playlist.find();
        // const result = await Playlist.find({ctype: "Back End"});
        // const result = await Playlist.find({ctype: "Back End"}).select({name:1});
        const result = await Playlist.find({ctype: "Back End"}).select({name:1}).limit(1);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
getDocument();