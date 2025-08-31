"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResearchProfile() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    researchInterests: "",
    researchAreas: [],
    googleScholar: "",
    orcid: "",
    scopus: "",
    publications: "",
    journalPublications: "",
    presentations: "",
    awards: "",
    grants: "",
    mediaPublications: ""
  });

  const researchAreaOptions = [
    "Accounting", "Adult Education", "Agricultural and Bioresources Engineering", "Agricultural Economics", 
    "Agricultural Extension", "Agricultural Science and Education", "Animal Science", "Archaeology", 
    "Architecture", "Banking and Finance", "Biochemistry", "Biological Sciences", "Botany", 
    "Business Education", "Business Management", "Civil Engineering", "Computer Education", 
    "Computer Science", "Creative Arts", "Crop Science", "Dentistry and Dental Surgery", 
    "Early Childhood Education", "Economics", "Education and Biology", "Education and Chemistry", 
    "Education and Computer Science", "Education and Economics", "Education and English Language", 
    "Education and French", "Education and Geography", "Education and History", "Education and Igbo", 
    "Education and Integrated Science", "Education and Mathematics", "Education and Physics", 
    "Education and Political Science", "Education and Religious Studies", "Education and Social Studies", 
    "Electrical Engineering", "Electronic Engineering", "English and Literary Studies", 
    "Estate Management", "Fine and Applied Arts", "Food Science and Technology", "French", 
    "Geography", "Geology", "German", "Guidance and Counselling", "Health Education", 
    "History and International Studies", "Home Science Nutrition and Dietetics", 
    "Industrial Technical Education", "Law", "Library and Information Science", "Linguistics", 
    "Marketing", "Mass Communication", "Mathematics", "Mechanical Engineering", 
    "Medical Laboratory Science", "Medical Rehabilitation", "Medicine and Surgery", "Microbiology", 
    "Music", "Nursing Science", "Pharmacy", "Philosophy", "Physical Education", 
    "Physics and Astronomy", "Political Science", "Primary Education Studies", "Psychology", 
    "Public Administration and Local Government", "Pure and Industrial Chemistry", "Radiography", 
    "Religious Studies", "Social Work", "Sociology and Anthropology", "Soil Science", 
    "Special Education", "Statistics", "Surveying and Geoinformatics", "Theatre and Film Studies", 
    "Urban and Regional Planning", "Veterinary Medicine", "Zoology"
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

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Academic Profile Links</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Google Scholar ID & Link
              </label>
              <input
                type="url"
                name="googleScholar"
                value={formData.googleScholar}
                onChange={handleChange}
                placeholder="https://scholar.google.com/citations?user=..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ORCID ID & Link
              </label>
              <input
                type="text"
                name="orcid"
                value={formData.orcid}
                onChange={handleChange}
                placeholder="https://orcid.org/0000-0000-0000-0000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SCOPUS Preview ID & Link
              </label>
              <input
                type="text"
                name="scopus"
                value={formData.scopus}
                onChange={handleChange}
                placeholder="SCOPUS Author ID or Profile Link"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              />
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Publications & Research Output</h3>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Publications with Links
            </label>
            <textarea
              name="publications"
              value={formData.publications}
              onChange={handleChange}
              rows={4}
              placeholder="List your key publications with DOI or links (e.g., Author, A. (2023). Title. Journal Name. https://doi.org/...)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Other Journal Publications (Offline, Full Details)
            </label>
            <textarea
              name="journalPublications"
              value={formData.journalPublications}
              onChange={handleChange}
              rows={3}
              placeholder="List offline or non-linked journal publications with full citation details"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Conference Presentations
            </label>
            <textarea
              name="presentations"
              value={formData.presentations}
              onChange={handleChange}
              rows={3}
              placeholder="List conference presentations, keynotes, and invited talks"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Awards & Recognition
            </label>
            <textarea
              name="awards"
              value={formData.awards}
              onChange={handleChange}
              rows={3}
              placeholder="List academic awards, honors, and recognitions received"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Research Grants & Funding
            </label>
            <textarea
              name="grants"
              value={formData.grants}
              onChange={handleChange}
              rows={3}
              placeholder="List research grants and funding received (e.g., TETFUND, NSF, etc.)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Other Media Publications and Links
            </label>
            <textarea
              name="mediaPublications"
              value={formData.mediaPublications}
              onChange={handleChange}
              rows={3}
              placeholder="Blog posts, media interviews, podcast appearances, and other public engagement"
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