"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Check } from "@/components/relume-icons";

export function Pricing25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Affordable</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">Pricing Plans</h1>
          <p className="text-medium">Choose the perfect plan for your needs.</p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit items-center justify-center rounded-button border border-scheme-border bg-scheme-foreground p-1">
            <TabsTrigger
              value="monthly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:border-0 data-[state=inactive]:bg-transparent"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:border-0 data-[state=inactive]:bg-transparent"
            >
              Yearly
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <Card className="flex h-full flex-col justify-start px-6 py-8 md:p-8">
              <h2 className="heading-h6 mb-1 font-bold">Basic Plan</h2>
              <p>Ideal for beginners</p>
              <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
              <h3 className="heading-h1 my-2 font-bold">$19/mo</h3>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Unlimited Post Scheduling</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Basic Analytics Dashboard</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Community Support Access</p>
                </div>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-start px-6 py-8 md:p-8">
              <h2 className="heading-h6 mb-1 font-bold">Business Plan</h2>
              <p>For growing influencers</p>
              <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
              <h3 className="heading-h1 my-2 font-bold">$29/mo</h3>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Advanced Analytics Tools</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Priority Customer Support</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Collaboration Features</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Customizable Reporting Options</p>
                </div>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-start px-6 py-8 md:p-8">
              <h2 className="heading-h6 mb-1 font-bold">Enterprise Plan</h2>
              <p>For large organizations</p>
              <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
              <h3 className="heading-h1 my-2 font-bold">$49/mo</h3>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Dedicated Account Manager</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Custom Integrations Available</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Enhanced Security Features</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Unlimited User Accounts</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Comprehensive Training Sessions</p>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <Card className="flex h-full flex-col justify-start px-6 py-8 md:p-8">
              <h2 className="heading-h6 mb-1 font-bold">Basic Plan</h2>
              <p>Ideal for beginners</p>
              <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
              <h3 className="heading-h1 my-2 font-bold">$180/yr</h3>
              <p className="font-medium">Save 20%</p>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Unlimited Post Scheduling</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Basic Analytics Dashboard</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Community Support Access</p>
                </div>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-start px-6 py-8 md:p-8">
              <h2 className="heading-h6 mb-1 font-bold">Business Plan</h2>
              <p>For growing influencers</p>
              <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
              <h3 className="heading-h1 my-2 font-bold">$280/yr</h3>
              <p className="font-medium">Save 20%</p>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Advanced Analytics Tools</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Priority Customer Support</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Collaboration Features</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Customizable Reporting Options</p>
                </div>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-start px-6 py-8 md:p-8">
              <h2 className="heading-h6 mb-1 font-bold">Enterprise Plan</h2>
              <p>For large organizations</p>
              <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
              <h3 className="heading-h1 my-2 font-bold">$480/yr</h3>
              <p className="font-medium">Save 20%</p>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Dedicated Account Manager</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Custom Integrations Available</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Enhanced Security Features</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Unlimited User Accounts</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Comprehensive Training Sessions</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
