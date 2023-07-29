import { type AppType } from 'next/app';
import { api } from '~/utils/api';
import '~/styles/globals.css';
import { ClerkProvider, RedirectToSignIn, SignedOut } from '@clerk/nextjs';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
