import { Mail, Phone, Truck } from "lucide-react";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer id="contact" className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="font-extrabold tracking-tight">SwiftParcel</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Reliable parcel delivery for businesses and individuals across
              Bangladesh.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" /> +880 13 1234 5678
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" /> support@swiftparcel.com
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-4">
            <div>
              <div className="font-medium">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#services" className="hover:text-primary">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#rates" className="hover:text-primary">
                    Rates
                  </a>
                </li>
                <li>
                  <a href="#coverage" className="hover:text-primary">
                    Coverage
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Support</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Claims</li>
                <li>Service Updates</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Legal</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Prohibited Items</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Follow</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground md:flex-row">
          <div>
            © {new Date().getFullYear()} SwiftParcel Logistics Ltd. All rights
            reserved.
          </div>
          <div>Made with Next.js & shadcn/ui</div>
        </div>
      </div>
    </footer>
  );
}
