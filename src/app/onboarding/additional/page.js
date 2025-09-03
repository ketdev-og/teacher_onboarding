"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdditionalInfo() {
  const router = useRouter();
  const [showInstituteStep, setShowInstituteStep] = useState(false);
  const [formData, setFormData] = useState({
    languages: [],
    interests: "",
    clubs: "",
    mentoring: "",
    availability: "",
    communication: "",
    emergencyContact: {
      name: "",
      relationship: "",
      phone: "",
      email: ""
    },
    agreement: false
  });

  const languageOptions = [
    "English", "Spanish", "French", "German", "Chinese (Mandarin)",
    "Chinese (Cantonese)", "Japanese", "Korean", "Arabic", "Portuguese",
    "Italian", "Russian", "Hindi", "Other"
  ];

  const handleLanguageChange = (language) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('emergencyContact.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        emergencyContact: {
          ...prev.emergencyContact,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("additionalInfo", JSON.stringify(formData));
    router.push("/onboarding/results");
  };

  const handleBack = () => {
    router.push("/onboarding/teaching");
  };

  useEffect(() => {
    // Check if Institute/Centre step was shown by looking at academicInfo
    const academicInfo = JSON.parse(localStorage.getItem("academicInfo") || "{}");
    if (academicInfo.institute || academicInfo.center) {
      setShowInstituteStep(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-3xl w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Additional Information</h1>
          <p className="text-gray-600">
            Step {showInstituteStep ? '7' : '6'} of {showInstituteStep ? '7' : '6'} - Final details to complete your profile
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Languages You Speak (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {languageOptions.map(language => (
                <label key={language} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.languages.includes(language)}
                    onChange={() => handleLanguageChange(language)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500 bg-white"
                  />
                  <span className="text-sm text-gray-700">{language}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Research Interests & Hobbies
            </label>
            <textarea
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your research interests, hobbies, or other activities"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest in Student Clubs/Organizations
            </label>
            <textarea
              name="clubs"
              value={formData.clubs}
              onChange={handleChange}
              rows={2}
              placeholder="Would you like to advise student clubs or organizations?"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mentoring Preferences
            </label>
            <select
              name="mentoring"
              value={formData.mentoring}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            >
              <option value="">Select mentoring preference</option>
              <option value="eager">Very interested in mentoring students</option>
              <option value="moderate">Moderately interested</option>
              <option value="limited">Limited availability</option>
              <option value="none">Not interested at this time</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Availability for Extra Activities
            </label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            >
              <option value="">Select availability</option>
              <option value="high">High - Available for committees, events, extra duties</option>
              <option value="moderate">Moderate - Some availability for additional activities</option>
              <option value="low">Low - Prefer to focus primarily on teaching</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Communication Method
            </label>
            <select
              name="communication"
              value={formData.communication}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            >
              <option value="">Select communication preference</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="teams">Microsoft Teams</option>
              <option value="slack">Slack</option>
              <option value="in-person">In-person meetings</option>
            </select>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Emergency Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="emergencyContact.name"
                  value={formData.emergencyContact.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relationship *
                </label>
                <input
                  type="text"
                  name="emergencyContact.relationship"
                  value={formData.emergencyContact.relationship}
                  onChange={handleChange}
                  placeholder="e.g., Spouse, Parent, Sibling"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="emergencyContact.phone"
                  value={formData.emergencyContact.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="emergencyContact.email"
                  value={formData.emergencyContact.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                />
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                className="mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500"
                required
              />
              <span className="text-sm text-gray-700">
                I acknowledge that the information provided is accurate and complete. 
                I agree to the university's policies and procedures, and understand that 
                this information will be used for administrative purposes and to enhance 
                my teaching experience at the university.
              </span>
            </label>
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
            onClick={handleSubmit}
            disabled={!formData.agreement}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Complete Onboarding
          </button>
        </div>
      </div>
    </div>
  );
}