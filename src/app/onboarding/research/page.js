"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResearchProfile() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    researchInterests: "",
    researchAreas: []
  });

  const researchAreaOptions = [
    "Artificial Intelligence", "Machine Learning", "Data Science", "Information Systems",
    "Cybersecurity", "Software Engineering", "Computer Networks", "Database Systems",
    "Mathematics", "Statistics", "Physics", "Chemistry", "Biology", 
    "Engineering", "Economics", "Business", "Education", "Psychology", "Other"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleResearchAreaChange = (area) => {
    setFormData(prev => ({
      ...prev,
      researchAreas: prev.researchAreas.includes(area)
        ? prev.researchAreas.filter(a => a !== area)
        : [...prev.researchAreas, area]
    }));
  };

  const handleNext = () => {
    localStorage.setItem("researchInfo", JSON.stringify(formData));
    router.push("/onboarding/professional");
  };

  const handleBack = () => {
    router.push("/onboarding/academic");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-3xl w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Research Profile</h1>
          <p className="text-gray-600">Step 3 of 6 - Your research interests and publications</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-green-600 h-2 rounded-full" style={{width: '50%'}}></div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Research Interests
            </label>
            <textarea
              name="researchInterests"
              value={formData.researchInterests}
              onChange={handleChange}
              rows={3}
              placeholder="Describe your main research interests and focus areas"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Research Areas (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-40 overflow-y-auto border border-gray-200 rounded-lg p-3">
              {researchAreaOptions.map(area => (
                <label key={area} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.researchAreas.includes(area)}
                    onChange={() => handleResearchAreaChange(area)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500 bg-white"
                  />
                  <span className="text-sm text-gray-700">{area}</span>
                </label>
              ))}
            </div>
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