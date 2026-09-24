import React from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Globe, 
  ArrowRight, 
  Calendar,
  Share2
} from 'lucide-react';
import './OpportunityPathway.css';

export default function OpportunityPathway() {
  return (
    <div className="op-main-container">
      {/* Header Section */}
      <div className="op-header">
        <span className="op-category-badge">INSTITUTIONAL METHODOLOGY</span>
        <h1 className="op-main-title">The 4-Step Opportunity Pathway</h1>
        <p className="op-subtitle">
          A structured journey ensuring MSMEs progress from unverified potential to global procurement contracts.
        </p>
      </div>

      {/* 4 Horizontal Step Cards Grid */}
      <div className="op-steps-grid">
        
        {/* Step 1 */}
        <div className="op-step-card">
          <div className="op-step-badge step-1">1</div>
          <h3 className="op-step-title">Capability Assessment</h3>
          <p className="op-step-desc">
            Evaluation of technical capacity, ESG maturity, certifications, and compliance health check.
          </p>
        </div>

        {/* Step 2 */}
        <div className="op-step-card">
          <div className="op-step-badge step-2">2</div>
          <h3 className="op-step-title">Catalog & GeM Filing</h3>
          <p className="op-step-desc">
            Professional structuring of goods & services, GeM integration, and tender alert subscription.
          </p>
        </div>

        {/* Step 3 */}
        <div className="op-step-card">
          <div className="op-step-badge step-3">3</div>
          <h3 className="op-step-title">Matchmaking & Meets</h3>
          <p className="op-step-desc">
            Facilitated presence in RBSMs, corporate buyer tables, and overseas export mission delegations.
          </p>
        </div>

        {/* Step 4 */}
        <div className="op-step-card">
          <div className="op-step-badge step-4">4</div>
          <h3 className="op-step-title">Deal Realization</h3>
          <p className="op-step-desc">
            Advisory on LC negotiations, export credit, supply contract execution, and long-term buyer retention.
          </p>
        </div>

      </div>

      {/* CTA Dark Green Banner */}
      <div className="op-cta-banner">
        <div className="op-cta-bg-shape"></div>
        
        {/* Banner Left Info */}
        <div className="op-cta-left">
          <div className="op-cta-badge">
            <Share2 size={13} />
            <span>NATIONAL ENTERPRISE NETWORK</span>
          </div>
          <h2 className="op-cta-title">Empower Your Enterprise with India ESG Alliance</h2>
          <p className="op-cta-desc">
            Join our network of forward-looking MSMEs, access institutional tenders, explore export markets, and connect directly with global buyers.
          </p>
          
          <div className="op-cta-features">
            <div className="op-cta-feature-item">
              <span className="op-cta-feature-icon"><ShieldCheck size={16} /></span>
              <span>Zero Commission Matching</span>
            </div>
            <div className="op-cta-feature-item">
              <span className="op-cta-feature-icon"><TrendingUp size={16} /></span>
              <span>Govt Procurement Aligned</span>
            </div>
            <div className="op-cta-feature-item">
              <span className="op-cta-feature-icon"><Globe size={16} /></span>
              <span>Global Trade Ready</span>
            </div>
          </div>
        </div>

        {/* Banner Right Action Buttons */}
        <div className="op-cta-right">
          <button className="op-btn-primary">
            <span>Register Your MSME</span>
            <ArrowRight size={16} />
          </button>
          
          <button className="op-btn-secondary">
            <Calendar size={16} />
            <span>Schedule a Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
}