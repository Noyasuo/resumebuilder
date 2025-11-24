import React from 'react';

const Landing = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Resume<span className="text-indigo-600">Forge</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
            Craft professional resumes with powerful features
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-indigo-600">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💾</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Save Multiple Resumes</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Create and manage multiple versions of your resume for different job applications.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-600">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎨</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Get More Templates</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Access a variety of professional resume templates tailored for different industries.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Generated Portfolio</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Automatically generate a stunning online portfolio website from your resume data.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-600">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✨</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">And More!</h3>
            <p className="text-sm sm:text-base text-gray-600">
              AI-powered suggestions, cover letter generator, export formats, and much more coming soon!
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Coming Soon!
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
            These premium features are currently in development. Stay tuned for updates!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('home')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              ← Back to Resume Builder
            </button>
            <a
              href="https://resumeforge-qnha.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-200 inline-block text-center"
            >
              Visit Site →
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center text-gray-600 text-xs sm:text-sm px-4">
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
