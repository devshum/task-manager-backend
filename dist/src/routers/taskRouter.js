"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controllers/taskController");
exports.taskRouter = express_1.default.Router();
exports.taskRouter.route('/').get(taskController_1.getAllTasks).post(taskController_1.createTask);
//# sourceMappingURL=taskRouter.js.map