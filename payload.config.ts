import { buildConfig } from "payload/config";
import path from "path";
import Users from "./cms/collections/Users";

export default buildConfig({
  cors: ["http://localhost:3000", process.env.PAYLOAD_PUBLIC_SERVER_URL || ""],
  csrf: ["http://localhost:3000", process.env.PAYLOAD_PUBLIC_SERVER_URL || ""],
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL ?? "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Users],
  typescript: {
    outputFile: path.resolve(__dirname, "cms/payload-types.ts"),
  },
});
