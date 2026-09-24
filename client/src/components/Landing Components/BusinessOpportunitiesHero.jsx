import React from "react";
import {
  Settings,
  Building2,
  PanelsTopLeft,
  Store,
  Leaf,
  TrendingUp,
  Grid2X2,
  CircleCheck,
  ShieldCheck,
} from "lucide-react";

import "./BusinessOpportunitiesHero.css";

const BusinessOpportunities = () => {
  const cards = [
    {
      label: "ENTERPRISE REACH",
      value: "63M+",
      description:
        "MSMEs in India Empowered across all manufacturing and service clusters",
      footer: "Udyam Unified Framework",
      icon: Building2,
      footerIcon: TrendingUp,
      valueClass: "green-value",
    },
    {
      label: "STRATEGIC PILLARS",
      value: "4 Key",
      description:
        "Strategic Growth Pillars driving access, verification, tender readiness, and bilateral linkages",
      footer: "Comprehensive Interventions",
      icon: PanelsTopLeft,
      footerIcon: Grid2X2,
      valueClass: "orange-value",
    },
    {
      label: "PROCUREMENT HUB",
      value: "Global & Public",
      description:
        "Market Integration via GeM portal, central ministries, PSUs, and export networks",
      footer: "Public Procurement Mandates",
      icon: Store,
      footerIcon: CircleCheck,
      valueClass: "navy-value",
    },
    {
      label: "SUSTAINABILITY",
      value: "ESG Compliant",
      description:
        "Sustainable Trade Acceleration aligned with BRSR-Core, CBAM, and global Scope-3 directives",
      footer: "Green Supply Chain Badging",
      icon: Leaf,
      footerIcon: ShieldCheck,
      valueClass: "green-value",
    },
  ];

  return (
    <section className="business-opportunities">
      <div className="business-container">
        {/* Section Badge */}
        <div className="business-badge">
          <Settings size={14} strokeWidth={2} />
          <span>INITIATIVES &amp; ECONOMIC GROWTH</span>
        </div>

        {/* Heading */}
        <h1 className="business-title">
          Facilitating Business Opportunities for
          <br />
          MSMEs
        </h1>

        {/* Introduction */}
        <div className="business-intro">
          <p>
            India ESG Alliance (IEA) is primarily focused on promoting existing
            businesses and creating new business opportunities, with a strong
            emphasis on facilitating and enhancing opportunities for Micro,
            Small and Medium Enterprises (MSMEs).
          </p>

          <p>
            MSMEs often face challenges such as limited awareness of available
            business opportunities and limited capacity to access and pursue
            them. IEA aims to bridge this gap by facilitating access to
            relevant opportunities, markets, buyers and platforms, enabling
            MSMEs to expand their businesses and unlock new avenues for growth.
          </p>
        </div>

        {/* Highlight Box */}
        <div className="business-highlight">
          <p>
            Through this work, IEA seeks to contribute to wealth generation and
            employment generation in India by helping more MSMEs access and
            participate in business opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="business-cards">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const FooterIcon = card.footerIcon;

            return (
              <article className="business-card" key={index}>
                <div className="business-card-header">
                  <span className="business-card-label">{card.label}</span>

                  <Icon
                    className="business-card-icon"
                    size={20}
                    strokeWidth={1.8}
                  />
                </div>

                <div className={`business-card-value ${card.valueClass}`}>
                  {card.value}
                </div>

                <p className="business-card-description">
                  {card.description}
                </p>

                <div className="business-card-footer">
                  <FooterIcon size={13} strokeWidth={2} />
                  <span>{card.footer}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessOpportunities;