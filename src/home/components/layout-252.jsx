"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "@/components/relume-icons";

export function Layout252() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="heading-h3 font-bold">
              Unlock Your Potential with Our Innovative Engagement Tools for
              Influencers
            </h2>
          </div>
          <div>
            <p className="text-medium">
              Our platform offers real-time analytics to track your engagement
              metrics. Gain insights into your audience's preferences and
              behavior. Optimize your content strategy with data-driven
              decisions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/food-selfie.jpeg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-bold md:mb-4">
              Enhance Your Brand's Visibility with Tailored Marketing Solutions
            </h3>
            <p>
              Reach a wider audience and boost your brand recognition
              effortlessly.
            </p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <Button
                iconRight={<ChevronRight className="text-scheme-text" />}
                variant="link"
                size="link"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/SM-Shoot.jpeg"
                alt="Instagram feed on mobile phone showing social media content"
                className="rounded-image"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-bold md:mb-4">
              Engage Your Followers with Interactive Content Creation Tools
            </h3>
            <p>
              Create polls, quizzes, and contests to foster community
              interaction.
            </p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <Button
                iconRight={<ChevronRight className="text-scheme-text" />}
                variant="link"
                size="link"
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/makeup.jpeg"
                alt="Creative influencer in purple neon lighting environment"
                className="rounded-image"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-bold md:mb-4">
              Streamline Your Collaboration and Partnerships
            </h3>
            <p>
              Easily manage and track your collaborations for maximum impact.
            </p>
            <div className="mt-6 flex items-center gap-4 md:mt-8">
              <Button
                iconRight={<ChevronRight className="text-scheme-text" />}
                variant="link"
                size="link"
              >
                Discover
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
