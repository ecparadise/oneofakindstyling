import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { servicesList } from "../constants/services-list";
import { renderFormattedParagraphs } from "../helpers/paragraph-formatter";
import * as icons from "react-icons/tfi";
import { isCalendlyUrl } from "../helpers/utils";
import CalendlyWidget from "../ui/calendly-widget";

export default function Services() {
  return (
    <div>
      <h1 className="text-center mb-8">{'Services'}</h1>
      <div className={`grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-8 w-full`}>
        {
          servicesList.map((service) => {
            const { name, cost, description, disclaimer, iconName, originalPrice, link } = service;
            const Icon = iconName ? icons[iconName as keyof typeof icons] : null;
            return (
              <Card className={'w-full px-4'} key={name} >
                <div className="flex items-center gap-2">
                  <CardTitle>{name}</CardTitle>
                  {Icon && <Icon size={24} />}
                </div>
                <CardDescription>
                  {originalPrice ? <span className="line-through text-red-500 mr-2">{originalPrice}</span> : null}
                  {cost}
                </CardDescription>
                <div>
                  {description && renderFormattedParagraphs(description, "mt-2 text-sm text-gray-600 dark:text-gray-400")}
                </div>
                {link && (isCalendlyUrl(link.url) ? <CalendlyWidget url={link.url} ctaText={link.text} className="static py-2" /> :
                  <div>
                    <a href={link.url} className="rounded-full bg-black text-white font-semibold cursor-pointer py-2 px-6 text-sm">{link.text}</a>
                  </div>
                )}
                {disclaimer && <span className="text-sm italic text-gray-600 dark:text-gray-400">{disclaimer}</span>}
              </Card>
            )
          })
        }</div>
    </div >
  )
}