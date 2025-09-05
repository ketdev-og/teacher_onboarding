"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TeachingPreferences() {
  const router = useRouter();
  const [showInstituteStep, setShowInstituteStep] = useState(false);
  const [formData, setFormData] = useState({
    subjects: [],
    levels: [],
    schedule: "",
    classSize: "",
    teachingStyle: "",
    technology: [],
    specialNeeds: "",
    goals: ""
  });

  const subjectOptions = [
    "Mathematics", "Computer Science", "Physics", "Chemistry", "Biology",
    "English Literature", "History", "Psychology", "Economics", "Engineering",
    "Business Administration", "Philosophy", "Art", "Music", "Other"
  ];

  const levelOptions = [
    "Undergraduate (1st Year)", "Undergraduate (2nd Year)", 
    "Undergraduate (3rd Year)", "Undergraduate (4th Year)",
    "Graduate/Masters", "PhD/Doctorate"
  ];

  const technologyOptions = [
    "Online Learning Platforms", "Interactive Whiteboards", "Video Conferencing",
    "Presentation Software", "Learning Management Systems", "Assessment Tools",
    "Virtual Reality", "Simulation Software"
  ];

  const handleSubjectChange = (subject) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleLevelChange = (level) => {
    setFormData(prev => ({
      ...prev,
      levels: prev.levels.includes(level)
        ? prev.levels.filter(l => l !== level)
        : [...prev.levels, level]
    }));
  };

  const handleTechnologyChange = (tech) => {
    setFormData(prev => ({
      ...prev,
      technology: prev.technology.includes(tech)
        ? prev.technology.filter(t => t !== tech)
        : [...prev.technology, tech]
    }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    localStorage.setItem("teachingInfo", JSON.stringify(formData));
    if (showInstituteStep) {
      router.push("/onboarding/additional");
    } else {
      router.push("/onboarding/results");
    }
  };

  const handleBack = () => {
    router.push("/onboarding/professional");
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Teaching Preferences</h1>
          <p className="text-gray-600">
            Step {showInstituteStep ? '6' : '5'} of {showInstituteStep ? '7' : '5'} - Your teaching style and preferences
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-green-600 h-2 rounded-full" style={{width: showInstituteStep ? '85.71%' : '100%'}}></div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Subjects You Can Teach * (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {subjectOptions.map(subject => (
                <label key={subject} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.subjects.includes(subject)}
                    onChange={() => handleSubjectChange(subject)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500 bg-white"
                  />
                  <span className="text-sm text-gray-700">{subject}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Academic Levels * (Select all that apply)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {levelOptions.map(level => (
                <label key={level} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.levels.includes(level)}
                    onChange={() => handleLevelChange(level)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500 bg-white"
                  />
                  <span className="text-sm text-gray-700">{level}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Schedule *
            </label>
            <select
              name="schedule"
              value={formData.schedule}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              required
            >
              <option value="">Select preferred schedule</option>
              <option value="morning">Morning (8 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
              <option value="evening">Evening (5 PM - 9 PM)</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Class Size *
            </label>
            <select
              name="classSize"
              value={formData.classSize}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              required
            >
              <option value="">Select preferred class size</option>
              <option value="small">Small (1-15 students)</option>
              <option value="medium">Medium (16-30 students)</option>
              <option value="large">Large (31-50 students)</option>
              <option value="very-large">Very Large (50+ students)</option>
              <option value="no-preference">No Preference</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Teaching Style
            </label>
            <textarea
              name="teachingStyle"
              value={formData.teachingStyle}
              onChange={handleChange}
              rows={3}
              placeholder="Describe your teaching methodology and approach"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Technology & Tools (Select all you're comfortable with)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {technologyOptions.map(tech => (
                <label key={tech} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.technology.includes(tech)}
                    onChange={() => handleTechnologyChange(tech)}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500 bg-white"
                  />
                  <span className="text-sm text-gray-700">{tech}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Accommodation Needs
            </label>
            <textarea
              name="specialNeeds"
              value={formData.specialNeeds}
              onChange={handleChange}
              rows={2}
              placeholder="Any accessibility requirements or special needs"
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
            {showInstituteStep ? 'Next' : 'Complete'}
          </button>
        </div>
      </div>
    </div>
  );
}