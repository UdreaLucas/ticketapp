import NextAuth from "next-auth/next";

import GitHub from "next-auth/providers/github";

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo-sm.png",
  },
  providers: [GitHub],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "middleware-example") return !!auth;
      return true;
    },
    jwt(token, trigger, session) {
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
