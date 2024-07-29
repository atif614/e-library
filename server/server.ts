import app from "./src/app";
import { config } from "./config/config";

const startServer = () => {
    const port = config.port || 3000;

    app.listen(port, () => {
        console.log("Server Started on PORT", port);
    })
}
startServer();
