import React, { useState } from 'react';
import { 
  Store, 
  Leaf, 
  Network, 
  Download, 
  Code, 
  Eye, 
  FileText, 
  Check,
  Building2,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';


import './MsmeMarketplace.css';

export default function MsmeMarketplace() {
  return (
    <div className="mm-main-container">
      <div className="mm-layout-grid">
        
        {/* LEFT COLUMN: Text Content & 3 Feature Cards */}
        <div className="mm-left-col">
          {/* Header Badge Row */}
          <div className="mm-header-badge-row">
            <span className="mm-num-badge">04</span>
            <span className="mm-category-title">DIGITAL ECOSYSTEM & LINKAGES</span>
          </div>

          {/* Title & Subheading */}
          <h1 className="mm-main-heading">4. MSME Marketplace & Business Linkages</h1>
          <p className="mm-subheading">
            Connecting businesses to businesses —{' '}
            <span className="mm-subheading-highlight">across markets and platforms.</span>
          </p>

          {/* Description Paragraphs */}
          <p className="mm-description-para">
            IEA will work towards creating a marketplace and interconnected business ecosystem that enables MSMEs to discover, showcase and access opportunities across different platforms and networks.
          </p>
          <p className="mm-description-para">
            Through cross-linkages between businesses, buyers, platforms, institutions and market opportunities, IEA aims to make it easier for MSMEs to find relevant opportunities and for buyers to discover capable Indian enterprises.
          </p>

          {/* 3 Stacked Feature Cards */}
          <div className="mm-feature-cards-list">
            
            {/* Feature Card 1 */}
            <div className="mm-feature-card">
              <div className="mm-feature-icon-wrapper">
                <Store size={20} />
              </div>
              <div className="mm-feature-content">
                <h3 className="mm-feature-title">Digital Showcase & Verified Supplier Profiles</h3>
                <p className="mm-feature-desc">
                  Centralized digital storefront with GSTIN, Udyam, factory capacity audits, and verifiable production metrics.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="mm-feature-card">
              <div className="mm-feature-icon-wrapper">
                <Leaf size={20} />
              </div>
              <div className="mm-feature-content">
                <h3 className="mm-feature-title">ESG Credentials & Sustainable Sourcing Badges</h3>
                <p className="mm-feature-desc">
                  Pre-verified ESG scores based on SEBI BRSR-Core metrics, enabling preference in tier-1 corporate procurement.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="mm-feature-card">
              <div className="mm-feature-icon-wrapper">
                <Network size={20} />
              </div>
              <div className="mm-feature-content">
                <h3 className="mm-feature-title">Seamless Multi-Network Linkages</h3>
                <p className="mm-feature-desc">
                  Interoperability with ONDC, GeM, global B2B networks, and export promotion councils in a single console.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: 2 Image Cards + CTA Banner */}
        <div className="mm-right-col">
          {/* Top 2 Image Cards Grid */}
          <div className="mm-image-cards-grid">
            
            {/* Card 1: Digital Onboarding */}
            <div className="mm-image-card">
              <div className="mm-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=600&q=80" 
                  alt="Digital Onboarding" 
                  className="mm-card-img" 
                />
              </div>
              <div className="mm-image-card-body">
                <span className="mm-card-badge green-badge">DIGITAL ONBOARDING</span>
                <p className="mm-card-text">
                  Direct mobile-first dashboard access for retail and light manufacturing MSMEs.
                </p>
              </div>
            </div>

            {/* Card 2: Verified Compliance */}
            <div className="mm-image-card">
              <div className="mm-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                  alt="Verified Compliance" 
                  className="mm-card-img" 
                />
              </div>
              <div className="mm-image-card-body">
                <span className="mm-card-badge amber">VERIFIED COMPLIANCE</span>
                <p className="mm-card-text">
                  Multi-stage technical and ESG verification before platform listing.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Forest Green CTA Banner */}
          <div className="mm-cta-banner">
            <div className="mm-cta-content">
              <h2 className="mm-cta-title">Ready to be indexed on India's premier ESG MSME Grid?</h2>
              <p className="mm-cta-subtitle">
                Get verified by certified auditors and unlock institutional buyer networks.
              </p>
            </div>
            <button className="mm-cta-button">
              Create Enterprise Profile
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

