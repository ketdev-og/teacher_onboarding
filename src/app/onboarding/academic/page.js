"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AcademicInfo() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    faculty: "",
    institute: "",
    center: "",
    department: "",
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

  const faculties = {
    "Faculty of Agriculture": ["Agricultural Economics", "Agricultural Extension", "Animal Science", "Crop Science", "Soil Science"],
    "Faculty of Arts": ["Archaeology and Tourism", "English and Literary Studies", "Fine and Applied Arts", "Foreign Languages and Literatures", "History and International Studies", "Linguistics, Igbo and Other Nigerian Languages", "Mass Communication", "Music", "Theatre and Film Studies"],
    "Faculty of Biological Sciences": ["Biochemistry", "Microbiology", "Molecular Biology and Genetics", "Plant Science and Biotechnology", "Zoology and Environmental Biology"],
    "Faculty of Business Administration": ["Accountancy", "Banking and Finance", "Marketing", "Management"],
    "Faculty of Education": ["Adult Education", "Arts Education", "Educational Foundations", "Health and Physical Education", "Library and Information Science", "Science Education", "Social Science Education", "Vocational Teacher Education"],
    "Faculty of Engineering": ["Agricultural and Bioresources Engineering", "Civil Engineering", "Electrical Engineering", "Electronic Engineering", "Mechanical Engineering", "Metallurgical and Materials Engineering"],
    "Faculty of Environmental Studies": ["Architecture", "Estate Management", "Geoinformatics and Surveying", "Urban and Regional Planning"],
    "Faculty of Health Sciences and Technology": ["Medical Laboratory Sciences", "Medical Rehabilitation", "Nursing Sciences", "Radiography"],
    "Faculty of Law": ["Commercial and Property Law", "International and Comparative Law", "Jurisprudence and Legal Theory", "Private and Public Law", "Public Law"],
    "Faculty of Medical Sciences": ["Anatomy", "Medical Biochemistry", "Medical Microbiology", "Medicine and Surgery", "Pathology", "Pharmacology and Therapeutics", "Physiology"],
    "Faculty of Pharmaceutical Sciences": ["Clinical Pharmacy and Pharmacy Management", "Pharmaceutical and Medicinal Chemistry", "Pharmaceutical Microbiology and Biotechnology", "Pharmaceutical Technology and Industrial Pharmacy", "Pharmacognosy and Environmental Medicines", "Pharmacology and Toxicology"],
    "Faculty of Physical Sciences": ["Computer Science", "Geology", "Mathematics", "Physics and Astronomy", "Pure and Industrial Chemistry", "Statistics"],
    "Faculty of Social Sciences": ["Economics", "Geography", "Philosophy", "Political Science", "Psychology", "Public Administration and Local Government", "Religion and Cultural Studies", "Social Work", "Sociology and Anthropology"],
    "Faculty of Veterinary Medicine": ["Veterinary Anatomy", "Veterinary Medicine", "Veterinary Obstetrics and Reproductive Diseases", "Veterinary Parasitology and Entomology", "Veterinary Pathology and Microbiology", "Veterinary Physiology and Pharmacology", "Veterinary Public Health and Preventive Medicine", "Veterinary Surgery"]
  };

  const institutes = [
    "Institute of Education",
    "Institute for Development Studies",
    "Institute of African Studies",
    "Institute of Maritime Studies",
    "Institute of Maternal and Child Health"
  ];

  const centers = [
    "Centre for American Studies",
    "Centre for Basic Space Research",
    "Curriculum Development and Instructional Materials",
    "Centre for Environmental Management and Control (CEMAC)",
    "Centre for Igbo Studies",
    "Centre for Energy Research and Development",
    "Centre for Entrepreneurial and Development Research",
    "Centre for Rural Development and Co-operatives",
    "Centre for Technical and Vocational Education, Training and Research",
    "Centre for Rural Development and Cooperatives (CRDC)",
    "UNN Consult",
    "Youth Friendly Resource Centre",
    "Vaccine Research Centre",
    "Biotech Centre",
    "Space Centre",
    "Computing Centre",
    "Equipment Centre",
    "Medical Centre",
    "Youth Centre",
    "Climate Change",
    "Information & Communication Technology Centre",
    "Energy Research Centre",
    "Resource & Environmental Policy Research Centre",
    "Directorate of Strategic Contacts, Ethics & Publications",
    "Gender & Development Policy Centre"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "faculty") {
      setFormData({
        ...formData,
        [name]: value,
        department: "" // Reset department when faculty changes
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
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
    localStorage.setItem("academicInfo", JSON.stringify(formData));
    
    // Check if Institute or Centre is selected (Institute/Centre ONLY flow)
    if (formData.institute || formData.center) {
      router.push("/onboarding/institute-centre");
    } else {
      // Faculty only - continue with full onboarding flow
      router.push("/onboarding/personal");
    }
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-3xl w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Academic Information</h1>
          <p className="text-gray-600">Step 1 of ? - Your academic affiliation and background</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-green-600 h-2 rounded-full" style={{width: '16.67%'}}></div>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Faculty Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Faculty (Optional)
              </label>
              <select
                name="faculty"
                value={formData.faculty}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              >
                <option value="">Select Faculty</option>
                {Object.keys(faculties).map(faculty => (
                  <option key={faculty} value={faculty}>{faculty}</option>
                ))}
              </select>
            </div>

            {/* Department Selection - Only shows when Faculty is selected */}
            {formData.faculty && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                >
                  <option value="">Select Department</option>
                  {faculties[formData.faculty] && faculties[formData.faculty].map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Institute Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institute (Optional)
              </label>
              <select
                name="institute"
                value={formData.institute}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              >
                <option value="">Select Institute</option>
                {institutes.map(institute => (
                  <option key={institute} value={institute}>{institute}</option>
                ))}
              </select>
            </div>

            {/* Center Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Academic Centre (Optional)
              </label>
              <select
                name="center"
                value={formData.center}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              >
                <option value="">Select Academic Centre</option>
                {centers.map(center => (
                  <option key={center} value={center}>{center}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
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