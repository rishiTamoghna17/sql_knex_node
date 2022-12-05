const  knex  = require("../db/db")


const createUser = async(req,res) =>{
    let data = req.body;
    let{first_name,last_name}= data
    const create = await knex.db('user').insert(
        {
            first_name: first_name,
            last_name: last_name
        })
    const send = await  knex.db
    .select()
    .from('user')
        return res.send(send)
}
const getUser = async(req,res)=>{
    const send = await  knex.db
    .select()
    .from('user')
        return res.send(send)

}

const updateUser =async (req,res)=>{
    let data = req.body;
     let{first_name,last_name,id}= data
     const update =await knex.db('user')
    .where({ id: id })
    .update(
        {
            first_name: first_name,
            last_name: last_name
        })
        const send = await  knex.db
        .select()
        .from('user')
            return res.send(send)
}

const delUser = async(req,res) =>{
    let data = req.body;
    
    const del = await knex.db('user')
    .where({ id: data.id }).del()
    const send = await  knex.db
        .select()
        .from('user')
            return res.send(send)

}

module.exports.createUser= createUser;
module.exports.updateUser= updateUser;
module.exports.delUser= delUser;
module.exports.getUser= getUser;