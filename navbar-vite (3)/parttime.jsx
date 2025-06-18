"use client"

import { useState } from "react"
import "./jobs.css"

const PartTimeJobs = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedJob, setSelectedJob] = useState(null)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    location: "",
  })
  const [serviceProviders, setServiceProviders] = useState([])
  const [showProviders, setShowProviders] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const jobs = [
    {
      id: 1,
      title: "Customer Service Representative",
      company: "Support Solutions",
      location: "Remote",
      pay: "$18/hour",
      description: "Handle customer inquiries via phone and chat. Flexible evening hours available.",
      requirements: ["Excellent communication", "Problem-solving skills", "Quiet workspace"],
      schedule: "20 hours/week",
      type: "Evening Shift",
    },
    {
      id: 2,
      title: "Retail Sales Associate",
      company: "Fashion Outlet",
      location: "Chicago, IL",
      pay: "$16/hour + Commission",
      description: "Assist customers with purchases and maintain store appearance.",
      requirements: ["Sales experience preferred", "Weekend availability", "Friendly personality"],
      schedule: "25 hours/week",
      type: "Weekends",
    },
    {
      id: 3,
      title: "Tutoring Assistant",
      company: "Learning Center",
      location: "Boston, MA",
      pay: "$22/hour",
      description: "Help students with homework and test preparation in math and science.",
      requirements: ["College degree", "Teaching experience", "Patient attitude"],
      schedule: "15 hours/week",
      type: "After School",
    },
    {
      id: 4,
      title: "Content Writer",
      company: "Digital Marketing Agency",
      location: "Remote",
      pay: "$25/hour",
      description: "Create blog posts and social media content for various clients.",
      requirements: ["Writing portfolio", "SEO knowledge", "Research skills"],
      schedule: "30 hours/week",
      type: "Flexible Hours",
    },
    {
      id: 5,
      title: "Virtual Assistant",
      company: "Business Consulting",
      location: "Remote",
      pay: "$20/hour",
      description: "Provide administrative support including email management and scheduling.",
      requirements: ["Organization skills", "Microsoft Office", "Time management"],
      schedule: "25 hours/week",
      type: "Flexible Hours",
    },
    {
      id: 6,
      title: "Graphic Designer",
      company: "Creative Agency",
      location: "Austin, TX",
      pay: "$28/hour",
      description: "Design marketing materials and social media graphics for clients.",
      requirements: ["Adobe Creative Suite", "Portfolio required", "Creative thinking"],
      schedule: "20 hours/week",
      type: "Flexible Schedule",
    },
    {
      id: 7,
      title: "Data Analyst",
      company: "Tech Startup",
      location: "San Francisco, CA",
      pay: "$35/hour",
      description: "Analyze business data and create reports for management decisions.",
      requirements: ["Excel/SQL skills", "Analytical mindset", "Attention to detail"],
      schedule: "30 hours/week",
      type: "Morning Shift",
    },
    {
      id: 8,
      title: "Social Media Manager",
      company: "E-commerce Brand",
      location: "Remote",
      pay: "$24/hour",
      description: "Manage social media accounts and create engaging content strategies.",
      requirements: ["Social media experience", "Content creation", "Analytics knowledge"],
      schedule: "25 hours/week",
      type: "Flexible Hours",
    },
    {
      id: 9,
      title: "Bookkeeper",
      company: "Small Business Services",
      location: "Denver, CO",
      pay: "$26/hour",
      description: "Maintain financial records and assist with monthly reporting.",
      requirements: ["Accounting knowledge", "QuickBooks experience", "Detail-oriented"],
      schedule: "20 hours/week",
      type: "Weekdays",
    },
    {
      id: 10,
      title: "Online Tutor",
      company: "Education Platform",
      location: "Remote",
      pay: "$30/hour",
      description: "Provide one-on-one tutoring sessions in various subjects online.",
      requirements: ["Subject expertise", "Teaching skills", "Reliable internet"],
      schedule: "15 hours/week",
      type: "Evenings/Weekends",
    },
  ]

  // Generate service providers based on job type
  const generateServiceProviders = (jobTitle) => {
    const providers = [
      {
        id: 1,
        name: "Alex Thompson",
        rating: 4.9,
        reviews: 142,
        experience: "4+ years",
        price: "$22/hour",
        avatar: "👨‍💼",
        skills: ["Professional", "Reliable", "Experienced"],
        availability: "Available Now",
      },
      {
        id: 2,
        name: "Maria Rodriguez",
        rating: 4.8,
        reviews: 98,
        experience: "3+ years",
        price: "$20/hour",
        avatar: "👩‍💼",
        skills: ["Detail-oriented", "Flexible", "Communicative"],
        availability: "Available Today",
      },
      {
        id: 3,
        name: "James Wilson",
        rating: 4.7,
        reviews: 167,
        experience: "6+ years",
        price: "$28/hour",
        avatar: "👨‍🎓",
        skills: ["Expert", "Mentor", "Patient"],
        availability: "Available This Week",
      },
      {
        id: 4,
        name: "Lisa Chen",
        rating: 4.9,
        reviews: 203,
        experience: "5+ years",
        price: "$25/hour",
        avatar: "👩‍🎨",
        skills: ["Creative", "Efficient", "Collaborative"],
        availability: "Available Now",
      },
      {
        id: 5,
        name: "Robert Kim",
        rating: 4.6,
        reviews: 89,
        experience: "2+ years",
        price: "$18/hour",
        avatar: "👨‍💻",
        skills: ["Tech-savvy", "Adaptable", "Quick learner"],
        availability: "Available Tomorrow",
      },
    ]

    return providers.map((provider) => ({
      ...provider,
      specialty: jobTitle,
    }))
  }

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleApplyClick = (job) => {
    setSelectedJob(job)
    setShowBookingForm(true)
    setShowProviders(false)
    setSelectedProvider(null)
    setShowConfirmation(false)
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    if (bookingData.date && bookingData.time && bookingData.location) {
      const providers = generateServiceProviders(selectedJob.title)
      setServiceProviders(providers)
      setShowProviders(true)
    } else {
      alert("Please fill in all fields")
    }
  }

  const handleProviderSelect = (provider) => {
    setSelectedProvider(provider)
  }

  const handleBookProvider = () => {
    setShowConfirmation(true)
  }

  const closeModal = () => {
    setShowBookingForm(false)
    setShowProviders(false)
    setSelectedProvider(null)
    setShowConfirmation(false)
    setBookingData({ date: "", time: "", location: "" })
  }

  const handleConfirmBooking = () => {
    alert("Booking confirmed! You will receive a confirmation email shortly.")
    closeModal()
  }

  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <img src="/images/parttime-hero.png" alt="Part Time Jobs" className="hero-image" />
        <div className="hero-overlay">
          <h1>Part Time Jobs</h1>
          <p>
            Flexible opportunities that fit around your schedule. Build your career while maintaining work-life balance.
          </p>
          <div className="job-count-badge">{filteredJobs.length} jobs available</div>
        </div>
      </div>

      <div className="jobs-container">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search part time jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="jobs-grid">
          {filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <h3>{job.title}</h3>
                <span className="job-pay">{job.pay}</span>
              </div>
              <div className="job-meta">
                <span className="company">{job.company}</span>
                <span className="location">{job.location}</span>
                <span className="schedule">
                  {job.schedule} • {job.type}
                </span>
              </div>
              <p className="job-description">{job.description}</p>
              <div className="job-requirements">
                <h4>Requirements:</h4>
                <ul>
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <button className="apply-btn" onClick={() => handleApplyClick(job)}>
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="no-results">
            <h3>No jobs found</h3>
            <p>Try adjusting your search terms to find more opportunities.</p>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Book Service for {selectedJob?.title}</h2>
              <button className="close-btn" onClick={closeModal}>
                ×
              </button>
            </div>

            {!showProviders && !showConfirmation && (
              <form onSubmit={handleBookingSubmit} className="booking-form">
                <div className="form-group">
                  <label htmlFor="date">Select Date:</label>
                  <input
                    type="date"
                    id="date"
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time">Select Time:</label>
                  <input
                    type="time"
                    id="time"
                    value={bookingData.time}
                    onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  <input
                    type="text"
                    id="location"
                    placeholder="Enter your location"
                    value={bookingData.location}
                    onChange={(e) => setBookingData({ ...bookingData, location: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="search-providers-btn">
                  Search Service Providers
                </button>
              </form>
            )}

            {showProviders && !showConfirmation && (
              <div className="providers-section">
                <h3>Available Service Providers</h3>
                <div className="providers-list">
                  {serviceProviders.map((provider) => (
                    <div
                      key={provider.id}
                      className={`provider-card ${selectedProvider?.id === provider.id ? "selected" : ""}`}
                      onClick={() => handleProviderSelect(provider)}
                    >
                      <div className="provider-avatar">{provider.avatar}</div>
                      <div className="provider-info">
                        <h4>{provider.name}</h4>
                        <div className="provider-rating">
                          ⭐ {provider.rating} ({provider.reviews} reviews)
                        </div>
                        <div className="provider-experience">{provider.experience} experience</div>
                        <div className="provider-skills">
                          {provider.skills.map((skill, index) => (
                            <span key={index} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="provider-availability">{provider.availability}</div>
                      </div>
                      <div className="provider-price">{provider.price}</div>
                    </div>
                  ))}
                </div>

                {selectedProvider && (
                  <div className="booking-summary">
                    <h4>Booking Summary</h4>
                    <p>
                      <strong>Service:</strong> {selectedJob.title}
                    </p>
                    <p>
                      <strong>Provider:</strong> {selectedProvider.name}
                    </p>
                    <p>
                      <strong>Date:</strong> {bookingData.date}
                    </p>
                    <p>
                      <strong>Time:</strong> {bookingData.time}
                    </p>
                    <p>
                      <strong>Location:</strong> {bookingData.location}
                    </p>
                    <p>
                      <strong>Rate:</strong> {selectedProvider.price}
                    </p>
                    <button className="book-provider-btn" onClick={handleBookProvider}>
                      Book {selectedProvider.name}
                    </button>
                  </div>
                )}
              </div>
            )}

            {showConfirmation && (
              <div className="confirmation-section">
                <div className="success-icon">✅</div>
                <h3>Booking Confirmation</h3>
                <div className="confirmation-details">
                  <p>
                    <strong>Service:</strong> {selectedJob.title}
                  </p>
                  <p>
                    <strong>Provider:</strong> {selectedProvider.name}
                  </p>
                  <p>
                    <strong>Date & Time:</strong> {bookingData.date} at {bookingData.time}
                  </p>
                  <p>
                    <strong>Location:</strong> {bookingData.location}
                  </p>
                  <p>
                    <strong>Rate:</strong> {selectedProvider.price}
                  </p>
                </div>
                <div className="confirmation-actions">
                  <button className="confirm-booking-btn" onClick={handleConfirmBooking}>
                    Confirm Booking
                  </button>
                  <button className="cancel-btn" onClick={closeModal}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default PartTimeJobs
