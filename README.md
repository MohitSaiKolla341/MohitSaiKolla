# Mohit Sai Kolla — Portfolio

A responsive, static portfolio inspired by the layout and navigation of Shannon Phu's site. Built with HTML, CSS, and vanilla JavaScript; no build tools required.

## Quick preview
Open `index.html` in your browser. Open `blog.html` to view the blog placeholder.

## Publish on GitHub Pages (recommended)
1. Create a **public** GitHub repository named `YOUR-GITHUB-USERNAME.github.io` (replace `YOUR-GITHUB-USERNAME` with your real GitHub username).
2. Upload **the contents** of this folder to the repository root. Make sure `index.html` is in the root, not inside another folder.
3. In GitHub go to **Settings → Pages** and select **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save** (if not already enabled).
4. After publishing completes, visit `https://YOUR-GITHUB-USERNAME.github.io/`.

You can alternatively publish in any repository and host it at `https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY/`; relative asset paths work there too.

## Customize
- **Name, about me, experience, skills:** edit `index.html`.
- **Project cards:** edit `projects/projects.js`. Replace each placeholder entry with your title, description, technologies, screenshot path, GitHub repository URL, and demo URL. Add images to `assets/`.
- **Resume:** replace `assets/Mohit_Sai_Kolla_Resume.pdf` with your updated PDF (keep filename), or update both links in `index.html` and one in `blog.html`.
- **GitHub link:** replace `https://github.com/USERNAME` in `index.html` with your GitHub account link. This is deliberately a placeholder; no account name was assumed.
- **LinkedIn:** verify the provided LinkedIn link in `index.html`.
- **Company icons:** AMEX and TCS currently link to their official websites, not your employment record. Edit their `href` URLs if you want different destinations.
- **Blog:** edit `blog.html` to add posts or link it to your preferred publishing platform.
- **Look and feel:** change the CSS variables at the top of `styles.css`.

## Example project entry
```js
{
  title: "My Data Pipeline",
  description: "Built a daily ingestion and quality validation pipeline.",
  technologies: ["Python", "Airflow", "Snowflake"],
  image: "assets/my-pipeline.png",
  github: "https://github.com/USERNAME/my-data-pipeline",
  demo: ""
}
```

## File layout
- `index.html` — homepage
- `blog.html` — blog placeholder
- `styles.css` — design and mobile layout
- `script.js` — renders project cards, updates footer year
- `projects/projects.js` — editable project list
- `assets/Mohit_Sai_Kolla_Resume.pdf` — your uploaded resume

This is an independently implemented site inspired by a publicly visible layout, not a copy of the original site's source or project content.
