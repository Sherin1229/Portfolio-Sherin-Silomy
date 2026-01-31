import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`
  : null

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const MIN_MESSAGE_LENGTH = 10

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' }
    let valid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      valid = false
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      valid = false
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
      valid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      valid = false
    } else if (formData.message.trim().length < MIN_MESSAGE_LENGTH) {
      newErrors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters`
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    if (!FORMSPREE_URL) {
      setStatus('error')
      setErrors((prev) => ({ ...prev, _form: 'Form is not configured. Add VITE_FORMSPREE_FORM_ID to .env' }))
      return
    }

    setStatus('sending')
    setErrors((prev) => ({ ...prev, _form: '' }))

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _replyto: formData.email.trim(),
          _subject: `Portfolio message from ${formData.name.trim()}`,
          message: formData.message.trim(),
        }),
      })

      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
      setErrors((prev) => ({ ...prev, _form: 'Something went wrong. Please try again or email me directly.' }))
    }
  }

  const inputBaseClass = 'w-full bg-dark-300 border rounded-lg px-4 py-3 outline-none transition duration-200 focus:ring-2 focus:ring-gold/50'
  const inputErrorClass = 'border-red-500'
  const inputOkClass = 'border-dark-400'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="w-full max-w-full px-6 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-gold">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`${inputBaseClass} ${errors.name ? inputErrorClass : inputOkClass}`}
                  disabled={status === 'sending'}
                  autoComplete="name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Your Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className={`${inputBaseClass} ${errors.email ? inputErrorClass : inputOkClass}`}
                  disabled={status === 'sending'}
                  autoComplete="email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="At least 10 characters..."
                  rows={5}
                  className={`${inputBaseClass} resize-none h-40 ${errors.message ? inputErrorClass : inputOkClass}`}
                  disabled={status === 'sending'}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              {errors._form && <p className="text-sm text-red-500">{errors._form}</p>}
              {status === 'success' && (
                <p className="text-sm text-green-500">Message sent! I'll get back to you soon.</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-gold rounded-lg font-medium hover:bg-gold-700 transition duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-gold text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Akkaraipattu, Ampara</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-gold text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">sherinchristy2001@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-gold text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+94 776727364</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition duration-300">
                  <FaGithub />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300">
                  <FaLinkedin />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300">
                  <FaTwitter />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300">
                  <FaDribbble />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
