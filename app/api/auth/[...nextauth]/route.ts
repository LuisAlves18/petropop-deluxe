import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import client from "@/utils/apollo/client";
import gql from "graphql-tag";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        const { data } = await client().query({
          query: gql`
            mutation Mutation($input: NewUserInput!) {
              createUser(input: $input) {
                email
                first_name
                last_name
              }
            }
          `,
          variables: {
            input: {
              email: user.email,
              first_name: user.name,
              last_name: user.name,
            },
          },
        });

        console.log(data)
        return true;
      }
    },
  },
});
export { handler as GET, handler as POST };
