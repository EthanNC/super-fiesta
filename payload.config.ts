import { buildConfig } from "payload/config";
import path from "path";
import Users from "./cms/collections/Users";

export default buildConfig({
  cors: process.env.RAILWAY_PUBLIC_DOMAIN
    ? [process.env.RAILWAY_PUBLIC_DOMAIN]
    : [],
  csrf: process.env.RAILWAY_PUBLIC_DOMAIN
    ? [process.env.RAILWAY_PUBLIC_DOMAIN]
    : [],
  serverURL: process.env.RAILWAY_PUBLIC_DOMAIN ?? "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Users],
  typescript: {
    outputFile: path.resolve(__dirname, "cms/payload-types.ts"),
  },
});
