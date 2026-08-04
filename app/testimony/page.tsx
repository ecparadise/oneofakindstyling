import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { customerTestimony } from "../constants/testimony"
import FeedbackForm from "../ui/feedback-form"
import CalendlyWidget from "../ui/calendly-widget"
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface"

export const metadata: Metadata = {
  title: 'Testimony',
  description: 'Read testimony and submit feedback',
}

export default function Testimony() {
  return (
    <div className={"flex flex-col mb-10"}>
      <h1 className="mb-2" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '1px', fontWeight: 400 }}>{'Testimony'}</h1>
      <hr className="header-rule" />
      <div className="flex justify-center w-full">
        <Carousel className="max-w-3xs md:max-w-md">
          <CarouselContent>
            {customerTestimony.map((testimony, index) => (
              <CarouselItem key={index}>
              <div className="p-1">
                <Card style={{ backgroundColor: '#FBF8F3', border: '1px solid #DCD3C4' }}>
                  <CardContent className="flex flex-col aspect-auto items-center justify-center p-6" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    <span className="font-normal" style={{ fontSize: '11.5px', lineHeight: '1.5', color: '#211C18' }}>{testimony.feedback}</span>
                    <span style={{ fontSize: '11px', color: '#8A7F70', marginTop: '8px' }}>-{testimony.name}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className='border-t pt-6 flex flex-col items-center gap-4 md:w-full'>
        <span className="font-normal" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '17.5px', letterSpacing: '0.2px', color: '#211C18' }}>Have feedback you want to share?</span>
        <FeedbackForm />
      </div>
      <CalendlyWidget />
    </div >
  )
}


