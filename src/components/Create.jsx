import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

function Create({ employees, setEmployees, setIsAdding }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const textInput = useRef(null);

  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();

    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !salary ||
      !date ||
      Number(salary) <= 0
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required and salary must be valid.",
        showConfirmButton: true,
        timer: 1500,
        background: isDark ? "#1f2937" : "#ffffff",
        color: isDark ? "#f9fafb" : "#1f2937",
        customClass: {
          confirmButton: `${
            isDark
              ? "bg-indigo-600 hover:bg-indigo-700 text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          } px-4 py-2 rounded-md font-semibold focus:outline-none shadow`,
          popup: "rounded-lg shadow-xl",
        },
      });
    }

    // Unique ID generation
    const newId =
      employees.length > 0
        ? Math.max(...employees.map((emp) => emp.id)) + 1
        : 1;

    const newEmployee = {
      id: newId,
      firstName,
      lastName,
      email,
      salary: Number(salary),
      date,
    };

    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);

    // ✅ Save to localStorage
    localStorage.setItem("employees_data", JSON.stringify(updatedEmployees));

    // ✅ Show success
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been added`,
      background: isDark ? "#1f2937" : "#ffffff",
      color: isDark ? "#f9fafb" : "#1f2937",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: "rounded-xl",
        confirmButton: isDark
          ? "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          : "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600",
      },
      buttonsStyling: false,
    });

    // ✅ Exit form
    setIsAdding(false);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 flex justify-center items-center transition-colors duration-300">
      <div className="w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-2xl shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 text-center mb-6">
          Add New Employee
        </h2>

        <form
          onSubmit={handleAdd}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block mb-1 font-medium">
              First Name
            </label>
            <input
              ref={textInput}
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block mb-1 font-medium">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Salary */}
          <div>
            <label htmlFor="salary" className="block mb-1 font-medium">
              Salary (₹)
            </label>
            <input
              id="salary"
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block mb-1 font-medium">
              Start Date
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-between pt-4">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition duration-200"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 px-6 py-2 rounded-lg transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
