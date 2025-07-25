This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Here’s what you should do for a bulletproof setup:

### 1. **Keep only this Tailwind config:**

- `hauora-demo/tailwind.config.ts` (already present and correct)

### 2. **Do NOT add a postcss.config.js**

- Next.js 15+ with Turbopack handles PostCSS for you.
- You do NOT need a `postcss.config.js` or `.mjs` file.

### 3. **Your package.json should have:**

```json
"tailwindcss": "^4.x",
"postcss": "^8.x",
"autoprefixer": "^10.x"
```

(You already have these.)

### 4. **Your global CSS import is correct.**

### 5. **No other Tailwind or PostCSS config files should exist anywhere.**

---

## If you still don’t see styles:

- Try deleting `.next/` and `node_modules/`, then reinstall and restart:
  ```
  rm -rf .next node_modules package-lock.json
  npm install
  npm run dev
  ```
- Make sure your `tailwind.config.ts` is in the project root and not in `src/`.

---

## If you want, I can run these cleanup commands for you and guarantee a clean state.

Would you like me to do this full cleanup and reinstall for you?  
Or do you want to try it and let me know if it works?
# hauora-demo
