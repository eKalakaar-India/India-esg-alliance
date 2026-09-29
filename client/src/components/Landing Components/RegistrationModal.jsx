import { useState } from 'react'
import axios from 'axios'
import payqr from '../../assets/payqr.png'
import './RegistrationModal.css'

const SECTOR_OPTIONS = [
  'Manufacturing',
  'Textile & Apparel',
  'Agriculture & Agro-processing',
  'IT / ITES',
  'Chemicals & Pharmaceuticals',
  'Auto & Auto Components',
  'Handicrafts & Handloom',
  'Food Processing',
  'Construction & Engineering',
  'Services',
  'Other'
]

const initialForm = {
  fullName: '',
  mobile: '',
  email: '',
  companyName: '',
  sector: ''
}

export default function RegistrationModal({ onClose }) {
  const [form, setForm] = useState(initialForm)
  const [transactionFile, setTransactionFile] = useState(null)
  const [status, setStatus] = useState({ state: 'idle', message: '' }) // idle | submitting | success | error
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null
    setTransactionFile(file)
  }

  const validate = () => {
    const next = {}
    if (!form.fullName.trim()) next.fullName = 'Full name is required'
    if (!/^\d{10}$/.test(form.mobile.trim())) next.mobile = 'Enter a valid 10-digit mobile number'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Enter a valid email address'
    if (!form.companyName.trim()) next.companyName = 'Company name is required'
    if (!form.sector) next.sector = 'Please select a sector'
    if (!transactionFile) next.transactionFile = 'Please upload your payment transaction screenshot'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus({ state: 'submitting', message: '' })

    try {
      const payload = new FormData()
      Object.entries(form).forEach(([key, value]) => payload.append(key, value))
      payload.append('transactionScreenshot', transactionFile)
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/events`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (!res.data.success) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Something went wrong while submitting your registration.')
      }

      setStatus({ state: 'success', message: 'Registration submitted! A confirmation has been sent to India ESG Alliance.' })
      setForm(initialForm)
      setTransactionFile(null)
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Could not submit registration. Please try again.' })
    }
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-page">
        <button className="modal-close" onClick={onClose} aria-label="Close registration form">
          ×
        </button>

        <div className="modal-inner">
          <div className="modal-header">
            <span className="modal-eyebrow">India ESG Alliance</span>
            <h2>Registration Form</h2>
            <p>One-Day Training Workshop — Business Opportunities &amp; ESG for MSMEs</p>
            <p className="modal-subline">17 October 2026 · Saturday · Mumbai · 10:00 AM – 5:00 PM</p>
          </div>

          <form className="reg-form" onSubmit={handleSubmit} noValidate>
            <fieldset>
              <legend>Participant Details</legend>

              <div className="field">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
                {errors.fullName && <span className="field-error">{errors.fullName}</span>}
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="mobile">Mobile No. *</label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                  />
                  {errors.mobile && <span className="field-error">{errors.mobile}</span>}
                </div>

                <div className="field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="companyName">Company Name *</label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="Your company / MSME name"
                  />
                  {errors.companyName && <span className="field-error">{errors.companyName}</span>}
                </div>

                <div className="field">
                  <label htmlFor="sector">Organization Sector (MSME Industries) *</label>
                  <select id="sector" name="sector" value={form.sector} onChange={handleChange}>
                    <option value="">Select sector</option>
                    {SECTOR_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.sector && <span className="field-error">{errors.sector}</span>}
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Payment Details</legend>

              <div className="payment-box">
                <div className="payment-info">
                  <div className="payment-row">
                    <span className="payment-label">Training Fee</span>
                    <span className="payment-value">₹2,500/- (inclusive of all taxes)</span>
                  </div>
                  <div className="payment-row">
                    <span className="payment-label">UPI ID</span>
                    <span className="payment-value payment-upi">8976020243.eazypay@icici</span>
                  </div>
                  <p className="payment-note">
                    Scan the QR code or pay to the UPI ID above, then upload a screenshot of your
                    payment confirmation below.
                  </p>
                </div>
                <div className="payment-qr">
                  <img src={payqr} alt="Scan and Pay QR code" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="transactionScreenshot">Upload Transaction Screenshot *</label>
                <input
                  id="transactionScreenshot"
                  name="transactionScreenshot"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                />
                {transactionFile && <span className="file-chip">{transactionFile.name}</span>}
                {errors.transactionFile && <span className="field-error">{errors.transactionFile}</span>}
              </div>
            </fieldset>

            {status.state === 'error' && <p className="form-message error">{status.message}</p>}
            {status.state === 'success' && <p className="form-message success">{status.message}</p>}

            <div className="form-actions">
              <button type="button" className="btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn-primary" disabled={status.state === 'submitting'}>
                {status.state === 'submitting' ? 'Submitting…' : 'Submit Registration'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
