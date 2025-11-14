"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PopupModal } from "react-calendly"

export default function CalendlyWidget() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <Button
          className="fixed right-5 bottom-20 z-[9998] rounded-full bg-black text-white p-6 font-semibold"
          onClick={() => setIsOpen(true)}
        >
          Book consult here!
        </Button>
        {typeof window !== "undefined" && (
          <PopupModal
            url="https://calendly.com/abbeyfodor/30min"
            onModalClose={() => setIsOpen(false)}
            open={isOpen}
            rootElement={document.body}
          />
        )}
      </div>
    </>
  )
}