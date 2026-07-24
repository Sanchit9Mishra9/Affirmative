import { useMemo, useState } from 'react'
import peopleDirectory from './peopleDirectory.json'
import {
  peopleFilterExpertise,
  peopleFilterIndustries,
  peopleFilterLocations,
} from './data'

export default function OurPeoplePage() {
  const [industry, setIndustry] = useState('')
  const [expertise, setExpertise] = useState('')
  const [location, setLocation] = useState('')

  const filtered = useMemo(() => {
    return peopleDirectory.filter((person) => {
      if (industry && person.industry !== industry) return false
      if (expertise && person.expertise !== expertise) return false
      if (location && person.location !== location) return false
      return true
    })
  }, [industry, expertise, location])

  const clearFilters = () => {
    setIndustry('')
    setExpertise('')
    setLocation('')
  }

  return (
    <>
      <section className="people-page">
        <div className="people-page-inner">
          <h1 className="people-page-title">Our people</h1>

          <div className="people-filters">
            <label className="people-filter">
              <span>Industry</span>
              <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
                <option value="">All</option>
                {peopleFilterIndustries.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>

            <label className="people-filter">
              <span>Expertise</span>
              <select value={expertise} onChange={(e) => setExpertise(e.target.value)}>
                <option value="">All</option>
                {peopleFilterExpertise.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>

            <label className="people-filter">
              <span>Location</span>
              <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="">All</option>
                {peopleFilterLocations.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>

            {(industry || expertise || location) && (
              <button type="button" className="people-filter-clear" onClick={clearFilters}>
                Clear filters
              </button>
            )}
          </div>

          <p className="people-count">
            Showing {filtered.length} of {peopleDirectory.length}
          </p>

          <div className="people-directory-grid">
            {filtered.map((person) => (
              <article className="directory-card" key={`${person.name}-${person.location}`}>
                <h3>
                  <a href="#">{person.name}</a>
                </h3>
                <p className="directory-role">
                  {person.title}
                  <span className="directory-loc">{person.location}</span>
                </p>
                <div className="directory-divider" />
                <p className="directory-bio">{person.bio}</p>
                <a href="#" className="email-link" aria-label="Email" title="Email">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                    <rect
                      x="0.75"
                      y="0.75"
                      width="14.5"
                      height="10.5"
                      rx="1.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M1.5 1.5L8 6.5L14.5 1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="people-empty">No people match these filters.</p>
          )}
        </div>
      </section>
    </>
  )
}
