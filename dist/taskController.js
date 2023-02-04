"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasks = void 0;
const taskModel_1 = __importDefault(require("./taskModel"));
const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskModel_1.default.find();
        res.status(200).json({
            status: 'success',
            results: tasks.length,
            data: {
                tasks,
            },
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};
exports.getAllTasks = getAllTasks;
//# sourceMappingURL=taskController.js.map