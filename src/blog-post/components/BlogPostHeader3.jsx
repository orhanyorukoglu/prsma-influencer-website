"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { FacebookLogo, Link, LinkedinLogo, XLogo } from "@/components/relume-icons";

export function BlogPostHeader3() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid gap-x-20 gap-y-12 md:grid-cols-[.75fr_1fr]">
          <div className="mx-auto flex size-full max-w-lg flex-col items-start justify-start">
            <Breadcrumb className="mb-6 flex w-full items-center md:mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Insights</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="heading-h2 mb-8 font-bold md:mb-10 lg:mb-12">
              Boost Your Engagement: Tips for Influencers
            </h1>
            <div className="flex size-full flex-col items-start justify-start">
              <div className="mb-6 flex items-center md:mb-8">
                <div>
                  <h6 className="font-semibold">
                    <span className="font-normal">By</span> Jane Doe
                  </h6>
                  <div className="mt-1 flex">
                    <p className="text-small">11 Jan 2023</p>
                    <span className="mx-2">•</span>
                    <p className="text-small">5 min read</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-regular font-semibold">Share this post</p>
                <div className="mt-3 grid grid-flow-col grid-cols-[max-content] items-start gap-2 md:mt-4">
                  <a
                    href="#"
                    className="rounded-[1.25rem] bg-scheme-foreground p-1"
                  >
                    <Link className="text-scheme-text size-6" />
                  </a>
                  <a
                    href="#"
                    className="rounded-[1.25rem] bg-scheme-foreground p-1"
                  >
                    <LinkedinLogo className="text-scheme-text size-6" />
                  </a>
                  <a
                    href="#"
                    className="rounded-[1.25rem] bg-scheme-foreground p-1"
                  >
                    <XLogo className="text-scheme-text size-6 p-0.5" />
                  </a>
                  <a
                    href="#"
                    className="rounded-[1.25rem] bg-scheme-foreground p-1"
                  >
                    <FacebookLogo className="text-scheme-text size-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full overflow-hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="aspect-[3/2] size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
