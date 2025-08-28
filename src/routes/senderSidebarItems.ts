import Parcels from "@/components/modules/Sender/Parcels";
import { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Parcel Management",
    items: [
      {
        title: "Parcels",
        url: "/sender/parcels",
        component: Parcels,
      },
    ],
  },
];


export default senderSidebarItems;