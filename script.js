// Mobile navigation.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuLabels = document.documentElement.lang.toLowerCase().startsWith("fr")
  ? { open: "Ouvrir le menu", close: "Fermer le menu" }
  : { open: "Open menu", close: "Close menu" };
function setMenu(open) {
  navLinks.classList.toggle("active", open);
  menuToggle.textContent = open ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? menuLabels.close : menuLabels.open);
}
setMenu(false);
menuToggle.addEventListener("click", () =>
  setMenu(!navLinks.classList.contains("active")),
);
document
  .querySelectorAll(".nav-links a")
  .forEach((link) => link.addEventListener("click", () => setMenu(false)));

// A single stack controls close priority, keyboard focus and scroll locking.
const stageModal = document.querySelector("#stage-modal");
const photoGalleryModal = document.querySelector("#photo-gallery-modal");
const imagePreview = document.querySelector("#image-preview");
const previewImage = imagePreview.querySelector("img");
const layers = [
  ...document.querySelectorAll(".modal, .photo-gallery-modal, .image-preview"),
];
const stack = [];
const background = [
  ...document.querySelectorAll("body > header, body > main, body > footer"),
];
function topLayer() {
  return stack.at(-1)?.layer;
}
function syncLayers() {
  const top = topLayer();
  document.body.classList.toggle("modal-open", !!top);
  background.forEach((el) => {
    el.inert = !!top;
  });
  layers.forEach((layer) => {
    layer.inert = layer !== top;
    if (layer === top) layer.removeAttribute("aria-hidden");
    else layer.setAttribute("aria-hidden", "true");
  });
}
function openLayer(layer) {
  if (stack.some((entry) => entry.layer === layer)) return;
  stack.push({ layer, trigger: document.activeElement });
  layer.hidden = false;
  layer.classList.add("open");
  syncLayers();
  const panel =
    layer.querySelector(".coordi-modal-body") ||
    layer.querySelector(".modal-content, .photo-gallery-content");
  if (panel) panel.scrollTop = 0;
  layer.querySelector("button").focus({ preventScroll: true });
}
function closeTop() {
  const entry = stack.pop();
  if (!entry) return;
  entry.layer.classList.remove("open");
  entry.layer.hidden = true;
  if (entry.layer === imagePreview) previewImage.removeAttribute("src");
  syncLayers();
  entry.trigger?.focus({ preventScroll: true });
}
document
  .querySelector(".open-stage-modal")
  .addEventListener("click", () => openLayer(stageModal));
document
  .querySelector(".open-gallery")
  .addEventListener("click", () => openLayer(photoGalleryModal));
document.querySelectorAll("[data-open-layer]").forEach((button) => {
  button.addEventListener("click", () =>
    openLayer(document.getElementById(button.dataset.openLayer)),
  );
});
document.querySelectorAll(".gallery-thumbnail").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    previewImage.src = image.getAttribute("src");
    previewImage.alt = image.alt;
    openLayer(imagePreview);
  });
});
layers.forEach((layer) => {
  layer.querySelector("button").addEventListener("click", () => {
    if (topLayer() === layer) closeTop();
  });
  layer.addEventListener("click", (event) => {
    if (event.target === layer && topLayer() === layer) closeTop();
  });
});
document.addEventListener("keydown", (event) => {
  const top = topLayer();
  if (!top) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeTop();
  } else if (event.key === "Tab") {
    const controls = [
      ...top.querySelectorAll(
        'button:not(:disabled), a[href], summary, [tabindex="0"]',
      ),
    ];
    const visibleControls = controls.filter(
      (control) => control.getClientRects().length > 0,
    );
    const first = visibleControls[0],
      last = visibleControls.at(-1);
    if (
      event.shiftKey &&
      (document.activeElement === first ||
        !top.contains(document.activeElement))
    ) {
      event.preventDefault();
      last.focus();
    } else if (
      !event.shiftKey &&
      (document.activeElement === last || !top.contains(document.activeElement))
    ) {
      event.preventDefault();
      first.focus();
    }
  }
});
syncLayers();
