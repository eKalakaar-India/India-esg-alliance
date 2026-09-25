import { useRef, useState } from 'react';
import '../../components/Landing Components/careers.css';
import Navbar from '../../components/Landing Components/Navbar';
import Footer from '../../components/Landing Components/Footer';

// Vite: set VITE_API_URL in .env (e.g. https://api.yoursite.org). Leave empty if the API is on the same origin.
// Create React App: replace with process.env.REACT_APP_API_URL.
const API_URL = `${import.meta.env.VITE_API_URL || ''}/careers/apply`;
const MAX_BYTES = 5 * 1024 * 1024;
const FALLBACK_EMAIL = 'indiaesgalliance@gmail.com';

const ROLES = [
  {
    id: 'state-project-manager',
    title: 'State Project Manager – Uttar Pradesh',
    short: 'State Project Manager',
    tone: 'forest',
    location: 'Lucknow, Uttar Pradesh',
    reportsTo: 'Team Leader / Project Director',
    experience: '8–12 years',
    role: 'Lead the overall implementation of the MSME programme – Training and Business Promotion of MSMEs in Uttar Pradesh.',
    responsibilities: [
      'Coordinate with key stakeholders (government, industry associations and others).',
      'Lead state-level planning, district/package targets and the training calendar.',
      'Supervise District/MSME Coordinators, trainers and field teams.',
      'Review MIS dashboards, progress against targets and data quality.',
      'Coordinate quality assurance, back-checking and corrective actions.',
      'Prepare progress reports, review presentations and management updates.',
      'Facilitate finance, certification, market and export-readiness linkages for identified MSMEs.',
      'Create business opportunities for MSMEs in coordination with key stakeholders.',
    ],
    qualification:
      'Postgraduate in Management, Social Sciences, Development Studies, Engineering or a related field, with 8–12 years of experience in project/programme management, MSME development, skilling, ESG or government programmes. Strong coordination, team-management and reporting skills are required. Experience in export markets is desirable.',
  },
  {
    id: 'district-msme-coordinator',
    title: 'District MSME Coordinator',
    short: 'District MSME Coordinator',
    tone: 'teal',
    location: 'District/Cluster, Uttar Pradesh',
    reportsTo: 'State Project Manager',
    experience: '3–5 years',
    role: 'Support district/cluster-level mobilisation and implementation of MSME workshops, ensuring participant mobilisation, registration, training coordination, diagnostics, digital onboarding and follow-up.',
    responsibilities: [
      'Mobilise MSMEs through DICs, industry associations, clusters, chambers and local networks.',
      'Prepare and maintain participant databases and confirmed workshop lists.',
      'Coordinate venues, trainers, logistics and workshop schedules.',
      'Support registration, attendance, digital onboarding and ESG/business diagnostics.',
      'Assist MSMEs in preparing 90-day Business Action Plans.',
      'Ensure workshop documentation, photographs, feedback and Digital Evidence Packs.',
      'Track workshop targets and report daily/weekly progress through MIS.',
      'Identify MSMEs requiring handholding and high-potential enterprises.',
      'Support follow-up for finance, certification, market and export-readiness opportunities.',
      'Maintain regular coordination with trainers, India ESG Fellows and district stakeholders.',
    ],
    qualification:
      'Graduate/Postgraduate with 3–5 years of experience in MSME development, field mobilisation, training, skilling, livelihood, CSR or government programmes. Good communication, local stakeholder coordination, digital/MIS and field-work skills are required. Willingness to travel extensively within assigned districts is essential.',
  },
];

const EMPTY = {
  position: '', fullName: '', email: '', phone: '', experience: '',
  location: '', message: '', website: '', consent: false,
};

