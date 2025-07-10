import React from "react";

function Read({ employees, handleEdit, handleDelete }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });

  return (
    <div className="w-full px-4 md:px-10 py-10">
      <div className="overflow-auto bg-white dark:bg-gray-900 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300">
        <table className="min-w-full text-base md:text-lg text-gray-800 dark:text-gray-200">
          <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white uppercase text-center">
            <tr>
              <th className="px-6 py-4 font-semibold">#</th>
              <th className="px-6 py-4 font-semibold">First Name</th>
              <th className="px-6 py-4 font-semibold">Last Name</th>
              <th className="px-6 py-4 font-semibold">Email</th>
              <th className="px-6 py-4 font-semibold">Salary</th>
              <th className="px-6 py-4 font-semibold">Date</th>
              <th className="px-6 py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee, index) => (
                <tr
                  key={employee.id}
                  className={`text-center ${
                    index % 2 === 0
                      ? "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-950"
                      : "bg-white dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-950"
                  } transition`}
                >
                  <td className="px-6 py-4 font-medium">{index + 1}</td>
                  <td className="px-6 py-4">{employee.firstName}</td>
                  <td className="px-6 py-4">{employee.lastName}</td>
                  <td className="px-6 py-4">{employee.email}</td>
                  <td className="px-6 py-4">
                    {formatter.format(employee.salary)}
                  </td>
                  <td className="px-6 py-4">{employee.date}</td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      onClick={() => handleEdit(employee.id)}
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full shadow-sm transition duration-200"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(employee.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-full shadow-sm transition duration-200"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-10 text-center text-xl text-gray-500 dark:text-gray-400"
                >
                  🚫 No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Read;
