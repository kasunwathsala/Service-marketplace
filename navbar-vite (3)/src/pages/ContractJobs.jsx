"use client"

import { useState } from "react"
import "./Jobs.css"

const ContractJobs = () => {
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
      title: "Full Stack Developer",
      company: "Tech Startup",
      location: "Remote",
      pay: "$75/hour",
      description: "Build and maintain web applications using React and Node.js for growing fintech company.",
      requirements: ["5+ years experience", "React/Node.js expertise", "Portfolio required"],
      duration: "6 months",
      commitment: "Full-time",
    },
    {
      id: 2,
      title: "Marketing Consultant",
      company: "E-commerce Brand",
      location: "San Francisco, CA",
      pay: "$60/hour",
      description: "Develop and execute digital marketing strategies to increase online sales.",
      requirements: ["Marketing degree", "Google Ads certified", "Analytics experience"],
      duration: "3 months",
      commitment: "Part-time",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "Design Agency",
      location: "Austin, TX",
      pay: "$65/hour",
      description: "Design user interfaces for mobile app and web platform redesign project.",
      requirements: ["Design portfolio", "Figma proficiency", "User research experience"],
      duration: "4 months",
      commitment: "Full-time",
    },
    {
      id: 4,
      title: "Project Manager",
      company: "Construction Firm",
      location: "Denver, CO",
      pay: "$55/hour",
      description: "Oversee residential construction project from planning to completion.",
      requirements: ["PMP certification", "Construction experience", "Leadership skills"],
      duration: "12 months",
      commitment: "Full-time",
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Healthcare Analytics",
      location: "Boston, MA",
      pay: "$80/hour",
      description: "Analyze healthcare data to improve patient outcomes and operational efficiency.",
      requirements: ["PhD/Masters in Data Science", "Python/R expertise", "Healthcare knowledge"],
      duration: "8 months",
      commitment: "Full-time",
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "Cloud Solutions",
      location: "Remote",
      pay: "$70/hour",
      description: "Implement and maintain cloud infrastructure and deployment pipelines.",
      requirements: ["AWS/Azure certification", "Docker/Kubernetes", "CI/CD experience"],
      duration: "6 months",
      commitment: "Full-time",
    },
    {
      id: 7,
      title: "Business Analyst",
      company: "Financial Services",
      location: "New York, NY",
      pay: "$65/hour",
      description: "Analyze business processes and recommend improvements for efficiency.",
      requirements: ["Business degree", "Process mapping", "Stakeholder management"],
      duration: "5 months",
      commitment: "Full-time",
    },
    {
      id: 8,
      title: "Content Strategist",
      company: "Media Company",
      location: "Los Angeles, CA",
      pay: "$50/hour",
      description: "Develop content strategy and oversee content creation across multiple platforms.",
      requirements: ["Content marketing experience", "SEO knowledge", "Editorial skills"],
      duration: "4 months",
      commitment: "Part-time",
    },
    {
      id: 9,
      title: "Cybersecurity Consultant",
      company: "Security Firm",
      location: "Remote",
      pay: "$85/hour",
      description: "Assess security vulnerabilities and implement protection measures.",
      requirements: ["Security certifications", "Penetration testing", "Risk assessment"],
      duration: "3 months",
      commitment: "Full-time",
    },
    {
      id: 10,
      title: "Mobile App Developer",
      company: "Startup Incubator",
      location: "Seattle, WA",
      pay: "$70/hour",
      description: "Develop native mobile applications for iOS and Android platforms.",
      requirements: ["Mobile development experience", "Swift/Kotlin", "App Store deployment"],
      duration: "7 months",
      commitment: "Full-time",
    },
  ]

  // Generate service providers based on job type
  const generateServiceProviders = (jobTitle) => {
    const providers = [
      {
        id: 1,
        name: "Michael Johnson",
        rating: 4.9,
        reviews: 187,
        experience: "8+ years",
        price: "$65/hour",
        avatar: "👨‍💻",
        skills: ["Expert", "Leadership", "Strategic"],
        availability: "Available Now",
      },
      {
        id: 2,
        name: "Sarah Williams",
        rating: 4.8,
        reviews: 156,
        experience: "6+ years",
        price: "$60/hour",
        avatar: "👩‍💼",
        skills: ["Analytical", "Detail-oriented", "Collaborative"],
        availability: "Available This Week",
      },
      {
        id: 3,
        name: "David Brown",
        rating: 4.9,
        reviews: 234,
        experience: "10+ years",
        price: "$75/hour",
        avatar: "👨‍🔬",
        skills: ["Senior Expert", "Mentor", "Innovative"],
        availability: "Available Next Week",
      },
      {
        id: 4,
        name: "Jennifer Davis",
        rating: 4.7,
        reviews: 143,
        experience: "7+ years",
        price: "$58/hour",
        avatar: "👩‍🎨",
        skills: ["Creative", "User-focused", "Agile"],
        availability: "Available Now",
      },
      {
        id: 5,
        name: "Thomas Wilson",
        rating: 4.8,
        reviews: 198,
        experience: "9+ years",
        price: "$70/hour",
        avatar: "👨‍🏭",
        skills: ["Project Management", "Technical", "Results-driven"],
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
        <img src="/images/contract-hero.png" alt="Contract Jobs" className="hero-image" />
        <div className="hero-overlay">
          <h1>Contract Basis Jobs</h1>
          <p>Long-term projects with competitive rates. Build your expertise while working on meaningful projects.</p>
          <div className="job-count-badge">{filteredJobs.length} jobs available</div>
        </div>
      </div>

      <div className="jobs-container">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search contract jobs..."
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
                <span className="duration">
                  {job.duration} • {job.commitment}
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

      {/* Booking Modal - Same as other job pages */}
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

export default ContractJobs
