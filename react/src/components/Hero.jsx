// Hero Component - The main landing section

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Yasamin</h1>
        <h2>Junior Developer based in Stockholm</h2>
        <p>
          I build modern, full-stack web applications with clean code and 
          user-focused design.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">My Projects</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero