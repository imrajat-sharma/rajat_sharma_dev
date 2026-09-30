# Vercel Deployment Guide

This guide walks you through deploying your **Vite + React Interactive Developer Portfolio** to [Vercel](https://vercel.com/) with automated CI/CD and zero configuration.

---

## 1. Project Configuration Summary

Vercel automatically detects Vite projects. The configuration values are:

| Setting | Value | Notes |
| :--- | :--- | :--- |
| **Framework Preset** | `Vite` | Auto-detected |
| **Root Directory** | `./` | Root folder |
| **Build Command** | `npm run build` | Runs `vite build` |
| **Output Directory** | `dist` | Contains compiled HTML, CSS, and JS |
| **Install Command** | `npm install` | Installs dependencies |
| **Node.js Version** | `18.x` or `20.x` | Set by default on Vercel |

---

## 2. Deployment Methods

### Method A: Connect via GitHub (Recommended)

Connecting your GitHub repository enables automatic preview deployments for branches and instant production deployments on every `git push` to `main`.

#### Step 1: Initialize Git and Push to GitHub

If you haven't initialized Git yet, run these commands in your project root:

```bash
# 1. Initialize git repository
git init

# 2. Stage all files (node_modules and dist are excluded via .gitignore)
git add .

# 3. Create your initial commit
git commit -m "feat: initial commit with React + Vite portfolio"

# 4. Rename default branch to main
git branch -M main

# 5. Link your remote GitHub repository (replace with your repo URL)
git remote add origin https://github.com/imrajat-sharma/interactive-portfolio.git

# 6. Push code to GitHub
git push -u origin main
```

#### Step 2: Import into Vercel

1. Log into your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** → **"Project"**.
3. Under **"Import Git Repository"**, select your GitHub account and choose `interactive-portfolio`.
4. In the **"Configure Project"** screen:
   - **Project Name**: `interactive-portfolio` (or your choice).
   - **Framework Preset**: Verify it says `Vite`.
   - **Root Directory**: Leave as `./`.
   - **Build and Output Settings**: Leave at default (`npm run build` and `dist`).
5. Click **"Deploy"**.

Vercel will build the project in ~30–45 seconds and provide a production URL (e.g. `https://interactive-portfolio-xyz.vercel.app`).

---

### Method B: Deploy Directly via Vercel CLI

If you want to deploy straight from your terminal without pushing to Git:

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Deploy to Preview
Run in the project root:
```bash
vercel
```
Follow the interactive prompts:
- **Set up and deploy?** [Y/n] `y`
- **Which scope?** Choose your Vercel account.
- **Link to existing project?** [y/N] `n`
- **What's your project's name?** `interactive-portfolio`
- **In which directory is your code located?** `./`
- **Want to modify build settings?** [y/N] `n`

#### Step 4: Deploy to Production
```bash
vercel --prod
```

---

## 3. Custom Domain Configuration (Optional)

To link your personal custom domain (e.g., `rajatsharma.dev` or `rajat.tech`):

1. Go to your project on the **Vercel Dashboard**.
2. Navigate to **Settings** → **Domains**.
3. Enter your domain name and click **Add**.
4. Configure DNS records at your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.):
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
5. Vercel will automatically provision a free SSL/TLS certificate within a few minutes.

---

## 4. SPA Routing & Clean Rewrites (`vercel.json`)

If you want to ensure proper Single Page Application (SPA) routing with clean caching headers, an optional `vercel.json` file can be placed at the root of your project:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 5. Post-Deployment Verification Checklist

After deployment finishes, verify the following:

- [ ] **Hero Avatar**: Ensure the 3D parallax tilt card and avatar load crisply without lag.
- [ ] **About Section Terminal**: Verify developer avatar displays at exact constrained dimensions (`48px` / `56px`) with the green live dot.
- [ ] **Project Images**: Click each project and open modals to verify WebP images load properly.
- [ ] **Mobile Responsiveness**: Open on a mobile device or inspect with DevTools (iPhone / Android viewports) to check hamburger menu and single-column layout.
- [ ] **Direct Email Copy**: Test the "Copy Email" button in the contact section to verify clipboard functionality over HTTPS.
