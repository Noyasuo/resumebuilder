import React from 'react';

const Landing = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Resume<span className="text-indigo-600">Forge</span>
          </h1>
          <p className="text-xl text-gray-600">
            Craft professional resumes with powerful features
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-indigo-600">
            <div className="text-4xl mb-4">💾</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Save Multiple Resumes</h3>
            <p className="text-gray-600">
              Create and manage multiple versions of your resume for different job applications.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-600">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Get More Templates</h3>
            <p className="text-gray-600">
              Access a variety of professional resume templates tailored for different industries.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Generated Portfolio</h3>
            <p className="text-gray-600">
              Automatically generate a stunning online portfolio website from your resume data.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-600">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">And More!</h3>
            <p className="text-gray-600">
              AI-powered suggestions, cover letter generator, export formats, and much more coming soon!
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Coming Soon!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            These premium features are currently in development. Stay tuned for updates!
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onNavigate('home')}
              className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              ← Back to Resume Builder
            </button>
            <a
              href="https://resumeforge-qnha.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-200 inline-block"
            >
              Visit Site →
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-600 text-sm">
          <p>
            Developed by{' '}
            <a
              href="https://michaelnoya.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 hover:underline font-semibold"
            >
              Michael Noya
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
