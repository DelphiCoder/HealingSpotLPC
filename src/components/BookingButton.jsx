import { useState } from "react";
import { BOOKING_URL } from "../data/constants";
import BookingNotice from "./BookingNotice";

// Every "Book a Consultation" button on the site. A normal click shows the
// time-zone notice first; the notice's "Go to Calendar" opens the booking
// page in a new tab. The link keeps its real address, so a middle-click or
// Ctrl+click still opens the calendar directly.
// `onClick` (optional) also runs on a normal click, e.g. to close the phone menu.
export default function BookingButton({ className, children, onClick }) {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setOpen(true);
    onClick?.();
  };

  return (
    <>
      <a className={className} href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        {children}
      </a>
      {open && <BookingNotice onClose={() => setOpen(false)} />}
    </>
  );
}
