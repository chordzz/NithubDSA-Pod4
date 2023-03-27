import {app} from "./app";
import {config} from "./config";

app.listen(config.port, () => console.log({
    status: "up",
    message: `Server has started, shege init.`
}))