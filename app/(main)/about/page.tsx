export default function About() {
  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-linear-to-r from-black/70 to-black text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Our Platform</h1>
          <p className="text-xl text-blue-100">
            Empowering developers with world-class online education
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We are dedicated to making high-quality programming education
            accessible to everyone, regardless of their background or location.
            Our mission is to bridge the gap between industry demands and
            student capabilities by providing comprehensive, practical, and
            up-to-date courses.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through our platform, we empower learners to build real-world skills
            in modern technologies like Next.js, React, TypeScript, and
            full-stack development.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Excellence
              </h3>
              <p className="text-gray-700">
                We strive for excellence in every course, lesson, and
                interaction with our students.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Community
              </h3>
              <p className="text-gray-700">
                We believe in fostering a supportive community where learners
                help each other grow.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-700">
                We continuously update our courses with the latest technologies
                and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-black mb-2">50K+</div>
              <p className="text-gray-700">Active Students</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-black mb-2">100+</div>
              <p className="text-gray-700">Courses</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-black mb-2">95%</div>
              <p className="text-gray-700">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-black mb-2">24/7</div>
              <p className="text-gray-700">Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
