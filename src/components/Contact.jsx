
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiSend, FiUser, FiMessageSquare, FiCheckCircle } from "react-icons/fi";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  // Reset success message after 5 seconds
  useEffect(() => {
    let timer;
    if (sent) {
      timer = setTimeout(() => {
        setSent(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [sent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Sending message...");

    emailjs
      .sendForm(
        "service_lzf9uu9",  
        "template_cvqjbrh",   
        form.current,
        "GhLNrPj_dM4jWKuAL"  
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          setSent(true);
          setLoading(false);
          setFormData({
            user_name: "",
            user_email: "",
            message: ""
          });
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen flex items-center justify-center p-4 py-20">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h1>
          <p className="text-white max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Section - Contact Info */}
            <div className="lg:w-2/5 bg-gradient-to-br from-purple-600 to-indigo-800 p-8 lg:p-12 text-white">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="mb-8 opacity-90">
                    Have a question or want to work together? I'd love to hear from you!
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <FiMail className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white/90">Email</h3>
                        <a 
                          href="mailto:prithvisingh.ps514@gmail.com" 
                          className="text-white hover:underline transition-all"
                        >
                          prithvisingh.ps514@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <FiPhone className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white/90">Phone</h3>
                        <p className="mb-1">+91 9472688501</p>
                        <p>+91 9006002533</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 lg:mt-0">
                  <p className="font-medium mb-4">Connect with me</p>
                  <div className="flex space-x-4">
                    {/* <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a> */}
                    <a href="https://github.com/Prithvi9472?tab=repositories" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/prithvir99?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
              
              {sent ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-center">
                  <FiCheckCircle className="text-green-500 text-3xl mr-4" />
                  <div>
                    <h3 className="text-green-800 font-semibold text-lg">Message Sent!</h3>
                    <p className="text-green-700">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="user_name">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="user_email">
                      Your Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full pl-10 px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                      Your Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <FiMessageSquare className="text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="I'd like to discuss a project opportunity..."
                        className="w-full pl-10 px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition-all"
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-800 focus:ring-4 focus:ring-purple-500/30 transition-all ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}