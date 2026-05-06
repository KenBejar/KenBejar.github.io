# 🚀 My Portfolio Website

A dark, minimal portfolio site for web developers — built with pure HTML, CSS, and JavaScript. No frameworks, no build tools. Just open and ship.

## ✨ Features

- 🎨 Custom cursor with smooth lag animation
- 📱 Fully responsive (mobile hamburger menu)
- 🌙 Dark theme with gold accent color palette
- ✨ Scroll-triggered reveal animations
- 🧭 Smooth scrolling + active nav link tracking
- 📬 Contact form (ready to connect to Formspree / Web3Forms)
- 🔤 Distinctive Syne + DM Mono font pairing
- ⚡ Zero dependencies — pure HTML/CSS/JS

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML
├── css/
│   └── style.css       # All styles + responsive
├── js/
│   └── main.js         # Interactions & animations
├── assets/
│   ├── photo.jpg       # Your profile photo (add this)
│   ├── resume.pdf      # Your resume (add this)
│   ├── project1.jpg    # Project screenshots (add these)
│   └── ...
└── README.md
```

## 🛠️ How to Customize

### 1. Personal Info
Open `index.html` and replace:
- `Your Name` → your actual name
- `[Your City]` → your city
- `your@email.com` → your email
- `yourusername` → your GitHub/LinkedIn/Twitter handles
- The about section text with your own bio
- Stats numbers (projects, years, clients)

### 2. Add Your Photo
Place your photo at `assets/photo.jpg`, then in `index.html` replace:
```html
<div class="about-img-placeholder">
  <span>YOUR<br>PHOTO</span>
</div>
```
with:
```html
<div class="about-img-placeholder">
  <img src="assets/photo.jpg" alt="Your Name" />
</div>
```

### 3. Add Your Projects
Each project card in `index.html` has:
- `project-img-placeholder` → replace with `<img src="assets/projectN.jpg" alt="..." />`
- `href="#"` links → replace with your live URL and GitHub repo URL
- Project name, description, and tech tags

### 4. Update Skills
Edit the skill percentages (`--pct:80%`) and names in the Skills section.

### 5. Connect the Contact Form
Pick one of these free services:

**Formspree (easiest):**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form → get your endpoint
3. Change `<form class="contact-form" id="contactForm">` to:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
4. Remove the `e.preventDefault()` in `main.js` (or keep it and use fetch)

**Web3Forms (alternative):**
Same idea — sign up at [web3forms.com](https://web3forms.com) for a free access key.

### 6. Add Resume
Place your resume at `assets/resume.pdf` — the download button already points there.

### 7. Update Colors (Optional)
All colors are CSS variables at the top of `css/style.css`:
```css
:root {
  --accent: #e8c547;   /* Change this to your brand color */
  --bg: #0a0a0a;       /* Background */
  --text: #e8e3d9;     /* Text */
}
```

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repo (e.g., `yourusername.github.io`)
2. Push all files to the `main` branch
3. Go to **Settings → Pages → Source → Deploy from branch → main**
4. Your site will be live at `https://yourusername.github.io`

> **Tip:** Name your repo `yourusername.github.io` (using your actual GitHub username) to get the clean URL automatically.

## 📄 License

Free to use and customize. Credit appreciated but not required.
