"use client";

import React from "react";

export function Layout6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="heading-h3 mb-5 font-bold md:mb-6">
              Unlock Your Potential: Boost Engagement and Grow Your Influence
              Effortlessly
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              Our application empowers influencers to elevate their engagement
              rates and expand their audience. Experience seamless growth with
              tools designed for your success.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Engagement Boost
                </h6>
                <p>
                  Transform your interactions and watch your community flourish
                  with every post.
                </p>
              </div>
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Growth Tools
                </h6>
                <p>
                  Utilize advanced features to attract and retain a loyal
                  following effortlessly.
                </p>
              </div>
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
