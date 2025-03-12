import { MongoClient } from "mongodb";

const uri = process.env.MongoURI as string;
const client = new MongoClient(uri);

async function connect(): Promise<void> {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export { client, connect };
