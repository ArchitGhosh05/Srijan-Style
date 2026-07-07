This repository contains the Srijan Style storefront project.

The active Next.js app lives in:

- `srijan-style/`

## Getting Started

First, move into the app directory and run the development server:

```bash
cd "srijan-style"
npm install
npm run dev
```

Open the local URL shown in terminal (usually [http://localhost:3000](http://localhost:3000), or `3001` if `3000` is busy).

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font` and Tailwind CSS for typography and UI styling.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

When importing this repository in Vercel, set:

- **Root Directory**: `srijan-style`
- **Build Command**: `npm run build`
- **Install Command**: `npm install` (or default)

Without setting the root directory, Vercel may fail with:

`Couldn't find any pages or app directory`

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
