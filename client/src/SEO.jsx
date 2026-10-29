
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const site = "https://www.indiaesgalliance.com";

const pages = {
  "/": {
    title: "India ESG Alliance",
    description:
      "Discover India ESG Alliance and its work in ESG, sustainability and responsible business growth in India.",
  },
  "/home": {
    title: "India ESG Alliance",
    description:
      "Discover India ESG Alliance and its work in ESG, sustainability and responsible business growth in India.",
  },
  "/about": {
    title: "About India ESG Alliance | Our Mission",
    description:
      "Learn about India ESG Alliance, its mission, approach and commitment to advancing ESG and sustainability in India.",
  },
  "/businessopportunity": {
    title: "Business Opportunities | India ESG Alliance",
    description:
      "Explore business opportunities, initiatives and engagement possibilities through India ESG Alliance.",
  },
  "/solutions": {
    title: "ESG & Sustainability Solutions | India ESG Alliance",
    description:
      "Explore India ESG Alliance's solutions and initiatives for environmental, social and governance practices.",
  },
  "/knowledgehub": {
    title: "ESG Knowledge Hub | India ESG Alliance",
    description:
      "Explore ESG knowledge, sustainability resources and insights to support responsible business practices in India.",
  },
  "/contactus": {
    title: "Contact India ESG Alliance | Get in Touch",
    description:
      "Contact India ESG Alliance to discuss ESG initiatives, sustainability, partnerships and enquiries.",
  },
  "/careers": {
    title: "Careers | India ESG Alliance",
    description:
      "Explore career opportunities and ways to contribute to India ESG Alliance's work in ESG and sustainability.",
  },
  "/events": {
    title: "ESG Events & Activities | India ESG Alliance",
    description:
      "Discover events, activities and engagement opportunities related to ESG and sustainability.",
  },
  "/upcomingevents": {
    title: "Upcoming ESG Events | India ESG Alliance",
    description:
      "Find upcoming India ESG Alliance events, workshops and sustainability-related activities.",
  },
};

export default function SEO() {
  const { pathname } = useLocation();
  const page = pages[pathname];

  // Don't accidentally index unknown or unconfigured routes.
  if (!page) {
    return (
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
    );
  }

  const canonical = `${site}${pathname === "/" ? "" : pathname}`;

  return (
    <Helmet>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="India ESG Alliance" />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
    </Helmet>
  );
}
