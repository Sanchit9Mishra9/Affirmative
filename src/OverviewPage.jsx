import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Chevron, CtaLink } from './Chrome'
import {
  blogPosts,
  communityItems,
  images,
  impactStats,
  locations,
  people,
} from './data'
import PartnershipMark from './PartnershipMark'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${images.hero})` }} />
      <div className="hero-rays" aria-hidden="true">
        <PartnershipMark />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">Welcome to</p>
        <h1>Truegrow India</h1>
        <p className="hero-desc">
          For 30+ years, we have partnered with many of India’s companies and
          public institutions to create winning strategies and solve some of the
          most complex problems.
        </p>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="intro">
      <div className="intro-inner">
        <p>
          We work with India’s largest companies—helping several become global
          champions—and with smaller, dynamic ones looking to mobilize change and{' '}
          <a href="#">accelerate sustainable and inclusive growth</a>. We partner
          with government leaders to help drive growth and build capabilities. Our
          insights are shaped by leading industry experts, cutting-edge digital and
          analytics tools, and our decades of experience serving the world’s largest
          corporations.
        </p>
      </div>
    </section>
  )
}

function Impact() {
  return (
    <section className="impact-wrap">
      <div className="impact">
        <h2 className="section-label">Our impact</h2>
        <div className="impact-grid">
          {impactStats.map((stat) => (
            <div className="impact-item" key={stat.value}>
              <div className="impact-value">{stat.value}</div>
              <div className="impact-subtitle">{stat.subtitle}</div>
              <div className="impact-detail">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedInsights() {
  return (
    <>
      <section className="featured-wrap" id="insights">
        <div className="featured">
          <h2 className="section-label">Featured Insights</h2>
          <div className="feature-card feature-card--insight">
            <div className="feature-media">
              <img src={images.indiaAhead} alt="India Ahead" />
            </div>
            <div className="feature-body">
              <h3>
                <a href="#">
                  India Ahead
                  <Chevron />
                </a>
              </h3>
              <p>
                As India crosses 75 years of independence, governments, businesses and
                local communities are looking ahead to create sustainable, inclusive
                growth and opportunities to fulfil the country’s true potential.
                Browse key insights in this collection of interviews, reports and
                multimedia content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-wrap">
        <div className="feature-card feature-card--tech">
          <div className="feature-body">
            <h3>Tech that moves everything</h3>
            <p>
              There’s tech. Then there’s tech that reimagines and rewires
              organizations - powered by people, built with AI, and proven to create
              lasting value.
            </p>
            <CtaLink light>Get started</CtaLink>
          </div>
          <div
            className="feature-media feature-media--bg"
            style={{ backgroundImage: `url(${images.tech})` }}
            role="img"
            aria-label=""
          />
        </div>
      </section>
    </>
  )
}

function OurView() {
  return (
    <section className="our-view">
      <h2 className="section-label">Our View</h2>
      <div className="view-grid">
        <div className="view-media">
          <div className="video-poster">
            <img src={images.videoPoster} alt="" />
            <button className="play-btn" aria-label="Play video">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="view-body">
          <h3>
            <a href="#">
              What’s ahead for India
              <Chevron />
            </a>
          </h3>
          <p>
            India, like the rest of the world, is grappling with profound
            uncertainty triggered by a combination of shocks. At the same time,
            there are several tailwinds that have the potential to power India’s
            growth. Three Truegrow experts discuss the challenges and
            opportunities for a unique sustainable and economic growth model for
            India.
          </p>
        </div>
      </div>
    </section>
  )
}

function Community() {
  return (
    <section className="community-wrap">
      <div className="community">
        <h2 className="section-label">In the community</h2>

        <div className="feature-card feature-card--large">
          <div className="feature-media">
            <img src={images.socialResponsibility} alt="Social Responsibility in India" />
          </div>
          <div className="feature-body">
            <h3>
              <a href="#">
                Social Responsibility in India
                <Chevron />
              </a>
            </h3>
            <p>
              We are committed to empowering our ecosystem in India–to give back to
              our communities in ways that are socially responsible and
              environmentally sustainable.
            </p>
            <CtaLink>Learn more</CtaLink>
          </div>
        </div>

        <div className="community-grid">
          {communityItems.map((item) => (
            <article className="community-item" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <a href="#" className="text-link">
                {item.link}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function DigitalBanner() {
  return (
    <section className="digital-banner">
      <h3>Harness the Power of Digital</h3>
      <p>Views from our experts on driving business transformation across industries.</p>
      <CtaLink light>Watch</CtaLink>
    </section>
  )
}

function People() {
  return (
    <section className="people-wrap" id="people">
      <div className="people">
        <h2 className="section-label">Our people</h2>
        <div className="people-grid">
          {people.map((person) => (
            <article className="person-card" key={person.name}>
              <h3>
                <a href="#">{person.name}</a>
              </h3>
              <p className="person-title">{person.title}</p>
              <p className="person-bio">{person.bio}</p>
              <a href="#" className="email-link" aria-label="Email" title="Email">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                  <rect x="0.75" y="0.75" width="14.5" height="10.5" rx="1.25" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M1.5 1.5L8 6.5L14.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
        <div className="people-cta">
          <Link to="/our-people" className="btn-secondary">
            Meet our people
          </Link>
        </div>
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section className="blog">
      <h2 className="section-label">New at Truegrow blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article className="blog-card" key={post.title}>
            <a href="#" className="blog-media">
              <img src={post.image} alt="" />
            </a>
            <h3>
              <a href="#">
                {post.title}
                <Chevron />
              </a>
            </h3>
            <p className="blog-meta">
              <em>{post.date}</em> – {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Locations() {
  const [active, setActive] = useState(0)
  const loc = locations[active]
  const mapSrc = `https://www.google.com/maps?q=${loc.lat},${loc.lng}&z=15&output=embed`

  return (
    <section className="locations" id="locations">
      <h2 className="section-label section-label--light">Our locations</h2>

      <ul className="city-tabs" role="tablist">
        {locations.map((l, i) => (
          <li key={l.name} role="presentation">
            <button
              role="tab"
              aria-selected={active === i}
              className={active === i ? 'is-active' : ''}
              onClick={() => setActive(i)}
            >
              {l.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="locations-layout">
        <div className="location-panel">
          <h4>{loc.name}</h4>
          <p className="location-address">
            {loc.address.map((line, i) =>
              line === '' ? (
                <br key={i} />
              ) : (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ),
            )}
          </p>
          <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="location-phone">
            Voice: {loc.phone}
          </a>
          <CtaLink
            light
            href={`https://www.google.com/maps/search/?api=1&query=${loc.mapsQuery}`}
          >
            Open in Google Maps
          </CtaLink>
        </div>

        <div className="locations-map">
          <iframe
            key={loc.name}
            title={`Map of ${loc.name}`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default function OverviewPage() {
  return (
    <>
      <Hero />
      <Intro />
      <Impact />
      <FeaturedInsights />
      <OurView />
      <Community />
      <DigitalBanner />
      <People />
      <Blog />
      <Locations />
    </>
  )
}
