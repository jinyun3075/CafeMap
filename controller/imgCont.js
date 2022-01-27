const fs = require('fs');
const getImage = (req, res) => {
    const { img } =req.params;
    try {
        const dataimg = img.split(',');
        const type = dataimg[1].split('.')[1];
        console.log(type);
        fs.readFile('upload/'+dataimg[0]+"/"+dataimg[1],(err,data)=> {
            res.status(200).type(type).send(data);
        })
    }catch(error) {
        res.status(400).json({"error":error.message});
    }
}
const imageOne = (req, res) => {
    if(req.file){
        const img = req.file;
        res.status(200).json(img);
    }else {
        res.status(400).json({ "message" : "upload fail" });
    }
}
const imageMany = async (req, res) => {
    if(req.files.length!=0){
        const img = req.files;
        res.status(200).json(img);
    }else {
        res.status(400).json({ "message" : "uploads fail" });
    }
}
module.exports = {imageOne, imageMany, getImage};