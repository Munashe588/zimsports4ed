import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AthleteRegistration from './components/AthleteRegistration'
const sportsData = {
  Football: {
    overview:
      "Football is a team sport that develops physical fitness, teamwork, discipline, communication and leadership.",

    why:
      "Football gives young people a positive environment to develop confidence, discipline, teamwork and sporting ability.",

    activities: [
      "Football training and skills development",
      "Grassroots talent identification",
      "School and community competitions",
      "Coaching and mentorship",
    ],

    skills: [
      "Ball control and passing",
      "Decision-making",
      "Teamwork and communication",
      "Leadership and discipline",
    ],

    opportunities:
      "Young players can progress through school and community football, structured training, competitions, academies and other sporting development opportunities.",
  },

  Athletics: {
    overview:
      "Athletics includes running, jumping and throwing events that help young people develop speed, strength, endurance, coordination and discipline.",

    why:
      "Athletics provides opportunities for young people to discover individual sporting abilities and develop physical fitness and confidence.",

    activities: [
      "Running and track training",
      "Jumping and throwing events",
      "Fitness and conditioning",
      "Competitions and talent identification",
    ],

    skills: [
      "Speed and endurance",
      "Strength and coordination",
      "Technique and concentration",
      "Discipline and goal setting",
    ],

    opportunities:
      "Young athletes can progress through school competitions, clubs, training programmes, competitions and further sporting development opportunities.",
  },

  Basketball: {
    overview:
      "Basketball is a fast-paced team sport that develops coordination, fitness, communication, decision-making and teamwork.",

    why:
      "Basketball encourages young people to stay active while developing teamwork, confidence and discipline.",

    activities: [
      "Basketball skills training",
      "Team practices",
      "School and community competitions",
      "Coaching and mentorship",
    ],

    skills: [
      "Dribbling and passing",
      "Shooting and movement",
      "Decision-making",
      "Teamwork and communication",
    ],

    opportunities:
      "Young players can develop through schools, community teams, competitions, coaching programmes and structured sporting pathways.",
  },

  Netball: {
    overview:
      "Netball is a team sport that develops agility, coordination, communication, fitness and tactical awareness.",

    why:
      "Netball creates opportunities for young people to build confidence, teamwork and physical fitness through structured participation.",

    activities: [
      "Netball skills training",
      "Team practices",
      "School and community competitions",
      "Coaching and mentorship",
    ],

    skills: [
      "Passing and movement",
      "Footwork and coordination",
      "Teamwork and communication",
      "Tactical awareness",
    ],

    opportunities:
      "Young players can progress through schools, clubs, community teams, competitions and further training opportunities.",
  },

  Volleyball: {
    overview:
      "Volleyball develops physical fitness, coordination, communication, teamwork and quick decision-making.",

    why:
      "Volleyball encourages young people to work together while developing confidence, discipline and sporting skills.",

    activities: [
      "Volleyball skills training",
      "Team practices",
      "School and community competitions",
      "Coaching and mentorship",
    ],

    skills: [
      "Serving and passing",
      "Attacking and defending",
      "Communication",
      "Teamwork and coordination",
    ],

    opportunities:
      "Young players can develop through schools, clubs, community competitions, coaching programmes and structured sporting pathways.",
  },

  Rugby: {
    overview:
      "Rugby is a team sport that develops physical fitness, teamwork, discipline, communication and resilience.",

    why:
      "Rugby provides young people with opportunities to develop teamwork, discipline, confidence and physical fitness.",

    activities: [
      "Rugby skills training",
      "Fitness and conditioning",
      "School and community competitions",
      "Coaching and mentorship",
    ],

    skills: [
      "Passing and ball handling",
      "Teamwork and communication",
      "Decision-making",
      "Discipline and resilience",
    ],

    opportunities:
      "Young players can progress through schools, clubs, community teams, competitions and further sporting development programmes.",
  },

  Boxing: {
    overview:
      "Boxing develops fitness, coordination, concentration, discipline and confidence through structured training.",

    why:
      "Boxing can help young people develop discipline, self-control, fitness and confidence in a structured sporting environment.",

    activities: [
      "Boxing technique training",
      "Fitness and conditioning",
      "Coaching and mentorship",
      "Structured competitions",
    ],

    skills: [
      "Coordination and movement",
      "Fitness and conditioning",
      "Concentration",
      "Discipline and self-control",
    ],

    opportunities:
      "Young participants can develop through clubs, structured training, coaching programmes and appropriate competitive pathways.",
  },

  Tennis: {
    overview:
      "Tennis is an individual and doubles sport that develops coordination, movement, concentration, fitness and strategic thinking.",

    why:
      "Tennis helps young people develop confidence, concentration, discipline and physical fitness.",

    activities: [
      "Tennis skills training",
      "Fitness and movement exercises",
      "School and community competitions",
      "Coaching and mentorship",
    ],

    skills: [
      "Racket control",
      "Movement and coordination",
      "Concentration",
      "Strategy and decision-making",
    ],

    opportunities:
      "Young players can progress through schools, clubs, competitions, coaching and structured development programmes.",
  },

  Swimming: {
    overview:
      "Swimming develops physical fitness, coordination, endurance, confidence and water safety skills.",

    why:
      "Swimming provides young people with opportunities to improve fitness, confidence and important water-based skills.",

    activities: [
      "Swimming skills training",
      "Fitness and endurance sessions",
      "Technique development",
      "Competitions and coaching",
    ],

    skills: [
      "Stroke technique",
      "Breathing and coordination",
      "Endurance",
      "Discipline and concentration",
    ],

    opportunities:
      "Young swimmers can develop through schools, clubs, training programmes, competitions and further sporting opportunities.",
  },

  Cycling: {
    overview:
      "Cycling develops endurance, coordination, balance, fitness and personal discipline.",

    why:
      "Cycling provides an active way for young people to develop fitness, confidence and sporting ability.",

    activities: [
      "Cycling skills training",
      "Fitness and endurance sessions",
      "Community cycling activities",
      "Competitions and coaching",
    ],

    skills: [
      "Balance and coordination",
      "Endurance",
      "Bike handling",
      "Discipline and goal setting",
    ],

    opportunities:
      "Young cyclists can develop through clubs, community activities, competitions, coaching and structured sporting pathways.",
  },

  "Table Tennis": {
    overview:
      "Table tennis develops coordination, concentration, reaction speed, movement and strategic thinking.",

    why:
      "Table tennis gives young people an accessible way to develop concentration, coordination, confidence and discipline.",

    activities: [
      "Table tennis skills training",
      "Practice sessions",
      "School and community competitions",
      "Coaching and mentorship",
    ],

    skills: [
      "Racket control",
      "Reaction speed",
      "Coordination",
      "Strategy and concentration",
    ],

    opportunities:
      "Young players can progress through schools, clubs, competitions, coaching programmes and structured sporting development.",
  },

  Chess: {
    overview:
      "Chess develops concentration, strategic thinking, problem-solving, patience and decision-making.",

    why:
      "Chess helps young people develop critical thinking, patience, planning and disciplined decision-making.",

    activities: [
      "Chess training and practice",
      "School chess activities",
      "Community competitions",
      "Coaching and mentorship",
    ],

    skills: [
      "Strategic thinking",
      "Problem-solving",
      "Concentration",
      "Planning and decision-making",
    ],

    opportunities:
      "Young players can develop through schools, clubs, competitions, coaching and structured chess programmes.",
  },
}
const programmes = [
  {
    id: 1,
    title: "Grassroots Talent Identification",
    shortDescription:
      "Identifying promising young athletes in schools and communities while creating opportunities for further sporting development.",
    overview:
      "A programme focused on discovering promising sporting talent at grassroots level and helping young people connect with opportunities for further development.",
    activities: [
      "School and community talent identification",
      "Sporting participation and assessment",
      "Talent development support",
      "Connection to further sporting opportunities",
    ],
  },
  {
    id: 2,
    title: "Youth Sports Development",
    shortDescription:
      "Providing young people with opportunities to participate, train, develop sporting skills, and build discipline, teamwork and leadership.",
    overview:
      "A youth-focused programme that uses sport to support participation, personal development, discipline, teamwork and leadership.",
    activities: [
      "Sport participation",
      "Training and skills development",
      "Teamwork and leadership development",
      "Positive youth engagement",
    ],
  },
  {
    id: 3,
    title: "Schools Sports Programme",
    shortDescription:
      "Supporting sporting activities in schools through competitions, training, talent identification and youth participation.",
    overview:
      "A programme designed to strengthen sporting participation in schools while creating opportunities for young athletes to develop and showcase their abilities.",
    activities: [
      "School sporting activities",
      "Competitions and participation",
      "Talent identification",
      "Training and development",
    ],
  },
  {
    id: 4,
    title: "Community Sports Programme",
    shortDescription:
      "Bringing organised sport into communities to encourage participation, connection and positive youth development.",
    overview:
      "A community-focused programme using organised sport to encourage participation, connection and positive development among young people.",
    activities: [
      "Community sporting activities",
      "Youth participation",
      "Team-based activities",
      "Community engagement",
    ],
  },
  {
    id: 5,
    title: "Athlete Development & Mentorship",
    shortDescription:
      "Supporting emerging athletes through coaching, mentorship, life skills and guidance throughout their sporting journey.",
    overview:
      "A programme supporting emerging athletes with development, mentorship and guidance as they progress through their sporting journey.",
    activities: [
      "Athlete mentorship",
      "Coaching support",
      "Life skills development",
      "Sporting guidance",
    ],
  },
  {
    id: 6,
    title: "Sports Opportunities & Pathways",
    shortDescription:
      "Connecting talented young people with academies, scholarships, competitions and other sporting development opportunities.",
    overview:
      "A programme focused on helping young people identify and connect with relevant sporting and development opportunities.",
    activities: [
      "Opportunity identification",
      "Academy connections",
      "Scholarship opportunities",
      "Competition pathways",
    ],
  },
  {
    id: 7,
    title: "Youth Leadership Through Sport",
    shortDescription:
      "Developing leadership, teamwork, communication and responsibility through sporting and community activities.",
    overview:
      "A programme using sport as a platform for young people to develop leadership, communication, teamwork and responsibility.",
    activities: [
      "Leadership development",
      "Teamwork",
      "Communication skills",
      "Community responsibility",
    ],
  },
  {
    id: 8,
    title: "Inclusive & Community Sport",
    shortDescription:
      "Creating opportunities for young people from different backgrounds to participate, connect and grow through sport.",
    overview:
      "A programme promoting inclusive participation and community connection through accessible sporting activities.",
    activities: [
      "Inclusive sporting participation",
      "Community connection",
      "Team activities",
      "Positive youth development",
    ],
  },
  {
    id: 9,
    title: "Say No to Drugs",
    shortDescription:
      "Using sport as a positive alternative to idleness and substance abuse while promoting healthy choices, discipline and positive youth development.",
    overview:
      "A programme that uses sport and positive youth engagement to encourage healthy choices, discipline and constructive use of time.",
    activities: [
      "Sport-based youth engagement",
      "Positive activities",
      "Discipline and teamwork",
      "Healthy lifestyle awareness",
    ],
  },
]
function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [selectedProgramme, setSelectedProgramme] = useState(null)
  const [selectedSport, setSelectedSport] = useState(null)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null)
 
