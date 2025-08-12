"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React from "react";

export function Faq2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Find answers to your most common questions about our services and
            support.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-medium md:py-5">
              How to contact support?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              You can reach our support team by clicking the 'Contact' button on
              our website. We’re available 24/7 to assist you. Your inquiries
              are important to us, and we aim to respond promptly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-medium md:py-5">
              What is the response time?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our typical response time is within 24 hours. However, during peak
              times, it may take a bit longer. We appreciate your patience and
              assure you that we will get back to you as soon as possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-medium md:py-5">
              Can I change my plan?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can change your subscription plan at any time through
              your account settings. If you need assistance, our support team is
              here to help. Simply reach out to us for guidance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-medium md:py-5">
              Is there a trial?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, we offer a free trial for new users. This allows you to
              explore our features without commitment. Sign up today to
              experience the benefits firsthand!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-medium md:py-5">
              How do I cancel?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              You can cancel your subscription at any time through your account
              settings. If you need help, our support team is ready to assist
              you. We value your feedback, so please let us know your reasons
              for leaving.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Still have questions?
          </h4>
          <p className="text-medium">We're here to help!</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
