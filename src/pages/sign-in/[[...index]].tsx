import Image from 'next/image';
import { RedirectToUserProfile, SignIn, useAuth } from '@clerk/nextjs';

export default function Page() {
  const { userId } = useAuth();

  return (
    <>
      {!userId ? (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#FE6078] to-[#0E121D]">
          <Image
            src="/img/fuxam-wr.png"
            alt="Fuxam logo"
            width={200}
            height={200}
            className="mb-8"
          />
          <SignIn />
        </main>
      ) : (
        <RedirectToUserProfile />
      )}
    </>
  );
}
