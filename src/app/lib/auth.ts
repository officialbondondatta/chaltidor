import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";


const mongoURI = process.env.MONGODB_DB_URL

if (!mongoURI) {
    throw new Error("MongoDB database not found")
}
const client = new MongoClient(`${mongoURI}`);
const db = client.db("chaltiDor");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    // socialProviders: {
    //     github: {
    //         clientId: process.env.GITHUB_CLIENT_ID as string,
    //         clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    //     },
    //     google: {
    //         clientId: process.env.GOOGLE_CLIENT_ID as string,
    //         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    //     },
    // },
    database: mongodbAdapter(db, {
        client,
    }),
});