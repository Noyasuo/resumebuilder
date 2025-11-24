import React from 'react';
import { useResume } from '../context/ResumeContext';

const ResumePreview = () => {
  const { resumeData } = useResume();

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg" id="resume-preview">
      {/* Header */}
      <div className="pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {resumeData.personalInfo.fullName || 'Your Name'}
        </h1>
        <p className="text-xl text-gray-600 mb-3">
          {resumeData.personalInfo.title || 'Professional Title'}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          {resumeData.personalInfo.email && (
            <>
              <span>{resumeData.personalInfo.email}</span>
              {(resumeData.personalInfo.phone || resumeData.personalInfo.address) && (
                <span className="text-gray-400">|</span>
              )}
            </>
          )}
          {resumeData.personalInfo.phone && (
            <>
              <span>{resumeData.personalInfo.phone}</span>
              {resumeData.personalInfo.address && (
                <span className="text-gray-400">|</span>
              )}
            </>
          )}
          {resumeData.personalInfo.address && (
            <span>{resumeData.personalInfo.address}</span>
          )}
        </div>
      </div>

      {/* Summary */}
      {resumeData.summary && (
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {resumeData.workExperience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase border-b border-gray-300 pb-1">
            Experience
          </h2>
          <div className="space-y-4">
            {resumeData.workExperience.map((work, index) => {
              const formatDate = (date) => {
                if (!date) return '';
                const d = new Date(date);
                return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
              };
              const dateRange = work.startDate || work.endDate 
                ? `${formatDate(work.startDate)} - ${formatDate(work.endDate) || 'Present'}`
                : work.years || '';
              
              return (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {work.role || 'Job Title'}
                  </h3>
                  <span className="text-sm text-gray-600">{dateRange}</span>
                </div>
                <p className="text-md text-gray-700 mb-2 font-medium">
                  {work.company || 'Company Name'}
                </p>
                {work.description && (
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {work.description}
                  </p>
                )}
              </div>
            );
            })}
          </div>
        </div>
      )}

      {/* Education */}
      {resumeData.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase border-b border-gray-300 pb-1">
            Education
          </h2>
          <div className="space-y-4">
            {resumeData.education.map((edu, index) => {
              const formatDate = (date) => {
                if (!date) return '';
                const d = new Date(date);
                return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
              };
              const dateRange = edu.startDate || edu.endDate 
                ? `${formatDate(edu.startDate)} - ${formatDate(edu.endDate) || 'Present'}`
                : edu.years || '';
              
              return (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {edu.degree || 'Degree'}
                  </h3>
                  <span className="text-sm text-gray-600">{dateRange}</span>
                </div>
                <p className="text-md text-gray-700 mb-2 font-medium">
                  {edu.school || 'School Name'}
                </p>
                {edu.description && (
                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                )}
              </div>
            );
            })}
          </div>
        </div>
      )}

      {/* Skills */}
      {resumeData.skills.length > 0 && resumeData.skills.some((skill) => skill) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase border-b border-gray-300 pb-1">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills
              .filter((skill) => skill)
              .map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {resumeData.projects && resumeData.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase border-b border-gray-300 pb-1">
            Projects
          </h2>
          <div className="space-y-4">
            {resumeData.projects.map((project, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.name || 'Project Name'}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {project.link}
                  </a>
                )}
                {project.description && (
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line mt-2">
                    {project.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certificates */}
      {resumeData.certificates && resumeData.certificates.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase border-b border-gray-300 pb-1">
            Certificates
          </h2>
          <div className="space-y-4">
            {resumeData.certificates.map((cert, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {cert.name || 'Certificate Name'}
                  </h3>
                  <span className="text-sm text-gray-600">{cert.year}</span>
                </div>
                <p className="text-md text-gray-700 mb-2 font-medium">
                  {cert.issuer || 'Issuer'}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!resumeData.personalInfo.fullName &&
        !resumeData.summary &&
        resumeData.workExperience.length === 0 &&
        resumeData.education.length === 0 &&
        resumeData.skills.length === 0 &&
        (!resumeData.projects || resumeData.projects.length === 0) &&
        (!resumeData.certificates || resumeData.certificates.length === 0) && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg">Start filling out the form to see your resume preview</p>
          </div>
        )}
    </div>
  );
};

export default ResumePreview;
