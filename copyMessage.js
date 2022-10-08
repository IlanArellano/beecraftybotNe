const fs = require("fs");
const path = require("path");


const dist = fs.readdirSync(path.join(__dirname, "dist"));

const messagePath = ["config", "replies", "messages.json"];

if(dist.length > 0)
  fs.copyFileSync(path.join(__dirname, "src", ...messagePath), path.join(__dirname, "dist", ...messagePath));