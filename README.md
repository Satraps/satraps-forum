# Satraps Forum

Satraps Forum is a Web3 Social frontend website based on the [Iggy Social](https://iggy.social) template. For usernames it uses [Punk Domains](https://punk.domains/).

## Change GitHub settings (needed only for build.yml)

In your repository, go to Settings -> Actions -> General. Select `Read and write permissions`. Also make sure you have the necessary env vars in your Settings.

If you do not need `build.yml`, delete it and ignore these instructions.

## .env

Create a `.env` file from `.env.example`.

> Make sure to also enter these vars in your hosting settings!

## Hosting

We recommend to use Netlify for hosting the site. Netlify allows you to easily deploy the site from this repo (or from a fork of this repository).

Make sure to use the the `npm run generate` command instead of `npm run build` for build instructions on Netlify.

If you want to use optional features such as GIFs and image upload, make sure to enter proper environment variables (see `.env.example`).

Make sure to also select the proper serverless functions services in your environment variables, for example:

```bash
FILE_UPLOAD_SERVICE=netlify
LINK_PREVIEW_SERVICE=netlify
```

You can also set these in the Nuxt config file (`nuxt.config.ts`).

## GIFs (Tenor)

If you want to have GIF search implemented, create your own Tenor API Key on Google Cloud Console. Follow the instructions here: https://developers.google.com/tenor/guides/quickstart. 

Then enter the key in environment variables (`TENOR_KEY`).

## Arweave (for image uploads and forum messages storage)

To support image uploads and forum messages storage, create an Arweave Wallet (e.g. here: https://arweave.app/) and send some AR to it.

Then go to the wallet settings and download Backup Keyfile.

In this file you'll find 10 different variables, enter these into your .env file:

```bash
ARWEAVE_KTY=
ARWEAVE_N=
ARWEAVE_E=
ARWEAVE_D=
ARWEAVE_P=
ARWEAVE_Q=
ARWEAVE_DP=
ARWEAVE_DQ=
ARWEAVE_QI=
```

And add the arweave address too:

```bash
ARWEAVE_ADDRESS=
```

Also make sure these variables are set on your hosting provider (Netlify, Vercel, etc).

## ImageKit upload

It is recommended to use ImageKit as the fallback option for image uploads, in case Arweave has technical issues.

For this to work, create an account at [ImageKit.io](https://imagekit.io/) and add these environment variables to your project:

```bash
IMAGEKIT_ENDPOINT=
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
```

You can also use ImageKit as your main image upload, if you set the `fileUploadStorageType` variable in nuxt config to "imagekit".

## Customize

- Project-specific settings in `nuxt.config.ts`
- CSS files in the `/public/css/` folder
- Favicon and cover/preview images in `/public/img/` folder

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

Or run Netlify dev server on http://localhost:8888 (to get link previews):

```bash
netlify dev
```

## Production

Build the application for production:

```bash
npm run generate
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

