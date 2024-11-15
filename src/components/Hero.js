export default function Hero() {
    return (
      <section id="hero" className="py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-purple-600">Sukriti Yadav</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8">
            Frontend Developer | MERN Stack Enthusiast
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-purple-600 hover:to-pink-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
      </section>
    )
  }