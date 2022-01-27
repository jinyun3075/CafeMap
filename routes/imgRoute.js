const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const imgCont = require('../controller/imgCont');
const bcrypt = require('bcrypt')
const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        console.log()
        const d =new Date();
        let date =bcrypt.hashSync(d.getDate+d.getMonth+d.getTime+"",2);
        date = date.replaceAll("/","");
        try{
            fs.accessSync('upload/'+date);
        } catch(error) {
            fs.mkdirSync('upload/'+date);
        }
        cd(null, 'upload/'+date);
    },
    filename: (req, file, cd) => {
        const name = file.originalname;
        cd(null, name);
    }
})
const upload = multer ({
    storage: storage,
    fileFilter: (req, file, callback ) => {
        let ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(res.end('이미지만 넣어라!!'), null);
        }
        callback(null, true);
    },
    limit: { fileSize: 5*1024*1024 },
});

router.get('/:img', imgCont.getImage);
router.post('/upload', upload.single('image'), imgCont.imageOne);
router.post('/uploads', upload.array('images',4), imgCont.imageMany);

module.exports = router;