"use client";

import { Button } from "@/components/ui/button";
import React from "react";


export function Layout35() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-md">
          <p className="mb-3 font-semibold md:mb-4">Engagement</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Challenges Influencers Face with Engagement
          </h2>
          <p className="text-medium">
            Social media influencers often struggle to maintain meaningful
            interactions with their followers. The sheer volume of messages and
            comments can be overwhelming, leading to missed opportunities for
            connection.
          </p>
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
      </div>
    </section>
  );
}
