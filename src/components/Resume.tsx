import Reveal from './Reveal'
import { withBase } from '../lib/withBase'
import './Resume.css'

function Resume() {
  return (
    <section className="section resume" id="resume">
      <Reveal>
        <p className="section-label">03 / Resume</p>
        <h2 className="section-title">On paper</h2>
      </Reveal>

      <Reveal className="resume-grid">
        <div className="resume-frame">
          <img src={withBase('/resume.png')} alt="Cody Coressel's resume" loading="lazy" />
        </div>
        <div className="resume-info">
          <h3>The one-page version</h3>
          <p>
            My resume covers my education at CU Boulder, my technical toolkit in
            SQL, Python, and the data-viz suite, and the leadership side of things
            from Eagle Scout to Residence Life. Grab the PDF or take a closer look.
          </p>
          <div className="resume-actions">
            <a className="btn btn-primary" href={withBase('/resume.pdf')} download>
              Download PDF &darr;
            </a>
            <a className="btn btn-ghost" href={withBase('/resume.png')} target="_blank" rel="noreferrer">
              View full size
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Resume
