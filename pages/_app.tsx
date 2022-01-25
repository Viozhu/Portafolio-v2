import React from 'react'
import { AppProps } from 'next/app'

import '../styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp


// {
//   "name": "next-tailwind-typescript-starter",
//   "version": "1.0.0",
//   "scripts": {
//     "dev": "next",
//     "build": "next build",
//     "start": "next start",
//     "stage": "yarn build; yarn start",
//     "type-check": "tsc"
//   },
//   "dependencies": {
//     "@netlify/plugin-nextjs": "^4.2.1",
//     "@typescript-eslint/eslint-plugin": "^5.10.1",
//     "@typescript-eslint/parser": "^5.10.1",
//     "isomorphic-unfetch": "3.0.0",
//     "next": "^12.0.8",
//     "react": "^17.0.2",
//     "react-dom": "16.12.0",
//     "react-tsparticles": "1.39.0"
//   },
//   "devDependencies": {
//     "@fullhuman/postcss-purgecss": "2.0.5",
//     "@types/node": "12.12.21",
//     "@types/react": "16.9.16",
//     "@types/react-dom": "16.9.4",
//     "postcss-preset-env": "6.7.0",
//     "tailwindcss": "1.1.4",
//     "typescript": "^4.5.5"
//   },
//   "license": "ISC"
// }
