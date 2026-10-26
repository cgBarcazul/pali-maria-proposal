# Pali & Maria — proposal photo gallery 💍

An elegant, mobile-friendly photo website for **Pali and Maria**. It is completely static: **no paid service, database, backend, build process, or image-storage subscription required**. Your photos are hosted directly in a GitHub repository and displayed with GitHub Pages.

## Quick setup (no coding required)

### 1. Add the proposal photos

Upload your JPG photographs into the `photos/` folder. **Keep original camera filenames** such as `DSCF4774.jpg`, `DSCF4777.jpg`, and `DSCF4778.jpg` — renaming is not necessary. The site automatically discovers image files in this folder via GitHub's public repository API and shows them in filename order. It currently includes a saved list of 28 uploaded photographs as an offline fallback.

The first filename in order is used for the main featured image. If you prefer a specific cover, edit the cover selection in `app.js`. Photos can be JPG, JPEG, PNG, WEBP or AVIF. As you upload more images, they appear automatically after the public repository API updates.

For faster loading, consider resizing images to 1600–2400 px on the long edge (JPEG quality 80–85), but keep a separate backup of original high-resolution files. GitHub Pages is a display site, not your only backup.

### 2. Publish for free with GitHub Pages

1. Sign into [GitHub](https://github.com) and create a **new public repository** called `pali-maria-proposal` (or your preferred name). It's simplest to create it **without** adding a README, license, or .gitignore initially.
2. Unzip the provided site ZIP on your computer (if you got this project as a ZIP). On the new GitHub repository, select **uploading an existing file** / **Add file → Upload files**.
3. Upload the **contents** of this project folder, including `index.html`, `styles.css`, `app.js`, `assets/`, and `photos/` — **not just the ZIP**. Check that `index.html` is directly at the repository root (not in an extra folder).
4. Click **Commit changes**.
5. Open your repository's **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**, select `main`, select `/(root)`, and click **Save**.
7. In a few minutes, GitHub should display your link under **Settings → Pages → Visit site**. It will look like:

   `https://YOUR-USERNAME.github.io/pali-maria-proposal/`

Share that address with Pali and Maria. They can view the gallery from a phone, tap any photo for a full-screen view, and download photos individually.

### 3. Update photographs later

Upload replacements to the same `photos/` paths and commit the changes; GitHub Pages automatically republishes. Your website link stays the same. Browsers may briefly cache the previous images.

## Customize the text

Open `index.html` in any text editor. You can change the headline, messages, or couple's names. The styles are in `styles.css`.

## Features

- Responsive layout (phone, tablet, desktop)
- Automatically discovers camera-named photographs and updates the gallery count
- Full-screen viewer with previous/next buttons and keyboard arrow navigation
- One-tap individual photo downloads
- No tracking scripts, third-party JavaScript, external fonts, or build tools
- Accessible labels, visible keyboard focus, and reduced-motion support

## Privacy and cost considerations

**A GitHub Pages website is public.** On GitHub Free, the repository also needs to be **public**, meaning people can access or copy the photographs if they have the URLs or find the repository. **Do not rely on a hidden/unshared link, a fake password overlay, or `robots.txt` for privacy.** Get the couple's consent before publishing. If the photographs need to be private, use a permission-controlled shared album service instead of GitHub Pages.

GitHub Pages is free for a project of this size. GitHub's published Pages site size limit is 1 GB, with a recommended 1 GB repository limit. Twenty optimized photographs are usually comfortably below that.

## Files

```text
pali-maria-proposal/
├── index.html           Website layout and text
├── styles.css           Colors and responsive layout
├── app.js               Gallery and automatic photo discovery
├── assets/               Icons and sharing graphic
├── photos/
│   ├── DSCF4774.jpg     Your original camera photos
│   ├── DSCF4777.jpg
│   └── ...              Add more without renaming
├── .nojekyll
└── README.md
```

## Test on your computer

Open `index.html` in a browser for a quick look. For full testing, you can start a simple local web server from this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

---

Made with care for Pali & Maria. ♡