if (window.location.pathname === '/register') {
  return <AthleteRegistration />
}
  return (
    <div>
     {/* Navigation */}
<nav className="navbar">

  <div className="logo">
    <img src="/Logo.png" alt="ZimSports4ED logo" />
  </div>

  {/* Mobile hamburger button */}
  <button
    className="mobile-menu-button"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Open navigation menu"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

 {/* Navigation links */}
<div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>

  <a href="#" onClick={() => setMenuOpen(false)}>
    Home
  </a>

  <a href="#about" onClick={() => setMenuOpen(false)}>
    About
  </a>

  <a href="#programmes" onClick={() => setMenuOpen(false)}>
    Programmes
  </a>

  <a href="#talent" onClick={() => setMenuOpen(false)}>
    Talent
  </a>

  <a href="#talent" onClick={() => setMenuOpen(false)}>
    Opportunities
  </a>

  <a href="#contact" onClick={() => setMenuOpen(false)}>
    Contact
  </a>

  <a
    href="/register"
    className="register-nav"
    onClick={() => setMenuOpen(false)}
  >
    Register
  </a>

</div>

<a href="#contact" className="join-button">
  Get Involved
</a>

</nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small">SPORT • YOUTH • OPPORTUNITY</p>

          <h1>
            Empowering Youth
            <br />
            Through Sport
          </h1>

          <p className="hero-text">
            Identifying talent, creating opportunities, and building
            stronger communities through sport.
          </p>

          <div className="hero-buttons">
            <a href="#programmes" className="primary-button">
  Explore Programmes
</a>
<a href="#about" className="secondary-button">
  Learn More
</a>
          </div>
        </div>
      </section>
      {/* Who We Are */}
<section id="about" className="about-section">
  <div className="about-content">
    <p className="section-label">WHO WE ARE</p>

    <h2>Sport as a pathway to a better future.</h2>

    <p className="about-text">
      ZimSports4ED uses the power of sport to empower young people,
      identify grassroots talent, create opportunities, and strengthen
      communities across Zimbabwe.
    </p>

    <div className="about-cards">
      <div className="about-card">
        <h3>Our Vision</h3>
        <p>
          An empowered, disciplined, and economically active youth
          contributing to national development and cohesion.
        </p>
      </div>

      <div className="about-card">
        <h3>Our Mission</h3>
        <p>
          To leverage sport for youth development, social inclusion,
          talent identification, and sustainable community engagement.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Core Values */}
