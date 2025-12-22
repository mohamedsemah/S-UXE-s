# Deployment Guide for S-UXE's Website

This guide walks you through deploying the S-UXE's website to Vercel, the recommended hosting platform for Next.js applications.

## Prerequisites

✅ Your code is pushed to GitHub (already done!)
✅ Repository URL: `https://github.com/mohamedsemah/S-UXE-s`

---

## Option 1: Deploy via Vercel Dashboard (Recommended - Easiest)

### Step 1: Create a Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Login"**
3. Sign up with your **GitHub account** (recommended for seamless integration)

### Step 2: Import Your Project
1. Once logged in, click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories listed
3. Find **"mohamedsemah/S-UXE-s"** and click **"Import"**

### Step 3: Configure Project
Vercel will auto-detect Next.js and configure:

- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (root of repository)
- **Build Command**: `npm run build` (auto-set)
- **Output Directory**: `.next` (auto-set)
- **Install Command**: `npm install` (auto-set)

**You can leave all settings as default!**

### Step 4: Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Vercel will provide you with a deployment URL like: `https://s-uxes-xxxxx.vercel.app`

### Step 5: Configure Custom Domain (Optional)
1. Go to **Project Settings** → **Domains**
2. Add your custom domain (e.g., `s-uxes.org`)
3. Follow DNS configuration instructions

---

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
This will open your browser to authenticate.

### Step 3: Deploy
From your project directory:
```bash
vercel
```

**First deployment:**
- Follow the prompts:
  - Set up and deploy? **Yes**
  - Which scope? (select your account)
  - Link to existing project? **No** (first time)
  - Project name: `s-uxes-website` (or your preference)
  - Directory: `./` (press Enter)
  - Override settings? **No**

**Subsequent deployments:**
```bash
vercel --prod
```

---

## Configuration Notes

### Build Settings
Your `next.config.js` currently has `output: 'standalone'`. This works fine with Vercel, but for optimal Vercel performance, you could change it to:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove 'output: standalone' for Vercel (optional)
}
```

**Note**: The current config works fine! This is just an optimization.

### Environment Variables
Currently, no environment variables are needed. If you add any later:
1. Go to **Project Settings** → **Environment Variables**
2. Add your variables
3. Redeploy

---

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- ✅ Deploy every push to `main` branch → **Production**
- ✅ Create preview deployments for pull requests
- ✅ Build and test before deployment

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] All pages load correctly: `/`, `/vision`, `/ecosystem`, `/tools`, `/get-involved`, `/governance`
- [ ] Navigation works on all pages
- [ ] Links to external tools work (Aesthetic Evaluator)
- [ ] Site is accessible (test keyboard navigation)
- [ ] Mobile responsive design works
- [ ] Build completed without errors

---

## Troubleshooting

### Build Fails
1. Check build logs in Vercel dashboard
2. Verify all dependencies are in `package.json`
3. Ensure `npm run build` works locally

### Pages Not Found (404)
- Ensure all page routes are in `app/` directory
- Check file names match routes exactly

### Styling Issues
- Verify Tailwind CSS is configured correctly
- Check `tailwind.config.ts` includes all content paths

---

## Updating Your Deployment

### Automatic (Recommended)
Just push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push origin main
```
Vercel automatically deploys!

### Manual
If you want to deploy manually:
```bash
vercel --prod
```

---

## Monitoring & Analytics

Vercel provides:
- **Deployment Analytics**: View build times and success rates
- **Performance Metrics**: Core Web Vitals
- **Logs**: Real-time build and runtime logs

Access these in your Vercel dashboard.

---

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Test all functionality
3. ✅ Configure custom domain (if needed)
4. ✅ Set up analytics (optional)
5. ✅ Update README with live URL

---

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)

