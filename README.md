# Petals Peeled Garlic - Static Website

A high-performance, mobile-responsive Next.js static website for **Petals Peeled Garlic** (Kerala, India) featuring direct WhatsApp ordering with delivery address collection.

Based on the official brand identity and website mockups.

---

## 🌟 Key Features

1. **Exact Brand Design & Identity**
   - Matches the official Petals Garlic desktop & mobile UI mockups.
   - Brand color palette: deep forest green (`#0b3323`), rich botanical green (`#114b35`), clean cream background (`#fbf9f5`).
   - Kerala distribution hubs: **Thrissur • Cochin • Kollam • Trivandrum**.
   - Contact & WhatsApp line: **+91 9567458588**.

2. **Instant "Buy Now" with Delivery Address Form**
   - Pack selection (500g pouch, 1kg zip pouch, 5kg catering bag, 10kg wholesale).
   - Quantity counter with real-time price & savings calculations in Indian Rupees (₹).
   - Address modal collecting:
     - Customer / Restaurant Name
     - Phone / WhatsApp Number
     - Street / Door No / Landmark
     - City / Town
     - Kerala District dropdown
     - PIN Code
     - Special delivery instructions (e.g., morning 8 AM delivery)
   - Automatically builds an organized, emoji-formatted WhatsApp order message and opens `https://wa.me/919567458588?text=...`.

3. **B2B Bulk Quote Inquiries**
   - Dedicated modal for restaurants, hotels, and food manufacturers to submit daily/weekly volume requirements.

4. **100% Static HTML/CSS/JS Export**
   - Next.js static export (`output: 'export'`).
   - Ready to deploy to **Vercel**, **Netlify**, **GitHub Pages**, **AWS S3 / CloudFront**, **Cloudflare Pages**, or any static web host.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Generate Production Static Site
```bash
npm run build
```
The static website files will be generated in the `./out` directory:
```
out/
├── index.html
├── 404.html
├── _next/
└── images/
```

---

## 📱 WhatsApp Order Message Preview

When a customer clicks **Buy Now** and fills their address, this message is automatically prepared:

```text
*🌿 NEW ORDER - PETALS PEELED GARLIC*
---------------------------------
*ORDER DETAILS:*
• Product: Petals Peeled Garlic - 1 Kg
• Pack Size: 1 Kg
• Quantity: 2 pack(s)
• Unit Price: ₹260
• TOTAL AMOUNT: ₹520

*CUSTOMER INFO:*
• Name: Chef Ramesh
• Phone: 9876543210

*DELIVERY ADDRESS:*
• Building/Street: Spice Garden Restaurant, MG Road
• Landmark: Near South Overbridge
• City/Town: Ernakulam
• District: Ernakulam / Cochin (Branch)
• Pincode: 682016

*SPECIAL INSTRUCTIONS:*
Need daily morning delivery before 8:30 AM.
---------------------------------
_Sent from Petals Peeled Garlic Website_
```

---

## 📞 Business Details Configured
- **WhatsApp / Call:** `+91 9567458588` (9567458588)
- **Primary Branches:** Thrissur | Cochin | Kollam | Trivandrum
- **Purity Guarantee:** 100% Natural • No Preservatives • Hygienically Machine Peeled

