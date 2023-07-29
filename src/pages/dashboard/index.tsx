import Image from 'next/image';
import { UserButton, useAuth } from '@clerk/nextjs';

import { teamList } from '../constants/team';

export default function Page() {
  const { userId } = useAuth();

  return (
    <>
      {userId && (
        <>
          <header className="flex h-14 items-center bg-[#FE6078] px-5">
            <UserButton showName />
          </header>
          <main
            className="flex  flex-col items-center justify-center bg-gradient-to-b from-[#FE6078] to-[#0E121D] py-24"
            style={{ minHeight: 'calc(100vh - 56px)' }}
          >
            <Image
              src="/img/fuxam-wr.png"
              alt="Fuxam logo"
              width={200}
              height={200}
              className="mb-8"
            />
            <h1 className="text-center font-bold text-white">
              Challenge done! I expect to see your webpage team section like
              that in the future:
            </h1>
            <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              {teamList.map((person) => {
                return (
                  <li key={person.name}>
                    <Image
                      className="mx-auto h-24 w-24 rounded-full object-cover"
                      src={person.img}
                      width={96}
                      height={96}
                      alt="Team member"
                    />
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                      {person.name}
                    </h3>
                    <p className="text-offwhite-5 dark:text-offblack-8 text-sm leading-6 text-gray-300">
                      {person.role}
                    </p>
                  </li>
                );
              })}
            </ul>
          </main>
        </>
      )}
    </>
  );
}
