"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingResults() {
  const router = useRouter();
  const [allData, setAllData] = useState({
    personalInfo: {},
    academicInfo: {},
    instituteCentreInfo: {},
    researchInfo: {},
    professionalInfo: {},
    teachingInfo: {},
    additionalInfo: {}
  });

  useEffect(() => {
    const personalInfo = JSON.parse(localStorage.getItem("personalInfo") || "{}");
    const academicInfo = JSON.parse(localStorage.getItem("academicInfo") || "{}");
    const instituteCentreInfo = JSON.parse(localStorage.getItem("instituteCentreInfo") || "{}");
    const researchInfo = JSON.parse(localStorage.getItem("researchInfo") || "{}");
    const professionalInfo = JSON.parse(localStorage.getItem("professionalInfo") || "{}");
    const teachingInfo = JSON.parse(localStorage.getItem("teachingInfo") || "{}");
    const additionalInfo = JSON.parse(localStorage.getItem("additionalInfo") || "{}");

    setAllData({
      personalInfo,
      academicInfo,
      instituteCentreInfo,
      researchInfo,
      professionalInfo,
      teachingInfo,
      additionalInfo
    });
  }, []);

  const handleStartOver = () => {
    localStorage.removeItem("personalInfo");
    localStorage.removeItem("academicInfo");
    localStorage.removeItem("instituteCentreInfo");
    localStorage.removeItem("researchInfo");
    localStorage.removeItem("professionalInfo");
    localStorage.removeItem("teachingInfo");
    localStorage.removeItem("additionalInfo");
    router.push("/");
  };

  const handlePrint = () => {
    window.print();
  };

  const formatArray = (arr) => {
    return Array.isArray(arr) && arr.length > 0 ? arr.join(", ") : "Not specified";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Onboarding Complete! 🎉
            </h1>
            <p className="text-gray-600">
              Thank you for completing your lecturer onboarding. Here's a summary of your information:
            </p>
          </div>

          <div className="space-y-8">
            {/* Personal Information */}
            <div className="border-l-4 border-green-600 pl-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-medium text-gray-900">
                    {allData.personalInfo.academicTitle && `${allData.personalInfo.academicTitle} `}
                    {allData.personalInfo.firstName} {allData.personalInfo.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Gender</p>
                  <p className="font-medium text-gray-900 capitalize">{allData.personalInfo.gender || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">{allData.personalInfo.email || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">{allData.personalInfo.phone || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date of Birth</p>
                  <p className="font-medium text-gray-900">{allData.personalInfo.dateOfBirth || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Campus</p>
                  <p className="font-medium text-gray-900">{allData.personalInfo.campus || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Nationality</p>
                  <p className="font-medium text-gray-900">{allData.personalInfo.nationality || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">State of Origin</p>
                  <p className="font-medium text-gray-900">{allData.personalInfo.stateOfOrigin || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">LGA</p>
                  <p className="font-medium text-gray-900">{allData.personalInfo.localGovernment || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Marital Status</p>
                  <p className="font-medium text-gray-900 capitalize">{allData.personalInfo.maritalStatus || "Not specified"}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Home Address</p>
                  <p className="font-medium text-gray-900">{allData.personalInfo.address || "Not provided"}</p>
                </div>
              </div>
              
              {allData.personalInfo.biography && (
                <div className="mt-6">
                  <p className="text-sm text-gray-600">Professional Biography</p>
                  <p className="font-medium text-gray-900 leading-relaxed">{allData.personalInfo.biography}</p>
                </div>
              )}
            </div>

            {/* Academic Background */}
            <div className="border-l-4 border-green-600 pl-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Academic & Employment Information</h2>
              <div className="space-y-4">
                {/* Faculty and Department */}
                {allData.academicInfo.faculty && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Faculty</p>
                      <p className="font-medium text-gray-900">{allData.academicInfo.faculty}</p>
                    </div>
                    {allData.academicInfo.department && (
                      <div>
                        <p className="text-sm text-gray-600">Department</p>
                        <p className="font-medium text-gray-900">{allData.academicInfo.department}</p>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Institute */}
                {allData.academicInfo.institute && (
                  <div>
                    <p className="text-sm text-gray-600">Institute Affiliation</p>
                    <p className="font-medium text-gray-900">{allData.academicInfo.institute}</p>
                  </div>
                )}
                
                {/* Academic Centre */}
                {allData.academicInfo.center && (
                  <div>
                    <p className="text-sm text-gray-600">Academic Centre Affiliation</p>
                    <p className="font-medium text-gray-900">{allData.academicInfo.center}</p>
                  </div>
                )}
                
                {/* Show message if no affiliations selected */}
                {!allData.academicInfo.faculty && !allData.academicInfo.institute && !allData.academicInfo.center && (
                  <div>
                    <p className="text-sm text-gray-600">Academic Affiliations</p>
                    <p className="font-medium text-gray-900">No affiliations specified</p>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="text-sm text-gray-600">Rank</p>
                  <p className="font-medium text-gray-900">{allData.academicInfo.rank || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Employee ID</p>
                  <p className="font-medium text-gray-900">{allData.academicInfo.employeeId || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Office Location</p>
                  <p className="font-medium text-gray-900">{allData.academicInfo.officeLocation || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone Extension</p>
                  <p className="font-medium text-gray-900">{allData.academicInfo.phoneExtension || "Not specified"}</p>
                </div>
              </div>
              
              {/* Educational Background */}
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Educational Background</h3>
                {allData.academicInfo.educationalBackground && Array.isArray(allData.academicInfo.educationalBackground) && allData.academicInfo.educationalBackground.length > 0 ? (
                  <div className="space-y-4">
                    {allData.academicInfo.educationalBackground.map((education, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800 mb-2">
                          {education.level || `Degree ${index + 1}`}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <p className="text-sm text-gray-600">Degree</p>
                            <p className="font-medium text-gray-900">{education.degree || "Not specified"}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Specialization</p>
                            <p className="font-medium text-gray-900">{education.specialization || "Not specified"}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">University</p>
                            <p className="font-medium text-gray-900">{education.university || "Not specified"}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Graduation Year</p>
                            <p className="font-medium text-gray-900">{education.graduationYear || "Not specified"}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="font-medium text-gray-900">No educational background provided</p>
                )}
              </div>
              
              {/* Professional Bodies */}
              {allData.academicInfo.professionalBodies && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Professional Bodies/Memberships</h3>
                  <p className="font-medium text-gray-900">{allData.academicInfo.professionalBodies}</p>
                </div>
              )}
              
              {/* Work Experience */}
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Work Experience</h3>
                {allData.academicInfo.workExperience && Array.isArray(allData.academicInfo.workExperience) && allData.academicInfo.workExperience.length > 0 ? (
                  <div className="space-y-4">
                    {allData.academicInfo.workExperience.map((work, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800 mb-2">
                          {work.position || `Position ${index + 1}`}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <p className="text-sm text-gray-600">Institution</p>
                            <p className="font-medium text-gray-900">{work.institution || "Not specified"}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Duration</p>
                            <p className="font-medium text-gray-900">
                              {work.startYear || "Not specified"} - {work.endYear || "Present"}
                            </p>
                          </div>
                          {work.description && (
                            <div className="md:col-span-2">
                              <p className="text-sm text-gray-600">Description</p>
                              <p className="font-medium text-gray-900">{work.description}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="font-medium text-gray-900">No work experience provided</p>
                )}
              </div>
            </div>

            {/* Institute/Centre Profile */}
            {(allData.instituteCentreInfo && Object.keys(allData.instituteCentreInfo).length > 0) && (
              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Institute/Centre Profile</h2>
                
                <div className="space-y-4">
                  {(allData.academicInfo.institute || allData.academicInfo.center) && (
                    <div>
                      <p className="text-sm text-gray-600">Institute/Centre</p>
                      <p className="font-medium text-gray-900">{allData.academicInfo.institute || allData.academicInfo.center}</p>
                    </div>
                  )}
                  
                  {allData.instituteCentreInfo.campus && (
                    <div>
                      <p className="text-sm text-gray-600">Campus</p>
                      <p className="font-medium text-gray-900">{allData.instituteCentreInfo.campus}</p>
                    </div>
                  )}
                  
                  {allData.instituteCentreInfo.instituteBiography && (
                    <div>
                      <p className="text-sm text-gray-600">Biography/Profile</p>
                      <p className="font-medium text-gray-900 whitespace-pre-line">{allData.instituteCentreInfo.instituteBiography}</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {allData.instituteCentreInfo.mission && (
                      <div>
                        <p className="text-sm text-gray-600">Mission</p>
                        <p className="font-medium text-gray-900">{allData.instituteCentreInfo.mission}</p>
                      </div>
                    )}
                    {allData.instituteCentreInfo.vision && (
                      <div>
                        <p className="text-sm text-gray-600">Vision</p>
                        <p className="font-medium text-gray-900">{allData.instituteCentreInfo.vision}</p>
                      </div>
                    )}
                  </div>
                  
                  {allData.instituteCentreInfo.directorName && (
                    <div>
                      <p className="text-sm text-gray-600">Director</p>
                      <p className="font-medium text-gray-900">
                        {allData.instituteCentreInfo.directorTitle} {allData.instituteCentreInfo.directorName}
                      </p>
                    </div>
                  )}
                  
                  {allData.instituteCentreInfo.officialEmail && (
                    <div>
                      <p className="text-sm text-gray-600">Contact</p>
                      <p className="font-medium text-gray-900">{allData.instituteCentreInfo.officialEmail}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Research Profile */}
            <div className="border-l-4 border-emerald-600 pl-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Research Profile</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Research Interests</p>
                  <p className="font-medium text-gray-900">{allData.researchInfo.researchInterests || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Research Areas</p>
                  <p className="font-medium text-gray-900">{formatArray(allData.researchInfo.researchAreas)}</p>
                </div>
                
                {/* Academic Profile Links */}
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Academic Profile Links</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {allData.researchInfo.googleScholar && (
                      <div>
                        <p className="text-sm text-gray-600">Google Scholar</p>
                        <a href={allData.researchInfo.googleScholar} target="_blank" rel="noopener noreferrer" className="font-medium text-green-600 hover:text-green-800 break-all">
                          {allData.researchInfo.googleScholar}
                        </a>
                      </div>
                    )}
                    {allData.researchInfo.orcid && (
                      <div>
                        <p className="text-sm text-gray-600">ORCID</p>
                        <a href={allData.researchInfo.orcid} target="_blank" rel="noopener noreferrer" className="font-medium text-green-600 hover:text-green-800 break-all">
                          {allData.researchInfo.orcid}
                        </a>
                      </div>
                    )}
                    {allData.researchInfo.scopus && (
                      <div>
                        <p className="text-sm text-gray-600">SCOPUS</p>
                        <p className="font-medium text-gray-900 break-all">{allData.researchInfo.scopus}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Publications & Research Output */}
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Publications & Research Output</h3>
                  <div className="space-y-4">
                    {allData.researchInfo.publications && (
                      <div>
                        <p className="text-sm text-gray-600">Publications with Links</p>
                        <p className="font-medium text-gray-900 whitespace-pre-line">{allData.researchInfo.publications}</p>
                      </div>
                    )}
                    {allData.researchInfo.journalPublications && (
                      <div>
                        <p className="text-sm text-gray-600">Other Journal Publications</p>
                        <p className="font-medium text-gray-900 whitespace-pre-line">{allData.researchInfo.journalPublications}</p>
                      </div>
                    )}
                    {allData.researchInfo.presentations && (
                      <div>
                        <p className="text-sm text-gray-600">Conference Presentations</p>
                        <p className="font-medium text-gray-900 whitespace-pre-line">{allData.researchInfo.presentations}</p>
                      </div>
                    )}
                    {allData.researchInfo.awards && (
                      <div>
                        <p className="text-sm text-gray-600">Awards & Recognition</p>
                        <p className="font-medium text-gray-900 whitespace-pre-line">{allData.researchInfo.awards}</p>
                      </div>
                    )}
                    {allData.researchInfo.grants && (
                      <div>
                        <p className="text-sm text-gray-600">Research Grants & Funding</p>
                        <p className="font-medium text-gray-900 whitespace-pre-line">{allData.researchInfo.grants}</p>
                      </div>
                    )}
                    {allData.researchInfo.mediaPublications && (
                      <div>
                        <p className="text-sm text-gray-600">Other Media Publications</p>
                        <p className="font-medium text-gray-900 whitespace-pre-line">{allData.researchInfo.mediaPublications}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="border-l-4 border-teal-600 pl-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Professional Experience</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Professional Bodies/Memberships</p>
                  <p className="font-medium text-gray-900">{allData.professionalInfo.professionalBodies || "Not specified"}</p>
                </div>
              </div>
            </div>

            {/* Teaching Preferences */}
            <div className="border-l-4 border-cyan-600 pl-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Teaching Preferences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Subjects</p>
                  <p className="font-medium text-gray-900">{formatArray(allData.teachingInfo.subjects)}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Academic Levels</p>
                  <p className="font-medium text-gray-900">{formatArray(allData.teachingInfo.levels)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Preferred Schedule</p>
                  <p className="font-medium text-gray-900">{allData.teachingInfo.schedule || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Class Size Preference</p>
                  <p className="font-medium text-gray-900">{allData.teachingInfo.classSize || "Not specified"}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Teaching Style</p>
                  <p className="font-medium text-gray-900">{allData.teachingInfo.teachingStyle || "Not specified"}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Technology & Tools</p>
                  <p className="font-medium text-gray-900">{formatArray(allData.teachingInfo.technology)}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Special Needs</p>
                  <p className="font-medium text-gray-900">{allData.teachingInfo.specialNeeds || "Not specified"}</p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="border-l-4 border-lime-600 pl-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Languages</p>
                  <p className="font-medium text-gray-900">{formatArray(allData.additionalInfo.languages)}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Interests & Hobbies</p>
                  <p className="font-medium text-gray-900">{allData.additionalInfo.interests || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Mentoring Interest</p>
                  <p className="font-medium text-gray-900">{allData.additionalInfo.mentoring || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Availability</p>
                  <p className="font-medium text-gray-900">{allData.additionalInfo.availability || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Communication Preference</p>
                  <p className="font-medium text-gray-900">{allData.additionalInfo.communication || "Not specified"}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Student Clubs Interest</p>
                  <p className="font-medium text-gray-900">{allData.additionalInfo.clubs || "Not specified"}</p>
                </div>
              </div>

              {/* Emergency Contact */}
              {allData.additionalInfo.emergencyContact && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-3">Emergency Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm text-gray-600">Name</p>
                      <p className="font-medium text-gray-900">{allData.additionalInfo.emergencyContact.name || "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Relationship</p>
                      <p className="font-medium text-gray-900">{allData.additionalInfo.emergencyContact.relationship || "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium text-gray-900">{allData.additionalInfo.emergencyContact.phone || "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">{allData.additionalInfo.emergencyContact.email || "Not provided"}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePrint}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Print Summary
            </button>
            <button
              onClick={handleStartOver}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}