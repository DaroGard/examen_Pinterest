"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = void 0;
const user_schema_1 = require("../models/user.schema");
const getUsers = (req, res) => {
    user_schema_1.UserSchema.find()
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    user_schema_1.UserSchema.findOne({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.getUser = getUser;
