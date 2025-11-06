# LS Gumede Attorneys - Setup Instructions

## Recent Updates

The website has been significantly enhanced with authentic, human-centered content based on your questionnaire responses. Here's what's been added:

### New Features:
1. **FAQ Section** - Answers the 6 most common client questions
2. **Testimonials/Success Stories** - Real case examples showing impact
3. **What to Expect** - 4-step process walkthrough for new clients
4. **Updated Hero** - Mission-driven messaging ("Standing for the Voiceless")
5. **Rewritten About Page** - Your personal story and journey with real photo
6. **Enhanced Services** - "Why this matters" explanations for each practice area
7. **Updated Why Choose Us** - Your 3 actual differentiators with details
8. **Improved Contact Form** - Loading states, success/error messages
9. **Floating WhatsApp Button** - Fixed button with pulsing animation, notification badge, and tooltip
10. **Google Maps Integration** - Interactive map in contact section with directions button and office hours

## Critical: Configure Contact Form

The contact form currently has a placeholder Formspree ID that needs to be replaced:

### Step 1: Get Formspree ID
1. Go to https://formspree.io
2. Sign up for a free account
3. Create a new form
4. Copy your Form ID (looks like `xyzabc123`)

### Step 2: Update the Contact Form
Open `src/components/Contact.jsx` and find line 36:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Replace `YOUR_FORM_ID` with your actual Formspree ID:
```javascript
const response = await fetch('https://formspree.io/f/xyzabc123', {
```

### Alternative: Use Environment Variables (Recommended)
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Formspree ID:
   ```
   VITE_FORMSPREE_ID=xyzabc123
   ```

3. Update Contact.jsx to use the environment variable:
   ```javascript
   const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
   ```

## Configure Google Maps (Optional - For Accuracy)

The Google Maps integration is already set up to show the Regus Business Centre location. However, for the most accurate map display:

### Get the Exact Regus Location:
1. Go to [Google Maps](https://www.google.com/maps)
2. Search: **"Regus Durban Club Place"** or **"Regus - Durban, Club Place"**
3. Once you find the exact Regus location, click **"Share"**
4. Select **"Embed a map"**
5. Copy the entire `<iframe>` code
6. Open `src/components/Contact.jsx` and replace the iframe at line 288-298
7. Make sure to keep the same className and styling attributes

**Current Office Location:**
- **Regus Business Centre**
- 303 Anton Lembede Street, 5th Floor
- Durban Club Place, Durban, 4001

The map currently has:
- Interactive hover effects (becomes full color)
- "Get Directions" button linking to Google Maps navigation
- Office hours display below the map

## Running the Website

### Development Mode
```bash
npm run dev
```
The site will be available at http://localhost:5173

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment

The site is configured for Vercel deployment. When you push to your main branch, it will automatically deploy.

If using environment variables, add them in Vercel:
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add `VITE_FORMSPREE_ID` with your actual ID

## Next Steps (Optional Improvements)

### Priority 1: Essential
- [ ] Configure Formspree form (CRITICAL - form won't work without this)
- [ ] Test contact form submission
- [ ] Add professional headshot photo (replace stock image in About page)
- [ ] Add office photos

### Priority 2: SEO & Performance
- [ ] Add meta tags for social media sharing (Open Graph)
- [ ] Add structured data (LocalBusiness schema)
- [ ] Optimize images (convert to WebP)
- [ ] Create sitemap.xml
- [ ] Add robots.txt

### Priority 3: Enhancements
- [ ] Set up Google Analytics or Plausible
- [ ] Add error tracking (Sentry)
- [ ] Implement online booking/scheduling (Calendly integration)
- [ ] Add client testimonial collection system

### Priority 4: Testing
- [ ] Set up ESLint and Prettier
- [ ] Add Vitest for testing
- [ ] Run accessibility audit (Lighthouse)
- [ ] Test on multiple devices and browsers

## Content Updates

All content can be updated by editing the respective component files:

- **Hero message**: `src/components/Hero.jsx`
- **About page**: `src/pages/About.jsx`
- **Services**: `src/components/Services.jsx`
- **FAQ**: `src/components/FAQ.jsx`
- **Testimonials**: `src/components/Testimonials.jsx`
- **What to Expect**: `src/components/WhatToExpect.jsx`
- **Why Choose Us**: `src/components/WhyChooseUs.jsx`
- **Contact info**: `src/components/Contact.jsx`

## Support

If you encounter any issues:
1. Check that all dependencies are installed: `npm install`
2. Clear the build cache: `rm -rf node_modules/.vite`
3. Restart the development server

## File Structure

```
src/
├── components/          # Reusable UI components
│   ├── FAQ.jsx         # New: Frequently asked questions
│   ├── Testimonials.jsx # New: Success stories
│   ├── WhatToExpect.jsx # New: Process walkthrough
│   ├── Hero.jsx        # Updated: Mission-driven hero
│   ├── Services.jsx    # Updated: Why each service matters
│   ├── WhyChooseUs.jsx # Updated: Real differentiators
│   ├── Contact.jsx     # Updated: Form with loading states
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx       # Updated: Includes all new sections
│   ├── About.jsx      # Updated: Personal story
│   └── ...
└── App.jsx            # Main app component
```

## Key Messages Throughout Site

The website now emphasizes:
- **"Standing for the Voiceless"** - Mission statement
- **"Justice is not reserved only for those who can afford it"** - Core belief
- **"You are in safe hands"** - Promise to clients
- **100% Black-Owned** - Representation and empowerment
- **Personal attention, not case numbers** - Key differentiator

These messages are woven throughout the site to create a consistent, authentic voice that reflects your values and approach.
