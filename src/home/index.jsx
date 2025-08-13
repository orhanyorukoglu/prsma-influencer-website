import React from "react";
import { Navbar1 } from "./components/navbar-01";
import { Header1 } from "./components/header-01";
import { Layout6 } from "./components/layout-06";
import { Layout252 } from "./components/layout-252";
import { Layout4 } from "./components/layout-04";
import { Testimonial5 } from "./components/testimonial-05";
import { Cta1 } from "./components/cta-01";
import { Team1 } from "./components/team-01";
import { Contact1 } from "./components/contact-01";
import { Pricing25 } from "./components/pricing-25";


export default function Home() {
  return (
    <div>
      <Navbar1 />
      <Header1 />
      <Layout6 />
      <Layout252 />
      <Layout4 />
      <Testimonial5 />
      <Cta1 />
      <Team1 />
      <Contact1 />
      <Pricing25 />
    </div>
  );
}
