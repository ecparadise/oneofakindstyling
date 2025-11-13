import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { servicesList } from "../constants/services-list";
import CalendlyWidget from "../ui/calendly-widget";

export default function Services() {
  return (
    <div>
      <h1 className="text-center mb-8">{'Services'}</h1>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-8 w-full auto-rows-fr">
        {
          servicesList.map((service) => {
            const { name, cost, description } = service;
            return (
              <Card className="w-full px-4 " key={name}>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{cost}</CardDescription>
                {description && <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>}
              </Card>
            )
          })
        }</div>
      <CalendlyWidget />
    </div>
  )
}