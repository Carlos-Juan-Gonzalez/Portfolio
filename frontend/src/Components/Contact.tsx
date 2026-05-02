import './ComponentsStyles/Contact.css'

export default function Contact() {

  return (
    <>
      <section id="contact">
        <div className="section-label">// contacto</div>
        <h2>Hablemos</h2>
        <p className="contact-desc">¿Tienes un proyecto interesante? Escríbeme o conecta en mis redes.</p>
        <div className="contact-links">
            <a className="contact-link" href="mailto:carlosjuangonzalez99@gmail.com">carlosjuangonzalez99@gmail.com</a>
            <a className="contact-link" href="https://github.com/Carlos-Juan-Gonzalez" target="_blank"><img src="src/assets/Git.png" alt="GitHub"/>GitHub</a>
            <a className="contact-link" href="https://www.linkedin.com/in/carlos-juan-gonzalez/" target="_blank"><img src="src/assets/Linkedin.png" alt="LinkedIn"/>LinkedIn</a>
        </div>
        </section>
    </>
  )
}