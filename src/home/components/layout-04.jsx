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
            <p className="mb-3 font-semibold md:mb-4">Engage</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              Unlock Your Influence with Our Powerful Tools
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              Our application empowers influencers to enhance their engagement
              effortlessly. Experience a surge in audience interaction and
              growth.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Boost Engagement
                </h6>
                <p>
                  Transform your content strategy and captivate your audience
                  like never before.
                </p>
              </div>
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Gain Insights
                </h6>
                <p>
                  Access analytics that help you understand what resonates with
                  your followers.
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
              src="/images/Social-Media-Selfie.jpeg"
              className="w-full rounded-image object-cover"
              alt="Influencer taking a selfie with social media engagement"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
