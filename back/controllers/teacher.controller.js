const modelTeacher = require('../models/teacher.models')

const postList = async () => {
    const result = await modelTeacher.findAll()
    return result;
}

const postCreate = async (data) => {
    const result = await modelTeacher.create(data);
}


const postUpdate = async (data) =>{
    const result = await modelTeacher.update(data, { where: { id: data.id }});
    return result;
}
 
const postDelete = async (Data) => {
    const result = await modelTeacher.destroy({ where: { id: data.id }});
    return result;
}


module.exports = {
    postList,
    postCreate,
    postUpdate,
    postDelete,
}
