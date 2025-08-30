"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfessionalExperience() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    professionalBodies: "",
    consultingExperience: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    localStorage.setItem("professionalInfo", JSON.stringify(formData));
    router.push("/onboarding/teaching");
  };

  const handleBack = () => {
    router.push("/onboarding/research");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-3xl w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Professional Experience</h1>
          <p className="text-gray-600">Step 4 of 6 - Your professional activities and achievements</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-green-600 h-2 rounded-full" style={{width: '66.67%'}}></div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Professional Bodies/Memberships
            </label>
            <textarea
              name="professionalBodies"
              value={formData.professionalBodies}
              onChange={handleChange}
              rows={3}
              placeholder="List professional organizations you belong to (e.g., Nigerian Computer Society (NCS), Computer Professionals Registration Council of Nigeria (CPN))"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Previous Work Experience
            </label>
            <textarea
              name="consultingExperience"
              value={formData.consultingExperience}
              onChange={handleChange}
              rows={3}
              placeholder="Describe previous work experience, industry background, or consulting work"
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