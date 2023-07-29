import { RedirectToUserProfile, SignedIn } from '@clerk/nextjs';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Login - Fuxam</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/img/fuxam-logo.png" />
      </Head>
      <SignedIn>
        <RedirectToUserProfile />
      </SignedIn>
    </>
  );
}
