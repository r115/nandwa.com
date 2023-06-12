import { Database, aql } from "arangojs";

export const Arango = (databaseName: string) => new Database(
    {
        url: process.env.ARANGODB_URL,
        databaseName,
        auth: {
            username: process.env.ARANGODB_USERNAME as string,
            password: process.env.ARANGODB_PASSWORD as string
        }
    }
);