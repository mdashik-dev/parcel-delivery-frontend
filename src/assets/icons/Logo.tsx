import { Badge } from "@/components/ui/badge";
import { Truck } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Truck className="h-5 w-5 text-primary" />
      <span className="font-extrabold tracking-tight text-black dark:text-white">
        SwiftParcel
      </span>
      <Badge variant="secondary" className="ml-2">
        BD
      </Badge>
    </div>
  );
}
