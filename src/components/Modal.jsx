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
    if (event.target.closest("[data-close]")) onClose();
  };

  return createPortal(
    <div className={`modal ${className}`.trim()} onClick={handleClick}>
      {children}
    </div>,
    document.body,
  );
}
