# Simple login with T3 Stack + ClerkJS

Simple login application. Made with T3 Stack and ClerkJS. Keys stored in Doppler instead of .env file. The pages are all responsive.

Production link: [https://simple-login-fuxam.vercel.app](https://simple-login-fuxam.vercel.app)

## How to run in localhost

To run in localhost, you must first install Doppler CLI.
https://docs.doppler.com/docs/install-cli

After that you can run `doppler login`, and put your credentials.
But I used my personal account to store the keys, so you won't be able to see them or setup the project.
I can send the keys through email if you want.
The next step would be `doppler setup` and choose the project.
I'll leave a screenshot of my doppler keys below (protected).

![image](https://github.com/ItaloCovas/simple-login-fuxam/assets/62855022/0252a525-5acd-4c0e-aec9-387131ba55e6)

You can access the keys in Javascript like that: `const secret = process.env["SECRET_NAME"]`

Then you need to run  `doppler run npm run dev` and it will run locally.

I recommend using the deploy link:  https://simple-login-fuxam.vercel.app

## My notes about this project

I have never used the T3 Stack nor Doppler, so I struggled a little bit in the beginning, specially in creating my custom routes using Clerk components, because they redirected me to another URL provided by Clerk.
<br />
My protected routes are defined by config object in `/src/middleware.ts` (all of them private as in Clerk docs).
<br />
The public routes are managed under the hood by Clerk when we define some keys such as `NEXT_PUBLIC_CLERK_SIGN_IN_URL` and `NEXT_PUBLIC_CLERK_SIGN_UP_URL`.
<br />
The screen always blinks if we try to access private routes such as `/dashboard`. A workaround to not show the page was to use `useAuth` hook provided by Clerk to see if there's any userId and just show the page if there is one, still blinks but with a white page:

![image](https://github.com/ItaloCovas/simple-login-fuxam/assets/62855022/85028691-1b93-46a6-a026-90700e82527c)


<br />

For deployment I had to sync Doppler with Vercel to access the production keys.

![image](https://github.com/ItaloCovas/simple-login-fuxam/assets/62855022/6cb9a381-8995-4561-b731-803a9f0e51e4)

<br />

Thank you for the time on reading this :) 








