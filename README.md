# ❤️ Valentine's Day Website

A beautiful, romantic single-page website to ask your special someone to be your Valentine.

## ✨ Features

- 💝 Animated floating hearts background
- 📸 Photo memories gallery with hover effects
- 💌 Heartfelt love message with typing animation
- 🎊 Interactive YES/NO question with confetti celebration
- 📱 Fully responsive (mobile & desktop)
- 🎨 Soft romantic color palette
- ⚡ No build step required - works directly from GitHub Pages

## 🎯 How to Customize

### 1. Add Your Photos

1. Navigate to the `assets/images/` folder
2. Add 6 photos of your memorable moments together
3. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, `photo5.jpg`, `photo6.jpg`
4. You can use JPG or PNG format (just update the file extensions in `index.html` if using PNG)

**To update photo captions:**
- Open `index.html`
- Find the memory cards section (around line 96)
- Edit the text inside `<p class="p-4 text-center text-gray-600 italic">` tags

### 2. Personalize the Text

Open `index.html` and customize these sections:

**Hero Section (line 103):**
```html
<h1>Hey my love ❤️</h1>
<p>Every moment with you is a treasure I hold close to my heart</p>
```

**Love Message Section (line 157):**
```html
<p>From the moment I met you, my life changed in the most beautiful way...</p>
```

**Final Message Section (line 191):**
```html
<h3>I love you forever ❤️</h3>
<p>I'm so lucky to have you. Happy Valentine's Day, my love!</p>
```

### 3. Optional: Add Background Music

1. Add a romantic song to `assets/music/` folder (e.g., `romantic-song.mp3`)
2. Open `script.js`
3. Scroll to the bottom and uncomment the music section (lines 120-145)
4. Update the audio file path if needed

## 🚀 How to Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `valentine-website` or `will-you-be-my-valentine`
3. Keep it **public** (required for free GitHub Pages)

### Step 2: Push Your Code

```bash
# Initialize git in your project folder
cd /path/to/valentine-app
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit - Valentine's website"

# Connect to your GitHub repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select `main` branch
4. Click **Save**
5. Wait a few minutes for deployment

Your site will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## 🎨 Color Palette

The site uses a soft romantic color scheme:

- **Background**: Pastel pink to rose gradient
- **Primary**: Rose/Pink tones (#ff69b4, #ff1493)
- **Accent**: Soft whites and grays
- **Text**: Dark gray (#374151)

You can customize colors by editing the Tailwind classes in `index.html`.

## 📱 Browser Compatibility

Works on all modern browsers:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips

- **Test locally**: Simply open `index.html` in your browser to preview
- **Photo sizing**: Use photos with a 4:3 or 1:1 aspect ratio for best results
- **File size**: Compress photos to keep them under 500KB each for faster loading
- **Privacy**: If you want to keep the site private, consider using a different hosting solution

## 🛠️ Technical Details

**Tech Stack:**
- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Canvas Confetti library
- Google Fonts (Playfair Display + Inter)

**No build process required** - everything runs directly in the browser!

## 📝 Project Structure

```
valentine-app/
├── index.html          # Main HTML file
├── script.js           # All JavaScript interactions
├── assets/
│   ├── images/         # Your photos go here
│   └── music/          # Optional background music
├── README.md           # This file
└── requirements.md     # Original project requirements
```

## ❤️ Made with Love

This website was created as a personal romantic gift. Feel free to customize it to make it uniquely yours!

---

**Questions or issues?** Check that:
1. All photos are in the `assets/images/` folder
2. Photo filenames match those in `index.html`
3. You've pushed all files to GitHub
4. GitHub Pages is enabled in repository settings

Enjoy creating a magical Valentine's moment! 💕