function validate(v, cv) {
  const e = {};
  if (!v.position) e.position = 'Select the position you are applying for.';
  if (!v.fullName.trim()) e.fullName = 'Enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email address.';
  if (!/^[+()\d\s-]{8,18}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number.';
  const exp = Number(v.experience);
  if (v.experience === '' || Number.isNaN(exp) || exp < 0 || exp > 50) e.experience = 'Enter your years of experience (0–50).';
  if (!cv) e.cv = 'Attach your CV.';
  else if (!/\.(pdf|doc|docx)$/i.test(cv.name)) e.cv = 'CV must be a PDF, DOC or DOCX file.';
  else if (cv.size > MAX_BYTES) e.cv = 'CV must be 5 MB or smaller.';
  if (!v.consent) e.consent = 'Please confirm to continue.';
  return e;
}

export default function Careers() {
  const [values, setValues] = useState(EMPTY);
  const [cv, setCv] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type: 'ok' | 'error', msg }
  const [sending, setSending] = useState(false);
  const fileRef = useRef(null);

  const bind = (name) => ({
    id: `cr-${name}`,
    name,
    value: values[name],
    onChange: (e) => setValues((v) => ({ ...v, [name]: e.target.value })),
    'aria-invalid': errors[name] ? 'true' : undefined,
  });
  const err = (name) => (errors[name] ? <span className="cr-err">{errors[name]}</span> : null);

  const scrollTo = (id) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  const applyFor = (roleId) => {
    setValues((v) => ({ ...v, position: roleId }));
    scrollTo('apply');
    document.getElementById('cr-fullName')?.focus({ preventScroll: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values, cv);
    setErrors(found);
    const first = ['position', 'fullName', 'email', 'phone', 'experience', 'cv', 'consent'].find((n) => found[n]);
    if (first) {
      setStatus({ type: 'error', msg: 'Please fix the highlighted fields.' });
      document.getElementById(`cr-${first}`)?.focus();
      return;
    }

    const data = new FormData();
    ['position', 'fullName', 'email', 'phone', 'experience', 'location', 'message', 'website']
      .forEach((k) => data.append(k, values[k]));
    data.append('cv', cv);

    setSending(true);
    setStatus(null);
    try {
      const res = await fetch(API_URL, { method: 'POST', body: data });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.message || 'Something went wrong.');
      setValues(EMPTY);
      setCv(null);
      if (fileRef.current) fileRef.current.value = '';
      setStatus({ type: 'ok', msg: body.message || 'Application sent. Check your inbox for a confirmation email.' });
    } catch (ex) {
      setStatus({
        type: 'error',
        msg: `${ex.message || 'Could not send your application.'} You can also email your CV to ${FALLBACK_EMAIL}.`,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="cr-page">
        <section className="cr-hero">
          <div className="cr-wrap cr-hero__grid">
            <div>
              <h1>Help Uttar Pradesh's MSMEs get ESG-ready</h1>
              <p>
                India ESG is building its MSME programme in Uttar Pradesh: training, business promotion, and links to
                finance, certification and export markets for small enterprises. Join the team that runs it.
              </p>
              <a className="cr-btn" href="#positions" onClick={(e) => { e.preventDefault(); scrollTo('positions'); }}>
                See open positions
              </a>
            </div>
            <aside className="cr-hero__card" aria-label="Open positions">
              <h2>Open positions</h2>
              <ul>
                {ROLES.map((r) => (
                  <li key={r.id}>
                    <a href={`#${r.id}`} onClick={(e) => { e.preventDefault(); scrollTo(r.id); }}>
                      <strong>{r.short}</strong>
                      <span>{r.location}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="cr-section" id="positions">
          <div className="cr-wrap">
            <h2 className="cr-h2">Open positions</h2>
            <p className="cr-lead">
              Both roles sit within the MSME programme for training and business promotion in Uttar Pradesh.
            </p>
            <div className="cr-roles">
              {ROLES.map((r) => (
                <article key={r.id} id={r.id} className={`cr-role cr-role--${r.tone}`}>
                  <h3>{r.title}</h3>
                  <dl className="cr-facts">
                    <div><dt>Location</dt><dd>{r.location}</dd></div>
                    <div><dt>Reports to</dt><dd>{r.reportsTo}</dd></div>
                    <div><dt>Experience</dt><dd>{r.experience}</dd></div>
                  </dl>
                  <h4>Role</h4>
                  <p>{r.role}</p>
                  <h4>Key responsibilities</h4>
                  <ul>{r.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
                  <h4>Qualification and experience</h4>
                  <p>{r.qualification}</p>
                  <button type="button" className="cr-btn" onClick={() => applyFor(r.id)}>Apply for this role</button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cr-section cr-section--light" id="apply">
          <div className="cr-wrap cr-apply">
            <div>
              <h2 className="cr-h2">Apply</h2>
              <p className="cr-lead">
                Choose a role, add your details and attach your CV. You will get a confirmation email once we receive it.
              </p>
              <p>Prefer email? Send your CV to <a href={`mailto:${FALLBACK_EMAIL}`}>{FALLBACK_EMAIL}</a>.</p>
            </div>

            <form className="cr-form" onSubmit={handleSubmit} noValidate>
              <div className={status ? `cr-status cr-status--${status.type}` : 'cr-status'} role="status" aria-live="polite" hidden={!status}>
                {status?.msg}
              </div>

              <div className="cr-field cr-field--full">
                <label htmlFor="cr-position">Position</label>
                <select {...bind('position')} required>
                  <option value="">Select a position</option>
                  {ROLES.map((r) => <option key={r.id} value={r.id}>{r.title}</option>)}
                </select>
                {err('position')}
              </div>

              <div className="cr-field">
                <label htmlFor="cr-fullName">Full name</label>
                <input type="text" autoComplete="name" maxLength={100} required {...bind('fullName')} />
                {err('fullName')}
              </div>
              <div className="cr-field">
                <label htmlFor="cr-email">Email</label>
                <input type="email" autoComplete="email" maxLength={150} required {...bind('email')} />
                {err('email')}
              </div>
              <div className="cr-field">
                <label htmlFor="cr-phone">Phone</label>
                <input type="tel" autoComplete="tel" maxLength={18} required {...bind('phone')} />
                {err('phone')}
              </div>
              <div className="cr-field">
                <label htmlFor="cr-experience">Years of relevant experience</label>
                <input type="number" min="0" max="50" step="1" required {...bind('experience')} />
                {err('experience')}
              </div>
              <div className="cr-field cr-field--full">
                <label htmlFor="cr-location">Current location (City, State)</label>
                <input type="text" maxLength={120} {...bind('location')} placeholder='City, State' />
              </div>
              <div className="cr-field cr-field--full">
                <label htmlFor="cr-message">Cover note (optional)</label>
                <textarea rows={4} maxLength={1500} {...bind('message')} />
              </div>
              <div className="cr-field cr-field--full">
                <label htmlFor="cr-cv">CV (PDF, DOC or DOCX, up to 5 MB)</label>
                <input
                  id="cr-cv" name="cv" type="file" accept=".pdf,.doc,.docx" ref={fileRef}
                  onChange={(e) => setCv(e.target.files[0] || null)}
                  aria-invalid={errors.cv ? 'true' : undefined}
                />
                {err('cv')}
              </div>

              {/* Honeypot: hidden from people, bots tend to fill it */}
              <div className="cr-hp" aria-hidden="true">
                <label>Website <input type="text" tabIndex={-1} autoComplete="off" {...bind('website')} /></label>
              </div>

              <div className="cr-field cr-field--full">
                <label className="cr-check" htmlFor="cr-consent">
                  <input
                    id="cr-consent" type="checkbox" checked={values.consent}
                    onChange={(e) => setValues((v) => ({ ...v, consent: e.target.checked }))}
                    aria-invalid={errors.consent ? 'true' : undefined}
                  />
                  <span>I agree that India ESG may use these details to process my application.</span>
                </label>
                {err('consent')}
              </div>

              <div className="cr-field cr-field--full">
                <button className="cr-btn" type="submit" disabled={sending}>
                  {sending ? 'Sending…' : 'Send application'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
