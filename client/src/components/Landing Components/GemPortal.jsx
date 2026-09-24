import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  Grid, 
  AtSign, 
  TrendingUp, 
  X, 
  ExternalLink, 
  CheckCircle, 
  Filter, 
  ChevronRight,
  Briefcase,
  Building2,
  ShieldCheck,
  Download,
  Info
} from 'lucide-react';
import './GemPortal.css';
import GeMImage from '../../assets/GeM.jpeg'; // Placeholder image path



export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Sample tender items for interactive search modal
  const tenders = [
    { id: 'GEM/2026/B/481920', name: 'IT Infrastructure Hardware Procurement', dept: 'Ministry of Heavy Industries', value: '₹ 4.2 Cr', tag: 'Active' },
    { id: 'GEM/2026/B/482104', name: 'Annual Maintenance Contract - Cloud Hosting', dept: 'Central Public Sector Enterprises', value: '₹ 85 Lakhs', tag: 'Active' },
    { id: 'GEM/2026/B/483311', name: 'Supply of Solar Power Systems & Inverters', dept: 'Ministry of New & Renewable Energy', value: '₹ 12.5 Cr', tag: 'MSE Reserved' },
    { id: 'GEM/2026/B/484092', name: 'Consultancy Services for Digital Governance', dept: 'National Informatics Centre', value: '₹ 1.8 Cr', tag: 'Active' },
  ];

  const filteredTenders = tenders.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.dept.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <>
      <div className="gem-desktop-canvas">

        {/* Main 2-Column Desktop Grid Component */}
        <div className="gem-main-card">
          
          {/* LEFT COLUMN: Stack of 2 Cards */}
          <div className="gem-left-col">
            
            {/* Top Card: Image + GeM Integration Tracker */}
            <div className="gem-top-card">
              <div className="gem-card-image-wrapper">
                <img 
                  src={GeMImage} 
                  alt="Executive businessman analyzing GeM procurement portal on laptop in office" 
                  className="gem-card-image"
                />
              </div>
              <div className="gem-card-body">
                <div className="gem-tracker-header">
                  <div className="gem-tracker-title-row">
                    <span className="gem-status-dot"></span>
                    <h3 className="gem-tracker-title">GeM Integration Tracker</h3>
                  </div>
                  <span className="gem-active-badge">Active Bid Desk</span>
                </div>
                <p className="gem-tracker-desc">
                  Public procurement policy mandates minimum 25% annual procurement from MSEs by Central Ministries and CPSEs.
                </p>
              </div>
            </div>

            {/* Bottom Card: INR 4 Lakh+ Crore Annual Market */}
            <div 
              className="gem-market-card"
              onClick={() => triggerToast('Annual Market Statistics updated as of Q3 2026.')}
              style={{ cursor: 'pointer' }}
            >
              <div className="gem-market-icon-box">
                <TrendingUp size={24} strokeWidth={2.2} />
              </div>
              <div className="gem-market-content">
                <h3 className="gem-market-heading">INR 4 Lakh+ Crore Annual Market</h3>
                <p className="gem-market-subtext">
                  Cumulative transactional procurement value handled through GeM infrastructure.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Content & Feature List */}
          <div className="gem-right-col">
            
            {/* Header Badge */}
            <div className="gem-badge-row">
              <span className="gem-num-badge">02</span>
              <span className="gem-badge-label">PUBLIC PROCUREMENT DESK</span>
            </div>

            {/* Title & Subheading */}
            <h1 className="gem-main-title">2. GeM & Government Tenders</h1>
            <h2 className="gem-sub-title">Helping MSMEs access the public procurement market.</h2>

            {/* Description Paragraphs */}
            <div className="gem-paragraph-group">
              <p className="gem-paragraph">
                Government procurement represents a significant business opportunity for enterprises across sectors. Through the Government e-Marketplace (GeM) and other tendering platforms, MSMEs can participate in public procurement and access potential government buyers.
              </p>
              <p className="gem-paragraph">
                IEA will support MSMEs in identifying relevant tenders, understanding eligibility requirements, preparing documentation and navigating the tender submission process. The aim is to make public procurement opportunities more accessible to businesses that may otherwise find the process difficult to navigate.
              </p>
            </div>

            {/* Feature List Items */}
            <div className="gem-feature-list">
              
              {/* Item 1 */}
              <div 
                className="gem-feature-item"
                onClick={() => triggerToast('GeM Portal Onboarding: Category Cataloging & Verification active.')}
              >
                <div className="gem-feature-icon">
                  <Grid size={18} strokeWidth={2.2} />
                </div>
                <p className="gem-feature-text">
                  <span className="gem-feature-bold">GeM Portal Onboarding & Catalog Management:</span>
                  Brand registration, primary seller verification, and OEM category cataloging.
                </p>
              </div>

              {/* Item 2 */}
              <div 
                className="gem-feature-item"
                onClick={() => triggerToast('Tender Evaluation Audit: Pre-bid qualification vetting enabled.')}
              >
                <div className="gem-feature-icon">
                  <AtSign size={18} strokeWidth={2.2} />
                </div>
                <p className="gem-feature-text">
                  <span className="gem-feature-bold">Tender Eligibility & Technical Evaluation Audit:</span>
                  Pre-bid qualification vetting, turnover threshold relaxation advisory, and MSE exemption filings.
                </p>
              </div>

              {/* Item 3 */}
              <div 
                className="gem-feature-item"
                onClick={() => triggerToast('Document Preparation: Draft compliant technical sheets & EMD exemptions.')}
              >
                <div className="gem-feature-icon">
                  <FileText size={18} strokeWidth={2.2} />
                </div>
                <p className="gem-feature-text">
                  <span className="gem-feature-bold">Document Preparation & Bid Advisory:</span>
                  Drafting compliant technical sheets, consortium agreements, EMD exemptions, and bid submission review.
                </p>
              </div>

            </div>

            {/* Primary Action Button */}
            <button 
              className="gem-action-btn"
              onClick={() => setIsModalOpen(true)}
            >
              <FileText size={18} strokeWidth={2.2} />
              <span>Search Active Government Tenders</span>
            </button>

          </div>

        </div>
      </div>

      {/* Interactive Modal for Tender Search */}
      {isModalOpen && (
        <div className="gem-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="gem-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="gem-modal-header">
              <h3 className="gem-modal-title">
                <Search size={20} className="text-indigo-600" />
                Active Government Tenders Search
              </h3>
              <button className="gem-close-btn" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="gem-modal-body">
              <div className="gem-search-input-wrap">
                <Search size={18} />
                <input 
                  type="text" 
                  placeholder="Filter tenders by keyword, Bid No. or Ministry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="gem-search-input"
                  autoFocus
                />
              </div>

              <div className="gem-tender-results">
                {filteredTenders.length > 0 ? (
                  filteredTenders.map((item) => (
                    <div key={item.id} className="gem-tender-item">
                      <div className="gem-tender-info">
                        <h4>{item.name}</h4>
                        <p>{item.dept} • Bid ID: <strong>{item.id}</strong> • Value: {item.value}</p>
                      </div>
                      <span className="gem-tender-tag">{item.tag}</span>
                    </div>
                  ))
                ) : (
                  <p style={{ textAlign: 'center', color: '#64748b', padding: '20px 0' }}>
                    No matching government tenders found.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="gem-toast">
          <Info size={18} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}