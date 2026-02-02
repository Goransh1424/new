# 🎂 Birthday Website Template

A beautiful, customizable birthday website template to surprise your special someone! Just fill in the configuration file with your personal details and photos.

## ✨ Features

- 💖 **Personalized Content** — Names, dates, messages, all customizable
- 📱 **Mobile Optimized** — Works beautifully on phones with touch gestures
- 🖼️ **Photo Slideshow** — Add unlimited photos with captions
- 🎵 **Background Music** — Plays your special song
- 🎉 **Animations & Effects** — Confetti, particles, smooth transitions
- 📝 **Love Letter Section** — Write your heartfelt message
- ❤️ **"Reasons I Love You"** — List all the reasons she's special

---

## 🚀 Quick Start

### Step 1: Add Your Photos
1. Place your photos in the `images/` folder
2. Name them `photo1.jpg`, `photo2.jpg`, etc. (or any names you prefer)

### Step 2: Add Your Music (Optional)
1. Place your song files in the `music/` folder
2. `song.mp3` — Main background music
3. `song1.mp3` — Slideshow music (plays during photo slideshow)

### Step 3: Edit the Configuration
Open `config.js` and update these values:

```javascript
// Basic Info
recipientName: "Her Name",      // Birthday person's name
senderName: "Your Name",        // Your name

// Birthday Date
birthday: {
  year: 2025,
  month: 12,    // 1 = January, 12 = December
  day: 25,      // Day of the month
  hour: 0,      // Hour (0-23)
  minute: 0     // Minute (0-59)
},
```

### Step 4: Customize the Messages
Edit the love letter, reasons, and photos in `config.js`:

```javascript
// Update love letter paragraphs
loveLetter: {
  paragraphs: [
    "Your first paragraph here...",
    "Your second paragraph here..."
  ]
},

// Update reasons
reasons: [
  { title: "Your smile", description: "lights up my world" },
  // Add more reasons...
],

// Update photos (match the filenames you used)
photos: [
  { src: "photo1.jpg", caption: "Our first date", description: "I remember this day..." },
  // Add more photos...
]
```

### Step 5: Open in Browser
Just open `index.html` in any web browser!

---

## 📁 File Structure

```
iloveyou-master/
├── config.js        ← 🎯 EDIT THIS FILE
├── index.html       ← Countdown page
├── surprise.html    ← Main surprise page
├── style.css        ← Styles
├── script.js        ← Animations
├── images/          ← 📷 Add your photos here
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
└── music/           ← 🎵 Add your songs here
    ├── song.mp3
    └── song1.mp3
```

---

## 🎨 Optional: Customize Theme

In `config.js`, you can change the theme:

```javascript
theme: {
  emoji: "🌹",                        // Change main emoji (🌻, 💖, 🌹, ⭐)
  accentColor: "hsl(340, 100%, 70%)"  // Change accent color
}
```

**Color Ideas:**
- Pink: `hsl(340, 100%, 70%)`
- Gold: `hsl(45, 100%, 50%)`
- Purple: `hsl(280, 80%, 60%)`
- Red: `hsl(0, 80%, 60%)`

---

## 📱 Mobile Features

The website is fully mobile-optimized:
- **Swipe** left/right to navigate photos
- **Tap** "Start the magic" to play music
- **Fullscreen** slideshow mode
- **Touch-friendly** buttons

---

## 🌐 Deploy Online (Optional)

To share the website:

1. **GitHub Pages** (Free)
   - Upload to GitHub
   - Enable GitHub Pages in settings
   - Share the link!

2. **Netlify** (Free)
   - Drag & drop folder to netlify.com
   - Get instant link!

3. **Any Web Host**
   - Upload files via FTP
   - Done!

---

## 💡 Tips

1. **Photo Quality**: Use clear photos, not too large (under 1MB each)
2. **Music Format**: Use MP3 format for best compatibility
3. **Preview**: Use `preview=1` parameter to skip countdown: `surprise.html?preview=1`
4. **Test Mobile**: Open on your phone to test before sharing

---

Made with 💖 — Enjoy surprising your special someone!
