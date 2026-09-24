import { useState } from 'react'
import { supabase } from '../supabase'

function AthleteRegistration() {

  const [registrationStatus, setRegistrationStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAthleteRegistration = async (event) => {
    event.preventDefault()

    setIsSubmitting(true)
    setRegistrationStatus('')

    const form = event.currentTarget
    const formData = new FormData(form)

    const athlete = {
      full_name: formData.get('athleteName'),
      date_of_birth: formData.get('dateOfBirth'),
      gender: formData.get('gender'),
      phone: formData.get('phone'),
      email: formData.get('email') || null,
      province: formData.get('province'),
      city_district: formData.get('location'),
      sport: formData.get('sport'),
      club_team: formData.get('club') || null,
      experience: formData.get('experience') || null,
      guardian_name: formData.get('guardianName') || null,
      guardian_phone: formData.get('guardianPhone') || null,
      consent: formData.get('registrationConsent') === 'on',
    }

    const { error } = await supabase
      .from('athletes')
      .insert([athlete])

    if (error) {
      console.error('Registration error:', error)
      setRegistrationStatus('error')
      setIsSubmitting(false)
      return
    }

    setRegistrationStatus('success')
    setIsSubmitting(false)
    form.reset()
  }

return (
  <>
    {/* Registration Page Header */}
    <header className="registration-page-header">

      <a href="/" className="registration-logo">
        <img
          src="/Logo.png"
          alt="Zimsport4ED logo"
        />
      </a>

      <a href="/" className="back-to-website">
        ← Back to Website
      </a>

    </header>

    <section id="register" className="registration-section">
  <div className="registration-header">
    <span className="section-label">JOIN THE TALENT NETWORK</span>

    <h2>Register as an Athlete</h2>

    <p>
      Take the next step in your sporting journey. Register with
      Zimsport4ED and tell us about your sport, experience and ambitions.
    </p>
  </div>

  <form
  className="athlete-form"
  onSubmit={handleAthleteRegistration}
>

    <div className="form-row">

      <div className="form-group">
        <label htmlFor="athleteName">Full Name</label>
        <input
          type="text"
          id="athleteName"
          name="athleteName"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          required
        />
      </div>

    </div>


    <div className="form-row">

      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" required>
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="e.g. 077..."
          required
        />
      </div>

    </div>
    <div className="form-row">

  <div className="form-group">
    <label htmlFor="email">Email Address</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter your email address"
    />
  </div>

  <div className="form-group">
    <label htmlFor="province">Province</label>
    <select id="province" name="province" required>
      <option value="">Select province</option>
      <option>Bulawayo</option>
      <option>Harare</option>
      <option>Manicaland</option>
      <option>Mashonaland Central</option>
      <option>Mashonaland East</option>
      <option>Mashonaland West</option>
      <option>Masvingo</option>
      <option>Matabeleland North</option>
      <option>Matabeleland South</option>
      <option>Midlands</option>
    </select>
  </div>

</div>


    <div className="form-row">

      <div className="form-group">
        <label htmlFor="location">City / District</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter your city or district"
          required
        />
      </div>
      <div className="form-group">
  <label htmlFor="club">
    School / Club / Team
  </label>

  <input
    type="text"
    id="club"
    name="club"
    placeholder="Enter your school, club or team (if applicable)"
  />
</div>

      <div className="form-group">
        <label htmlFor="sport">Sport</label>

        <select id="sport" name="sport" required>
          <option value="">Select your sport</option>
          <option>Football</option>
          <option>Athletics</option>
          <option>Basketball</option>
          <option>Netball</option>
          <option>Volleyball</option>
          <option>Rugby</option>
          <option>Boxing</option>
          <option>Tennis</option>
          <option>Swimming</option>
          <option>Cycling</option>
          <option>Table Tennis</option>
          <option>Chess</option>
        </select>
      </div>

    </div>


    <div className="form-group">
      <label htmlFor="experience">Sporting Experience</label>

      <textarea
        id="experience"
        name="experience"
        rows="5"
        placeholder="Tell us briefly about your sporting experience, team, school, club or achievements."
      ></textarea>
    </div>
{/* Parent / Guardian Information */}
<div className="guardian-section">

  <h3>Parent / Guardian Information</h3>

  <p className="guardian-note">
    Required for athletes under 18 years of age.
  </p>

  <div className="form-row">

    <div className="form-group">
      <label htmlFor="guardianName">
        Parent / Guardian Full Name
      </label>

      <input
        type="text"
        id="guardianName"
        name="guardianName"
        placeholder="Enter parent or guardian name"
      />
    </div>

    <div className="form-group">
      <label htmlFor="guardianPhone">
        Parent / Guardian Phone Number
      </label>

      <input
        type="tel"
        id="guardianPhone"
        name="guardianPhone"
        placeholder="e.g. 077..."
      />
    </div>

  </div>

</div>

    <div className="registration-consent">
      <input
        type="checkbox"
        id="registrationConsent"
        name="registrationConsent"
        required
      />

      <label htmlFor="registrationConsent">
        I confirm that the information provided is accurate and I consent
        to Zimsport4ED using it for registration and programme purposes.
      </label>
    </div>
    


    <button
  type="submit"
  className="register-submit"
  disabled={isSubmitting}
>
  {isSubmitting ? 'Submitting...' : 'Register Athlete'}
</button>
{registrationStatus === 'success' && (
  <div className="registration-success">
    <h3>Welcome to Zimsport4ED! </h3>
    <p>
      Your athlete registration has been successfully submitted.
      Thank you for taking the next step in your sporting journey.
      Our team will review your information and contact you when necessary.
    </p>
  </div>
)}

{registrationStatus === 'error' && (
  <div className="registration-error">
    <strong>Registration could not be submitted.</strong>
    <p>Please check your information and try again.</p>
  </div>
)}

  </form>

</section>
  </>
)
}

export default AthleteRegistration