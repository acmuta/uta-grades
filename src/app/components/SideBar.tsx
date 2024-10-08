"use client";
import React from 'react';

interface SideBarProps {
    professors: string[];
    selectedProfessor: string | null;
    setSelectedProfessor: (professor: string | null) => void;
    years: string[];
    selectedYear: string | null;
    setSelectedYear: (year: string | null) => void;
    semesters: string[];
    selectedSemester: string | null;
    setSelectedSemester: (semester: string | null) => void;
    finalFilteredCourses: any[];
    selectedSection: any | null;
    setSelectedSection: (section: any | null) => void;
  }
  
  const SideBar: React.FC<SideBarProps> = ({
    professors,
    selectedProfessor,
    setSelectedProfessor,
    years,
    selectedYear,
    setSelectedYear,
    semesters,
    selectedSemester,
    setSelectedSemester,
    finalFilteredCourses,
    selectedSection,
    setSelectedSection,
  }) => {
  return (
    <div className="w-1/3 pr-4 mt-10">
      {selectedProfessor ? (
        <div>
          <h2 className="text-lg font-semibold mb-2">{`Courses for Professor: ${selectedProfessor}`}</h2>

          {/* Year Dropdown */}
          <div className="mb-4">
            <label htmlFor="year" className="block font-semibold mb-1">
              Select Year:
            </label>
            <select
              id="year"
              value={selectedYear || "First_Selection"}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border p-2 rounded-lg w-full"
            >
              <option value="" disabled>
                Select a year
              </option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Semester Dropdown */}
          <div className="mb-4">
            <label htmlFor="semester" className="block font-semibold mb-1">
              Select Semester:
            </label>
            <select
              id="semester"
              value={selectedSemester || "First_Selection"}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="border p-2 rounded-lg w-full"
            >
              <option value="" disabled>
                Select a semester
              </option>
              {semesters.map((semester, index) => (
                <option key={index} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
          </div>

          {/* Section List */}
          <ul className="space-y-2">
            {finalFilteredCourses.map((course, index) => (
              <li
                key={index}
                onClick={() => setSelectedSection(course)}
                className={`border p-2 rounded-lg shadow-sm cursor-pointer ${
                  selectedSection?.section_number === course.section_number
                    ? 'bg-blue-100'
                    : ''
                }`}
              >
                Section: {course.section_number}
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              setSelectedProfessor(null);
              setSelectedYear(null);
              setSelectedSemester(null);
            }}
            className="mt-4 text-blue-500 underline"
          >
            Back to Professors
          </button>
        </div>
      ) : (
        <ul className="space-y-4">
          {professors.map((professor, index) => (
            <li
              key={index}
              className="border p-4 rounded-lg shadow-sm cursor-pointer"
              onClick={() => setSelectedProfessor(professor)}
            >
              <h2 className="text-lg font-semibold">{professor}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideBar;
