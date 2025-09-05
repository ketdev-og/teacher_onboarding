"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InstituteCentreProfile() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    campus: "",
    instituteBiography: "",
    focus: "",
    objectives: "",
    mission: "",
    vision: "",
    vehicles: "",
    professionalCertifications: "",
    officialEmail: "",
    telephone: "",
    officeHours: "",
    directorTitle: "",
    directorName: "",
    directorBiography: "",
    directorEmail: "",
    pastDirectors: [{
      name: "",
      period: "",
      title: ""
    }],
    advisoryBoard: [{
      name: "",
      affiliate: "",
      status: ""
    }],
    staffList: [{
      name: "",
      position: "",
      email: ""
    }],
    researchAreas: "",
    researchPublications: [{
      title: "",
      authors: "",
      journal: "",
      year: "",
      doi: "",
      link: ""
    }],
    journalPublications: [{
      title: "",
      authors: "",
      journal: "",
      year: "",
      volume: "",
      pages: ""
    }],
    mediaPublications: [{
      title: "",
      type: "",
      platform: "",
      date: "",
      link: ""
    }],
    presentations: [{
      title: "",
      event: "",
      location: "",
      date: "",
      type: ""
    }],
    awards: [{
      title: "",
      organization: "",
      year: "",
      description: ""
    }],
    ongoingGrants: [{
      title: "",
      funder: "",
      amount: "",
      startDate: "",
      expectedEndDate: "",
      status: "ongoing"
    }],
    completedGrants: [{
      title: "",
      funder: "",
      amount: "",
      startDate: "",
      endDate: "",
      status: "completed"
    }],
    publicationOutfits: [{
      name: "",
      type: "",
      description: ""
    }],
    hostedConferences: [{
      name: "",
      year: "",
      frequency: "",
      attendees: ""
    }],
    otherInvestments: [{
      type: "",
      amount: "",
      source: "",
      year: ""
    }],
    innovations: [{
      title: "",
      description: "",
      year: "",
      status: ""
    }],
    activeMOUs: [{
      organization: "",
      purpose: "",
      startDate: "",
      duration: "",
      status: "active"
    }],
    terminatedMOUs: [{
      organization: "",
      purpose: "",
      startDate: "",
      endDate: "",
      reason: "",
      status: "terminated"
    }],
    projects: [{
      title: "",
      description: "",
      startDate: "",
      expectedEndDate: "",
      status: "",
      completionPercentage: ""
    }],
    otherInitiatives: [{
      title: "",
      description: "",
      startDate: "",
      completionDate: "",
      status: ""
    }],
    outlooks: [{
      title: "",
      description: "",
      timeline: "",
      priority: ""
    }],
    availableTools: [{
      category: "",
      name: "",
      description: ""
    }],
    requiredTools: [{
      category: "",
      name: "",
      description: "",
      priority: ""
    }],
    mediaPublications: [{
      title: "",
      type: "",
      platform: "",
      date: "",
      link: ""
    }],
    publicationOutfits: [{
      name: "",
      type: "",
      description: ""
    }],
    hostedConferences: [{
      name: "",
      year: "",
      frequency: "",
      attendees: ""
    }],
    otherInvestments: [{
      type: "",
      amount: "",
      source: "",
      year: ""
    }],
    innovations: [{
      title: "",
      description: "",
      year: "",
      status: ""
    }],
    otherInitiatives: [{
      title: "",
      description: "",
      startDate: "",
      completionDate: "",
      status: ""
    }],
    outlooks: [{
      title: "",
      description: "",
      timeline: "",
      priority: ""
    }],
    availableTools: [{
      category: "",
      name: "",
      description: ""
    }],
    requiredTools: [{
      category: "",
      name: "",
      description: "",
      priority: ""
    }],
    otherInformation: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePastDirectorChange = (index, field, value) => {
    const updatedDirectors = [...formData.pastDirectors];
    updatedDirectors[index] = { ...updatedDirectors[index], [field]: value };
    setFormData({ ...formData, pastDirectors: updatedDirectors });
  };

  const addPastDirector = () => {
    setFormData({
      ...formData,
      pastDirectors: [...formData.pastDirectors, {
        name: "",
        period: "",
        title: ""
      }]
    });
  };

  const removePastDirector = (index) => {
    const updatedDirectors = formData.pastDirectors.filter((_, i) => i !== index);
    setFormData({ ...formData, pastDirectors: updatedDirectors });
  };

  const handleAdvisoryBoardChange = (index, field, value) => {
    const updatedBoard = [...formData.advisoryBoard];
    updatedBoard[index] = { ...updatedBoard[index], [field]: value };
    setFormData({ ...formData, advisoryBoard: updatedBoard });
  };

  const addAdvisoryBoardMember = () => {
    setFormData({
      ...formData,
      advisoryBoard: [...formData.advisoryBoard, {
        name: "",
        affiliate: "",
        status: ""
      }]
    });
  };

  const removeAdvisoryBoardMember = (index) => {
    const updatedBoard = formData.advisoryBoard.filter((_, i) => i !== index);
    setFormData({ ...formData, advisoryBoard: updatedBoard });
  };

  const handleStaffChange = (index, field, value) => {
    const updatedStaff = [...formData.staffList];
    updatedStaff[index] = { ...updatedStaff[index], [field]: value };
    setFormData({ ...formData, staffList: updatedStaff });
  };

  const addStaffMember = () => {
    setFormData({
      ...formData,
      staffList: [...formData.staffList, {
        name: "",
        position: "",
        email: ""
      }]
    });
  };

  const removeStaffMember = (index) => {
    const updatedStaff = formData.staffList.filter((_, i) => i !== index);
    setFormData({ ...formData, staffList: updatedStaff });
  };

  // Generic handlers for array fields
  const handleArrayChange = (arrayName, index, field, value) => {
    const updatedArray = [...formData[arrayName]];
    updatedArray[index] = { ...updatedArray[index], [field]: value };
    setFormData({ ...formData, [arrayName]: updatedArray });
  };

  const addArrayItem = (arrayName, defaultItem) => {
    setFormData({
      ...formData,
      [arrayName]: [...formData[arrayName], defaultItem]
    });
  };

  const removeArrayItem = (arrayName, index) => {
    const updatedArray = formData[arrayName].filter((_, i) => i !== index);
    setFormData({ ...formData, [arrayName]: updatedArray });
  };

  const handleNext = () => {
    localStorage.setItem("instituteCentreInfo", JSON.stringify(formData));
    router.push("/onboarding/results");
  };

  const handleBack = () => {
    router.push("/onboarding/academic");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Institute/Centre Profile</h1>
          <p className="text-gray-600">Step 2 of 2 - Complete your Institute/Centre Profile</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
          </div>
        </div>

        <form className="space-y-8">
          {/* Basic Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Basic Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Campus *
              </label>
              <select
                name="campus"
                value={formData.campus}
                onChange={handleChange}
                className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                required
              >
                <option value="">Select Campus</option>
                <option value="Nsukka">Nsukka</option>
                <option value="Enugu">Enugu</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brief Biography / Profile of the Institute or Academic Centre *
              </label>
              <textarea
                name="instituteBiography"
                value={formData.instituteBiography}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                required
              ></textarea>
            </div>
          </div>

          {/* Strategic Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Strategic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Focus</label>
                <textarea
                  name="focus"
                  value={formData.focus}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Objectives</label>
                <textarea
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                ></textarea>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mission</label>
                <textarea
                  name="mission"
                  value={formData.mission}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vision</label>
                <textarea
                  name="vision"
                  value={formData.vision}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                ></textarea>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicles (How do you deliver on your objectives / mandates?)
              </label>
              <textarea
                name="vehicles"
                value={formData.vehicles}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              ></textarea>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Contact Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Professional Certifications / Recognitions / Affiliations
              </label>
              <textarea
                name="professionalCertifications"
                value={formData.professionalCertifications}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Official Email</label>
                <input
                  type="email"
                  name="officialEmail"
                  value={formData.officialEmail}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telephone</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Office Hours</label>
                <input
                  type="text"
                  name="officeHours"
                  value={formData.officeHours}
                  onChange={handleChange}
                  placeholder="e.g., Mon-Fri 9AM-5PM"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Director Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Director Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title of Director</label>
                <select
                  name="directorTitle"
                  value={formData.directorTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                >
                  <option value="">Select Title</option>
                  <option value="Prof.">Prof.</option>
                  <option value="Ass. Prof.">Ass. Prof.</option>
                  <option value="Dr.">Dr.</option>
                  <option value="Engr.">Engr.</option>
                  <option value="Esq.">Esq.</option>
                  <option value="Barr.">Barr.</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Ms.">Ms.</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Name of Director</label>
                <input
                  type="text"
                  name="directorName"
                  value={formData.directorName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brief Biography / Profile of the Director
              </label>
              <textarea
                name="directorBiography"
                value={formData.directorBiography}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Official Email of the Director</label>
              <input
                type="email"
                name="directorEmail"
                value={formData.directorEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              />
            </div>
          </div>

          {/* Past Directors */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Past Directors/Heads (Chronological Order)</h3>
              <button
                type="button"
                onClick={addPastDirector}
                className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
              >
                + Add Director
              </button>
            </div>
            
            {formData.pastDirectors.map((director, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-md font-medium text-gray-800">
                    Director {index + 1}
                  </h4>
                  {formData.pastDirectors.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePastDirector(index)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={director.title}
                      onChange={(e) => handlePastDirectorChange(index, 'title', e.target.value)}
                      placeholder="Prof., Dr., etc."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={director.name}
                      onChange={(e) => handlePastDirectorChange(index, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Period of Directorship</label>
                    <input
                      type="text"
                      value={director.period}
                      onChange={(e) => handlePastDirectorChange(index, 'period', e.target.value)}
                      placeholder="e.g., 2018-2022"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Advisory Board */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Advisory Board</h3>
              <button
                type="button"
                onClick={addAdvisoryBoardMember}
                className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
              >
                + Add Member
              </button>
            </div>
            
            {formData.advisoryBoard.map((member, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-md font-medium text-gray-800">
                    Advisory Board Member {index + 1}
                  </h4>
                  {formData.advisoryBoard.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeAdvisoryBoardMember(index)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => handleAdvisoryBoardChange(index, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Affiliate</label>
                    <input
                      type="text"
                      value={member.affiliate}
                      onChange={(e) => handleAdvisoryBoardChange(index, 'affiliate', e.target.value)}
                      placeholder="Institution/Organization"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={member.status}
                      onChange={(e) => handleAdvisoryBoardChange(index, 'status', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                    >
                      <option value="">Select Status</option>
                      <option value="Present">Present</option>
                      <option value="Past">Past</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Staff List */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900 border-b pb-2">List of Staff</h3>
              <button
                type="button"
                onClick={addStaffMember}
                className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
              >
                + Add Staff
              </button>
            </div>
            
            {formData.staffList.map((staff, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-md font-medium text-gray-800">
                    Staff Member {index + 1}
                  </h4>
                  {formData.staffList.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeStaffMember(index)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={staff.name}
                      onChange={(e) => handleStaffChange(index, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                    <input
                      type="text"
                      value={staff.position}
                      onChange={(e) => handleStaffChange(index, 'position', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Official Email</label>
                    <input
                      type="email"
                      value={staff.email}
                      onChange={(e) => handleStaffChange(index, 'email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Research Activities */}
          <div className="space-y-8">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Research & Activities</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Research Areas and Other Activities</label>
              <textarea
                name="researchAreas"
                value={formData.researchAreas}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              ></textarea>
            </div>

            {/* Research Publications with Links */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Research Publications with Links</h4>
                <button
                  type="button"
                  onClick={() => addArrayItem('researchPublications', { title: "", authors: "", journal: "", year: "", doi: "", link: "" })}
                  className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                >
                  + Add Publication
                </button>
              </div>
              
              {formData.researchPublications.map((pub, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium text-gray-800">Publication {index + 1}</h5>
                    {formData.researchPublications.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('researchPublications', index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={pub.title}
                        onChange={(e) => handleArrayChange('researchPublications', index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Authors</label>
                      <input
                        type="text"
                        value={pub.authors}
                        onChange={(e) => handleArrayChange('researchPublications', index, 'authors', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Journal</label>
                      <input
                        type="text"
                        value={pub.journal}
                        onChange={(e) => handleArrayChange('researchPublications', index, 'journal', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                      <input
                        type="number"
                        value={pub.year}
                        onChange={(e) => handleArrayChange('researchPublications', index, 'year', e.target.value)}
                        min="1950"
                        max={new Date().getFullYear()}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">DOI/Link</label>
                      <input
                        type="url"
                        value={pub.link}
                        onChange={(e) => handleArrayChange('researchPublications', index, 'link', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Journal Publications (Offline) */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Other Journal Publications (Offline)</h4>
                <button
                  type="button"
                  onClick={() => addArrayItem('journalPublications', { title: "", authors: "", journal: "", year: "", volume: "", pages: "" })}
                  className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                >
                  + Add Publication
                </button>
              </div>
              
              {formData.journalPublications.map((pub, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium text-gray-800">Publication {index + 1}</h5>
                    {formData.journalPublications.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('journalPublications', index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={pub.title}
                        onChange={(e) => handleArrayChange('journalPublications', index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Authors</label>
                      <input
                        type="text"
                        value={pub.authors}
                        onChange={(e) => handleArrayChange('journalPublications', index, 'authors', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Journal</label>
                      <input
                        type="text"
                        value={pub.journal}
                        onChange={(e) => handleArrayChange('journalPublications', index, 'journal', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                      <input
                        type="number"
                        value={pub.year}
                        onChange={(e) => handleArrayChange('journalPublications', index, 'year', e.target.value)}
                        min="1950"
                        max={new Date().getFullYear()}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Volume</label>
                      <input
                        type="text"
                        value={pub.volume}
                        onChange={(e) => handleArrayChange('journalPublications', index, 'volume', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pages</label>
                      <input
                        type="text"
                        value={pub.pages}
                        onChange={(e) => handleArrayChange('journalPublications', index, 'pages', e.target.value)}
                        placeholder="e.g., 123-145"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Presentations */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Presentations</h4>
                <button
                  type="button"
                  onClick={() => addArrayItem('presentations', { title: "", event: "", location: "", date: "", type: "" })}
                  className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                >
                  + Add Presentation
                </button>
              </div>
              
              {formData.presentations.map((pres, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium text-gray-800">Presentation {index + 1}</h5>
                    {formData.presentations.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('presentations', index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={pres.title}
                        onChange={(e) => handleArrayChange('presentations', index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Event/Conference</label>
                      <input
                        type="text"
                        value={pres.event}
                        onChange={(e) => handleArrayChange('presentations', index, 'event', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        value={pres.location}
                        onChange={(e) => handleArrayChange('presentations', index, 'location', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <input
                        type="date"
                        value={pres.date}
                        onChange={(e) => handleArrayChange('presentations', index, 'date', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                      <select
                        value={pres.type}
                        onChange={(e) => handleArrayChange('presentations', index, 'type', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      >
                        <option value="">Select Type</option>
                        <option value="Keynote">Keynote</option>
                        <option value="Invited Talk">Invited Talk</option>
                        <option value="Conference Paper">Conference Paper</option>
                        <option value="Poster">Poster</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Seminar">Seminar</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Awards & Recognition</h4>
                <button
                  type="button"
                  onClick={() => addArrayItem('awards', { title: "", organization: "", year: "", description: "" })}
                  className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                >
                  + Add Award
                </button>
              </div>
              
              {formData.awards.map((award, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium text-gray-800">Award {index + 1}</h5>
                    {formData.awards.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('awards', index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Award Title</label>
                      <input
                        type="text"
                        value={award.title}
                        onChange={(e) => handleArrayChange('awards', index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                      <input
                        type="text"
                        value={award.organization}
                        onChange={(e) => handleArrayChange('awards', index, 'organization', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                      <input
                        type="number"
                        value={award.year}
                        onChange={(e) => handleArrayChange('awards', index, 'year', e.target.value)}
                        min="1950"
                        max={new Date().getFullYear()}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={award.description}
                        onChange={(e) => handleArrayChange('awards', index, 'description', e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      ></textarea>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Grants */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Research Grants & Funding</h3>
            
            {/* Ongoing Grants */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Ongoing Grants</h4>
                <button
                  type="button"
                  onClick={() => addArrayItem('ongoingGrants', { title: "", funder: "", amount: "", startDate: "", expectedEndDate: "", status: "ongoing" })}
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  + Add Grant
                </button>
              </div>
              
              {formData.ongoingGrants.map((grant, index) => (
                <div key={index} className="border border-blue-200 rounded-lg p-4 mb-4 bg-blue-50">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium text-gray-800">Ongoing Grant {index + 1}</h5>
                    {formData.ongoingGrants.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('ongoingGrants', index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Grant Title</label>
                      <input
                        type="text"
                        value={grant.title}
                        onChange={(e) => handleArrayChange('ongoingGrants', index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Funder</label>
                      <input
                        type="text"
                        value={grant.funder}
                        onChange={(e) => handleArrayChange('ongoingGrants', index, 'funder', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                      <input
                        type="text"
                        value={grant.amount}
                        onChange={(e) => handleArrayChange('ongoingGrants', index, 'amount', e.target.value)}
                        placeholder="e.g., ₦5,000,000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                      <input
                        type="date"
                        value={grant.startDate}
                        onChange={(e) => handleArrayChange('ongoingGrants', index, 'startDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expected End Date</label>
                      <input
                        type="date"
                        value={grant.expectedEndDate}
                        onChange={(e) => handleArrayChange('ongoingGrants', index, 'expectedEndDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Completed Grants */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Completed Grants</h4>
                <button
                  type="button"
                  onClick={() => addArrayItem('completedGrants', { title: "", funder: "", amount: "", startDate: "", endDate: "", status: "completed" })}
                  className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  + Add Grant
                </button>
              </div>
              
              {formData.completedGrants.map((grant, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium text-gray-800">Completed Grant {index + 1}</h5>
                    {formData.completedGrants.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('completedGrants', index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Grant Title</label>
                      <input
                        type="text"
                        value={grant.title}
                        onChange={(e) => handleArrayChange('completedGrants', index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Funder</label>
                      <input
                        type="text"
                        value={grant.funder}
                        onChange={(e) => handleArrayChange('completedGrants', index, 'funder', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                      <input
                        type="text"
                        value={grant.amount}
                        onChange={(e) => handleArrayChange('completedGrants', index, 'amount', e.target.value)}
                        placeholder="e.g., ₦5,000,000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                      <input
                        type="date"
                        value={grant.startDate}
                        onChange={(e) => handleArrayChange('completedGrants', index, 'startDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                      <input
                        type="date"
                        value={grant.endDate}
                        onChange={(e) => handleArrayChange('completedGrants', index, 'endDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Additional Information</h3>
            
            {/* MOUs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Active MOUs */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-md font-medium text-gray-800">Active MOUs</h4>
                  <button
                    type="button"
                    onClick={() => addArrayItem('activeMOUs', { organization: "", purpose: "", startDate: "", duration: "", status: "active" })}
                    className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    + Add MOU
                  </button>
                </div>
                
                {formData.activeMOUs.map((mou, index) => (
                  <div key={index} className="border border-green-200 rounded-lg p-3 mb-3 bg-green-50">
                    <div className="flex justify-between items-center mb-2">
                      <h6 className="text-xs font-medium text-gray-700">Active MOU {index + 1}</h6>
                      {formData.activeMOUs.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('activeMOUs', index)}
                          className="text-red-600 hover:text-red-800 text-xs"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Organization"
                        value={mou.organization}
                        onChange={(e) => handleArrayChange('activeMOUs', index, 'organization', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                      />
                      <input
                        type="text"
                        placeholder="Purpose"
                        value={mou.purpose}
                        onChange={(e) => handleArrayChange('activeMOUs', index, 'purpose', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="date"
                          value={mou.startDate}
                          onChange={(e) => handleArrayChange('activeMOUs', index, 'startDate', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                        />
                        <input
                          type="text"
                          placeholder="Duration"
                          value={mou.duration}
                          onChange={(e) => handleArrayChange('activeMOUs', index, 'duration', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Terminated MOUs */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-md font-medium text-gray-800">Terminated MOUs</h4>
                  <button
                    type="button"
                    onClick={() => addArrayItem('terminatedMOUs', { organization: "", purpose: "", startDate: "", endDate: "", reason: "", status: "terminated" })}
                    className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    + Add MOU
                  </button>
                </div>
                
                {formData.terminatedMOUs.map((mou, index) => (
                  <div key={index} className="border border-red-200 rounded-lg p-3 mb-3 bg-red-50">
                    <div className="flex justify-between items-center mb-2">
                      <h6 className="text-xs font-medium text-gray-700">Terminated MOU {index + 1}</h6>
                      {formData.terminatedMOUs.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('terminatedMOUs', index)}
                          className="text-red-600 hover:text-red-800 text-xs"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Organization"
                        value={mou.organization}
                        onChange={(e) => handleArrayChange('terminatedMOUs', index, 'organization', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                      />
                      <input
                        type="text"
                        placeholder="Purpose"
                        value={mou.purpose}
                        onChange={(e) => handleArrayChange('terminatedMOUs', index, 'purpose', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="date"
                          value={mou.startDate}
                          onChange={(e) => handleArrayChange('terminatedMOUs', index, 'startDate', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                        />
                        <input
                          type="date"
                          value={mou.endDate}
                          onChange={(e) => handleArrayChange('terminatedMOUs', index, 'endDate', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                        />
                      </div>
                      <textarea
                        placeholder="Reason for termination"
                        value={mou.reason}
                        onChange={(e) => handleArrayChange('terminatedMOUs', index, 'reason', e.target.value)}
                        rows={2}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Projects & Other Initiatives</h4>
                <button
                  type="button"
                  onClick={() => addArrayItem('projects', { title: "", description: "", startDate: "", expectedEndDate: "", status: "", completionPercentage: "" })}
                  className="px-3 py-1 text-sm bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  + Add Project
                </button>
              </div>
              
              {formData.projects.map((project, index) => (
                <div key={index} className="border border-purple-200 rounded-lg p-4 mb-4 bg-purple-50">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium text-gray-800">Project {index + 1}</h5>
                    {formData.projects.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('projects', index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => handleArrayChange('projects', index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => handleArrayChange('projects', index, 'description', e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                      <input
                        type="date"
                        value={project.startDate}
                        onChange={(e) => handleArrayChange('projects', index, 'startDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expected End Date</label>
                      <input
                        type="date"
                        value={project.expectedEndDate}
                        onChange={(e) => handleArrayChange('projects', index, 'expectedEndDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select
                        value={project.status}
                        onChange={(e) => handleArrayChange('projects', index, 'status', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      >
                        <option value="">Select Status</option>
                        <option value="Planning">Planning</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                        <option value="On Hold">On Hold</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Completion %</label>
                      <input
                        type="number"
                        value={project.completionPercentage}
                        onChange={(e) => handleArrayChange('projects', index, 'completionPercentage', e.target.value)}
                        min="0"
                        max="100"
                        placeholder="0-100"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Media Publications */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Other Media Publications and Links</h4>
                <button
                  type="button"
                  onClick={() => addArrayItem('mediaPublications', { title: "", type: "", platform: "", date: "", link: "" })}
                  className="px-3 py-1 text-sm bg-orange-600 text-white rounded hover:bg-orange-700"
                >
                  + Add Media Publication
                </button>
              </div>
              
              {formData.mediaPublications.map((media, index) => (
                <div key={index} className="border border-orange-200 rounded-lg p-4 mb-4 bg-orange-50">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium text-gray-800">Media Publication {index + 1}</h5>
                    {formData.mediaPublications.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('mediaPublications', index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={media.title}
                        onChange={(e) => handleArrayChange('mediaPublications', index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                      <select
                        value={media.type}
                        onChange={(e) => handleArrayChange('mediaPublications', index, 'type', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      >
                        <option value="">Select Type</option>
                        <option value="Blog Post">Blog Post</option>
                        <option value="Interview">Interview</option>
                        <option value="Podcast">Podcast</option>
                        <option value="News Article">News Article</option>
                        <option value="Video">Video</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Newsletter">Newsletter</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                      <input
                        type="text"
                        value={media.platform}
                        onChange={(e) => handleArrayChange('mediaPublications', index, 'platform', e.target.value)}
                        placeholder="e.g., LinkedIn, YouTube, The Guardian"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <input
                        type="date"
                        value={media.date}
                        onChange={(e) => handleArrayChange('mediaPublications', index, 'date', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
                      <input
                        type="url"
                        value={media.link}
                        onChange={(e) => handleArrayChange('mediaPublications', index, 'link', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Publication Outfits */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Research Publication Outfits (Owned or Hosted)</h4>
                <button
                  type="button"
                  onClick={() => addArrayItem('publicationOutfits', { name: "", type: "", description: "" })}
                  className="px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  + Add Outfit
                </button>
              </div>
              
              {formData.publicationOutfits.map((outfit, index) => (
                <div key={index} className="border border-indigo-200 rounded-lg p-4 mb-4 bg-indigo-50">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium text-gray-800">Publication Outfit {index + 1}</h5>
                    {formData.publicationOutfits.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('publicationOutfits', index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={outfit.name}
                        onChange={(e) => handleArrayChange('publicationOutfits', index, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                      <select
                        value={outfit.type}
                        onChange={(e) => handleArrayChange('publicationOutfits', index, 'type', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      >
                        <option value="">Select Type</option>
                        <option value="Journal">Journal</option>
                        <option value="Magazine">Magazine</option>
                        <option value="Newsletter">Newsletter</option>
                        <option value="Book Series">Book Series</option>
                        <option value="Conference Proceedings">Conference Proceedings</option>
                        <option value="Repository">Repository</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={outfit.description}
                        onChange={(e) => handleArrayChange('publicationOutfits', index, 'description', e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      ></textarea>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hosted Conferences */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Hosted Conferences or Other Activities</h4>
                <button
                  type="button"
                  onClick={() => addArrayItem('hostedConferences', { name: "", year: "", frequency: "", attendees: "" })}
                  className="px-3 py-1 text-sm bg-teal-600 text-white rounded hover:bg-teal-700"
                >
                  + Add Conference
                </button>
              </div>
              
              {formData.hostedConferences.map((conf, index) => (
                <div key={index} className="border border-teal-200 rounded-lg p-4 mb-4 bg-teal-50">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium text-gray-800">Conference {index + 1}</h5>
                    {formData.hostedConferences.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('hostedConferences', index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Conference/Activity Name</label>
                      <input
                        type="text"
                        value={conf.name}
                        onChange={(e) => handleArrayChange('hostedConferences', index, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                      <input
                        type="number"
                        value={conf.year}
                        onChange={(e) => handleArrayChange('hostedConferences', index, 'year', e.target.value)}
                        min="2000"
                        max={new Date().getFullYear()}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
                      <select
                        value={conf.frequency}
                        onChange={(e) => handleArrayChange('hostedConferences', index, 'frequency', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      >
                        <option value="">Select Frequency</option>
                        <option value="Annual">Annual</option>
                        <option value="Biennial">Biennial</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Quarterly">Quarterly</option>
                        <option value="One-time">One-time</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Attendees</label>
                      <input
                        type="text"
                        value={conf.attendees}
                        onChange={(e) => handleArrayChange('hostedConferences', index, 'attendees', e.target.value)}
                        placeholder="e.g., 200-300"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Other Investments */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Other Investments Attracted</h4>
                <button
                  type="button"
                  onClick={() => addArrayItem('otherInvestments', { type: "", amount: "", source: "", year: "" })}
                  className="px-3 py-1 text-sm bg-yellow-600 text-white rounded hover:bg-yellow-700"
                >
                  + Add Investment
                </button>
              </div>
              
              {formData.otherInvestments.map((investment, index) => (
                <div key={index} className="border border-yellow-200 rounded-lg p-4 mb-4 bg-yellow-50">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium text-gray-800">Investment {index + 1}</h5>
                    {formData.otherInvestments.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('otherInvestments', index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                      <select
                        value={investment.type}
                        onChange={(e) => handleArrayChange('otherInvestments', index, 'type', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      >
                        <option value="">Select Type</option>
                        <option value="Equipment">Equipment</option>
                        <option value="Infrastructure">Infrastructure</option>
                        <option value="Software">Software</option>
                        <option value="Training">Training</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Donation">Donation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Amount/Value</label>
                      <input
                        type="text"
                        value={investment.amount}
                        onChange={(e) => handleArrayChange('otherInvestments', index, 'amount', e.target.value)}
                        placeholder="e.g., ₦2,000,000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
                      <input
                        type="text"
                        value={investment.source}
                        onChange={(e) => handleArrayChange('otherInvestments', index, 'source', e.target.value)}
                        placeholder="Organization/Company name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                      <input
                        type="number"
                        value={investment.year}
                        onChange={(e) => handleArrayChange('otherInvestments', index, 'year', e.target.value)}
                        min="2000"
                        max={new Date().getFullYear()}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Innovations */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Innovations</h4>
                <button
                  type="button"
                  onClick={() => addArrayItem('innovations', { title: "", description: "", year: "", status: "" })}
                  className="px-3 py-1 text-sm bg-pink-600 text-white rounded hover:bg-pink-700"
                >
                  + Add Innovation
                </button>
              </div>
              
              {formData.innovations.map((innovation, index) => (
                <div key={index} className="border border-pink-200 rounded-lg p-4 mb-4 bg-pink-50">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium text-gray-800">Innovation {index + 1}</h5>
                    {formData.innovations.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('innovations', index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Innovation Title</label>
                      <input
                        type="text"
                        value={innovation.title}
                        onChange={(e) => handleArrayChange('innovations', index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={innovation.description}
                        onChange={(e) => handleArrayChange('innovations', index, 'description', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                      <input
                        type="number"
                        value={innovation.year}
                        onChange={(e) => handleArrayChange('innovations', index, 'year', e.target.value)}
                        min="2000"
                        max={new Date().getFullYear()}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select
                        value={innovation.status}
                        onChange={(e) => handleArrayChange('innovations', index, 'status', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      >
                        <option value="">Select Status</option>
                        <option value="Conceptual">Conceptual</option>
                        <option value="In Development">In Development</option>
                        <option value="Prototype">Prototype</option>
                        <option value="Implemented">Implemented</option>
                        <option value="Commercialized">Commercialized</option>
                        <option value="Patent Applied">Patent Applied</option>
                        <option value="Patent Granted">Patent Granted</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Other Initiatives */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Other Initiatives</h4>
                <button
                  type="button"
                  onClick={() => addArrayItem('otherInitiatives', { title: "", description: "", startDate: "", completionDate: "", status: "" })}
                  className="px-3 py-1 text-sm bg-cyan-600 text-white rounded hover:bg-cyan-700"
                >
                  + Add Initiative
                </button>
              </div>
              
              {formData.otherInitiatives.map((initiative, index) => (
                <div key={index} className="border border-cyan-200 rounded-lg p-4 mb-4 bg-cyan-50">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium text-gray-800">Initiative {index + 1}</h5>
                    {formData.otherInitiatives.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('otherInitiatives', index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Initiative Title</label>
                      <input
                        type="text"
                        value={initiative.title}
                        onChange={(e) => handleArrayChange('otherInitiatives', index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={initiative.description}
                        onChange={(e) => handleArrayChange('otherInitiatives', index, 'description', e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                      <input
                        type="date"
                        value={initiative.startDate}
                        onChange={(e) => handleArrayChange('otherInitiatives', index, 'startDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Completion Date</label>
                      <input
                        type="date"
                        value={initiative.completionDate}
                        onChange={(e) => handleArrayChange('otherInitiatives', index, 'completionDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select
                        value={initiative.status}
                        onChange={(e) => handleArrayChange('otherInitiatives', index, 'status', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      >
                        <option value="">Select Status</option>
                        <option value="Planning">Planning</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="On Hold">On Hold</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Outlooks */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-medium text-gray-800">Outlooks (with timelines)</h4>
                <button
                  type="button"
                  onClick={() => addArrayItem('outlooks', { title: "", description: "", timeline: "", priority: "" })}
                  className="px-3 py-1 text-sm bg-violet-600 text-white rounded hover:bg-violet-700"
                >
                  + Add Outlook
                </button>
              </div>
              
              {formData.outlooks.map((outlook, index) => (
                <div key={index} className="border border-violet-200 rounded-lg p-4 mb-4 bg-violet-50">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-sm font-medium text-gray-800">Outlook {index + 1}</h5>
                    {formData.outlooks.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('outlooks', index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={outlook.title}
                        onChange={(e) => handleArrayChange('outlooks', index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={outlook.description}
                        onChange={(e) => handleArrayChange('outlooks', index, 'description', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
                      <input
                        type="text"
                        value={outlook.timeline}
                        onChange={(e) => handleArrayChange('outlooks', index, 'timeline', e.target.value)}
                        placeholder="e.g., 2024-2026"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                      <select
                        value={outlook.priority}
                        onChange={(e) => handleArrayChange('outlooks', index, 'priority', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
                      >
                        <option value="">Select Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technology & Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Available Tools */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-md font-medium text-gray-800">Technology & Tools Available</h4>
                  <button
                    type="button"
                    onClick={() => addArrayItem('availableTools', { category: "", name: "", description: "" })}
                    className="px-3 py-1 text-sm bg-emerald-600 text-white rounded hover:bg-emerald-700"
                  >
                    + Add Tool
                  </button>
                </div>
                
                {formData.availableTools.map((tool, index) => (
                  <div key={index} className="border border-emerald-200 rounded-lg p-3 mb-3 bg-emerald-50">
                    <div className="flex justify-between items-center mb-2">
                      <h6 className="text-xs font-medium text-gray-700">Available Tool {index + 1}</h6>
                      {formData.availableTools.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('availableTools', index)}
                          className="text-red-600 hover:text-red-800 text-xs"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <select
                        value={tool.category}
                        onChange={(e) => handleArrayChange('availableTools', index, 'category', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                      >
                        <option value="">Select Category</option>
                        <option value="Software">Software</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Laboratory Equipment">Laboratory Equipment</option>
                        <option value="Research Tools">Research Tools</option>
                        <option value="Teaching Tools">Teaching Tools</option>
                        <option value="Computing Resources">Computing Resources</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Tool/Technology Name"
                        value={tool.name}
                        onChange={(e) => handleArrayChange('availableTools', index, 'name', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                      />
                      <textarea
                        placeholder="Description"
                        value={tool.description}
                        onChange={(e) => handleArrayChange('availableTools', index, 'description', e.target.value)}
                        rows={2}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>

              {/* Required Tools */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-md font-medium text-gray-800">Technology & Tools Required</h4>
                  <button
                    type="button"
                    onClick={() => addArrayItem('requiredTools', { category: "", name: "", description: "", priority: "" })}
                    className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    + Add Requirement
                  </button>
                </div>
                
                {formData.requiredTools.map((tool, index) => (
                  <div key={index} className="border border-red-200 rounded-lg p-3 mb-3 bg-red-50">
                    <div className="flex justify-between items-center mb-2">
                      <h6 className="text-xs font-medium text-gray-700">Required Tool {index + 1}</h6>
                      {formData.requiredTools.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('requiredTools', index)}
                          className="text-red-600 hover:text-red-800 text-xs"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <select
                          value={tool.category}
                          onChange={(e) => handleArrayChange('requiredTools', index, 'category', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                        >
                          <option value="">Category</option>
                          <option value="Software">Software</option>
                          <option value="Hardware">Hardware</option>
                          <option value="Laboratory Equipment">Laboratory Equipment</option>
                          <option value="Research Tools">Research Tools</option>
                          <option value="Teaching Tools">Teaching Tools</option>
                          <option value="Computing Resources">Computing Resources</option>
                        </select>
                        <select
                          value={tool.priority}
                          onChange={(e) => handleArrayChange('requiredTools', index, 'priority', e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                        >
                          <option value="">Priority</option>
                          <option value="Critical">Critical</option>
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                      </div>
                      <input
                        type="text"
                        placeholder="Tool/Technology Name"
                        value={tool.name}
                        onChange={(e) => handleArrayChange('requiredTools', index, 'name', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                      />
                      <textarea
                        placeholder="Description & Justification"
                        value={tool.description}
                        onChange={(e) => handleArrayChange('requiredTools', index, 'description', e.target.value)}
                        rows={2}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white text-gray-900"
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Any Other Relevant Information</label>
              <textarea
                name="otherInformation"
                value={formData.otherInformation}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900"
              ></textarea>
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
            Complete
          </button>
        </div>
      </div>
    </div>
  );
}