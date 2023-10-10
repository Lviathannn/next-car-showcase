import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "605150763455-rv0v1co21ie8r27lhq5vmq540kr5lscm.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
