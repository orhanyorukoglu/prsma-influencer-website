"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "@/components/relume-icons";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer5() {
  const formState = useForm();
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="mb-12 block items-start justify-between md:mb-18 lg:mb-20 lg:flex">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-medium font-semibold">Subscribe to updates</h1>
            <p>Stay informed with our latest news and tips.</p>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <form
              className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
              onSubmit={formState.handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder="Your email here"
                value={formState.email}
                onChange={formState.handleSetEmail}
              />
              <Button title="Subscribe" variant="secondary" size="sm">
                Subscribe
              </Button>
            </form>
            <p className="text-tiny">
              By subscribing you agree to our Privacy Policy.
            </p>
          </div>
        </div>
        <div className="mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          <a
            href="#"
            className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
          >
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
            />
          </a>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Useful Links</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  About Us
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Contact Us
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Blog Posts
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Help Center
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Follow Us</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Facebook Page
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Twitter Feed
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Instagram Profile
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  LinkedIn Page
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Resources</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  User Guide
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Case Studies
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Webinars
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  E-books
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Templates
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Legal</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Privacy Policy
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Terms of Use
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Cookie Policy
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Accessibility
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Site Map
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Contact</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Get in Touch
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Support Center
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Live Chat
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Feedback Form
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Report Issue
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col-reverse items-start pt-6 pb-4 md:justify-start md:pt-8 md:pb-0 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              <p className="mt-8 md:mt-0">
                © 2024 Relume. All rights reserved.
              </p>
              <a href="#" className="underline">
                Privacy Policy
              </a>
              <a href="#" className="underline">
                Terms of Service
              </a>
              <a href="#" className="underline">
                Cookies Settings
              </a>
            </div>
          </div>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            <a href="#">
              <FacebookLogo className="size-6 text-scheme-text" />
            </a>
            <a href="#">
              <InstagramLogo className="size-6 text-scheme-text" />
            </a>
            <a href="#">
              <XLogo className="size-6 p-0.5 text-scheme-text" />
            </a>
            <a href="#">
              <LinkedinLogo className="size-6 text-scheme-text" />
            </a>
            <a href="#">
              <YoutubeLogo className="size-6 text-scheme-text" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
