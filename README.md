# La petite Boutique de Lo

A responsive perfume boutique built with Next.js 14, React, TypeScript and Tailwind CSS. Orders are prepared as WhatsApp messages; there is no database and no payment gateway.

## Requirements
- Node.js 18.17 or later (Node 20 LTS recommended)
- npm

## Run locally
1. Extract the ZIP.
2. Open this folder in VS Code.
3. Open the VS Code terminal in the project folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Copy `.env.example` to `.env.local`.
6. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to the full international WhatsApp number using digits only. Example for Ghana: `233XXXXXXXXX` (do not include `+`, spaces or a leading local `0`).
7. Start the development server:

   ```bash
   npm run dev
   ```

8. Visit http://localhost:3000

## WhatsApp number setup — important
The project currently has a configurable example number in `.env.example` and a fallback in `src/lib/whatsapp.ts`. Confirm the country code and full number before publishing. For Ghana, a local number beginning `0` is normally converted by removing the first `0` and prefixing `233`. For example, `0750000000` becomes `233750000000`. Use the exact WhatsApp number that can receive customer orders.

After changing `.env.local`, restart `npm run dev`.

## Product catalogue
Edit `src/data/products.ts` to change:
- Product name and category
- Price (Ghana cedis)
- Description and fragrance notes
- Product image URL
- Product badge

Only L'Interdit de Givenchy (GH₵450) and the four category names / three customer-favourite product names were visible on the previous site. The other product names and prices in this starter catalogue are illustrative placeholders and must be checked with the shop owner before going live.

## Delivery settings
- Delivery fee: GH₵20
- Pickup: free

The current delivery fee is used in the WhatsApp message and cart summary. To change it, update `NEXT_PUBLIC_DELIVERY_FEE` in `.env.local` and the matching display value in `src/components/Storefront.tsx`.

## Build for production

```bash
npm run build
npm start
```

You can deploy this project to Vercel by importing the project folder/repository and adding the same environment variables in the Vercel project settings.

## Notes
- WhatsApp checkout opens a pre-filled message. The customer must press **Send** in WhatsApp; the site cannot send messages silently.
- Product photos are remote Unsplash demonstration images. Replace them with the boutique's own product photographs for the final launch.
- No customer accounts, database, stock management, payment processing or automatic order storage are included in this lightweight version.
