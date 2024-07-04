// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import clientPromise from "../../../lib/mongodb";

// export default NextAuth({
//   providers: [
//     Providers.Email({
//       server: process.env.EMAIL_SERVER,
//       from: process.env.EMAIL_FROM,
//     }),
//     // Puedes agregar más proveedores aquí, como Google, GitHub, etc.
//   ],
//   adapter: MongoDBAdapter(clientPromise),
//   session: {
//     jwt: true,
//   },
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
//   callbacks: {
//     async session(session, token) {
//       session.user.id = token.id;
//       return session;
//     },
//     async jwt(token, user) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//   },
//   pages: {
//     signIn: "/auth/signin",
//     signOut: "/auth/signout",
//     error: "/auth/error",
//   },
// });

import { options } from "./options";
import NextAuth from "next-auth/next";

const handler = NextAuth(options);
export { handler as GET, handler as POST };
