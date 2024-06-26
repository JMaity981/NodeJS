const mongoose = require("mongoose");
const validator = require("validator");

//connection creation and  creation a new db
mongoose.connect("mongodb://localhost:27017/technical")
.then( () => console.log("Connection Successfull..."))
.catch( (err) => console.log(err) );

const playlistScheema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique : true,
        //lowercase: true,
        trim:true,
        minlength:[2,"Minimum 2 Letters"],
        maxlength:30
    },
    ctype: {
        type:String,
        required:true,
        lowercase: true,
        enum:["frontend","backend","database"]
    },
    videos: {
        type:Number,
        validate(value){
            if(value<0){
                throw new Error("Videos count should not be negative")
            }
        }
        // OR
        /*validate:{
            validator:function(value){
                return value.length < 0
            },
            message:"Videos count should not be negative"
        }*/
    },
    author: String,
    email: {
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
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

        /*const phpPlaylist = new Playlist({
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

        const result = await Playlist.insertMany([phpPlaylist,laravelPlaylist,mysqlPlaylist]);*/
        const PlaylistData = new Playlist({
            name: "Type Script",
            ctype: "Frontend",
            videos: 20,
            author: "J. Maity",
            email: "jayanta@cloudoter.com",
            active: true
        });
        const result = await Playlist.insertMany([PlaylistData]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
createDocument();

const getDocument = async() =>{
    try{
        // const result = await Playlist.find();
        // const result = await Playlist.find({ctype: "Back End"});
        // const result = await Playlist.find({ctype: "Back End"}).select({name:1});
        // const result = await Playlist.find({ctype: "Back End"}).select({name:1}).limit(1);
        // const result = await Playlist.find({videos: {$gt : 50}}).select({name:1});
        // const result = await Playlist.find({videos: {$lte : 50}}).select({name:1,videos:1});
        // const result = await Playlist.find({ctype: {$nin : ['Database']}}).select({name:1});
        // const result = await Playlist.find({ctype: {$in : ['Database','Back End']}}).select({name:1,ctype:1});
        // const result = await Playlist.find({$or : [{ctype:'Database'},{author:'J. Maity'}]}).select({name:1,ctype:1});
        // const result = await Playlist.find({$and : [{author:'J. Maity'}]})
        //                             .select({name:1,ctype:1})
        //                             .countDocuments();
        const result = await Playlist.find({$and : [{author:'J. Maity'}]})
                                    .select({name:1})
                                    // .sort({name : 1});
                                    .sort({name : -1});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
// getDocument();

const updateDocument = async(id) =>{
    try{
        // const result = await Playlist.updateOne({_id:id},{
        //     $set:{
        //         name:"MYSQL"
        //     }
        // });
        const result = await Playlist.findByIdAndUpdate(
            {_id:id},
            {
                $set:{
                    name:"MYSQL"
                }
            },
            {
                new: true
            }
        );
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
// updateDocument("6609ada01faa8ecfacd814a5");

const deleteDocument = async(_id)=>{
    try{
        // const result = await Playlist.deleteOne({_id});
        const result = await Playlist.findByIdAndDelete({_id});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
// deleteDocument("6609ada01faa8ecfacd814a5");
