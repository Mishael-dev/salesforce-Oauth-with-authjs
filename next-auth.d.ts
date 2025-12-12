// next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    // do not include refreshToken here unless you must expose it to client
    // refreshToken?: string;
    accessTokenExpires?: number;
    instanceUrl?: string;
    userId?: string;
    error?: string;
  }
}

// You may augment JWT in the same module (works for NextAuth v5):
declare module "next-auth" {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    instanceUrl?: string;
    userId?: string;
    error?: string;
  }
}
