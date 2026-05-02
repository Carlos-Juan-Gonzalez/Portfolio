import './ComponentsStyles/About.css'

export default function About() {

  return (
    <>
      <section id="about">
            <div className="section-label">// sobre mí</div>
            <h2>Stack tecnológico</h2>
            <p className="section-desc">Full Stack con foco en inteligencia artificial y sistemas agénticos.</p>
            <div className="skills-grid">
                <div className="skill-card">
                    <div className="skill-icon"><img src="src/assets/Frontend.png" alt="Frontend"/></div>
                    <h3>Frontend</h3>
                    <p>React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div className="skill-card">
                    <div className="skill-icon"><img src="src/assets/Backend.png" alt="Backend"/></div>
                    <h3>Backend</h3>
                    <p>Java,Node.js, FastAPI, Python</p>
                </div>
                <div className="skill-card">
                    <div className="skill-icon"><img src="src/assets/IA.png" alt="IA & Agentes"/></div>
                    <h3>IA & Agentes</h3>
                    <p>LangChain, LangGraph, Claude API, RAG, OpenAI API</p>
                </div>
                <div className="skill-card">
                    <div className="skill-icon"><img src="src/assets/Cloud.png" alt="Cloud & DevOps"/></div>
                    <h3>Cloud & DevOps</h3>
                    <p>AWS, Docker, CI/CD</p>
                </div>
            </div>
        </section>
    </>
  )
}