<section className="values-section">
  <div className="values-header">
    <p className="section-label">WHAT WE STAND FOR</p>

    <h2>Creating impact through sport.</h2>

    <p>
      We believe sport can create opportunities, develop talent,
      and bring communities together.
    </p>
  </div>

  <div className="values-grid">
    <div className="value-card">
      <span>01</span>
      <h3>Talent Development</h3>
      <p>
        Identifying and developing grassroots sporting talent
        across multiple disciplines.
      </p>
    </div>

    <div className="value-card">
      <span>02</span>
      <h3>Positive Youth Development</h3>
      <p>
        Providing positive alternatives to drug abuse, idleness,
        and other challenges facing young people.
      </p>
    </div>

    <div className="value-card">
      <span>03</span>
      <h3>Opportunity & Pathways</h3>
      <p>
        Connecting emerging talent to academies, scholarships,
        professional opportunities, and further development.
      </p>
    </div>

    <div className="value-card">
      <span>04</span>
      <h3>Unity & Community</h3>
      <p>
        Fostering community participation, social inclusion,
        teamwork, and national cohesion.
      </p>
    </div>
  </div>
</section>
{/* Sports & Programmes */}
<section id="programmes" className="sports-section">
  <div className="sports-header">
    <p className="section-label">SPORTS & PROGRAMMES</p>

    <h2>Creating pathways through sport.</h2>

    <p>
      Creating opportunities for young people to participate,
      develop their talents, build life skills, and pursue
      meaningful pathways through sport.
    </p>
  </div>

  {/* Sports Disciplines */}
  <div className="sports-disciplines">
    <h3>Sports Disciplines</h3>

    <div className="discipline-list">
  <button className="sport-button" onClick={() => setSelectedSport("Football")}>
    Football
  </button>

  <button className="sport-button" onClick={() => setSelectedSport("Athletics")}>
    Athletics
  </button>

  <button className="sport-button" onClick={() => setSelectedSport("Basketball")}>
    Basketball
  </button>

  <button className="sport-button" onClick={() => setSelectedSport("Netball")}>
    Netball
  </button>

  <button className="sport-button" onClick={() => setSelectedSport("Volleyball")}>
    Volleyball
  </button>

  <button className="sport-button" onClick={() => setSelectedSport("Rugby")}>
    Rugby
  </button>

  <button className="sport-button" onClick={() => setSelectedSport("Boxing")}>
    Boxing
  </button>

  <button className="sport-button" onClick={() => setSelectedSport("Tennis")}>
    Tennis
  </button>

  <button className="sport-button" onClick={() => setSelectedSport("Swimming")}>
    Swimming
  </button>

  <button className="sport-button" onClick={() => setSelectedSport("Cycling")}>
    Cycling
  </button>

  <button className="sport-button" onClick={() => setSelectedSport("Table Tennis")}>
    Table Tennis
  </button>

  <button className="sport-button" onClick={() => setSelectedSport("Chess")}>
    Chess
  </button>
