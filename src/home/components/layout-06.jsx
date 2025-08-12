"use client";

import React from "react";

export function Layout6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <img
              src="/images/AdobeStock_286505173.jpeg"
              className="w-full rounded-image object-cover"
              alt="Professional influencer marketing and engagement tools"
            />
          </div>
          <div>
            <h1 className="heading-h3 mb-5 font-bold md:mb-6">
              Boost Your Engagement with Our Powerful Influencer Marketing Tool
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              Our application empowers influencers by providing data-driven
              insights and engagement strategies. Watch your audience grow and
              interact like never before.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Engagement Insights
                </h6>
                <p>
                  Analyze your audience's behavior to tailor your content
                  effectively.
                </p>
              </div>
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Content Strategies
                </h6>
                <p>
                  Create targeted campaigns that resonate with your followers
                  and drive engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
