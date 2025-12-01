"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PopupModal } from "react-calendly"
import cx from 'classnames';

export default function CalendlyWidget({ ctaText = 'Book consult', url = 'https://calendly.com/abbeyfodor/30min', className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <Button
          className={cx("fixed right-5 bottom-23 sm:bottom-20 z-[9998] rounded-full bg-black text-white p-6 font-semibold cursor-pointer", className)}
          onClick={() => setIsOpen(true)}
        >
          {ctaText}
        </Button>
        {typeof window !== "undefined" && (
          <PopupModal
            url={url}
            onModalClose={() => setIsOpen(false)}
            open={isOpen}
            rootElement={document.body}
          />
        )}
      </div>
    </>
  )
}