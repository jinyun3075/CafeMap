const service = require("../model/cafeService");

const create = async (req, res) => {
    const { cafe } = req.body;
    try {
        const data = await service.create(cafe);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({"message":error.message})
    }
}

const view = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await service.view(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({"message":error.message})
    }
}

const search = async (req, res) => {
    const { name } = req.params;
    try {
        const data = await service.search(name);
        res.status(200).json(data)
    } catch(error) {
        res.status(400).json({"message":"키워드를 입력해주세요"});
    }
}

const list = async (req, res) => {
    try {
        const data = await service.list();
        res.status(200).json(data)
    } catch( error ) {
        res.status(400).json({"message":"list fail"});
    }
}
module.exports = { create, view, search, list };