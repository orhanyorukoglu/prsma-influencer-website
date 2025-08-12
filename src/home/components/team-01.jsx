"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { DribbbleLogo, LinkedinLogo, XLogo } from "@/components/relume-icons";

export function Team1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Dedicated</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">Our Team</h2>
          <p className="text-medium">
            Meet the passionate experts behind our innovative platform.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="/images/alex-johnson.png"
                alt="Alex Johnson - Product Manager"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Alex Johnson</h5>
              <h6 className="text-medium">Product Manager</h6>
            </div>
            <p>
              Alex drives product strategy, ensuring user needs are met with
              innovative solutions.
            </p>
            
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="/images/jamie-lee.png"
                alt="Jamie Lee - Marketing Director"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Jamie Lee</h5>
              <h6 className="text-medium">Marketing Director</h6>
            </div>
            <p>
              Jamie crafts compelling campaigns that resonate with our target
              audience.
            </p>
            
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="/images/taylor-smith.png"
                alt="Taylor Smith - Lead Developer"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Taylor Smith</h5>
              <h6 className="text-medium">Lead Developer</h6>
            </div>
            <p>
              Taylor builds robust features that enhance user engagement and
              experience.
            </p>
            
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="/images/jordan-brown.png"
                alt="Jordan Brown - UX Designer"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Jordan Brown</h5>
              <h6 className="text-medium">UX Designer</h6>
            </div>
            <p>
              Jordan designs intuitive interfaces that delight users and
              simplify navigation.
            </p>
            
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="/images/morgan-white.png"
                alt="Morgan White - Data Analyst"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Morgan White</h5>
              <h6 className="text-medium">Data Analyst</h6>
            </div>
            <p>
              Morgan analyzes user data to drive insights and improve our
              platform.
            </p>
            
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
              <img
                src="/images/casey-green.png"
                alt="Casey Green - Customer Support"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Casey Green</h5>
              <h6 className="text-medium">Customer Support</h6>
            </div>
            <p>
              Casey ensures our users receive prompt assistance and support
              whenever needed.
            </p>
            
          </div>
          
          
        </div>
        <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">We're hiring!</h4>
          <p className="text-medium">
            Join our talented team and make an impact.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 text-center md:mt-8">
            <Button title="Open positions" variant="secondary">
              Open positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
