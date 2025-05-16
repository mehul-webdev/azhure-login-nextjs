import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";
import { SessionStrategy } from "next-auth";

export const authOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
      authorization: {
        params: {
          scope: "openid profile email offline_access User.Read",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as SessionStrategy,
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
