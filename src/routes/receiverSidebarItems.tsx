import Parcels from "@/components/modules/Receiver/Parcels";
import { ISidebarItem } from "@/types";

export const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "Parcel Management",
    items: [
      {
        title: "My Parcels",
        url: "/receiver/parcels",
        component: Parcels,
      },
    ],
  },
];
