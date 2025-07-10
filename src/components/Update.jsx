import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Update({ employees, selectedemployee, setEmployees, setISEditing }) {
  const id = selectedemployee.id;

  const [firstName, setFirstName] = useState(selectedemployee.firstName);
  const [lastName, setLastName] = useState(selectedemployee.lastName);
  const [email, setEmail] = useState(selectedemployee.email);
  const [salary, setSalary] = useState(Number(selectedemployee.salary));
  const [date, setDate] = useState(selectedemployee.date);

  useEffect(() => {
    setFirstName(selectedemployee.firstName);
    setLastName(selectedemployee.lastName);
    setEmail(selectedemployee.email);
    setSalary(Number(selectedemployee.salary));
    setDate(selectedemployee.date);
  }, [selectedemployee]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (!firstName || !lastName || !email || !salary || !date || salary <= 0) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required and salary must be valid",
        showConfirmButton: true,
        timer: 1500,
        background: isDark ? "#1f2937" : "#ffffff",
        color: isDark ? "#f9fafb" : "#111827",
        buttonsStyling: false,
        customClass: {
          confirmButton: `px-4 py-2 rounded-lg font-semibold ${
            isDark
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`,
          popup: "rounded-lg shadow-xl",
        },
      });
    }

    const updatedEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    const updatedEmployees = [...employees];
    const index = updatedEmployees.findIndex((emp) => emp.id === id);

    if (index !== -1) {
      updatedEmployees[index] = updatedEmployee;
      setEmployees(updatedEmployees);

      // ✅ Save to localStorage
      localStorage.setItem("employees_data", JSON.stringify(updatedEmployees));

      Swal.fire({
        icon: "success",
        title: "Updated",
        text: `${updatedEmployee.firstName} ${updatedEmployee.lastName}'s data has been updated`,
        showConfirmButton: false,
        timer: 1500,
        background: isDark ? "#1f2937" : "#ffffff",
        color: isDark ? "#f9fafb" : "#111827",
        buttonsStyling: false,
        customClass: {
          popup: "rounded-lg shadow-xl",
        },
      });

      setISEditing(false); // ✅ Return to dashboard
    } else {
      console.error("Employee not found");
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 flex justify-center items-center transition-colors duration-300">
      <div className="w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-2xl shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 text-center mb-6">
          Update Employee
        </h2>

        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block mb-1 font-medium">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              onChange={(e) => setSalary(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-between pt-4">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition duration-200"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => setISEditing(false)}
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-white px-6 py-2 rounded-lg transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
