const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main(){
    await mongoose.connect(
        `mongodb+srv://anapaulam410costa2:bdBlAzYo113HMM5q@cluster0.u1jedjx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("conectado com sucesso")
}

main().catch((err) => console.log(err));

module.exports = main;