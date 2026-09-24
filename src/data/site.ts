import type { ImageMetadata } from "astro";

import serviceKitchen from "@/assets/images/service-kitchen.jpg";
import serviceBathroom from "@/assets/images/service-bathroom.jpg";
import serviceBasement from "@/assets/images/service-basement.jpg";
import serviceInterior from "@/assets/images/service-interior.jpg";
import serviceCarpentry from "@/assets/images/service-carpentry.jpg";
import serviceFullHome from "@/assets/images/service-full-home.jpg";
import cityToronto from "@/assets/images/city-toronto.jpg";
import cityVancouver from "@/assets/images/city-vancouver.jpg";
import cityCalgary from "@/assets/images/city-calgary.jpg";
import cityOttawa from "@/assets/images/city-ottawa.jpg";
import teamFounder from "@/assets/images/team-founder.jpg";
import teamDesigner from "@/assets/images/team-designer.jpg";
import teamManager from "@/assets/images/team-manager.jpg";
import workKitchen from "@/assets/images/work-kitchen.jpg";
import workBathroom from "@/assets/images/work-bathroom.jpg";
import workBasement from "@/assets/images/work-basement.jpg";
import workLiving from "@/assets/images/work-living.jpg";

export const site = {
  name: "Hearthstone Home Studio",
  url: "https://hearthstonehomestudio.ca",
  description:
    "Hearthstone Home Studio designs and builds premium kitchen, bathroom, basement, and whole-home renovations for homeowners across Canada.",
  phone: { display: "+1 (XXX) XXX-XXXX", href: "tel:+10000000000" },
  email: "hello@hearthstonehomestudio.ca",
  address: "Street address, Toronto, ON",
  hours: "Mon–Fri, 8am–6pm",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "250+", label: "Completed projects" },
  { value: "15+", label: "Years experience" },
  { value: "100%", label: "Client satisfaction" },
  { value: "50+", label: "Custom renovations" },
];

type Service = { title: string; description: string; image: ImageMetadata; alt: string };

export const services: Service[] = [
  {
    title: "Kitchen Renovations",
    description: "Layouts that work the way you cook, with cabinetry, stone, and lighting chosen to last.",
    image: serviceKitchen,
    alt: "Bright kitchen with white cabinets and wood floors",
  },
  {
    title: "Bathroom Remodeling",
    description: "Spa-calm bathrooms with waterproofing done right behind every tile.",
    image: serviceBathroom,
    alt: "Contemporary bathroom with a round soaking tub and wood vanity",
  },
  {
    title: "Basement Finishing",
    description: "Warm, dry, fully permitted lower levels for family rooms, suites, or a home gym.",
    image: serviceBasement,
    alt: "Open basement room with neutral walls ready for finishing",
  },
  {
    title: "Interior Design",
    description: "Finishes, furniture, and colour planned alongside construction, not after it.",
    image: serviceInterior,
    alt: "Minimalist living room with white sofas and full-length curtains",
  },
  {
    title: "Custom Carpentry",
    description: "Built-ins, millwork, and trim made to measure by our own finish carpenters.",
    image: serviceCarpentry,
    alt: "Carpenter nailing a wooden plank in the workshop",
  },
  {
    title: "Full Home Renovation",
    description: "One team from demolition to the final walkthrough, on one schedule and one contract.",
    image: serviceFullHome,
    alt: "Home interior under renovation with exposed wooden beams",
  },
];

type City = { name: string; province: string; address: string; image: ImageMetadata; alt: string };

export const cities: City[] = [
  { name: "Toronto", province: "Ontario", address: "Street address, Toronto, ON", image: cityToronto, alt: "Toronto skyline with the CN Tower" },
  { name: "Vancouver", province: "British Columbia", address: "Street address, Vancouver, BC", image: cityVancouver, alt: "Vancouver skyline with mountains behind the marina" },
  { name: "Calgary", province: "Alberta", address: "Street address, Calgary, AB", image: cityCalgary, alt: "Calgary downtown skyline framed by trees" },
  { name: "Ottawa", province: "Ontario", address: "Street address, Ottawa, ON", image: cityOttawa, alt: "Parliament Hill in Ottawa" },
];

type Member = { name: string; role: string; image: ImageMetadata; alt: string };

export const team: Member[] = [
  { name: "Daniel Whitmore", role: "Founder", image: teamFounder, alt: "Portrait of Daniel Whitmore" },
  { name: "Priya Anand", role: "Lead Designer", image: teamDesigner, alt: "Portrait of Priya Anand" },
  { name: "Marc Tremblay", role: "Project Manager", image: teamManager, alt: "Portrait of Marc Tremblay on site" },
];

type Work = { title: string; location: string; image: ImageMetadata; alt: string };

export const works: Work[] = [
  { title: "Modern Kitchen Transformation", location: "Toronto, Canada", image: workKitchen, alt: "Kitchen with white marble counters and modern fixtures" },
  { title: "Luxury Bathroom Remodel", location: "Vancouver, Canada", image: workBathroom, alt: "Freestanding white tub in a bathroom with wood accents" },
  { title: "Complete Basement Renovation", location: "Calgary, Canada", image: workBasement, alt: "Basement games room with a pool table and wood panelling" },
  { title: "Living Room & Fireplace", location: "Ottawa, Canada", image: workLiving, alt: "Living room arranged around a modern fireplace" },
];

export const testimonials = [
  { name: "Sarah Mitchell", role: "Homeowner, Toronto", quote: "Exceptional craftsmanship and attention to detail. The kitchen came in on schedule, and the site was tidy every evening." },
  { name: "James Carter", role: "Homeowner, Vancouver", quote: "They caught a plumbing problem before the tile went down and walked us through the fix. That told us everything." },
  { name: "Emily Tran", role: "Homeowner, Calgary", quote: "Our basement is now the room everyone wants to be in. The design team listened to how we actually live." },
  { name: "Robert Chen", role: "Homeowner, Ottawa", quote: "One project manager, one schedule, no surprises on the invoice. I would hire them again tomorrow." },
];

export const faqs = [
  {
    question: "How long does a renovation take?",
    answer: "Most bathrooms take 3–5 weeks and kitchens 6–10 weeks once permits are in hand. Basements and whole-home projects are scheduled individually. You'll get a week-by-week timeline before any work starts.",
  },
  {
    question: "What areas do you serve?",
    answer: "We work across the Greater Toronto Area, Metro Vancouver, Calgary, and Ottawa. If you're just outside these areas, ask us anyway. We take on select projects nearby.",
  },
  {
    question: "Do you provide design consultation?",
    answer: "Yes. Every project starts with an in-home consultation. Our designers then prepare layouts, finish selections, and 3D renderings, so you can see the space before we build it.",
  },
];
