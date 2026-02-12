# Objective

Build a single-page romantic Valentine website to ask my wife:

“Will you be my Valentine?”

The site should feel cute, emotional, modern, and personal, and be hosted on GitHub Pages.

# 🧱 Tech Stack (STRICT)

HTML5
Tailwind CSS (CDN, no build step)
Vanilla JavaScript
canvas-confetti (for celebration)
Google Fonts
⚠️ No React, no frameworks, no backend.


# 📁 Project Structure

/valentine
 ├── index.html
 ├── script.js
 ├── assets/
 │    ├── images/
 │    └── music/
 └── README.md

# 🎨 Design Guidelines

Mobile-first, responsive layout
Soft romantic color palette:
Background: pastel pink / warm white
Accent: red / rose
Rounded cards, subtle shadows
Smooth animations, nothing flashy
Elegant + cute (not childish)

# Fonts

Headings: "Playfair Display"
Body: "Inter"

# 🧩 Page Sections (In Order)

1️⃣ Hero Section

Purpose: Emotional hook
Content:
Big heading: “Hey my love ❤️”
Subtext: short romantic line
Floating hearts animation in background

Behavior:
Text fades in on load
Hearts continuously float upward

# 2️⃣ Memories Section

Purpose: Nostalgia
Content:
Grid or carousel of 3–6 photos (placeholder images for now)
Optional short captions

Behavior:
Images gently scale on hover
Section fades in on scroll

# 3️⃣ Love Message Section

Purpose: Emotional depth
Content:
A short heartfelt message (placeholder text)
Behavior:
Typing animation OR fade-in paragraph

# 4️⃣ The Question Section

Purpose: Main interaction
Content:
Large text:
“Will you be my Valentine? 💘”
Two buttons:
YES ❤️
NO 😅

Behavior:

YES button:
Triggers confetti
Reveals a hidden message (“I love you forever ❤️”)

NO button:
Moves away slightly on hover (playful, not annoying)

5️⃣ Final Message Section (Hidden Initially)

Purpose: Emotional payoff
Content:
“I’m so lucky to have you. Happy Valentine’s Day ❤️”
Behavior:
Hidden by default
Shown only after YES is clicked
Smooth fade + scale animation


# ✨ Animations & Effects

Floating Hearts
- Implement using CSS + JS
- Random heart positions
Slow upward movement
Low opacity

Confetti
- Use canvas-confetti
- Trigger only on YES click
- Keep it short (1–2 seconds)

Scroll Animations

- Use Intersection Observer OR AOS library
- Fade + translate up

# 🎵 Optional Audio

- Soft romantic music
- Autoplay muted
- User can enable sound manually

# 🧪 Accessibility & UX

- Buttons must be tappable on mobile
- No sudden loud audio
- Text readable on small screens
- Animations should not block interactions

# 🚀 Deployment Instructions

Code must work with no build step
Must be compatible with GitHub Pages
README.md should include:
How to replace images
How to change text
How to deploy

🛑 Constraints

Keep code clean and commented
Avoid unnecessary libraries
No overengineering
Focus on emotion, not complexity

✅ Definition of Done

- Site loads correctly from GitHub Pages
-Looks good on mobile & desktop
- Animations work smoothly
- Clicking YES creates an emotional moment
- Easy for me to customize text & photos

🧠 Suggested Implementation Order

Base HTML layout
Tailwind styling
Floating hearts
Photo section
YES/NO interaction
Confetti
Final polish & README

# 💬 Final Instruction

 -Build this as if it’s a personal romantic gift, not a portfolio project.