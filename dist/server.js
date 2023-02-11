"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./app");
dotenv_1.default.config({ path: './.env' });
const port = process.env.PORT || 3000;
const database = process.env.MONGO_URI;
// DATABASE CONNECTION
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect(database, () => console.log('The database connection is successful!'));
// APP LISTEN
app_1.app.listen(port, () => {
    console.log(`The app is runing on port ${port}...`);
});
//# sourceMappingURL=server.js.map