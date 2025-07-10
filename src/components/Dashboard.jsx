import Swal from "sweetalert2";
import Header from "./Header";
import { useState, useEffect } from "react";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [selectedemployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setISEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees_data")) || [];
    setEmployees(data);
  }, []);

  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);
    setSelectedEmployee(employee);
    setISEditing(true);
  };

  const handleDelete = (id) => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to delete?",
      background: isDark ? "#1f2937" : "#ffffff",
      color: isDark ? "#f9fafb" : "#111827",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it",
      cancelButtonText: "No, Cancel",
      customClass: {
        popup: "rounded-xl",
        confirmButton: isDark
          ? "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mr-5"
          : "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-5",
        cancelButton: isDark
          ? "bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
          : "bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        const [employee] = employees.filter((emp) => emp.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted`,
          background: isDark ? "#1f2937" : "#ffffff",
          color: isDark ? "#f9fafb" : "#111827",
          showConfirmButton: false,
          timer: 1500,
        });

        const updatedEmployees = employees.filter((emp) => emp.id !== id);
        setEmployees(updatedEmployees);
        localStorage.setItem(
          "employees_data",
          JSON.stringify(updatedEmployees)
        );
      }
    });
  };

  const handleResetEmployees = () => {
    const defaultEmployees = [
      {
        id: 1,
        firstName: "Anand",
        lastName: "Kumar",
        email: "anand.kumar@gmail.com",
        salary: 95000,
        date: "2025-01-01",
      },
      {
        id: 2,
        firstName: "Priya",
        lastName: "Sharma",
        email: "priya.sharma@gmail.com",
        salary: 8000,
        date: "2016-02-15",
      },
      {
        id: 3,
        firstName: "Rahul",
        lastName: "Verma",
        email: "rahul.verma@gmail.com",
        salary: 7200,
        date: "2017-05-20",
      },
      {
        id: 4,
        firstName: "Neha",
        lastName: "Patel",
        email: "neha.patel@gmail.com",
        salary: 10500,
        date: "2018-12-30",
      },
      {
        id: 5,
        firstName: "Amit",
        lastName: "Singh",
        email: "amit.singh@gmail.com",
        salary: 9000,
        date: "2019-12-03",
      },
      {
        id: 6,
        firstName: "Sneha",
        lastName: "Reddy",
        email: "sneha.reddy@gmail.com",
        salary: 8500,
        date: "2020-03-25",
      },
      {
        id: 7,
        firstName: "Karan",
        lastName: "Mehta",
        email: "karan.mehta@gmail.com",
        salary: 9800,
        date: "2021-06-14",
      },
      {
        id: 8,
        firstName: "Divya",
        lastName: "Iyer",
        email: "divya.iyer@gmail.com",
        salary: 7500,
        date: "2022-10-05",
      },
      {
        id: 9,
        firstName: "Ravi",
        lastName: "Desai",
        email: "ravi.desai@gmail.com",
        salary: 8200,
        date: "2023-02-18",
      },
      {
        id: 10,
        firstName: "Pooja",
        lastName: "Joshi",
        email: "pooja.joshi@gmail.com",
        salary: 9100,
        date: "2024-07-07",
      },
    ];
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    localStorage.setItem("employees_data", JSON.stringify(defaultEmployees));
    setEmployees(defaultEmployees);

    Swal.fire({
      icon: "success",
      title: "Reset Successful",
      text: "Employee list has been reset to default.",
      background: isDark ? "#1f2937" : "#ffffff",
      color: isDark ? "#f9fafb" : "#111827",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-6">
        {!isAdding && !isEditing && (
          <>
            <Header setIsAdding={setIsAdding} />

            <Read
              employees={employees}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />

            {/* Centered Reset Button below employee data */}
            <div className="flex justify-center">
              <button
                onClick={handleResetEmployees}
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all shadow"
              >
                Reset to Default
              </button>
            </div>
          </>
        )}

        {isAdding && (
          <Create
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
          />
        )}

        {isEditing && (
          <Update
            employees={employees}
            selectedemployee={selectedemployee}
            setEmployees={setEmployees}
            setISEditing={setISEditing}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
