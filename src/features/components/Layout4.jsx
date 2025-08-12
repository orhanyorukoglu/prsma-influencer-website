"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "@/components/relume-icons";

export function Layout4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Schedule</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              Effortless Content Scheduling for Influencers
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              Our Content Scheduling feature simplifies the planning process,
              allowing influencers to organize their posts efficiently. With
              just a few clicks, you can schedule content to go live at optimal
              times, maximizing engagement.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Easy Planning
                </h6>
                <p>
                  Plan your content in advance and never miss a posting
                  opportunity.
                </p>
              </div>
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Boost Engagement
                </h6>
                <p>
                  Reach your audience when they’re most active for better
                  interaction.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Sign Up"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
