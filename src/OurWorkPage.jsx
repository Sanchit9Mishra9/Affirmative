import { Chevron, CtaLink } from './Chrome'
import {
  ccnHubs,
  featuredPractices,
  images,
  workCapabilities,
  workIndustries,
} from './data'

export default function OurWorkPage() {
  return (
    <>
      <section className="page-hero page-hero--work">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: `url(${images.workHero})` }}
        />
        <div className="page-hero-inner">
          <p className="page-hero-eyebrow">Our Work in India</p>
          <h1>Bringing the best of our global firm</h1>
          <p className="page-hero-desc">
            We combine Truegrow’s global expertise with deep local insights to help
            our clients accelerate sustainable and inclusive growth.
          </p>
        </div>
      </section>

      <section className="work-section">
        <div className="work-inner">
          <h2 className="section-label">Featured practices</h2>
          <div className="practice-grid">
            {featuredPractices.map((item) => (
              <article className="practice-card" key={item.title}>
                <div className="practice-media">
                  <img src={item.image} alt="" />
                </div>
                <h3>
                  <a href="#">
                    {item.title}
                    <Chevron />
                  </a>
                </h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section work-section--lists">
        <div className="work-inner work-lists">
          <div className="work-list-col">
            <h2 className="work-list-title">Industries</h2>
            <ul className="work-link-list">
              {workIndustries.map((name) => (
                <li key={name}>
                  <a href="#">{name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="work-list-col">
            <h2 className="work-list-title">Capabilities</h2>
            <ul className="work-link-list">
              {workCapabilities.map((name) => (
                <li key={name}>
                  <a href="#">{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="work-section">
        <div className="work-inner">
          <h2 className="section-label">Truegrow Client Capabilities Network</h2>
          <div className="ccn-grid">
            {ccnHubs.map((hub) => (
              <article className="ccn-card" key={hub.title}>
                <div className="ccn-media">
                  <img src={hub.image} alt="" />
                </div>
                <h3>
                  <a href="#">
                    {hub.title}
                    <Chevron />
                  </a>
                </h3>
                <p>{hub.description}</p>
                <CtaLink>Learn more</CtaLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
