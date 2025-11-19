import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { servicesList } from "../constants/services-list";
import { renderFormattedParagraphs } from "../helpers/paragraph-formatter";
import * as icons from "react-icons/tfi";
import cx from 'classnames';

export default function Services() {
  return (
    <div>
      <h1 className="text-center mb-8">{'Services'}</h1>
      <div className={`grid grid-flow-row grid-cols-1 ${servicesList.length > 2 ? 'md:grid-cols-2' : ''} gap-8 w-full`}>
        {
          servicesList.map((service) => {
            const { name, cost, description, disclaimer, iconName, className, originalPrice, link } = service;
            const Icon = iconName ? icons[iconName as keyof typeof icons] : null;
            return (
              <Card className={cx('w-full px-4', className)} key={name} >
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
                {link && <a href={link.url} className="text-sm text-blue-600 dark:text-blue-400 underline mt-2 inline-block">{link.text}</a>}
                {disclaimer && <span className="text-sm italic text-gray-600 dark:text-gray-400">{disclaimer}</span>}
              </Card>
            )
          })
        }</div>
    </div >
  )
}