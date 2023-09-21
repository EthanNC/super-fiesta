import type { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: {
    depth: 0,
    cookies: {
      sameSite: "none",
      secure: true,
      domain: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    },
  },
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
