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

const list = async () => {
    const data = await cafeSchema.find();
    const results = [];
    for (const json of data) {
        const result = json.toJSON();
        delete result._id;
        results.push(result);
    }
    return results;
}
module.exports = { create, view, search, list};