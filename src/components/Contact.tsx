import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    setSent(false);
    emailjs.send(
      'service_vra8cvo',
      'template_gf6c71j',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'o0j0yE9yY-q1lD69T'
    )
      .then(() => {
        setSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        setError('Failed to send message. Please try again.');
      })
      .finally(() => setSending(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">Get In Touch</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form (left) */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-semibold text-slate-100 mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {sent && (
                <div className="text-green-400 text-sm font-medium">Message sent successfully!</div>
              )}
              {error && (
                <div className="text-red-400 text-sm font-medium">{error}</div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-slate-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors duration-200 disabled:opacity-60"
                disabled={sending}
              >
                {sending ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          {/* Contact Info + Follow Me (right) */}
          <div className="flex flex-col gap-8">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-slate-100 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Email</p>
                    <a href="mailto:hassanibnahmad6@gmail.com" className="text-slate-100 hover:text-indigo-400 transition-colors duration-200">
                      hassanibnahmad6@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Phone</p>
                    <a href="tel:+212646426335" className="text-slate-100 hover:text-indigo-400 transition-colors duration-200">
                      +212 6 46 42 63 35
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Location</p>
                    <p className="text-slate-100">Agadir, Morocco</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Availability</p>
                    <p className="text-slate-100">Mon-Sun: 9AM-6PM (PST)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-slate-100 mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/hassanibnahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Github className="h-6 w-6 text-slate-300 hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hassan-ibnahmad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-slate-300 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;