</div>
  </div>

  {/* Our Programmes */}
  <div className="programmes-heading">
    <p className="section-label">OUR PROGRAMMES</p>

    <h3>Sport with purpose.</h3>
  </div>

  <div className="sports-grid">

   <div className="sport-card">
  <div className="sport-number">01</div>

  <h3>Grassroots Talent Identification</h3>

  <p>
    Identifying promising young athletes in schools and
    communities while creating opportunities for further
    sporting development.
  </p>

 <button
  className="programme-explore"
  onClick={() => setSelectedProgramme(programmes[0])}
>
  Explore →
</button>
</div>

    <div className="sport-card">
      <div className="sport-number">02</div>
      <h3>Youth Sports Development</h3>
      <p>
        Providing young people with opportunities to participate,
        train, develop sporting skills, and build discipline,
        teamwork and leadership.
      </p>
     <button
  className="programme-explore"
  onClick={() => setSelectedProgramme(programmes[1])}
>
  Explore →
</button>
    </div>

    <div className="sport-card">
      <div className="sport-number">03</div>
      <h3>Schools Sports Programme</h3>
      <p>
        Supporting sporting activities in schools through
        competitions, training, talent identification and
        youth participation.
      </p>
      <button
  className="programme-explore"
  onClick={() => setSelectedProgramme(programmes[2])}
