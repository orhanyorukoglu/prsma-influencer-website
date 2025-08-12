"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "@/components/relume-icons";

export function Blog2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h1 className="heading-h1 mb-5 font-bold md:mb-6">
              Empower Your Influence Today
            </h1>
            <p className="text-medium">
              Discover insights to elevate your influencer journey.
            </p>
          </div>
        </div>
        <Tabs defaultValue="view-all" className="flex flex-col justify-start">
          <TabsList className="mb-12 ml-[-5vw] scrollbar-none flex w-screen items-center justify-start overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            <TabsTrigger
              value="view-all"
              className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
            >
              View all
            </TabsTrigger>
            <TabsTrigger
              value="category-one"
              className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
            >
              Social Media
            </TabsTrigger>
            <TabsTrigger
              value="category-two"
              className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
            >
              Content Strategy
            </TabsTrigger>
            <TabsTrigger
              value="category-three"
              className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
            >
              Engagement Tips
            </TabsTrigger>
            <TabsTrigger
              value="category-four"
              className="rounded-button px-4 py-2 data-[state=inactive]:border-transparent"
            >
              Brand Partnerships
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="view-all"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Category</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Maximize Your Engagement Efforts
                  </h2>
                </a>
                <p>
                  Learn how to boost your engagement with proven strategies.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Tips</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Creating Authentic Connections
                  </h2>
                </a>
                <p>
                  Explore ways to build genuine relationships with your
                  audience.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Insights</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Leveraging Analytics for Growth
                  </h2>
                </a>
                <p>
                  Use analytics to inform your content strategy and drive
                  results.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Growth</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    The Power of Collaboration
                  </h2>
                </a>
                <p>
                  Discover how collaborations can amplify your reach and
                  engagement.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Collaboration</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Crafting Compelling Content
                  </h2>
                </a>
                <p>
                  Learn tips for creating engaging content that resonates with
                  your audience.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Content</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Building Your Brand Identity
                  </h2>
                </a>
                <p>
                  Establish a strong brand identity to stand out in the
                  influencer space.
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
          </TabsContent>
          <TabsContent
            value="category-one"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Category</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Maximize Your Engagement Efforts
                  </h2>
                </a>
                <p>
                  Learn how to boost your engagement with proven strategies.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Tips</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Creating Authentic Connections
                  </h2>
                </a>
                <p>
                  Explore ways to build genuine relationships with your
                  audience.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Insights</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Leveraging Analytics for Growth
                  </h2>
                </a>
                <p>
                  Use analytics to inform your content strategy and drive
                  results.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Growth</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    The Power of Collaboration
                  </h2>
                </a>
                <p>
                  Discover how collaborations can amplify your reach and
                  engagement.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Collaboration</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Crafting Compelling Content
                  </h2>
                </a>
                <p>
                  Learn tips for creating engaging content that resonates with
                  your audience.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Content</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Building Your Brand Identity
                  </h2>
                </a>
                <p>
                  Establish a strong brand identity to stand out in the
                  influencer space.
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
          </TabsContent>
          <TabsContent
            value="category-two"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Category</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Maximize Your Engagement Efforts
                  </h2>
                </a>
                <p>
                  Learn how to boost your engagement with proven strategies.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Tips</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Creating Authentic Connections
                  </h2>
                </a>
                <p>
                  Explore ways to build genuine relationships with your
                  audience.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Insights</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Leveraging Analytics for Growth
                  </h2>
                </a>
                <p>
                  Use analytics to inform your content strategy and drive
                  results.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Growth</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    The Power of Collaboration
                  </h2>
                </a>
                <p>
                  Discover how collaborations can amplify your reach and
                  engagement.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Collaboration</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Crafting Compelling Content
                  </h2>
                </a>
                <p>
                  Learn tips for creating engaging content that resonates with
                  your audience.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Content</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Building Your Brand Identity
                  </h2>
                </a>
                <p>
                  Establish a strong brand identity to stand out in the
                  influencer space.
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
          </TabsContent>
          <TabsContent
            value="category-three"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Category</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Maximize Your Engagement Efforts
                  </h2>
                </a>
                <p>
                  Learn how to boost your engagement with proven strategies.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Tips</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Creating Authentic Connections
                  </h2>
                </a>
                <p>
                  Explore ways to build genuine relationships with your
                  audience.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Insights</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Leveraging Analytics for Growth
                  </h2>
                </a>
                <p>
                  Use analytics to inform your content strategy and drive
                  results.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Growth</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    The Power of Collaboration
                  </h2>
                </a>
                <p>
                  Discover how collaborations can amplify your reach and
                  engagement.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Collaboration</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Crafting Compelling Content
                  </h2>
                </a>
                <p>
                  Learn tips for creating engaging content that resonates with
                  your audience.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Content</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Building Your Brand Identity
                  </h2>
                </a>
                <p>
                  Establish a strong brand identity to stand out in the
                  influencer space.
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
          </TabsContent>
          <TabsContent
            value="category-four"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Category</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Maximize Your Engagement Efforts
                  </h2>
                </a>
                <p>
                  Learn how to boost your engagement with proven strategies.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Tips</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Creating Authentic Connections
                  </h2>
                </a>
                <p>
                  Explore ways to build genuine relationships with your
                  audience.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Insights</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Leveraging Analytics for Growth
                  </h2>
                </a>
                <p>
                  Use analytics to inform your content strategy and drive
                  results.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Growth</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    The Power of Collaboration
                  </h2>
                </a>
                <p>
                  Discover how collaborations can amplify your reach and
                  engagement.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Collaboration</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Crafting Compelling Content
                  </h2>
                </a>
                <p>
                  Learn tips for creating engaging content that resonates with
                  your audience.
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
              <div className="flex size-full flex-col items-start justify-start">
                <a href="#" className="mb-6 w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </a>
                <div className="mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Content</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h2 className="heading-h5 font-bold">
                    Building Your Brand Identity
                  </h2>
                </a>
                <p>
                  Establish a strong brand identity to stand out in the
                  influencer space.
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
