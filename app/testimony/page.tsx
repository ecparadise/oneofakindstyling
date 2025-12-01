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

export default function Testimony() {
  return (
    <div className={"flex flex-col items-center gap-6 mb-10"}>
      <h1>{'Testimony'}</h1>
      <Carousel className="max-w-3xs md:max-w-md">
        <CarouselContent>
          {customerTestimony.map((testimony, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-auto items-center justify-center p-6">
                    <span className="font-semibold">{testimony.feedback}</span>
                    <span>-{testimony.name}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='border-t pt-6 flex flex-col items-center gap-4 md:w-full'>
        <span className="font-semibold">Have feedback you want to share?</span>
        <FeedbackForm />
      </div>
      <CalendlyWidget />
    </div >
  )
}


