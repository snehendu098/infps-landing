"use client";

import Ballpit from "@/components/Ballpit";
import Navbar from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import MagicBento, { BentoCardProps } from "@/components/MagicBento";
import { motion } from "motion/react";

const aboutCards: BentoCardProps[] = [
  {
    title: "Our Mission",
    description:
      "Empowering businesses to thrive in the digital age through innovation",
    label: "Purpose",
  },
  {
    title: "Innovation First",
    description:
      "Cutting-edge solutions that push boundaries and drive results",
    label: "Approach",
  },
  {
    title: "Global Reach",
    description: "Serving clients across 50+ countries with local expertise",
    label: "Scale",
  },
  {
    title: "Expert Team",
    description: "100+ specialists in engineering, design, and strategy",
    label: "People",
  },
  {
    title: "Trusted Partner",
    description: "500+ successful projects delivered with excellence",
    label: "Track Record",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance to keep your business running",
    label: "Reliability",
  },
];

function ShinyButton({
  children,
  variant,
  className,
}: {
  children: React.ReactNode;
  variant?: "outline" | "default";
  className?: string;
}) {
  return (
    <Button
      variant={variant}
      className={`${className} relative overflow-hidden`}
      asChild
    >
      <motion.button whileHover="hover" initial="initial">
        {children}
        <motion.span
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
          }}
          variants={{
            initial: { x: "-100%" },
            hover: { x: "100%" },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.button>
    </Button>
  );
}

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <Navbar />
      <div className="max-w-6xl w-full mt-30">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "500px",
            maxHeight: "500px",
            width: "100%",
          }}
          className="rounded-3xl border bg-card flex items-center justify-center flex-col"
        >
          <Ballpit
            className="absolute"
            count={100}
            gravity={0.1}
            friction={1}
            wallBounce={1}
            followCursor={false}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="z-20 text-4xl md:text-5xl text-white max-w-2xl text-center font-bold"
          >
            Transform, Innovate & Scale
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="z-20 text-5xl md:text-6xl font-bold mt-2 bg-gradient-to-r from-primary via-amber-300 to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent"
          >
            Your Business
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="z-20 text-muted-foreground text-lg max-w-md text-center mt-4"
          >
            Empowering businesses with cutting-edge solutions for the digital
            age
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center space-x-4 z-20 mt-8"
          >
            <ShinyButton
              variant="outline"
              className="rounded-full px-8 py-6 backdrop-blur-2xl text-lg"
            >
              Explore
            </ShinyButton>
            <ShinyButton className="rounded-full px-8 py-6 text-lg">
              Products
            </ShinyButton>
          </motion.div>
        </div>

        <section className="mt-24 mb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
              Who We Are
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A team of passionate innovators dedicated to transforming your
              vision into reality
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <MagicBento
              cards={aboutCards}
              glowColor="207, 136, 50"
              enableSpotlight
              enableBorderGlow
              enableStars
              clickEffect
              enableMagnetism
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
}
