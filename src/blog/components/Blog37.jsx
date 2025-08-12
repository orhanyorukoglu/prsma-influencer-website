"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Blog37() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Latest Insights and Trends
            </h2>
            <p className="text-medium">
              Explore our latest blog posts for influencers.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="text-small mr-4 mb-2 inline-block max-w-full font-semibold"
            >
              Tips
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="heading-h5 font-bold">
                Maximize Your Engagement Today
              </h5>
            </a>
            <p>Learn how to boost your audience interaction effectively.</p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-small font-semibold">Jane Doe</h6>
                <div className="flex items-center">
                  <p className="text-small">11 Jan 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-small">5 min read</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="text-small mr-4 mb-2 inline-block max-w-full font-semibold"
            >
              Trends
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="heading-h5 font-bold">2023 Social Media Trends</h5>
            </a>
            <p>Discover the latest trends shaping social media this year.</p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-small font-semibold">John Smith</h6>
                <div className="flex items-center">
                  <p className="text-small">15 Feb 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-small">7 min read</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="text-small mr-4 mb-2 inline-block max-w-full font-semibold"
            >
              Advice
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="heading-h5 font-bold">
                Building Your Brand Online
              </h5>
            </a>
            <p>
              Strategies to enhance your personal brand on social platforms.
            </p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-small font-semibold">Emily White</h6>
                <div className="flex items-center">
                  <p className="text-small">20 Mar 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-small">6 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button
            title="View all"
            variant="secondary"
            className="mt-10 md:mt-14 lg:mt-16"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
