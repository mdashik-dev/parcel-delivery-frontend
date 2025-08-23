"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Truck,
  Package,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
  ShieldCheck,
  CreditCard,
  Globe,
} from "lucide-react";

/**
 * SwiftParcel — Parcel Delivery Service Homepage
 * Built purely with shadcn/ui components and Tailwind tokens
 * Dark/Light ready via bg-background & text-foreground
 */
export default function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero with Tracking & Quick Quote */}
      <section className="relative border-b">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              Same‑day & Next‑day parcel delivery across Bangladesh
            </motion.h1>
            <p className="mt-5 max-w-prose text-lg text-muted-foreground">
              Door‑to‑door pickup, live tracking, COD support, and reliable
              delivery to all 64 districts. Built for e‑commerce, SMEs, and
              personal sends.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#book" className="inline-flex items-center gap-2">
                  Book a Pickup <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#rates">Check Rates</a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="">
                24/7 Support
              </Badge>
              <Badge variant="outline">Real‑time Tracking</Badge>
              <Badge>Nationwide Coverage</Badge>
            </div>
          </div>

          {/* Quote/Tracking Card */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Track or Get a Quick Quote</CardTitle>
              <CardDescription>
                Enter tracking ID or calculate estimate in seconds.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="track">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="track">Track</TabsTrigger>
                  <TabsTrigger value="quote">Quote</TabsTrigger>
                </TabsList>
                <TabsContent value="track" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="trackId">Tracking ID</Label>
                    <Input id="trackId" placeholder="e.g. SPXBD-845129" />
                  </div>
                  <Button className="w-full">Track Parcel</Button>
                </TabsContent>
                <TabsContent value="quote" className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>From</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Dhaka" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>To</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Chattogram" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Weight</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="0.5 kg" />
                        </SelectTrigger>
                        <SelectContent>
                          {weights.map((w) => (
                            <SelectItem key={w} value={w}>
                              {w}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Service</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Next‑day" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="same">Same‑day</SelectItem>
                          <SelectItem value="next">Next‑day</SelectItem>
                          <SelectItem value="standard">
                            Standard (48‑72h)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="w-full">Calculate</Button>
                </TabsContent>
              </Tabs>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4" />
                <span>Insured shipments up to ৳50,000</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Delivery that fits your schedule
          </h2>
          <p className="mt-3 text-muted-foreground">
            Flexible options for businesses and individuals—transparent pricing,
            reliable SLAs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="rounded-2xl">
            <CardHeader>
              <Clock className="h-10 w-10 text-primary" />
              <CardTitle>Same‑day (Metro)</CardTitle>
              <CardDescription>
                Pickup before 12 PM, delivery by 8 PM in Dhaka & Chattogram
                city.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <Package className="h-10 w-10 text-primary" />
              <CardTitle>Next‑day Nationwide</CardTitle>
              <CardDescription>
                Door‑to‑door to all districts with SMS/Email updates.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CreditCard className="h-10 w-10 text-primary" />
              <CardTitle>COD & Returns</CardTitle>
              <CardDescription>
                Cash on Delivery remittance next business day. Easy returns &
                claims.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="bg-muted/30 dark:bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Nationwide coverage
              </h2>
              <p className="mt-3 text-muted-foreground">
                We deliver to 64 districts and 495+ upazilas. Same‑day in major
                metros, next‑day across divisional cities, and standard service
                beyond.
              </p>
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Dhaka, Gazipur, Narayanganj,
                  Savar
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Chattogram, Cumilla, Cox's
                  Bazar
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Sylhet, Moulvibazar, Habiganj
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Rajshahi, Bogura, Rangpur
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Khulna, Jashore, Barishal,
                  Patuakhali
                </div>
              </div>
            </div>
            <Card className="rounded-2xl overflow-hidden">
              <div className="aspect-video w-full bg-muted">
                <img
                  src="https://marketbangla.com/static/images/mbd21/donation/Screenshot_20.jpg"
                  alt="Bangladesh coverage map placeholder"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="text-sm text-muted-foreground">
                Major hubs in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, and
                Rangpur.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rates */}
      <section
        id="rates"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Simple, transparent rates
          </h2>
          <p className="mt-3 text-muted-foreground">
            No hidden fees. Bulk discounts available for merchants shipping 100+
            parcels/month.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricing.map((p) => (
            <Card key={p.tier} className="rounded-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{p.tier}</CardTitle>
                  {p.popular && <Badge>Popular</Badge>}
                </div>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-extrabold">
                  ৳{p.price}
                  <span className="text-base font-medium text-muted-foreground">
                    /parcel
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <ShieldCheck className="h-4 w-4" /> {f}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">Choose {p.tier}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 dark:bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="rounded-2xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={t.avatar} />
                      <AvatarFallback>{t.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{t.name}</CardTitle>
                      <CardDescription>{t.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  “{t.quote}”
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Pickup */}
      <section
        id="book"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Book a pickup in under 60 seconds
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fill in the details and our rider will arrive at your doorstep.
              You’ll get a tracking ID instantly.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Sender Name</Label>
                <Input placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input placeholder="01XXXXXXXXX" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Pickup Address</Label>
                <Input placeholder="House, Road, Area, City" />
              </div>
              <div className="space-y-2">
                <Label>City</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Dhaka" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Parcel Weight</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="0.5 kg" />
                  </SelectTrigger>
                  <SelectContent>
                    {weights.map((w) => (
                      <SelectItem key={w} value={w}>
                        {w}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Notes (optional)</Label>
                <Input placeholder="e.g., fragile, deliver after 5 PM" />
              </div>
              <Button className="sm:col-span-2">Confirm Pickup</Button>
            </div>
          </div>

          <Card className="rounded-2xl self-start">
            <CardHeader>
              <CardTitle>How it works</CardTitle>
              <CardDescription>
                Three simple steps to ship with confidence.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex items-start gap-3">
                <Package className="h-5 w-5 text-primary mt-1" />
                <div>
                  <div className="font-medium">1) Request pickup</div>
                  <div className="text-sm text-muted-foreground">
                    Create an order and get a tracking ID instantly.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-primary mt-1" />
                <div>
                  <div className="font-medium">2) Handover to rider</div>
                  <div className="text-sm text-muted-foreground">
                    Our rider verifies parcel and secures packaging if needed.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-primary mt-1" />
                <div>
                  <div className="font-medium">3) Track & get paid</div>
                  <div className="text-sm text-muted-foreground">
                    Real‑time updates. COD remitted next business day.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}

const cities = [
  "Dhaka",
  "Chattogram",
  "Sylhet",
  "Rajshahi",
  "Khulna",
  "Rangpur",
  "Barishal",
  "Cumilla",
  "Gazipur",
  "Narayanganj",
];

const weights = ["0.5 kg", "1 kg", "2 kg", "5 kg", "10 kg"];

const pricing = [
  {
    tier: "Metro",
    desc: "Inside Dhaka city (up to 1 kg)",
    price: 79,
    popular: true,
    features: ["Same‑day option", "Free re‑attempt", "COD available"],
  },
  {
    tier: "Inter‑City",
    desc: "Dhaka ↔ Major cities (up to 1 kg)",
    price: 129,
    popular: false,
    features: ["Next‑day delivery", "Live tracking", "SMS/Email alerts"],
  },
  {
    tier: "Nationwide",
    desc: "All districts & upazilas (up to 1 kg)",
    price: 159,
    popular: false,
    features: ["Standard 48‑72h", "Insurance included", "Easy returns"],
  },
];

const testimonials = [
  {
    name: "Anika Rahman",
    role: "Owner, Boutique Dhaka",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    initials: "AR",
    quote:
      "SwiftParcel cut our return rate and delivers COD on time—sales went up 28% in two months.",
  },
  {
    name: "Tanvir Hasan",
    role: "Ops Lead, GadgetMart BD",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    initials: "TH",
    quote:
      "Their tracking and support team are the best we’ve used. Couriers are professional and on time.",
  },
  {
    name: "Sadia Akter",
    role: "Home seller",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    initials: "SA",
    quote:
      "Booking a pickup is super fast. I love the transparent rates and real‑time updates.",
  },
];
