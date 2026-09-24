import './BuyersMeet.css';
import React from 'react';
import { Users, Gauge, FileCheck } from 'lucide-react';

export default function BuyerSellerMeets() {
  return (
    <div className="bsm-container">
      {/* 1. Header Section */}
      <div className="bsm-header">
        <div className="bsm-badge-row">
          <span className="bsm-num-badge">03</span>
          <span className="bsm-badge-label">DIRECT MATCHMAKING</span>
        </div>
        <h1 className="bsm-main-title">3. Buyer–Seller Meets</h1>
        <h2 className="bsm-sub-title">Creating direct connections between businesses and buyers.</h2>
        <p className="bsm-description">
          Finding the right buyer can be as important as having the right product. IEA will facilitate Buyer–Seller Meets, B2B interactions and structured business networking opportunities that bring MSMEs directly in contact with potential buyers, distributors, institutions and business partners.
        </p>
      </div>

      {/* 2. Middle 2-Column Cards Grid */}
      <div className="bsm-middle-grid">
        
        {/* Card 1: International Trade Delegations */}
        <div className="bsm-featured-card">
          <div className="bsm-card-image-wrap">
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" 
              alt="B2B Matchmaking Arena delegation event" 
              className="bsm-card-image"
            />
            <span className="bsm-overlay-tag dark">B2B MATCHMAKING ARENA</span>
          </div>
          <div className="bsm-card-body">
            <div className="bsm-card-content-top">
              <h3 className="bsm-card-title">International Trade Delegations & Matchmaking</h3>
              <p className="bsm-card-text">
                Curated bilateral encounters with commercial attaches, global buying houses, and foreign trade councils looking for responsible Indian suppliers.
              </p>
            </div>
            <div className="bsm-card-meta-row">
              <span className="bsm-meta-highlight">Quarterly Delegations</span>
              <span className="bsm-meta-secondary">Hybrid In-Person / Digital</span>
            </div>
          </div>
        </div>

        {/* Card 2: Sector-Specific Reverse Buyer-Seller Meets */}
        <div className="bsm-featured-card">
          <div className="bsm-card-image-wrap">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
              alt="Sectoral Showcases laptop screen portal" 
              className="bsm-card-image"
            />
            <span className="bsm-overlay-tag amber">SECTORAL SHOWCASES</span>
          </div>
          <div className="bsm-card-body">
            <div className="bsm-card-content-top">
              <h3 className="bsm-card-title">Sector-Specific Reverse Buyer-Seller Meets (RBSM)</h3>
              <p className="bsm-card-text">
                Bringing accredited domestic and international buyers directly into regional manufacturing clusters, handloom centres, and precision engineering zones.
              </p>
            </div>
            <div className="bsm-card-meta-row">
              <span className="bsm-meta-highlight">Pre-Screened Buyers</span>
              <span className="bsm-meta-secondary">Cluster Immersion Tours</span>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Bottom 3-Column Cards Grid */}
      <div className="bsm-bottom-grid">
        
        {/* Card 1 */}
        <div className="bsm-info-card">
          <div className="bsm-icon-box green">
            <Users size={22} strokeWidth={2.2} />
          </div>
          <div className="bsm-info-text-group">
            <h4 className="bsm-info-title">Institutional Roundtables</h4>
            <p className="bsm-info-desc">
              Closed-door discussions connecting PSU chief procurement officers with certified small enterprises.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bsm-info-card">
          <div className="bsm-icon-box amber">
            <Gauge size={22} strokeWidth={2.2} />
          </div>
          <div className="bsm-info-text-group">
            <h4 className="bsm-info-title">Speed Pitching Sessions</h4>
            <p className="bsm-info-desc">
              Structured 10-minute curated product evaluations with corporate tier-1 vendors seeking diversification.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bsm-info-card">
          <div className="bsm-icon-box teal">
            <FileCheck size={22} strokeWidth={2.2} />
          </div>
          <div className="bsm-info-text-group">
            <h4 className="bsm-info-title">MOU & Vendor Registration</h4>
            <p className="bsm-info-desc">
              On-the-spot empanelment and contract finalization supported by IEA's legal and ESG auditing teams.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
