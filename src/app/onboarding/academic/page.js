"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AcademicInfo() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    faculty: "",
    institute: "",
    center: "",
    department: ""
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


  const handleNext = () => {
    localStorage.setItem("academicAffiliation", JSON.stringify(formData));
    
    // Check if Faculty is selected to determine next step
    if (formData.faculty) {
      // Faculty selected - go to new academic details step
      router.push("/onboarding/academic-details");
    } else if (formData.institute || formData.center) {
      // Institute or Centre only - go to institute-centre flow
      router.push("/onboarding/institute-centre");
    } else {
      // Nothing selected - stay on current step or show validation
      alert("Please select at least one: Faculty, Institute, or Academic Centre");
    }
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-3xl w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Academic Affiliation and Background</h1>
          <p className="text-gray-600">Step 1 of ? - Select your academic affiliation</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-green-600 h-2 rounded-full" style={{width: '14.28%'}}></div>
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
