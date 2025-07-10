import React from "react";

function Header({ setIsAdding }) {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-center">
          Employee Management System
        </h1>
        <p className="text-sm md:text-base text-indigo-100 mb-4 text-center">
          Streamline your employee data in one place.
        </p>
        <button
          className="bg-white text-indigo-700 hover:bg-indigo-100 font-semibold px-6 py-2 rounded-full shadow transition duration-300 ease-in-out"
          onClick={() => setIsAdding(true)}
        >
          + Add Employee
        </button>
      </div>
    </div>
  );
}

export default Header;
