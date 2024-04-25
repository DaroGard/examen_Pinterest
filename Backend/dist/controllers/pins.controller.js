"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPinByTag = exports.getPin = exports.getPins = void 0;
const pin_schema_1 = require("../models/pin.schema");
const getPins = (req, res) => {
    pin_schema_1.PinSchema.find()
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.getPins = getPins;
const getPin = (req, res) => {
    pin_schema_1.PinSchema.findOne({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.getPin = getPin;
const getPinByTag = (req, res) => {
    pin_schema_1.PinSchema.find({ tags: req.params.tags })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.getPinByTag = getPinByTag;
