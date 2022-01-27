const cafeSchema = require('./schema/cafeSchema');

const create = (cafe) => {
    const data = new cafeSchema({
        name: cafe.name,
        content: cafe.content,
        location: cafe.location,
        img: cafe.img
    })
    return data.save();
}

const view = (id) => {
    return cafeSchema.findById(id);
}

const search = (name) => {
    return cafeSchema.find({name: new RegExp(name)}).sort({name:'asc'});
}
module.exports = { create, view, search};