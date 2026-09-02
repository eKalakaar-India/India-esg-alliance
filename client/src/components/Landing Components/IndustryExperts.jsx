import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./IndustryExperts.css";

const experts = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    role: "Carbon Footprint Specialist",
    rating: "4.9/5",
    audits: "120+ Audits",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600",
  },
  {
    id: 2,
    name: "Vikram Malhotra",
    role: "Supply Chain Strategist",
    rating: "4.8/5",
    audits: "95+ Audits",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
  },
  {
    id: 3,
    name: "Riya Desai",
    role: "Social Governance Expert",
    rating: "5.0/5",
    audits: "40+ Audits",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600",
  },
  {
    id: 4,
    name: "Amitav Bose",
    role: "BRSR Specialist",
    rating: "4.7/5",
    audits: "200+ Audits",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600",
  },
];

export default function IndustryExperts() {
  const [selectedExpert, setSelectedExpert] = useState(null);

  // Recalculate AOS trigger offsets after mounting
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  const handleOpenModal = (expert) => {
    setSelectedExpert(expert);
  };

  const handleCloseModal = () => {
    setSelectedExpert(null);
  };

  return (
    <>
      <section className="experts-section" id="board-of-advisors">
        {/* Animated Header */}
        <div className="experts-header" data-aos="fade-up">
          <div>
            <h2>Industry Experts</h2>
            <p>
              Our certified consultants bring decades of collective expertise in
              industrial ESG.
            </p>
          </div>

          <button className="view-all-btn">View All Consultants</button>
        </div>

        {/* Animated Grid with Staggered Delays */}
        <div className="experts-grid">
          {experts.map((expert, index) => (
            <div
              className="expert-card"
              key={expert.id}
              data-aos="fade-up"
              data-aos-delay={index * 150} // Stagger each card by 150ms
              data-aos-duration="700"
            >
              <img src={expert.image} alt={expert.name} />

              <h3>{expert.name}</h3>
              <span className="expert-role">{expert.role}</span>

              <div className="rating">
                <span className="star">★</span>
                <strong>{expert.rating}</strong>
                <span className="audits">({expert.audits})</span>
              </div>

              <button
                className="profile-btn"
                onClick={() => handleOpenModal(expert)}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Profile Modal */}
      {selectedExpert && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="expert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={handleCloseModal}>
              ✕
            </button>

            <div className="modal-body">
              <div className="modal-left">
                <img
                  src={selectedExpert.image}
                  alt={selectedExpert.name}
                  className="modal-expert-img"
                />
                <div className="modal-rating-badge">
                  <span className="star">★</span>
                  <strong>{selectedExpert.rating}</strong>
                  <span>({selectedExpert.audits})</span>
                </div>
              </div>

              <div className="modal-right">
                <span className="modal-expert-role">{selectedExpert.role}</span>
                <h2 className="modal-expert-name">{selectedExpert.name}</h2>

                <div className="modal-lorem-text">
                  <h4>About the Consultant</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <h4>Key Focus Areas</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div className="modal-actions">
                  <button className="modal-primary-btn">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
