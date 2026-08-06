import type { Metadata } from "next";
import HomeContent from "./components/home-content";

export const metadata: Metadata = {
  title: "Premium Event Production & Equipment in Lagos, Nigeria",
  description:
    "Cytech World Communication creates premium event experiences through world-class production, equipment rental, and reliable technical support. Serving Lagos and Nigeria since 2003.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeContent />;
}
