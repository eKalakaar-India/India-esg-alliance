import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ContactUs.css";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaBuilding,
  FaMapMarkerAlt,
  FaLink,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaClock,
  FaTag,
  FaLightbulb,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    organization: "",
    purpose: "",
    intrestedIn: "",
    location: "",
    link: "",
    message: "",
  });

  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    AOS.refreshHard();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("/api/v1/location/cities");
        if (response.data?.data) {
          setCities(response.data.data);
        }
      } catch (err) {
        console.error("Cities fetch failed, fallback to manual input", err);
      }
    };
    fetchCities();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/query",
        formData,
      );
      if (response.status === 201 || response.data?.statusCode === 201) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your query has been registered. Our team will contact you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          organization: "",
          purpose: "",
          intrestedIn: "",
          location: "",
          link: "",
          message: "",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err.response?.data?.message ||
          "Something went wrong while submitting. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page-container">
      <div
        className="contact-shell"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        {/* Left Side: Brand Context & Direct Info */}
        <div className="contact-info-panel">
          <div>
            <span className="contact-badge">Get in Touch</span>
            <h1 className="contact-info-title">Let’s Start a Conversation</h1>
            <p className="contact-info-desc">
              Have questions about ESG frameworks, capacity building, or
              partnerships? Fill out the form, and our specialized advisory team
              will connect with you.
            </p>
          </div>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <div className="detail-icon-circle">
                <FaEnvelope />
              </div>
              <div>
                <span className="detail-label">Email Us</span>
                <p className="detail-value">indiaesgalliance@gmail.com</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon-circle">
                <FaPhoneAlt />
              </div>
              <div>
                <span className="detail-label">WhatsApp & Call</span>
                <p className="detail-value">+91 93113 74958</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon-circle">
                <FaClock />
              </div>
              <div>
                <span className="detail-label">Response Time</span>
                <p className="detail-value">Within 24 Business Hours</p>
              </div>
            </div>
          </div>

          <div className="contact-panel-footer">
            <div className="status-indicator">
              <span className="pulsing-dot" />
              <span>Advisory Desk Active</span>
            </div>
          </div>
        </div>

        {/* Right Side: Dynamic Form */}
        <div className="contact-form-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>Fill in the details below to initiate your query.</p>
            </div>

            {status.message && (
              <div className={`status-banner ${status.type}`}>
                {status.type === "success" ? (
                  <FaCheckCircle />
                ) : (
                  <FaExclamationCircle />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <div className="form-grid">
              {/* Name */}
              <div className="form-field">
                <label>
                  Full Name <span className="req">*</span>
                </label>
                <div className="input-group">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-field">
                <label>
                  Work / Personal Email <span className="req">*</span>
                </label>
                <div className="input-group">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div className="form-field">
                <label>
                  Phone Number <span className="req">*</span>
                </label>
                <div className="input-group">
                  <FaPhoneAlt className="input-icon" />
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              {/* Organization */}
              <div className="form-field">
                <label>Organization / Entity</label>
                <div className="input-group">
                  <FaBuilding className="input-icon" />
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Company or Enterprise Name"
                  />
                </div>
              </div>

              {/* Purpose / Subject Input */}
              <div className="form-field">
                <label>
                  Purpose / Subject <span className="req">*</span>
                </label>
                <div className="input-group">
                  <FaTag className="input-icon" />
                  <input
                    type="text"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    placeholder="e.g. ESG Advisory, BRSR Reporting"
                    required
                  />
                </div>
              </div>

              {/* Area of Interest Input */}
              <div className="form-field">
                <label>Area of Interest</label>
                <div className="input-group">
                  <FaLightbulb className="input-icon" />
                  <input
                    type="text"
                    name="intrestedIn"
                    value={formData.intrestedIn}
                    onChange={handleChange}
                    placeholder="e.g. Gap Analysis, Training"
                  />
                </div>
              </div>

              {/* Location / City */}
              <div className="form-field">
                <label>Location / City</label>
                <div className="input-group">
                  <FaMapMarkerAlt className="input-icon" />
                  {cities.length > 0 ? (
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                    >
                      <option value="">Select City</option>
                      {cities.map((city, idx) => (
                        <option key={idx} value={city.name || city}>
                          {city.name || city}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Mumbai, New Delhi"
                    />
                  )}
                </div>
              </div>

              {/* Reference Link */}
              <div className="form-field">
                <label>Reference Link (Website / Portfolio)</label>
                <div className="input-group">
                  <FaLink className="input-icon" />
                  <input
                    type="url"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    placeholder="https://..."
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="form-field full-width">
              <label>
                Message <span className="req">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Briefly describe your requirements or inquiry..."
                required
              />
            </div>

            <button
              type="submit"
              className="submit-contact-btn"
              disabled={loading}
            >
              {loading ? (
                <span>Submitting Query...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
