import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { servicesList } from "../constants/services-list";
import { renderFormattedParagraphs } from "../helpers/paragraph-formatter";
import * as icons from "react-icons/tfi";

export default function Services() {
  return (
    <div>
      <h1 className="text-center mb-8">{'Services'}</h1>
      <div className={`grid grid-flow-row grid-cols-1 ${servicesList.length > 2 ? 'md:grid-cols-3' : ''} gap-8 w-full auto-rows-fr`}>
        {
          servicesList.map((service) => {
            const { name, cost, description, disclaimer, iconName } = service;
            const Icon = iconName ? icons[iconName as keyof typeof icons] : null;
            return (
              <Card className="w-full px-4 " key={name}>
                <div className="flex items-center gap-2">
                  <CardTitle>{name}</CardTitle>
                  {Icon && <Icon size={24} />}
                </div>
                <CardDescription>{cost}</CardDescription>
                <div>
                  {description && renderFormattedParagraphs(description, "mt-2 text-sm text-gray-600 dark:text-gray-400")}
                </div>
                {disclaimer && <span className="text-sm italic text-gray-600 dark:text-gray-400">{disclaimer}</span>}
              </Card>
            )
          })
        }</div>
    </div>
  )
}