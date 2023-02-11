"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'A task must have a name!'],
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    status: {
        type: String,
        required: [true, 'A task must have a status!'],
        enum: ['closed', 'pending', 'in progress'],
    },
    importance: {
        type: String,
        required: [true, 'A task must have an importance!'],
        enum: ['minor', 'normal', 'critical'],
    },
});
exports.default = mongoose_1.default.model('Task', taskSchema);
//# sourceMappingURL=taskModel.js.map