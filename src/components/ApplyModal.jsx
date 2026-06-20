import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle2, Briefcase, Upload, FileText, Trash2 } from 'lucide-react'

const ACCEPTED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]
const ACCEPTED_EXT = '.pdf,.doc,.docx'
const MAX_SIZE_MB = 5

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  linkedin: '',
  message: '',
}

export default function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState(initialForm)
  const [resume, setResume] = useState(null)
  const [resumeError, setResumeError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef(null)

  useEffect(() => {
    if (!job) {
      setForm(initialForm)
      setResume(null)
      setResumeError('')
      setSubmitted(false)
      return
    }

    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [job, onClose])

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const validateFile = (file) => {
    if (!file) return 'Please upload your resume.'
    const ext = file.name.split('.').pop()?.toLowerCase()
    const validExt = ['pdf', 'doc', 'docx']
    if (!ACCEPTED_TYPES.includes(file.type) && !validExt.includes(ext)) {
      return 'Only PDF, DOC, or DOCX files are allowed.'
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      return `File must be under ${MAX_SIZE_MB}MB.`
    }
    return ''
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const error = validateFile(file)
    if (error) {
      setResumeError(error)
      setResume(null)
      return
    }
    setResumeError('')
    setResume(file)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (!file) return
    const error = validateFile(file)
    if (error) {
      setResumeError(error)
      setResume(null)
      return
    }
    setResumeError('')
    setResume(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const fileError = validateFile(resume)
    if (fileError) {
      setResumeError(fileError)
      return
    }

    const subject = encodeURIComponent(`Application: ${job.title}`)
    const body = encodeURIComponent(
      `Role: ${job.title}\nDepartment: ${job.department}\n\n` +
        `Name: ${form.firstName} ${form.lastName}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        `LinkedIn / Portfolio: ${form.linkedin || 'N/A'}\n` +
        `Resume: ${resume.name} (please attach this file to the email)\n\n` +
        `Cover Letter / Message:\n${form.message}`
    )

    window.location.href = `mailto:careers@pathnexis.in?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`
    return `${(bytes / 1024).toFixed(1)} KB`
  }

  return (
    <AnimatePresence>
      {job && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl shadow-navy/30 border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 pb-4 bg-white border-b border-gray-100 rounded-t-3xl">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-1">
                  Job Application
                </p>
                <h2 className="text-xl font-bold text-navy">{job.title}</h2>
                <p className="text-slate text-sm mt-1 flex items-center gap-1.5">
                  <Briefcase size={14} className="text-teal" />
                  {job.department} · {job.experience}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-slate hover:bg-gray-100 hover:text-navy transition-colors shrink-0"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={32} className="text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Application Ready!</h3>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  Your email app should open with your application details. Please{' '}
                  <strong className="text-navy">attach your resume ({resume?.name})</strong> to the
                  email before sending to{' '}
                  <a href="mailto:careers@pathnexis.in" className="text-teal font-medium hover:underline">
                    careers@pathnexis.in
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 pt-4 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">First Name *</label>
                    <input
                      required
                      type="text"
                      value={form.firstName}
                      onChange={update('firstName')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-surface focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition-all text-sm"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Last Name *</label>
                    <input
                      required
                      type="text"
                      value={form.lastName}
                      onChange={update('lastName')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-surface focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition-all text-sm"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-surface focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition-all text-sm"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Phone *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-surface focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition-all text-sm"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    LinkedIn / Portfolio
                  </label>
                  <input
                    type="url"
                    value={form.linkedin}
                    onChange={update('linkedin')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-surface focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition-all text-sm"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Upload Resume *
                  </label>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={ACCEPTED_EXT}
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {!resume ? (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      className={`w-full flex flex-col items-center justify-center gap-2 px-4 py-8 rounded-xl border-2 border-dashed transition-all text-sm ${
                        resumeError
                          ? 'border-red-300 bg-red-50/50'
                          : 'border-gray-200 bg-surface hover:border-teal/50 hover:bg-teal/5'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                        <Upload size={22} className="text-teal" />
                      </div>
                      <span className="font-medium text-navy">
                        Click to upload or drag & drop
                      </span>
                      <span className="text-slate text-xs">
                        PDF, DOC, DOCX — max {MAX_SIZE_MB}MB
                      </span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-teal/30 bg-teal/5">
                      <div className="w-10 h-10 rounded-lg bg-teal/15 flex items-center justify-center shrink-0">
                        <FileText size={20} className="text-teal" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-navy truncate">{resume.name}</p>
                        <p className="text-xs text-slate">{formatSize(resume.size)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setResume(null)
                          setResumeError('')
                          if (fileInputRef.current) fileInputRef.current.value = ''
                        }}
                        className="p-2 rounded-lg text-slate hover:bg-red-50 hover:text-red-500 transition-colors shrink-0"
                        aria-label="Remove resume"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  )}

                  {resumeError && (
                    <p className="text-red-500 text-xs mt-1.5">{resumeError}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Why do you want to join Pathnexis? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-surface focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition-all resize-none text-sm"
                    placeholder="Tell us about your experience and why you're a great fit..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-teal text-white font-semibold rounded-xl hover:bg-teal-dark transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  <Send size={18} />
                  Submit Application
                </motion.button>

                <p className="text-slate text-xs text-center leading-relaxed">
                  By applying, you agree to be contacted by Pathnexis regarding this role.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
