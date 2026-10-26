/*
 * Pali & Maria — Photo gallery.
 * Photos can retain camera filenames such as DSCF4774.jpg.
 * The saved list below works even if GitHub's directory API is unavailable.
 * When online, the site automatically discovers newly uploaded photos.
 */
const REPO = "cgBarcazul/pali-maria-proposal";
const SAVED_PHOTO_NAMES = [
  "DSCF4774.jpg",
  "DSCF4777.jpg",
  "DSCF4778.jpg",
  "DSCF4815.jpg",
  "DSCF4856.jpg",
  "DSCF4863.jpg",
  "DSCF4864.jpg",
  "DSCF4867.jpg",
  "DSCF4869.jpg",
  "DSCF4873.jpg",
  "DSCF4882.jpg",
  "DSCF4887.jpg",
  "DSCF4888.jpg",
  "DSCF4896-2.jpg",
  "DSCF4896.jpg",
  "DSCF4902.jpg",
  "DSCF4919.jpg",
  "DSCF4920.jpg",
  "DSCF4927.jpg",
  "DSCF4928.jpg",
  "DSCF4929.jpg",
  "DSCF4930.jpg",
  "DSCF4949.jpg",
  "DSCF4958.jpg",
  "DSCF4963.jpg",
  "DSCF4965.jpg",
  "DSCF4973.jpg",
  "DSCF4974.jpg"
];
const gallery = document.getElementById('photoGallery');
const count = document.getElementById('photoCount');
const hero = document.getElementById('heroImage');
const heroPhotoCount = document.getElementById('heroPhotoCount');
const dialog = document.getElementById('lightbox');
const viewer = document.getElementById('lightboxImage');
const counter = document.getElementById('lightboxCounter');
const download = document.getElementById('downloadPhoto');
const isImage = name => /\.(?:jpe?g|png|webp|avif)$/i.test(name);
const compareNames = (a, b) => a.localeCompare(b, undefined, {numeric:true, sensitivity:'base'});
const photoPath = name => 'photos/' + encodeURIComponent(name);
let photos = [];
let current = 0;
let loaded = new Set();
let missing = new Set();
const pad = num => String(num).padStart(2,'0');

function updatePhotoText() {
  const n = photos.length;
  count.textContent = n + (n === 1 ? ' photograph' : ' photographs');
  if (heroPhotoCount) heroPhotoCount.textContent = n + (n === 1 ? ' MOMENT' : ' MOMENTS');
}

function showPhoto() {
  const file = photos[current];
  if (!file) return;
  viewer.src = photoPath(file);
  viewer.alt = 'Pali and Maria proposal photograph ' + (current + 1);
  counter.textContent = pad(current + 1) + ' / ' + photos.length;
  download.href = photoPath(file);
  download.download = file;
}
function openPhoto(i) {
  if (missing.has(i) || !photos[i]) return;
  current = i;
  showPhoto();
  dialog.showModal();
}
function step(delta) {
  if (!photos.length) return;
  for (let tries = 0; tries < photos.length; tries++) {
    const next = (current + delta + photos.length) % photos.length;
    current = next;
    if (!missing.has(current)) { showPhoto(); return; }
  }
}

function renderPhotos(names) {
  const next = [...new Set(names.filter(isImage))].sort(compareNames);
  if (next.join('\u0000') === photos.join('\u0000')) return;
  photos = next;
  loaded = new Set();
  missing = new Set();
  gallery.replaceChildren();
  updatePhotoText();

  // The first filename in alphabetical/numeric order becomes the cover photo.
  hero.classList.remove('is-loaded');
  hero.removeAttribute('src');
  if (photos.length) hero.src = photoPath(photos[0]);

  photos.forEach((filename, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'photo-card';
    if ([0,8,14].includes(i)) b.classList.add('photo-card--wide');
    b.disabled = true;
    b.setAttribute('aria-label', 'Photograph ' + (i+1) + ' loading');

    const fallback = document.createElement('div');
    fallback.className = 'photo-fallback';
    fallback.innerHTML = '<div class="photo-fallback-inner"><span>' + pad(i+1) +
      '</span><small>Our moment</small></div>';
    const overlay = document.createElement('span');
    overlay.className = 'photo-card-overlay';
    overlay.innerHTML = '<span>Moment ' + pad(i+1) +
      '</span><span class="overlay-arrow">↗</span>';
    const number = document.createElement('span');
    number.className = 'photo-card-number';
    number.textContent = pad(i+1);
    const img = document.createElement('img');
    img.alt = 'Pali and Maria proposal photograph ' + (i+1);
    img.loading = i < 3 ? 'eager' : 'lazy';
    img.decoding = 'async';
    img.addEventListener('load', () => {
      loaded.add(i); missing.delete(i);
      b.disabled = false; b.classList.add('is-loaded');
      b.setAttribute('aria-label', 'Open photograph ' + (i+1));
    });
    img.addEventListener('error', () => {
      missing.add(i); loaded.delete(i);
      b.disabled = true; b.classList.remove('is-loaded');
      b.setAttribute('aria-label', 'Photograph ' + (i+1) + ' unavailable');
    });
    img.src = photoPath(filename);
    b.append(fallback, overlay, number, img);
    b.addEventListener('click', () => openPhoto(i));
    gallery.appendChild(b);
  });
}

hero.addEventListener('load', () => hero.classList.add('is-loaded'));
hero.addEventListener('error', () => hero.classList.remove('is-loaded'));
document.getElementById('closeLightbox').addEventListener('click', () => dialog.close());
document.getElementById('prevPhoto').addEventListener('click', () => step(-1));
document.getElementById('nextPhoto').addEventListener('click', () => step(1));
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
dialog.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
  if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
});
renderPhotos(SAVED_PHOTO_NAMES);

// GitHub serves the public repository's photo directory; no renaming or manifest editing needed.
if (location.protocol === 'https:' || location.protocol === 'http:') {
  fetch('https://api.github.com/repos/' + REPO + '/contents/photos?ref=main', {
    headers: { 'Accept': 'application/vnd.github+json' }
  })
    .then(response => { if (!response.ok) throw new Error('Photo list unavailable'); return response.json(); })
    .then(items => {
      if (Array.isArray(items)) {
        const found = items.filter(x => x.type === 'file' && isImage(x.name)).map(x => x.name);
        renderPhotos(found);
      }
    })
    .catch(() => { /* Keep the saved list if offline or API rate-limited. */ });
}
