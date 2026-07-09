# 🎬 Video Editing Portfolio

A fast, dependency-free portfolio site for a video editor. Videos are hosted on
**YouTube or Vimeo** (which stream them properly) and play in an inline lightbox —
the site itself is just static HTML/CSS/JS, so it hosts free on **GitHub Pages**.

> **Why not put the video files in the repo?** GitHub caps files at 100 MB, bloats
> with every version, and Pages won't stream large media. Hosting the videos on a
> video platform and embedding them is the standard, reliable approach.

## ✏️ How to add your own videos

Everything you edit is in **`projects.js`**:

1. Upload each video to YouTube (unlisted is fine) or Vimeo.
2. Copy its **ID** (not the whole URL):
   - `youtube.com/watch?v=`**`dQw4w9WgXcQ`** → `id: "dQw4w9WgXcQ"`
   - `vimeo.com/`**`123456789`** → `id: "123456789"`
3. Add a block to the `PROJECTS` array with `title`, `role`, `tools`, `category`,
   `host` (`"youtube"` or `"vimeo"`), and `id`.
4. Edit the `PROFILE` object at the bottom with your name, tagline, email, and socials.

YouTube thumbnails load automatically. For Vimeo, add an optional `thumb: "..."`
image URL, or a frame export placed in `assets/`.

## 👀 Preview locally

Just open `index.html` in a browser, or run a tiny static server:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## 🚀 Deploy (GitHub Pages)

This repo is set up to publish from the `main` branch. In the repo:
**Settings → Pages → Source: Deploy from a branch → `main` / root**.
Your site goes live at `https://<username>.github.io/<repo>/`.

## 🎨 Customize the look

Colors, spacing, and fonts live at the top of `styles.css` under `:root`
(`--accent`, `--accent-2`, `--bg`, …). Change two variables and the whole site reskins.

---

Built with plain HTML/CSS/JS — no framework, no build step.
