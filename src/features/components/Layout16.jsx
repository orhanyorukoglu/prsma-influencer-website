"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, RelumeIcon } from "@/components/relume-icons";

export function Layout16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Engagement</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              Unlock Your Engagement Potential with Analytics
            </h1>
            <p className="text-medium mb-5 md:mb-6">
              Our application provides influencers with powerful analytics tools
              designed to boost engagement. By understanding audience behavior
              and preferences, you can tailor your content for maximum impact.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <span>Gain insights to enhance your content strategy.</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <span>Track performance metrics to optimize your posts.</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <span>Engage your audience with data-driven decisions.</span>
              </li>
            </ul>
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
