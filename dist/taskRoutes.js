"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("./taskController");
const router = express_1.default.Router();
router.get('/', taskController_1.getAllTasks);
exports.default = router;
//# sourceMappingURL=taskRoutes.js.map