import { users } from "@/app/Helpers/Constant";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "username and password on placeholders",
      credentials: {
        username: {
          label: "username",
          type: "email",
          placeholder: "use user@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "use 1Password",
        },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        if (!credentials || !credentials.username || !credentials.password)
          return null;

        const user = users.find(
          (items) => items.username === credentials.username
        );
        if (user?.password === credentials.password) {
          return user;
        }
        return null;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
