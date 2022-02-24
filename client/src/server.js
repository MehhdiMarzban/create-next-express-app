const next = require("next");
const express = require("express");
const {createProxyMiddleware} = require("http-proxy-middleware");

const dev = process.env.NODE_ENV !== "production";
const app = next({dev});

const handle = app.getRequestHandler();

app.prepare().then(() => {
    // apply proxy in dev mode
    const server = express();
    if(dev){
        server.use("/api", createProxyMiddleware({
            target: "http://localhost:8000",
            changeOrigin: true
        }));
    }

    server.all("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if(err){
            throw err;
        }
        console.log("server is ready on http://localhost:3000")
    });
}).catch((e) => {
    console.log("ERROR : ", e);
})