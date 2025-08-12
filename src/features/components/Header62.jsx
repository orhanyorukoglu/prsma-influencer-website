"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header62() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Engage</p>
        <h1 className="heading-h1 mb-5 font-bold md:mb-6">
          Unlock Your Potential
        </h1>
        <p className="text-medium">
          Explore our innovative features designed to elevate your influence and
          boost audience engagement effortlessly.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Learn More">Learn More</Button>
          <Button title="Sign Up" variant="secondary">
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
}
