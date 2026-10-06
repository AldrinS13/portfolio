# Aldrin Sanes Portfolio (v1)

Plain HTML, CSS and JavaScript. No build step.

## What's in here
- `index.html` - the homepage
- `about.html` - the longer story, how I work, and what I am looking for
- `resume.html` - the web resume (it also prints cleanly to PDF)
- `work/` - the three case studies
- `404.html` - the "page not found" page GitHub Pages shows for bad links
- `css/style.css` - homepage and shared styles; colors live in the `:root` tokens at the top
- `css/about.css`, `css/resume.css`, `css/case.css` - page-specific styles
- `js/main.js` - theme toggle (shared by every page), copy-email button, footer year
- `assets/` - resume PDF, certificate, link-preview image (`og-image.png`), tab icons
- `robots.txt`, `sitemap.xml` - help search engines find every page

## Run it locally
Open `index.html` in a browser.

## Publish on GitHub Pages
1. Create a public repo named `portfolio` and upload everything in this folder.
2. Settings > Pages > Source: Deploy from branch, `main`, `/ (root)`.
3. After a minute or two the site is live at https://aldrins13.github.io/portfolio/

## If you use your own domain (or a different repo name)
The search tags, link-preview tags, `404.html`, `robots.txt` and `sitemap.xml` use the full address
`https://aldrins13.github.io/portfolio/`. Use your editor's "Find in files" to replace it with your new address,
for example `https://yourname.com/`. Then add the domain under Settings > Pages > Custom domain.

## Check the LinkedIn preview
After the site is live, paste the homepage address into https://www.linkedin.com/post-inspector/
to refresh LinkedIn's copy of the preview image and title.

## Update the resume PDF
1. Edit `resume.html`.
2. Open it in Chrome and press Ctrl+P (Cmd+P on Mac).
3. Destination: Save as PDF. Paper: Letter. Margins: Default. Turn off "Headers and footers".
4. Save over `assets/aldrin-sanes-resume.pdf`.
