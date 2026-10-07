# Avinash Pratap Singh | Data Analyst Portfolio

Personal portfolio website of **Avinash Pratap Singh**, a Data Analyst, Business Analyst and MIS Analyst skilled in SQL, Python, Excel, Power BI and data visualization.

**Live site:** [avinash490.github.io/portfolio](https://avinash490.github.io/portfolio/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222?logo=github&logoColor=white)

<!-- Add a screenshot: save it as preview.png in the repo root, then uncomment the next line -->
<!-- ![Portfolio preview](preview.png) -->

---

## About

A single-page portfolio that presents my skills, internships, projects, education and certifications. It is built with plain HTML, CSS and JavaScript, with no build step and no framework. All text and links live in one file (`js/data.js`), so updating the site never means touching the page layout.

## Features

- **Animated data-network background:** drifting dots joined by faint lines on a canvas, a slowly scrolling grid, and a soft glow that follows the cursor on desktop.
- **Light and dark themes:** follows the system setting, can be switched with the navbar button, and remembers the choice. The background colours change with the theme.
- **Skills tabs:** skills grouped into Programming, Database, Data Analysis, Visualization, Tools and Soft Skills.
- **Project filters:** switch between All, Web Development and Data & ML projects.
- **Experience and education timelines** built from the data file.
- **Certifications** with links to each certificate.
- **Contact form** that opens Gmail (or the default email app) with the message filled in. No backend, and nothing is stored.
- **Resume download** from the navbar, hero and contact section.
- **Responsive and accessible:** works from phone to desktop, includes a skip link, ARIA labels, visible keyboard focus, and respects the "reduce motion" system setting.
- **SEO ready:** page title and description meta tags.

## Sections

Home, About, Skills, Experience, Projects, Education, Certifications, Contact.

## Tech stack

| Area | Tools |
| --- | --- |
| Structure | HTML5 |
| Styling | Tailwind CSS (CDN) plus custom CSS in `css/style.css` |
| Logic | Vanilla JavaScript (no libraries or build tools) |
| Background animation | HTML Canvas API and CSS animations |
| Icons | [Lucide](https://lucide.dev) |
| Fonts | Bricolage Grotesque and Public Sans (Google Fonts) |
| Hosting | GitHub Pages |

## Projects on the site

| Project | Type | Tech | Links |
| --- | --- | --- | --- |
| Simple Calculator | Web Development | HTML, CSS, JavaScript | [GitHub](https://github.com/Avinash490/Simple-Calculator) |
| WhatsApp Clone Frontend | Web Development | HTML, CSS, JavaScript | |
| Swastik Shaadi Website | Web Development | HTML, CSS, JavaScript | [Live site](https://swastikshaadi.com) |
| Data Analytics / EDA Projects | Data & ML | Python, Pandas, NumPy, Matplotlib | |
| Machine Learning / Predictive Modeling | Data & ML | Python, Regression, Decision Trees, Classification | [GitHub](https://github.com/Avinash490/Machine-Learning) |
| Power BI / Tableau Visualization | Data & ML | Power BI, Tableau | |

## Project structure

```
portfolio/
├── index.html                          # Page structure, navbar, hero, footer, SEO tags
├── css/
│   └── style.css                       # Custom styles, hero theme, animated background
├── js/
│   ├── data.js                         # ALL content: edit this file to update the site
│   ├── components.js                   # Builds each section from data.js
│   ├── interactions.js                 # Theme toggle, menu, form, scroll effects, filters
│   └── background.js                   # Animated canvas background and cursor glow
├── Avinashh.png                        # Profile photo (transparent cutout)
├── Avinashh.webp                       # Same photo in WebP, loaded first by modern browsers
├── Avinash_Pratap_Singh_Resume.pdf     # Resume used by the download buttons
└── README.md
```

The scripts must load in this order, as set at the bottom of `index.html`: `data.js`, `components.js`, `interactions.js`, `background.js`.

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Avinash490/portfolio.git
   cd portfolio
   ```

2. Open `index.html` in a browser by double-clicking it, or serve the folder:

   ```bash
   python -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

An internet connection is needed because Tailwind CSS, Lucide icons and Google Fonts load from CDNs.

## Deploy on GitHub Pages

1. Push the files to a GitHub repository, with `index.html` in the root.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then click **Save**.
5. After a minute or two the site is live at `https://<username>.github.io/<repository-name>/`.

If the repository is named `Avinash490.github.io`, the site is served from `https://avinash490.github.io/` instead.

## Customize

### Update content

Everything shown on the site is in `js/data.js`.

| Constant | What it controls |
| --- | --- |
| `P` | Email, phone, location, social links and resume file name |
| `NAV` | Navbar and footer links (each name must match a section id) |
| `SK` | Skill tabs: `"Tab name": ["lucide-icon", ["Skill 1", "Skill 2"]]` |
| `EXP` | Experience timeline: title, organisation, dates, place, bullet points, optional website |
| `EDU` | Education timeline, with an optional badge such as "Currently in 5th Year" |
| `PRJ` | Project cards |
| `CERT` | Certification cards: `[title, issuer, note, certificate link]` |

Example project entry:

```js
{
  t: "Project title",
  c: "web",                       // "web" or "data", used by the filter buttons
  d: "One or two sentences about the project.",
  k: ["HTML", "CSS", "JavaScript"],   // technology chips
  w: ["Key feature one", "Key feature two"],
  gh: "https://github.com/Avinash490/repo-name",   // leave "" to show "Coming Soon"
  demo: "",                           // live link, leave "" for "Coming Soon"
}
```

A project or certificate with an empty link shows a disabled "Coming Soon" state instead of a broken button.

### Change the photo or resume

- Replace `Avinashh.png` and `Avinashh.webp` with a new transparent cutout, keeping the same file names and a 3:4 portrait ratio.
- Replace `Avinash_Pratap_Singh_Resume.pdf`, or change `resume` in `P` if you rename it.

### Tune the background

In `js/background.js`:

- Number of dots: change `46` (desktop) and `22` (mobile).
- Line distance: change `120` (pixels).
- Colours and line strength: edit the `THEME` object at the top (one entry for dark, one for light).

In `css/style.css`, the block headed "Animated background" controls the scrolling grid and the cursor glow. To switch the background off, remove the `<canvas id="bg">` and `<div id="cg">` lines and the `background.js` script tag from `index.html`.

## Browser support

Current versions of Chrome, Edge, Firefox and Safari, on desktop and mobile.

## Connect

- **LinkedIn:** [linkedin.com/in/avinash-pratap-singh-](https://www.linkedin.com/in/avinash-pratap-singh-/)
- **GitHub:** [github.com/Avinash490](https://github.com/Avinash490)
- **Email:** [avinashpratapsingh9389@gmail.com](mailto:avinashpratapsingh9389@gmail.com)
- **Location:** Etmadpur, Agra, Uttar Pradesh, India

I'm open to Data Analyst opportunities, jobs, internships, projects and professional collaborations.

## License

© 2026 Avinash Pratap Singh. All rights reserved.

The code is public so recruiters and other developers can see how the site is built. Please do not copy the personal content, photo or resume. If you want to reuse the layout for your own portfolio, get in touch first.
