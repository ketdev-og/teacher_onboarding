"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AcademicDetails() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    rank: "",
    employeeId: "",
    officeLocation: "",
    phoneExtension: "",
    educationalBackground: [{
      level: "",
      degree: "",
      specialization: "",
      university: "",
      graduationYear: ""
    }],
    professionalBodies: "",
    workExperience: [{
      position: "",
      institution: "",
      startYear: "",
      endYear: "",
      description: ""
    }]
  });

  const [affiliationData, setAffiliationData] = useState(null);

  useEffect(() => {
    // Load academic affiliation data from localStorage
    const savedAffiliation = localStorage.getItem("academicAffiliation");
    if (savedAffiliation) {
      setAffiliationData(JSON.parse(savedAffiliation));
    } else {
      // Redirect back to step 1 if no affiliation data
      router.push("/onboarding/academic");
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...formData.educationalBackground];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    setFormData({ ...formData, educationalBackground: updatedEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      educationalBackground: [...formData.educationalBackground, {
        level: "",
        degree: "",
        specialization: "",
        university: "",
        graduationYear: ""
      }]
    });
  };

  const removeEducation = (index) => {
    const updatedEducation = formData.educationalBackground.filter((_, i) => i !== index);
    setFormData({ ...formData, educationalBackground: updatedEducation });
  };

  const handleWorkExperienceChange = (index, field, value) => {
    const updatedWork = [...formData.workExperience];
    updatedWork[index] = { ...updatedWork[index], [field]: value };
    setFormData({ ...formData, workExperience: updatedWork });
  };

  const addWorkExperience = () => {
    setFormData({
      ...formData,
      workExperience: [...formData.workExperience, {
        position: "",
        institution: "",
        startYear: "",
        endYear: "",
        description: ""
      }]
    });
  };

  const removeWorkExperience = (index) => {
    const updatedWork = formData.workExperience.filter((_, i) => i !== index);
    setFormData({ ...formData, workExperience: updatedWork });
  };

  const handleNext = () => {
    // Combine affiliation and details data
    const combinedData = { ...affiliationData, ...formData };
    localStorage.setItem("academicInfo", JSON.stringify(combinedData));
    
    // Continue to personal info (step 3)
    router.push("/onboarding/personal");
  };

  const handleBack = () => {
    router.push("/onboarding/academic");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Academic Details</h1>
          <p className="text-gray-600">Step 2 of ? - Your academic background and experience</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-green-600 h-2 rounded-full" style={{width: '28.57%'}}></div>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rank *
              </label>
              <select
                name="rank"
                value={formData.rank}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                required
              >
                <option value="">Select position</option>
                <option value="Graduate Assistant">Graduate Assistant</option>
                <option value="Assistant Lecturer">Assistant Lecturer</option>
                <option value="Lecturer II">Lecturer II</option>
                <option value="Lecturer I">Lecturer I</option>
                <option value="Senior Lecturer">Senior Lecturer</option>
                <option value="Reader">Reader</option>
                <option value="Professor">Professor</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employee ID *
              </label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                placeholder="Enter your employee ID"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Office Location
              </label>
              <input
                type="text"
                name="officeLocation"
                value={formData.officeLocation}
                onChange={handleChange}
                placeholder="e.g., Room 205, Faculty Building"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Extension
              </label>
              <input
                type="text"
                name="phoneExtension"
                value={formData.phoneExtension}
                onChange={handleChange}
                placeholder="e.g., ext. 2345"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              />
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Educational Background</h3>
              <button
                type="button"
                onClick={addEducation}
                className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
              >
                + Add Degree
              </button>
            </div>
            
            {formData.educationalBackground.map((education, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-md font-medium text-gray-800">
                    {education.level || `Degree ${index + 1}`}
                  </h4>
                  {formData.educationalBackground.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeEducation(index)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Education Level *
                    </label>
                    <select
                      value={education.level}
                      onChange={(e) => handleEducationChange(index, 'level', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      required
                    >
                      <option value="">Select level</option>
                      <option value="Primary School">Primary School</option>
                      <option value="Secondary School">Secondary School</option>
                      <option value="Bachelor's Degree">Bachelor's Degree</option>
                      <option value="PGD">Post Graduate Diploma (PGD)</option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="Ph.D.">Ph.D.</option>
                      <option value="Post-Doctorate">Post-Doctorate</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Degree Title *
                    </label>
                    <input
                      type="text"
                      value={education.degree}
                      onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                      placeholder="e.g., Doctor of Philosophy"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specialization/Field of Study *
                    </label>
                    <input
                      type="text"
                      value={education.specialization}
                      onChange={(e) => handleEducationChange(index, 'specialization', e.target.value)}
                      placeholder="e.g., Computer Science"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      University/Institution *
                    </label>
                    <input
                      type="text"
                      value={education.university}
                      onChange={(e) => handleEducationChange(index, 'university', e.target.value)}
                      placeholder="e.g., University of Nigeria"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Graduation Year *
                  </label>
                  <input
                    type="number"
                    value={education.graduationYear}
                    onChange={(e) => handleEducationChange(index, 'graduationYear', e.target.value)}
                    min="1950"
                    max={new Date().getFullYear() + 5}
                    className="w-full md:w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                    required
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Professional Bodies/Memberships/Certifications</h3>
            </div>
            <textarea
              name="professionalBodies"
              value={formData.professionalBodies}
              onChange={handleChange}
              rows={3}
              placeholder="List professional organizations, memberships, and certifications (e.g., Nigerian Computer Society, IEEE Member, Project Management Certification)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            ></textarea>
          </div>

          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Work Experience (Chronological Order)</h3>
              <button
                type="button"
                onClick={addWorkExperience}
                className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
              >
                + Add Experience
              </button>
            </div>
            
            {formData.workExperience.map((work, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-md font-medium text-gray-800">
                    {work.position || `Experience ${index + 1}`}
                  </h4>
                  {formData.workExperience.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeWorkExperience(index)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position/Title *
                    </label>
                    <input
                      type="text"
                      value={work.position}
                      onChange={(e) => handleWorkExperienceChange(index, 'position', e.target.value)}
                      placeholder="e.g., Assistant Lecturer"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institution *
                    </label>
                    <input
                      type="text"
                      value={work.institution}
                      onChange={(e) => handleWorkExperienceChange(index, 'institution', e.target.value)}
                      placeholder="e.g., University of Lagos"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Year *
                    </label>
                    <input
                      type="number"
                      value={work.startYear}
                      onChange={(e) => handleWorkExperienceChange(index, 'startYear', e.target.value)}
                      min="1950"
                      max={new Date().getFullYear()}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Year (Leave empty if current)
                    </label>
                    <input
                      type="number"
                      value={work.endYear}
                      onChange={(e) => handleWorkExperienceChange(index, 'endYear', e.target.value)}
                      min="1950"
                      max={new Date().getFullYear()}
                      placeholder="Leave empty if current position"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Description/Responsibilities
                  </label>
                  <textarea
                    value={work.description}
                    onChange={(e) => handleWorkExperienceChange(index, 'description', e.target.value)}
                    rows={3}
                    placeholder="Describe your key responsibilities and achievements in this role"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                  ></textarea>
                </div>
              </div>
            ))}
          </div>
        </form>

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}