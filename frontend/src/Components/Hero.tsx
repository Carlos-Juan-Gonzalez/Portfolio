import './ComponentsStyles/Hero.css'

export default function Hero() {

  return (
    <>
      <div id="hero">
        <div className="hero-grid"></div>
        <div className="hero-content">
            <h1>Hola, soy <span>Carlos Juan González</span></h1>
            <p className="hero-desc">Desarrollador Full Stack especializado en IA, LangChain y LangGraph. Construyo aplicaciones inteligentes de principio a fin.</p>
            <div className="btns">
                <a className="btn btn-primary" href="https://github.com/Carlos-Juan-Gonzalez" target="_blank">Ver proyectos</a>
                <a className="btn btn-ghost" href="#contact">Contactar</a>
            </div>
        </div>
      </div>
    </>
  )
}