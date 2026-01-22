"use client"

import { SectionReveal } from "@/components/ui/section-reveal"
import { MapPin, Phone } from "lucide-react"

const branches = [
  {
    city: "Riyadh",
    address: "Exit 14 – Al Rabwah",
    phone: "920003401",
    isHQ: true,
  },
  {
    city: "Jeddah",
    address: "Prince Sultan Street, Al Rawdah District",
    phone: "920003401",
    isHQ: false,
  },
  {
    city: "Dammam",
    address: "King Fahd Road, Al Faisaliah District",
    phone: "920003401",
    isHQ: false,
  },
  {
    city: "Makkah",
    address: "Al Aziziah District",
    phone: "920003401",
    isHQ: false,
  },
]

export function ContactBranches() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Our Branches</h2>
          <p className="text-muted-foreground text-lg">Find the nearest Amaken office to you</p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch, index) => (
            <SectionReveal key={branch.city} delay={index * 0.1}>
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-colors">
                {branch.isHQ && (
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded mb-3">
                    Headquarters
                  </span>
                )}
                <h3 className="text-lg font-semibold text-foreground mb-3">{branch.city}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <a href={`tel:${branch.phone}`} className="hover:text-primary transition-colors">
                      {branch.phone}
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
