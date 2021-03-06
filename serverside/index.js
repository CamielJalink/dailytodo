"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var port = Number(process.env.PORT) || 9000;
app.use(express_1.default.static(path_1.default.join('../clientside/build')));
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join('../clientside/build', 'index.html'));
});
app.listen(port, process.env.IP || '', function () {
    console.log("Server is running");
});
