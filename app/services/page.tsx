import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import StylingRates from "@/components/ui/styling-rates/StylingRates";

export const metadata: Metadata = {
  title: 'Services',
  description: 'Learn about and book available styling services',
}

interface IServiceType {
  name: string;
  cost: string;
  description?: string;
  disclaimer?: string;
  iconName?: string;
  originalPrice?: string;
  className?: string;
  link?: {
    url: string;
    text: string;
  };
}

export default function Services() {
  return (
    <StylingRates />
  )
}