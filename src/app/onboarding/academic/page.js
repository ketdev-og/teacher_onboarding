"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AcademicInfo() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    faculty: "",
    department: "",
    currentPosition: "",
    employeeId: "",
    officeLocation: "",
    phoneExtension: "",
    education: "",
    degree: "",
    specialization: "",
    university: "",
    graduationYear: "",
    additionalDegrees: "",
    experience: "",
    previousInstitutions: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    localStorage.setItem("academicInfo", JSON.stringify(formData));
    router.push("/onboarding/research");
  };

  const handleBack = () => {
    router.push("/onboarding/personal");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-3xl w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Basic Academic Information</h1>
          <p className="text-gray-600">Step 2 of 6 - Your employment and educational background</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-green-600 h-2 rounded-full" style={{width: '33.33%'}}></div>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Faculty *
              </label>
              <select
                name="faculty"
                value={formData.faculty}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                required
              >
                <option value="">Select faculty</option>
                <option value="Agriculture">Faculty of Agriculture</option>
                <option value="Arts">Faculty of Arts</option>
                <option value="Basic Medical Sciences">Faculty of Basic Medical Sciences</option>
                <option value="Clinical Sciences">Faculty of Clinical Sciences</option>
                <option value="Dentistry">Faculty of Dentistry</option>
                <option value="Education">Faculty of Education</option>
                <option value="Engineering">Faculty of Engineering</option>
                <option value="Environmental Sciences">Faculty of Environmental Sciences</option>
                <option value="Law">Faculty of Law</option>
                <option value="Management Sciences">Faculty of Management Sciences</option>
                <option value="Pharmacy">Faculty of Pharmacy</option>
                <option value="Physical Sciences">Faculty of Physical Sciences</option>
                <option value="Sciences">Faculty of Sciences</option>
                <option value="Social Sciences">Faculty of Social Sciences</option>
                <option value="Technology">Faculty of Technology</option>
                <option value="Veterinary Medicine">Faculty of Veterinary Medicine</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department *
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="e.g., Computer Science"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Position *
              </label>
              <select
                name="currentPosition"
                value={formData.currentPosition}
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
            <h3 className="text-lg font-medium text-gray-900 mb-4">Educational Background</h3>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Highest Education Level *
            </label>
            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              required
            >
              <option value="">Select education level</option>
              <option value="bachelors">Bachelor's Degree (B.Sc, B.A, B.Eng, etc.)</option>
              <option value="masters">Master's Degree (M.Sc, M.A, M.Eng, etc.)</option>
              <option value="phd">Doctor of Philosophy (Ph.D.)</option>
              <option value="postdoc">Post-Doctorate</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Degrees/Certifications
            </label>
            <textarea
              name="additionalDegrees"
              value={formData.additionalDegrees}
              onChange={handleChange}
              rows={3}
              placeholder="List other degrees, certificates, or credentials (e.g., M.Sc. Mathematics 2018, Certificate in Data Science 2020)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Degree Title *
              </label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="e.g., Doctor of Philosophy"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialization *
              </label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="e.g., Computer Science"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University/Institution *
              </label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                placeholder="e.g., University of Lagos"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Graduation Year *
              </label>
              <input
                type="number"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                min="1950"
                max={new Date().getFullYear()}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Years of Teaching Experience
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            >
              <option value="">Select experience level</option>
              <option value="0-1">0-1 years</option>
              <option value="2-5">2-5 years</option>
              <option value="6-10">6-10 years</option>
              <option value="11-15">11-15 years</option>
              <option value="16+">16+ years</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Previous Institutions
            </label>
            <textarea
              name="previousInstitutions"
              value={formData.previousInstitutions}
              onChange={handleChange}
              rows={3}
              placeholder="List previous universities or institutions where you've taught"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            ></textarea>
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