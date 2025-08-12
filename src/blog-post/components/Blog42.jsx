"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "@/components/relume-icons";

export function Blog42() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Blog</p>
              <h2 className="heading-h2 mb-3 font-bold md:mb-4">
                Explore Our Latest Insights
              </h2>
              <p className="text-medium">
                Discover tips to boost your social media engagement.
              </p>
            </div>
          </div>
          <div className="hidden md:flex">
            <Button variant="secondary">View all</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full rounded-image object-cover"
              />
            </a>
            <div className="mb-4 flex w-full items-center justify-start">
              <Badge className="mr-4">Marketing</Badge>
              <p className="text-small inline font-semibold">5 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="heading-h5 font-bold">
                How to Engage Your Audience Effectively
              </h2>
            </a>
            <p>
              Learn strategies to connect with your followers and increase
              interaction.
            </p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full rounded-image object-cover"
              />
            </a>
            <div className="mb-4 flex w-full items-center justify-start">
              <Badge className="mr-4">Influencers</Badge>
              <p className="text-small inline font-semibold">5 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="heading-h5 font-bold">
                Top Tools for Influencer Marketing Success
              </h2>
            </a>
            <p>
              Explore essential tools that enhance your influencer marketing
              efforts.
            </p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full rounded-image object-cover"
              />
            </a>
            <div className="mb-4 flex w-full items-center justify-start">
              <Badge className="mr-4">Engagement</Badge>
              <p className="text-small inline font-semibold">5 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="heading-h5 font-bold">
                Boost Your Engagement with These Tips
              </h2>
            </a>
            <p>
              Simple yet effective techniques to enhance your online presence.
            </p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
        </div>
        <Button className="mt-10 md:hidden" variant="secondary">
          View all
        </Button>
      </div>
    </section>
  );
}
