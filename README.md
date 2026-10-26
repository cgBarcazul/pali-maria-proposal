# Pali & Maria — proposal photo gallery 💍

An elegant, mobile-friendly photo website for **Pali and Maria**. It is completely static: **no paid service, database, backend, build process, or image-storage subscription required**. Your photos are hosted directly in a GitHub repository and displayed with GitHub Pages.

## Quick setup (no coding required)

### 1. Add the proposal photos

1. Open this project's `photos/` folder.
2. Rename your favorite proposal photo **`01.jpg`** (it becomes the large photo at the top).
3. Rename the other photos **`02.jpg`** through **`20.jpg`**.
4. Put all 20 files inside `photos/`.

**Important:** The file names must match exactly, including `.jpg`, in lowercase. If your pictures are HEIC, PNG, or WEBP, convert them to JPG first, **or** edit the `PHOTO_FILES` list at the beginning of `app.js` to match their names and extensions. You can also change the number of pictures there.

Before uploading, consider resizing images to approximately **1600–2400 px on the long edge** at JPEG quality 80–85 to make loading faster. Keep personal backups of the original full-resolution images: GitHub Pages is a display site, not your only backup.

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
- 20 photo slots; no broken-image icons when photos aren't uploaded yet
- Full-screen viewer with previous/next buttons and keyboard arrow navigation
- One-tap individual photo downloads
- No tracking scripts, third-party JavaScript, external fonts, or build tools
- Accessible labels, visible keyboard focus, and reduced-motion support

## Privacy and cost considerations

**A GitHub Pages website is public.** On GitHub Free, the repository also needs to be **public**, meaning people can access or copy the photographs if they have the URLs or find the repository. **Do not rely on a hidden/unshared link, a fake password overlay, or `robots.txt` for privacy.** Get the couple's consent before publishing. If the photographs need to be private, use a permission-controlled shared album service instead of GitHub Pages.

GitHub Pages is free for a project of this size. GitHub's published Pages site size limit is 1 GB, with a recommended 1 GB repository limit. Twenty optimized photographs are usually comfortably below that.

## Files

```text
pali-maria-proposal-site/
├── index.html                Website layout & words
├── styles.css                Colors, typography & responsive layout
├── app.js                    Photo filenames & lightbox logic
├── assets/
│   ├── favicon.svg           Browser icon
│   └── share-card.svg        Sharing graphic
├── photos/
│   ├── 01.jpg                Add these image files yourself
│   ├── 02.jpg
│   ├── ...
│   └── 20.jpg
├── .nojekyll                 Prevents GitHub Pages from running Jekyll
└── README.md                 These instructions
```

The `photos/` directory in the starter ZIP contains an instruction text file and a hidden `.gitkeep` file; it has **no photos yet**.

## Test on your computer

Open `index.html` in a browser for a quick look. For full testing, you can start a simple local web server from this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

---

Made with care for Pali & Maria. ♡