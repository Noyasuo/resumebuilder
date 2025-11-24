import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1a1a1a',
  },
  title: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  contactInfo: {
    flexDirection: 'row',
    fontSize: 10,
    color: '#666',
    marginBottom: 3,
    gap: 8,
  },
  contactText: {
    fontSize: 10,
    color: '#666',
  },
  separator: {
    fontSize: 10,
    color: '#999',
    marginHorizontal: 4,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
    textTransform: 'uppercase',
    borderBottom: '1 solid #ccc',
    paddingBottom: 3,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  entryTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  entryYears: {
    fontSize: 10,
    color: '#666',
  },
  entrySubtitle: {
    fontSize: 11,
    color: '#555',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  entryDescription: {
    fontSize: 10,
    color: '#444',
    lineHeight: 1.5,
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skill: {
    backgroundColor: '#e5e7eb',
    padding: '5 10',
    borderRadius: 10,
    fontSize: 9,
    color: '#333',
    marginRight: 5,
    marginBottom: 5,
  },
  summary: {
    fontSize: 10,
    color: '#444',
    lineHeight: 1.6,
  },
  link: {
    fontSize: 9,
    color: '#2563eb',
    marginTop: 3,
  },
  projectName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 3,
  },
});

const ResumePDF = ({ resumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>
          {resumeData.personalInfo.fullName || 'Your Name'}
        </Text>
        <Text style={styles.title}>
          {resumeData.personalInfo.title || 'Professional Title'}
        </Text>
        <View style={styles.contactInfo}>
          {resumeData.personalInfo.email && (
            <Text style={styles.contactText}>{resumeData.personalInfo.email}</Text>
          )}
          {resumeData.personalInfo.email && (resumeData.personalInfo.phone || resumeData.personalInfo.address) && (
            <Text style={styles.separator}>|</Text>
          )}
          {resumeData.personalInfo.phone && (
            <Text style={styles.contactText}>{resumeData.personalInfo.phone}</Text>
          )}
          {resumeData.personalInfo.phone && resumeData.personalInfo.address && (
            <Text style={styles.separator}>|</Text>
          )}
          {resumeData.personalInfo.address && (
            <Text style={styles.contactText}>{resumeData.personalInfo.address}</Text>
          )}
        </View>
      </View>

      {/* Summary */}
      {resumeData.summary && (
        <View style={styles.section}>
          <Text style={styles.summary}>{resumeData.summary}</Text>
        </View>
      )}

      {/* Work Experience */}
      {resumeData.workExperience.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
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
            <View key={index} style={{ marginBottom: 10 }}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>{work.role || 'Job Title'}</Text>
                <Text style={styles.entryYears}>{dateRange}</Text>
              </View>
              <Text style={styles.entrySubtitle}>{work.company || 'Company Name'}</Text>
              {work.description && (
                <Text style={styles.entryDescription}>{work.description}</Text>
              )}
            </View>
          );
          })}
        </View>
      )}

      {/* Education */}
      {resumeData.education.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
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
            <View key={index} style={{ marginBottom: 10 }}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>{edu.degree || 'Degree'}</Text>
                <Text style={styles.entryYears}>{dateRange}</Text>
              </View>
              <Text style={styles.entrySubtitle}>{edu.school || 'School Name'}</Text>
              {edu.description && (
                <Text style={styles.entryDescription}>{edu.description}</Text>
              )}
            </View>
          );
          })}
        </View>
      )}

      {/* Skills */}
      {resumeData.skills.length > 0 && resumeData.skills.some((skill) => skill) && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {resumeData.skills
              .filter((skill) => skill)
              .map((skill, index) => (
                <Text key={index} style={styles.skill}>
                  {skill}
                </Text>
              ))}
          </View>
        </View>
      )}

      {/* Projects */}
      {resumeData.projects && resumeData.projects.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {resumeData.projects.map((project, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={styles.projectName}>{project.name || 'Project Name'}</Text>
              {project.link && (
                <Text style={styles.link}>{project.link}</Text>
              )}
              {project.description && (
                <Text style={styles.entryDescription}>{project.description}</Text>
              )}
            </View>
          ))}
        </View>
      )}

      {/* Certificates */}
      {resumeData.certificates && resumeData.certificates.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certificates</Text>
          {resumeData.certificates.map((cert, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>{cert.name || 'Certificate Name'}</Text>
                <Text style={styles.entryYears}>{cert.year}</Text>
              </View>
              <Text style={styles.entrySubtitle}>{cert.issuer || 'Issuer'}</Text>
              {cert.link && (
                <Text style={styles.link}>{cert.link}</Text>
              )}
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
);

export default ResumePDF;