>
  Explore →
</button>
    </div>

    <div className="sport-card">
      <div className="sport-number">04</div>
      <h3>Community Sports Programme</h3>
      <p>
        Bringing organised sport into communities to encourage
        participation, connection and positive youth development.
      </p>
     <button
  className="programme-explore"
  onClick={() => setSelectedProgramme(programmes[3])}
>
  Explore →
</button>
    </div>

    <div className="sport-card">
      <div className="sport-number">05</div>
      <h3>Athlete Development & Mentorship</h3>
      <p>
        Supporting emerging athletes through coaching, mentorship,
        life skills and guidance throughout their sporting journey.
      </p>
     <button
  className="programme-explore"
  onClick={() => setSelectedProgramme(programmes[4])}
>
  Explore →
</button>
    </div>

    <div className="sport-card">
      <div className="sport-number">06</div>
      <h3>Sports Opportunities & Pathways</h3>
      <p>
        Connecting talented young people with academies,
        scholarships, competitions and other sporting
        development opportunities.
      </p>
     <button
  className="programme-explore"
  onClick={() => setSelectedProgramme(programmes[5])}
>
  Explore →
</button>
    </div>

    <div className="sport-card">
      <div className="sport-number">07</div>
      <h3>Youth Leadership Through Sport</h3>
      <p>
        Developing leadership, teamwork, communication and
        responsibility through sporting and community activities.
      </p>
      <button
  className="programme-explore"
  onClick={() => setSelectedProgramme(programmes[6])}
>
  Explore →
</button>
    </div>

    <div className="sport-card">
      <div className="sport-number">08</div>
      <h3>Inclusive & Community Sport</h3>
      <p>
        Creating opportunities for young people from different
        backgrounds to participate, connect and grow through sport.
      </p>
     <button
  className="programme-explore"
  onClick={() => setSelectedProgramme(programmes[7])}
