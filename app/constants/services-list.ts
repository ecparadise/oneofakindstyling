export const servicesList = {
  section1: {
    heading: "Package Deal: Bundle to Save on Personal Styling",
    services: [
      {
        name: "Holiday Special",
        cost: "$380",
        description:
          "Bundle includes below services:\n-Phone consult\n-In-closet consult (take inventory, share tips, and put together some outfits)\n-Appointment at any local store\n-Order from one website\n-Appointment to unbox, try out, and style or return new pieces",
        disclaimer:
          "Must be purchased and used by January 31st. Includes unlimited phone consultations within 30 days of booking.",
        iconName: "TfiGift",
        originalPrice: "$555",
        link: {
          url: "mailto:oneofakindstyling@gmail.com?subject=Holiday%20Special%20Booking%20Request&body=Hi%2C%20I%20am%20interested%20in%20booking%20the%20holiday%20special!",
          text: "Book via email",
        },
        className: "md:col-span-2",
      },
    ],
  },
  section2: {
    heading: "Styling Services: Build One Step at a Time",
    services: [
      // {
      //   name: "Returning Customer Virtual Consultation",
      //   cost: "$15",
      //   description:
      //     "15 mins of scheduled virtual communication via phone call, SMS text or video call",
      //   disclaimer:
      //     "Every three consults within three weeks qualifies for one assisted online order complete with white glove concierge return service - as long as the IRL Stying Session is scheduled 7+ days before the retailer's return window closes",
      //   link: {
      //     url: "https://calendly.com/abbeyfodor/returning-customer-consultation",
      //     text: "Book now",
      //   },
      // },
      {
        name: "New Customer Virtual Consultation",
        cost: "Free",
        description:
          "15 mins of scheduled virtual communication via phone call, SMS text or video call",
        link: {
          url: "https://calendly.com/abbeyfodor/30min",
          text: "Book now",
        },
        disclaimer:
          "New customers only. Cannot be booked if you have previously booked a service.",
      },
      {
        name: "In-Closet Consult",
        cost: "$175",
        description:
          "Stylist will meet at the client's closet for outfit planning and helpful tips personalized per person's lifestyle preferences",
        disclaimer:
          "Client must live within a 30 mile radius of Bridgeport, Connecticut",
        link: {
          url: "https://calendly.com/abbeyfodor/in-closet-consult",
          text: "Book now",
        },
      },
      // {
      //   name: "In-Store Shopping",
      //   cost: "$175 per hour",
      //   description:
      //     "Pick a local retail store for an in-store styling session with a personalized pre-prepared rack of clothing, undivided attention and gained knowledge on shopping efficiency.",
      //   disclaimer:
      //     "Store must be within a 30 mile radius of Bridgeport, Connecticut",
      //   link: {
      //     url: "https://calendly.com/abbeyfodor/in-store-shopping",
      //     text: "Book now",
      //   },
      // },
      // {
      //   name: "One Online Order",
      //   cost: "$30",
      //   link: {
      //     url: "https://calendly.com/abbeyfodor/1-online-order-within-3-weeks-of-initial-style-consult",
      //     text: "Book now",
      //   },
      //   description:
      //     "Help ordering from one online retailer of your choice. Based on initial consultation, stylist will curate a personalized selection of items to choose from.",
      //   disclaimer: "Must be booked within 3 weeks of initial style consult.",
      // },
      // {
      //   name: "Local 1:1 Styling",
      //   cost: "$175 per hour",
      //   description:
      //     "Stylist will meet at the client's closet or at the retail store that the stylist last assisted with purchasing from (as long as last purchase still is within a qualifying return period). Stylist will assist with unboxing new purchases, be a second eye to give feedback and help style the full look. Be prepared to be blown away by how seamless the process is!",
      //   disclaimer:
      //     "Includes guaranteed white glove return assistance if styling service is 7+ days before return window closes per brand's individual policies",
      //   link: {
      //     url: "https://calendly.com/abbeyfodor/appointment-to-unbox-try-out-and-style-or-return-new",
      //     text: "Book now",
      //   },
      // },
    ],
  },
};
