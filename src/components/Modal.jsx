import { useEffect } from "react";
import { createPortal } from "react-dom";

// Shared overlay for the portal, EMDR, glossary and practice-area modals.
// Any element with `data-close` inside the modal closes it when clicked.
export default function Modal({ className = "", lockScroll = false, closeOnEscape = false, onClose, children }) {
  useEffect(() => {
    if (!lockScroll) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [lockScroll]);

  useEffect(() => {
    if (!closeOnEscape) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeOnEscape, onClose]);

  const handleClick = (event) => {
    // React passes clicks from a portal up to the component that opened it.
    // Stop them here, so a modal opened inside another modal (or inside a
    // clickable card) doesn't close or toggle what is behind it.
    event.stopPropagation();
    if (event.target.closest("[data-close]")) onClose();
  };

  return createPortal(
    <div className={`modal ${className}`.trim()} onClick={handleClick}>
      {children}
    </div>,
    document.body,
  );
}
