import Reveal from './Reveal'
import './About.css'

const SKILLS = [
  'SQL', 'Python', 'Power BI', 'Tableau',
  'Excel', 'BigQuery', 'Data Viz', 'Git',
]

const TIMELINE = [
  { year: '2026', desc: 'Graduating CU Boulder, B.S. Information Science' },
  { year: '2025', desc: 'Deep in analytics, SQL, Power BI, Python, Tableau' },
  { year: '2024', desc: 'CU Boulder Residence Life, community and leadership' },
  { year: 'Eagle', desc: 'Earned Eagle Scout, project management and service' },
]

function About() {
  return (
    <section className="section about" id="about">
      <Reveal>
        <p className="section-label">01 / About</p>
        <h2 className="section-title">The story so far</h2>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-story">
          <p>
            I'm an Information Science major at CU Boulder with a minor in
            Creative Technology and Design. My favorite kind of problem is the
            one buried in a <span className="hl">messy spreadsheet</span>, the
            pattern nobody has noticed yet. I like pulling it out and making it
            make sense to actual people.
          </p>
          <p>
            Before I wrote my first SQL query I earned my{' '}
            <span className="hl">Eagle Scout</span> rank and spent a couple years
            building community with CU Boulder Residence Life. Those taught me the
            unglamorous half of analytics: patience, attention to detail, and how
            to explain something clearly to anyone, no jargon required.
          </p>
          <p>
            These days I'm happiest building dashboards, rescuing datasets other
            people gave up on, and finding the{' '}
            <span className="hl">story hiding in the numbers</span>. I care as
            much about how a chart feels to read as whether it's technically
            correct.
          </p>
        </Reveal>

        <Reveal className="about-side" delay={0.1}>
          <div className="grow-card">
            <p className="grow-label">What I'm growing</p>
            <div className="chips">
              {SKILLS.map((skill) => (
                <span className="chip" key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="timeline">
            {TIMELINE.map((entry) => (
              <div className="timeline-item" key={entry.year}>
                <p className="timeline-year">{entry.year}</p>
                <p className="timeline-desc">{entry.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