>
  Explore →
</button>
    </div>

    <div className="sport-card">
      <div className="sport-number">09</div>
      <h3>Say No to Drugs</h3>
      <p>
        Using sport as a positive alternative to idleness and
        substance abuse while promoting healthy choices,
        discipline and positive youth development.
      </p>
      <button
  className="programme-explore"
  onClick={() => setSelectedProgramme(programmes[8])}
>
  Explore →
</button>
    </div>

  </div>
</section>
{selectedProgramme && (
  
  <div className="programme-modal">
    <div className="programme-modal-content">

      <button
        className="programme-close"
        onClick={() => setSelectedProgramme(null)}
      >
        ×
      </button>

      <p className="section-label">PROGRAMME DETAILS</p>

      <h2>{selectedProgramme.title}</h2>

      <p className="programme-overview">
        {selectedProgramme.overview}
      </p>

      <h3>What the programme involves</h3>

      <ul>
        {selectedProgramme.activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>

      <a href="#contact" className="programme-contact">
        Get Involved →
      </a>

    </div>
  </div>
  
)}
{selectedSport && (
  <div className="sport-modal">
    <div className="sport-modal-content">

      <button
        className="sport-close"
        onClick={() => setSelectedSport(null)}
      >
        ×
      </button>

      <p className="section-label">SPORT DETAILS</p>

      <h2>{selectedSport}</h2>

      <p>
        {sportsData[selectedSport].overview}
      </p>

      <h3>Why it matters for youth</h3>

      <p>
        {sportsData[selectedSport].why}
      </p>

      <h3>Key activities</h3>

      <ul>
        {sportsData[selectedSport].activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>

      <h3>Skills developed</h3>

      <ul>
        {sportsData[selectedSport].skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Opportunities & pathways</h3>

      <p>
        {sportsData[selectedSport].opportunities}
      </p>

      <a href="#contact" className="sport-contact">
        Get Involved →
      </a>

    </div>
  </div>
)}
{selectedGalleryImage && (
  <div
    className="gallery-lightbox"
    onClick={() => setSelectedGalleryImage(null)}
  >
    <button
      className="gallery-lightbox-close"
      onClick={() => setSelectedGalleryImage(null)}
      aria-label="Close gallery"
    >
      ×
    </button>

    <img
      src={selectedGalleryImage}
      alt="ZimSports4ED gallery"
      onClick={(event) => event.stopPropagation()}
    />
  </div>
)}
{/* Talent & Opportunities */}
<section id="talent" className="pathway-section">
  <div className="pathway-content">

    <div className="pathway-intro">
      <p className="section-label">TALENT & OPPORTUNITIES</p>

      <h2>From grassroots talent to greater opportunities.</h2>

      <p>
        ZimSports4ED creates a clear pathway for young people
        to discover their potential, develop their abilities,
        connect with opportunities, and progress towards their goals.
      </p>
    </div>

    <div className="pathway-steps">

      <div className="pathway-step">
        <span>01</span>
        <div>
          <h3>Discover</h3>
          <p>
            Identify promising young talent through schools,
            communities, grassroots activities and sporting events.
          </p>
        </div>
      </div>

      <div className="pathway-step">
        <span>02</span>
        <div>
          <h3>Develop</h3>
          <p>
            Provide young athletes with training, coaching,
            mentorship and opportunities to strengthen their skills.
          </p>
        </div>
      </div>

      <div className="pathway-step">
        <span>03</span>
        <div>
          <h3>Connect</h3>
          <p>
            Connect emerging talent with coaches, academies,
            competitions, scholarships and development programmes.
          </p>
        </div>
      </div>

      <div className="pathway-step">
        <span>04</span>
        <div>
          <h3>Progress</h3>
          <p>
            Support young people as they pursue further education,
            sporting opportunities and pathways towards their future.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
{/* News & Events */}
<section id="news" className="news-section">
  <div className="news-header">
    <div>
      <p className="section-label">LATEST NEWS</p>

      <h2>News, events & opportunities.</h2>

      <p className="news-intro">
        Follow the latest developments, activities and
        opportunities connected to ZimSports4ED.
      </p>
    </div>

    <a href="/#contact" className="view-all">
      Get Updates →
    </a>
  </div>

  <div className="news-grid">

    <article className="news-card">
     <div className="news-image">
  <img src="/New-1.jpg" alt="ZimSports4ED youth talent development" />
</div>

      <div className="news-info">
        <span>NEWS</span>

        <h3>
          ZIMSPORT4ED Drives Youth Talent Into Economic Empowerment Through Sport
        </h3>

        <p>
          ZIMSPORT4ED's work highlights the role of sport in
          developing young talent and creating pathways towards
          economic opportunities.
        </p>

        <a
          href="https://www.heraldonline.co.zw/zimsport4ed-drives-youth-talent-into-economic-empowerment-through-sport/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read article →
        </a>
      </div>
    </article>


    <article className="news-card">
      <div className="news-image">
  <img src="/news-2.jpg" alt="ZimSports4ED sporting talent programme" />
</div>

      <div className="news-info">
        <span>SPORT</span>

        <h3>
          ZIMSPORT4ED Turns Sporting Talent Into Livelihoods For Youths
        </h3>

        <p>
          ZIMSPORTS4ED has demonstrated its support for
          Zimbabwean football and the development of sport
          at different levels.
        </p>

        <a
          href="https://www.heraldonline.co.zw/zimsport4ed-turns-sporting-talent-into-livelihoods-for-youths/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read article →
        </a>
      </div>
    </article>


    <article className="news-card">
      <div className="news-image">
  <img src="/news-3.jpg" alt="ZimSports4ED youth sports tournament" />
</div>

      <div className="news-info">
        <span>EVENT</span>

        <h3>
          Youth Sports Tournament Kicks Off Munhumutapa Day Celebrations
        </h3>

        <p>
          A youth sporting tournament facilitated by
          ZIMSPORTS4ED formed part of the Munhumutapa Day
          celebrations in Harare.
        </p>

        <a
          href="https://www.heraldonline.co.zw/youth-sports-tourney-kicks-off-munhumutapa-day-celebrations/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read article →
        </a>
      </div>
    </article>

  </div>
</section>
<section id="gallery" className="gallery-section">
  <div className="gallery-header">
    <p className="section-label">GALLERY</p>
    <h2>Sport in action.</h2>
    <p>
      Explore moments from our sporting programmes, community activities,
      youth events and opportunities.
    </p>
  </div>

  <div className="gallery-grid">

    <button
      className="gallery-item"
      onClick={() => setSelectedGalleryImage("/gallery-1.jpg")}
    >
      <img src="/gallery-1.jpg" alt="Sports and action" />
      <span>Sports & Action</span>
    </button>

    <button
      className="gallery-item"
      onClick={() => setSelectedGalleryImage("/gallery-2.jpg")}
    >
      <img src="/gallery-2.jpg" alt="Youth programmes" />
      <span>Youth Programmes</span>
    </button>

    <button
      className="gallery-item"
      onClick={() => setSelectedGalleryImage("/gallery-3.jpg")}
    >
      <img src="/gallery-3.jpg" alt="Community events" />
      <span>Community Events</span>
    </button>

    <button
      className="gallery-item"
      onClick={() => setSelectedGalleryImage("/gallery-4.jpg")}
    >
      <img src="/gallery-4.jpg" alt="Schools and development" />
      <span>Schools & Development</span>
    </button>

    <button
      className="gallery-item"
      onClick={() => setSelectedGalleryImage("/gallery-5.jpg")}
    >
      <img src="/gallery-5.jpg" alt="Sports tournaments" />
      <span>Tournaments</span>
    </button>

    <button
      className="gallery-item"
      onClick={() => setSelectedGalleryImage("/gallery-6.jpg")}
    >
      <img src="/gallery-6.jpg" alt="Training and coaching" />
      <span>Training & Coaching</span>
    </button>

  </div>
</section>



{/* Contact Section */}
<section id="contact" className="contact-section">
  <div className="contact-content">

    <div className="contact-text">
      <p className="section-label">GET INVOLVED</p>

      <h2>Be part of the movement.</h2>

      <p>
        Whether you are a young athlete, coach, school, organisation,
        sponsor, volunteer, or community member, there is a place
        for you in the ZimSports4ED movement.
      </p>

      <div className="contact-details">
        <h3>Connect with ZimSports4ED</h3>

        <p>
          For partnerships, programmes, opportunities and general
          enquiries, get in touch with our team.
        </p>

        <div className="contact-info">
 <p> <strong>Email</strong><br />
<a href="mailto:munashetsoka80@gmail.com">
  munashetsoka80@gmail.com
</a></p>

  <p>
   <strong>Phone</strong><br />
<a href="tel:+263778181710">
  0778 181 710
</a>
  </p>

  <p>
    <strong>Address</strong><br />
    Pennefather Ave, Harare
  </p>
</div>
      </div>
    </div>

    <div className="contact-form-container">
      <h3>Get Involved</h3>

      <form
  className="contact-form"
  action="https://formspree.io/f/mwlpvkdg"
  method="POST"
>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>
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
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="interest">I am a...</label>

          <select id="interest" name="interest" required>
            <option value="">Select an option</option>
            <option value="athlete">Athlete</option>
            <option value="coach">Coach</option>
            <option value="school">School</option>
            <option value="organisation">Organisation</option>
            <option value="sponsor">Sponsor</option>
            <option value="volunteer">Volunteer</option>
            <option value="community">Community Member</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell us how you would like to get involved..."
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-submit">
          Submit Enquiry →
        </button>

      </form>
    </div>

  </div>

  <div className="social-links">
  <a
    href="https://www.instagram.com/zimsport4ed_?stkn=MWZqaHh1YjBteXo3NQ%3D%3D&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    title="Instagram"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
    </svg>
    <span>Instagram</span>
  </a>

  <a
    href="https://www.facebook.com/tanya.mhofu.2025?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    title="Facebook"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 22v-9h3l.5-3h-3.5V8c0-.87.29-1.5 1.53-1.5H17V3.14C16.66 3.09 15.48 3 14.08 3 11.16 3 9.5 4.78 9.5 8.05V10H6.5v3h3v9h4z" />
    </svg>
    <span>Facebook</span>
  </a>

  <a
    href="https://www.tiktok.com/@zimsport4ed_2030_zw?_r=1&_t=ZS-99rUofIYoWQ"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
    title="TikTok"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.6 5.82A4.85 4.85 0 0 1 13.77 3h-3.14v12.55a2.63 2.63 0 1 1-2.27-2.61V9.75a5.77 5.77 0 1 0 5.41 5.75V9.14a8 8 0 0 0 4.68 1.5V7.5a4.84 4.84 0 0 1-1.85-.68z" />
    </svg>
    <span>TikTok</span>
  </a>
</div>
</section>

{/* Footer */}
<footer className="footer">
  <div className="footer-top">
    <div className="footer-brand">
      <h3>ZimSports4ED</h3>
      <p>
        Empowering Zimbabwe's youth through sport, opportunity,
        and community.
      </p>
    </div>

    <div className="footer-links">
      <div>
        <h4>Explore</h4>
       <a href="#about">About</a>
<a href="#programmes">Programmes</a>
<a href="#talent">Talent</a>
      </div>

      <div>
        <h4>Connect</h4>
       <a href="#talent">Opportunities</a>
<a href="#news">News & Events</a>
<a href="#contact">Contact</a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <div>
  <p>© 2026 ZimSports4ED. All rights reserved.</p>
  <p className="developer-credit">
    Digital Platform Design & Development — Munashe Tsoka • IT Support and Web Developer
  </p>
</div>

<p>Sport • Youth • Opportunity</p>
  </div>
</footer>
    </div>
  );
}

export default App;