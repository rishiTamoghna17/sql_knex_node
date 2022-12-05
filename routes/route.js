const knex = require("../db/db");
const express = require('express');
const router = express.Router()
const userController = require("../userController/user")
router.post("/user/create", userController.createUser)
router.get("/user/useDetails", userController.getUser)
router.put("/user/updateUser", userController.updateUser)
router.delete("/user/deleteUser", userController.delUser)


module.exports = router