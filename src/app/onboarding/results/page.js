"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingResults() {
  const router = useRouter();
  const [allData, setAllData] = useState({
    personalInfo: {},
    academicInfo: {},
    researchInfo: {},
    professionalInfo: {},
    teachingInfo: {},
    additionalInfo: {}
  });

  useEffect(() => {
    const personalInfo = JSON.parse(localStorage.getItem("personalInfo") || "{}");
    const academicInfo = JSON.parse(localStorage.getItem("academicInfo") || "{}");
    const researchInfo = JSON.parse(localStorage.getItem("researchInfo") || "{}");
    const professionalInfo = JSON.parse(localStorage.getItem("professionalInfo") || "{}");
    const teachingInfo = JSON.parse(localStorage.getItem("teachingInfo") || "{}");
    const additionalInfo = JSON.parse(localStorage.getItem("additionalInfo") || "{}");

    setAllData({
      personalInfo,
      academicInfo,
      researchInfo,
      professionalInfo,
      teachingInfo,
      additionalInfo
    });
  }, []);

  const handleStartOver = () => {
    localStorage.removeItem("personalInfo");
    localStorage.removeItem("academicInfo");
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
                  <p className="font-medium text-gray-900">{allData.personalInfo.firstName} {allData.personalInfo.lastName}</p>
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
            </div>

            {/* Academic Background */}
            <div className="border-l-4 border-green-600 pl-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Academic & Employment Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Faculty</p>
                  <p className="font-medium text-gray-900">{allData.academicInfo.faculty || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Department</p>
                  <p className="font-medium text-gray-900">{allData.academicInfo.department || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Current Position</p>
                  <p className="font-medium text-gray-900">{allData.academicInfo.currentPosition || "Not specified"}</p>
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
              
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Educational Background</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Education Level</p>
                    <p className="font-medium text-gray-900">{allData.academicInfo.education || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Degree</p>
                    <p className="font-medium text-gray-900">{allData.academicInfo.degree || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Specialization</p>
                    <p className="font-medium text-gray-900">{allData.academicInfo.specialization || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">University</p>
                    <p className="font-medium text-gray-900">{allData.academicInfo.university || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Graduation Year</p>
                    <p className="font-medium text-gray-900">{allData.academicInfo.graduationYear || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Teaching Experience</p>
                    <p className="font-medium text-gray-900">{allData.academicInfo.experience || "Not specified"}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600">Additional Degrees/Certifications</p>
                    <p className="font-medium text-gray-900">{allData.academicInfo.additionalDegrees || "Not specified"}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600">Previous Institutions</p>
                    <p className="font-medium text-gray-900">{allData.academicInfo.previousInstitutions || "Not specified"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Profile */}
            <div className="border-l-4 border-emerald-600 pl-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Research Profile</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Research Interests</p>
                  <p className="font-medium text-gray-900">{allData.researchInfo.researchInterests || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Research Areas</p>
                  <p className="font-medium text-gray-900">{formatArray(allData.researchInfo.researchAreas)}</p>
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
                <div>
                  <p className="text-sm text-gray-600">Previous Work Experience</p>
                  <p className="font-medium text-gray-900">{allData.professionalInfo.consultingExperience || "Not specified"}</p>
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