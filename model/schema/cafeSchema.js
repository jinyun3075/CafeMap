const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    name : {
        type: String,
        maxLength: 200,
        require: "카페 이름을 입력해주세요.",
    },
    content : {
        type: String,
        default: "환영합니다.",
    },
    location: {
        type: Array,
        require: "위도와 경도를 입력해주세요.",
        unique: true
    },
    img: {
        type: Array,
        default: ["default.png"]
    }
});
Schema.post('save', function(error, doc, next) {
    if(error.keyValue){
        const {location} = error.keyValue;
        if (location && error.code === 11000) {
            next(new Error('이 위치는 이미 지정되어 있습니다.'));
        }
    }
    next(error);
})
module.exports = mongoose.model("cafes", Schema);