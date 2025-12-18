import { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDetails: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setSubmitStatus({ type: 'error', message: 'Please agree to be contacted to continue.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Submit to Supabase
      const { submitContactForm } = await import('../../lib/supabase');
      
      await submitContactForm({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        event_details: formData.eventDetails,
        consent: formData.consent,
        submitted_at: new Date().toISOString()
      });

      setSubmitStatus({ 
        type: 'success', 
        message: 'Thank you! We\'ll contact you soon to discuss your event.' 
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        eventDetails: '',
        consent: false
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or call us directly at (949) 607-6318.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-section">
      <div className="contact-form-container">
        <h2 className="contact-form-title">Contact Hare Rama Events</h2>
        <p className="contact-form-subtitle">
          Complete the form below and let us bring your dream event to life.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(123) 456-7890"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="eventDetails">Tell Us About Your Event</label>
            <textarea
              id="eventDetails"
              name="eventDetails"
              value={formData.eventDetails}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Share details about your event: type, date, location, guest count, services needed..."
              className="form-textarea"
            />
          </div>

          <div className="form-group-checkbox">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="form-checkbox"
            />
            <label htmlFor="consent" className="consent-label">
              I agree to be contacted by Hare Rama Events via call, email, and text for event services. 
              To opt out, you can reply 'stop' at any time or reply 'help' for assistance. You can also 
              click the unsubscribe link in the emails. Message and data rates may apply. Message frequency 
              may vary. <a href="#privacy" className="privacy-link">View Privacy Policy</a>
            </label>
          </div>

          {submitStatus && (
            <div className={`submit-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
