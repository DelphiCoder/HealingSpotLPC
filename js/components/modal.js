// Shared overlay manager for the portal, EMDR, glossary and practice-area modals.
// Markup passed in should include a `.modal__backdrop` and a `.modal__panel`;
// any element with `data-close` closes the modal when clicked.

const openClosers = new Set();

export function openModal({ className = "", html, lockScroll = false, closeOnEscape = false }) {
  const overlay = document.createElement("div");
  overlay.className = `modal ${className}`.trim();
  overlay.innerHTML = html;
  document.body.append(overlay);

  if (lockScroll) document.body.style.overflow = "hidden";

  const onKeyDown = (event) => {
    if (event.key === "Escape") close();
  };
  if (closeOnEscape) document.addEventListener("keydown", onKeyDown);

  overlay.addEventListener("click", (event) => {
    if (event.target.closest("[data-close]")) close();
  });

  function close() {
    if (!overlay.isConnected) return;
    overlay.remove();
    if (lockScroll) document.body.style.overflow = "";
    document.removeEventListener("keydown", onKeyDown);
    openClosers.delete(close);
  }

  openClosers.add(close);
  return { element: overlay, close };
}

// Used on route changes so no modal is left floating over a new page.
export function closeAllModals() {
  for (const close of [...openClosers]) close();
}
