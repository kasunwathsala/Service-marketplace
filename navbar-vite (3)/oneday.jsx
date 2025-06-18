"use client"

import { useState } from "react"
import "./jobs.css"

const OneDayJobs = () => {
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
      title: "Event Photography",
      company: "Creative Studios",
      location: "New York, NY",
      pay: "$300/day",
      description: "Capture moments at corporate event. Professional camera equipment provided.",
      requirements: ["Photography experience", "Own transportation", "Professional attire"],
      duration: "8 hours",
      date: "Tomorrow",
    },
    {
      id: 2,
      title: "Data Entry Specialist",
      company: "Tech Solutions Inc",
      location: "Remote",
      pay: "$150/day",
      description: "Input customer data into company database. Fast typing skills required.",
      requirements: ["Typing 60+ WPM", "Attention to detail", "Excel knowledge"],
      duration: "6 hours",
      date: "This Weekend",
    },
    {
      id: 3,
      title: "Event Setup Assistant",
      company: "Party Planners Co",
      location: "Los Angeles, CA",
      pay: "$200/day",
      description: "Help setup decorations and equipment for wedding reception.",
      requirements: ["Physical fitness", "Team player", "Flexible schedule"],
      duration: "10 hours",
      date: "Next Week",
    },
    {
      id: 4,
      title: "Social Media Content Creator",
      company: "Fashion Brand",
      location: "Miami, FL",
      pay: "$250/day",
      description: "Create engaging content for Instagram and TikTok campaigns.",
      requirements: ["Social media experience", "Creative mindset", "Own smartphone"],
      duration: "4 hours",
      date: "Today",
    },
    {
      id: 5,
      title: "Delivery Driver",
      company: "Quick Delivery",
      location: "Chicago, IL",
      pay: "$180/day",
      description: "Deliver packages across the city using your own vehicle.",
      requirements: ["Valid driver's license", "Clean driving record", "GPS navigation skills"],
      duration: "8 hours",
      date: "Tomorrow",
    },
    {
      id: 6,
      title: "Retail Assistant",
      company: "Fashion Outlet",
      location: "Austin, TX",
      pay: "$120/day",
      description: "Assist customers and organize merchandise during busy sale period.",
      requirements: ["Customer service experience", "Standing for long periods", "Friendly personality"],
      duration: "6 hours",
      date: "This Weekend",
    },
    {
      id: 7,
      title: "Warehouse Helper",
      company: "Logistics Pro",
      location: "Seattle, WA",
      pay: "$160/day",
      description: "Sort and organize inventory in warehouse facility.",
      requirements: ["Ability to lift 50 lbs", "Safety conscious", "Following instructions"],
      duration: "8 hours",
      date: "Next Week",
    },
    {
      id: 8,
      title: "Office Admin Support",
      company: "Business Services",
      location: "Boston, MA",
      pay: "$140/day",
      description: "Provide administrative support including filing and data organization.",
      requirements: ["Microsoft Office skills", "Organization skills", "Professional demeanor"],
      duration: "7 hours",
      date: "Today",
    },
    {
      id: 9,
      title: "Customer Service Rep",
      company: "Customer Care",
      location: "Remote",
      pay: "$130/day",
      description: "Handle customer inquiries via phone and email for one day coverage.",
      requirements: ["Clear speaking voice", "Problem-solving skills", "Positive attitude"],
      duration: "8 hours",
      date: "Tomorrow",
    },
    {
      id: 10,
      title: "Catering Staff",
      company: "Food & Events",
      location: "Denver, CO",
      pay: "$170/day",
      description: "Serve food and beverages at corporate event.",
      requirements: ["Food handling experience", "Fast-paced work", "Cleanliness standards"],
      duration: "6 hours",
      date: "This Weekend",
    },
  ]

  // Generate service providers based on job type
  const generateServiceProviders = (jobTitle) => {
    const providers = [
      {
        id: 1,
        name: "John Smith",
        rating: 4.9,
        reviews: 127,
        experience: "5+ years",
        price: "$25/hour",
        avatar: "👨‍💼",
        skills: ["Professional", "Reliable", "Fast"],
        availability: "Available Now",
      },
      {
        id: 2,
        name: "Sarah Johnson",
        rating: 4.8,
        reviews: 89,
        experience: "3+ years",
        price: "$22/hour",
        avatar: "👩‍💼",
        skills: ["Creative", "Detail-oriented", "Flexible"],
        availability: "Available Today",
      },
      {
        id: 3,
        name: "Mike Davis",
        rating: 4.7,
        reviews: 156,
        experience: "7+ years",
        price: "$30/hour",
        avatar: "👨‍🔧",
        skills: ["Expert", "Punctual", "Professional"],
        availability: "Available Tomorrow",
      },
      {
        id: 4,
        name: "Emily Chen",
        rating: 4.9,
        reviews: 203,
        experience: "4+ years",
        price: "$28/hour",
        avatar: "👩‍🎨",
        skills: ["Innovative", "Efficient", "Friendly"],
        availability: "Available Now",
      },
      {
        id: 5,
        name: "David Wilson",
        rating: 4.6,
        reviews: 74,
        experience: "2+ years",
        price: "$20/hour",
        avatar: "👨‍💻",
        skills: ["Tech-savvy", "Quick learner", "Adaptable"],
        availability: "Available This Week",
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
        <img src="/images/oneday-hero.png" alt="One Day Jobs" className="hero-image" />
        <div className="hero-overlay">
          <h1>One Day Jobs</h1>
          <p>Quick gigs that pay well. Perfect for earning extra income in your spare time.</p>
          <div className="job-count-badge">{filteredJobs.length} jobs available</div>
        </div>
      </div>

      <div className="jobs-container">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search one day jobs..."
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
                  {job.duration} • {job.date}
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

export default OneDayJobs
