"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPingByTag = exports.getPing = exports.getPings = void 0;
const ping_schema_1 = require("../models/ping.schema");
const getPings = (req, res) => {
    ping_schema_1.PingSchema.find()
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.getPings = getPings;
const getPing = (req, res) => {
    ping_schema_1.PingSchema.findOne({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.getPing = getPing;
const getPingByTag = (req, res) => {
    ping_schema_1.PingSchema.find({ tags: req.params.tags })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.getPingByTag = getPingByTag;
