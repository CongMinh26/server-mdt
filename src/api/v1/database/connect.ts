
import mongoose from "mongoose";
const { MongoClient, ServerApiVersion } = require('mongodb');
import config from "config";
async function connect() {
    // const uri = config.get<string>("mongodb+srv://zvip:Congminh2602@cluster0.6t9ksql.mongodb.net/server-mdt?retryWrites=true&w=majority");
    const uri = "mongodb+srv://zvip:Congminh2602@cluster0.6t9ksql.mongodb.net/server-mdt?retryWrites=true&w=majority";

    try {
        // await mongoose.connect("mongodb+srv://zvip:Congminh2602@cluster0.6t9ksql.mongodb.net/server-mdt");
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        client.connect((err:any) => {
            console.log("DB connected!!!");
            client.close();
        });
    
    } catch (error) {
        console.error("Could not connect to db");
        process.exit(1);
    }
}

export default connect;

const uri = "mongodb+srv://zvip:<password>@cluster0.6t9ksql.mongodb.net/?retryWrites=true&w=majority";
