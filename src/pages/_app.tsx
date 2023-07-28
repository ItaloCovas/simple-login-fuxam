import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider, SignedIn, SignIn, SignedOut } from '@clerk/nextjs'


const MyApp: AppType = ({ Component, pageProps }) => {
  const secret = process.env.CLERK_SECRET_KEY;
  const secretTwo = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  
  return <ClerkProvider>
              <Component {...pageProps} />

            
         </ClerkProvider>;
};

export default api.withTRPC(MyApp);
