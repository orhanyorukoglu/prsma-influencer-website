"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="heading-h1 mb-5 font-bold md:mb-6">
              Elevate Your Influence, Engage Your Audience
            </h1>
            <p className="text-medium">
              Unlock the full potential of your social media presence with our
              innovative SAAS application. Boost engagement, connect with your
              audience, and watch your influence soar.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Sign Up">Sign Up</Button>
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/images/hero.jpeg"
              className="w-full rounded-image object-cover"
              alt="Person using a laptop at a desk, surrounded by digital icons representing social media and engagement, in a bright and modern workspace. The scene conveys a sense of productivity and positive energy. Text on the image reads Elevate Your Influence, Engage Your Audience."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
