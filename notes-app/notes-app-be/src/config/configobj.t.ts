import * as dotenv from "dotenv";

dotenv.config()
export const config = Object.freeze({
    port: process.env.PORT
})