# 🚀 Portfolio Deployment Guide
## Mohammad Gayasuddin — VS Code → GitHub → Netlify

---

## STEP 1: Set Up the Project in VS Code

### 1.1 — Download VS Code (if not installed)
- Go to: https://code.visualstudio.com/download
- Download and install for Windows/Mac/Linux

### 1.2 — Open Your Portfolio Folder
1. Create a folder on your computer, e.g.: `C:\Users\YourName\portfolio`
2. Place these files inside it (exact structure):
```
portfolio/
├── index.html
├── css/
│   └── style.css
└── js/
    └── main.js
```
3. Open VS Code → File → Open Folder → select `portfolio`

### 1.3 — Preview in Browser
- Install extension: **Live Server** (by Ritwick Dey)
  - Press `Ctrl+Shift+X` → search "Live Server" → Install
- Right-click `index.html` → **"Open with Live Server"**
- Your portfolio opens at http://127.0.0.1:5500

---

## STEP 2: Set Up Git & Push to GitHub

### 2.1 — Install Git (if not installed)
- Download: https://git-scm.com/downloads
- During install: keep all default options

### 2.2 — Configure Git (one-time setup)
Open Terminal in VS Code (`Ctrl+`` `):
```bash
git config --global user.name "Mohammad Gayasuddin"
git config --global user.email "mohammadgayasuddin2003@gmail.com"
```

### 2.3 — Create a GitHub Account (if not yet)
- Go to: https://github.com → Sign Up (free)

### 2.4 — Create a New Repository on GitHub
1. Click the **+** icon → "New repository"
2. Repository name: `portfolio` (or `ghiyas-portfolio`)
3. Keep it **Public**
4. Do NOT check "Add README"
5. Click **Create repository**

### 2.5 — Push Your Code to GitHub
In VS Code terminal, run these commands one by one:
```bash
git init
git add .
git commit -m "🚀 Initial portfolio launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```
> Replace `YOUR_USERNAME` with your actual GitHub username

✅ Your code is now on GitHub!

---

## STEP 3: Deploy to Netlify (Free Hosting)

### 3.1 — Create a Netlify Account
- Go to: https://netlify.com
- Click "Sign Up" → choose "Sign up with GitHub" (easier!)
- Authorize Netlify to access your GitHub

### 3.2 — Deploy Your Site
1. On Netlify dashboard → click **"Add new site"**
2. Select **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. Find and select your `portfolio` repository
5. Build settings — leave EVERYTHING blank (it's pure HTML/CSS/JS):
   - Build command: (leave empty)
   - Publish directory: (leave empty, or type `.`)
6. Click **"Deploy site"**

### 3.3 — Wait ~1 Minute
Netlify builds and deploys automatically. You'll see a URL like:
```
https://random-name-123456.netlify.app
```

### 3.4 — Set a Custom Subdomain (Free!)
1. Go to: Site settings → Domain management
2. Click **"Options"** → **"Edit site name"**
3. Change to something like: `ghiyas-devops`
4. Your portfolio will be at: **https://ghiyas-devops.netlify.app** 🎉

---

## STEP 4: Update Your Portfolio (Future Changes)

Whenever you make changes in VS Code:
```bash
git add .
git commit -m "Update portfolio"
git push
```
Netlify **auto-deploys** every time you push to GitHub! No manual steps needed.

---

## STEP 5: Add Your Portfolio URL to LinkedIn

1. Go to LinkedIn profile → Edit
2. Under "Contact info" → Add website
3. Paste: `https://ghiyas-devops.netlify.app`
4. Label: "Portfolio"

Also add it to your **resume** in the header!

---

## 🎯 Quick Reference

| Action | Command |
|--------|---------|
| Preview locally | Right-click index.html → "Open with Live Server" |
| Save changes to Git | `git add . && git commit -m "message"` |
| Push to GitHub | `git push` |
| View live site | Your Netlify URL |

---

## ✅ Checklist Before Sharing

- [ ] Portfolio loads without errors
- [ ] Mobile view looks good (resize browser)
- [ ] All links work (LinkedIn, email)
- [ ] Terminal animation plays on load
- [ ] Counter numbers animate correctly
- [ ] Portfolio URL added to LinkedIn
- [ ] Portfolio URL added to resume

---

Built with ❤️ for Mohammad Gayasuddin
