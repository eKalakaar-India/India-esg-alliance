import React from "react";
import {
  ShieldCheck,
  Landmark,
  SearchCheck,
  Globe2,
  ArrowRight,
} from "lucide-react";

import "./ExportGlobalMarkets.css";
import exportsImage from "../../assets/exports.png"

const ExportGlobalMarkets = () => {
  const features = [
    {
      title: "Cross-Border Compliance",
      description:
        "Navigating EU CBAM, supply chain due diligence, and carbon border accounting protocols.",
      icon: ShieldCheck,
      className: "green-icon",
    },
    {
      title: "Tariff & Trade Agreements",
      description:
        "Maximizing duty benefits under India's FTAs (UAE, Australia, EFTA, and UK corridors).",
      icon: Landmark,
      className: "orange-icon",
    },
    {
      title: "Target Market Intelligence",
      description:
        "Structured demand mapping, buyer vetting, and market access reports for zero-risk entry.",
      icon: SearchCheck,
      className: "teal-icon",
    },
  ];

  return (
    <section className="export-markets">
      <div className="export-container">

        {/* LEFT CONTENT */}
        <div className="export-content">

          {/* Pillar Label */}
          <div className="export-label">
            <span className="export-number">01</span>
            <span>INTERNATIONAL TRADE PILLAR</span>
          </div>

          {/* Heading */}
          <h1 className="export-title">
            1. Export &amp; Global Markets
          </h1>

          {/* Subheading */}
          <h2 className="export-subtitle">
            Unlocking International Horizons &amp; Value Chain Integration
          </h2>

          {/* Description */}
          <p className="export-description">
            IEA will facilitate MSMEs in exploring and accessing international
            markets, helping them identify export opportunities, understand
            market requirements and connect with potential international buyers
            and partners. The objective is to enable more Indian businesses to
            look beyond traditional markets and participate in global value
            chains.
          </p>

          {/* Feature Cards */}
          <div className="export-features">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article className="export-feature-card" key={index}>
                  <Icon
                    className={`export-feature-icon ${feature.className}`}
                    size={22}
                    strokeWidth={2}
                  />

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="export-bottom">
            <button className="export-button">
              <span>Access Export Advisory Desk</span>
              <ArrowRight size={18} strokeWidth={2} />
            </button>

            <div className="export-network">
              <Globe2 size={15} strokeWidth={2} />
              <span>
                Direct connections across 40+ export destination nodes
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="export-visual">
          <div className="export-image-wrapper">
            <img
              src={exportsImage}
              alt="Business opportunities and global trade"
              className="export-image"
            />

            {/* Image Overlay */}
            <div className="export-image-overlay">
              <span className="export-image-tag">
                GLOBAL SHIPPING GRID
              </span>

              <h3>
                MSME Exports &amp; Value Chain Realignment
              </h3>

              <p>
                Connecting grassroots factories and industrial hubs directly
                with maritime freight hubs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExportGlobalMarkets;