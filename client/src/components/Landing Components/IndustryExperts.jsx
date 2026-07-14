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
  return (
    <section className="experts-section">
      <div className="experts-header">
        <div>
          <h2>Industry Experts</h2>
          <p>
            Our certified consultants bring decades of collective expertise in
            industrial ESG.
          </p>
        </div>

        <button className="view-all-btn">View All Consultants</button>
      </div>

      <div className="experts-grid">
        {experts.map((expert) => (
          <div className="expert-card" key={expert.id}>
            <img src={expert.image} alt={expert.name} />

            <h3>{expert.name}</h3>
            <span className="expert-role">{expert.role}</span>

            <div className="rating">
              <span className="star">★</span>
              <strong>{expert.rating}</strong>
              <span className="audits">({expert.audits})</span>
            </div>

            <button className="profile-btn">View Profile</button>
          </div>
        ))}
      </div>
    </section>
  );
}