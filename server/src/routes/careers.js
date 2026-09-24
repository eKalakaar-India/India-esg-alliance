import  express from 'express';
import multer from 'multer';
import { sendApplication, ROLES } from '../services/emailService.js';

const router = express.Router();

const ALLOWED_MIME = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024, files: 1 },
  fileFilter: (req, file, cb) => {
    const ok = ALLOWED_MIME.includes(file.mimetype) && /\.(pdf|doc|docx)$/i.test(file.originalname);
    cb(ok ? null : new Error('CV must be a PDF, DOC or DOCX file.'), ok);
  }
});

function validate(b, file) {
  const t = (v) => String(v || '').trim();
  if (!ROLES[b.position]) return 'Select a valid position.';
  if (!t(b.fullName) || t(b.fullName).length > 100) return 'Enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t(b.email)) || t(b.email).length > 150) return 'Enter a valid email address.';
  if (!/^[+()\d\s-]{8,18}$/.test(t(b.phone))) return 'Enter a valid phone number.';
  const exp = Number(b.experience);
  if (t(b.experience) === '' || isNaN(exp) || exp < 0 || exp > 50) return 'Enter your years of experience (0–50).';
  if (t(b.message).length > 1500 || t(b.location).length > 120) return 'Some fields are too long.';
  if (!file) return 'Attach your CV.';
  return null;
}

router.post('/apply', upload.single('cv'), async (req, res) => {
  // Honeypot: pretend success so bots learn nothing.
  if (req.body.website) return res.json({ message: 'Application sent.' });

  const error = validate(req.body, req.file);
  if (error) return res.status(400).json({ message: error });

  const b = req.body;
  try {
    await sendApplication({
      position: b.position,
      fullName: b.fullName.trim(),
      email: b.email.trim(),
      phone: b.phone.trim(),
      experience: Number(b.experience),
      location: (b.location || '').trim(),
      message: (b.message || '').trim()
    }, req.file);
    res.json({ message: 'Application sent. Check your inbox for a confirmation email.' });
  } catch (err) {
    console.error('Application email failed:', err);
    res.status(500).json({ message: 'We could not send your application right now. Please try again later.' });
  }
});

// Handles multer errors (file too large, wrong type)
router.use((err, req, res, next) => {
  const message = err.code === 'LIMIT_FILE_SIZE' ? 'CV must be 5 MB or smaller.' : err.message;
  res.status(400).json({ message });
});

export default router;
