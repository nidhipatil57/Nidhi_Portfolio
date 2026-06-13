import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import ScrollReveal from '../common/ScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'db7f9630-007d-4951-a83a-780d07b38529',
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Message from ${form.name} (via Portfolio)`,
          from_name: form.name,
          replyto: form.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.contactGrid}>
          {/* Left Column: Get In Touch */}
          <ScrollReveal variant="slideLeft">
            <div className={styles.leftColumn}>
              <span className={styles.sectionLabel}>CONTACT</span>
              <h2 className={styles.mainTitle}>
                STAY <br />
                <span className={styles.titleAccent}>CONNECTED</span>
              </h2>

              <p className={styles.infoSubtitle}>
                Have an exciting project, internship opportunity, or just want to chat? <br />
                Let's connect!
              </p>

              <div className={styles.dividerLine} />

              <div className={styles.detailsGroup}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>MAIL ME HERE:</span>
                  {/* NOTE FOR NIDHI: Change the href/text below to update your email inquiries! */}
                  <a href="mailto:nidhipatil203@gmail.com" className={styles.detailValueLink}>
                    nidhipatil203@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.socialSection}>
                <span className={styles.socialLabel}>Socials</span>
                <div className={styles.socialGrid}>
                  {/* NOTE FOR NIDHI: Change the href values below to link to your exact profiles! */}
                  <a
                    href="https://github.com/nidhipatil57"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBox}
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nidhi-patil-b726a4376/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBox}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/nidhi.patil_77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBox}
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>

                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Vertical Divider (Hidden on mobile) */}
          <div className={styles.verticalDivider} />

          {/* Right Column: Contact Form */}
          <ScrollReveal variant="slideRight">
            <div className={styles.formCard}>
              <span className={styles.formLabelHeader}>SEND A MESSAGE</span>

              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      className={`${styles.formInput} ${errors.name ? styles.formInputError : ''}`}
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="contact-email">Your Email</label>
                    <input
                      id="contact-email"
                      className={`${styles.formInput} ${errors.email ? styles.formInputError : ''}`}
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    className={`${styles.formTextarea} ${errors.message ? styles.formInputError : ''}`}
                    name="message"
                    placeholder="Talk about your projects, ideas or just drop a hi!"
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn} ${status === 'sending' ? styles.submitBtnLoading : ''}`}
                  disabled={status === 'sending'}
                  id="contact-submit-btn"
                >
                  {status === 'sending' ? 'Sending...' : 'SUBMIT →'}
                </button>

                {status === 'success' && (
                  <div className={styles.successMessage}>
                    ✅ Message sent successfully! I will get back to you soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className={styles.errorMessage}>
                    ❌ Something went wrong. Please try emailing me directly.
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
