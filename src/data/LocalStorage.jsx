// src/data/LocalStorage.jsx

// Default hardcoded employee list
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

// If no data in localStorage, initialize with defaultEmployees
if (!localStorage.getItem("employees_data")) {
  localStorage.setItem("employees_data", JSON.stringify(defaultEmployees));
}

// ✅ Correct Export
export const employeesData = JSON.parse(localStorage.getItem("employees_data"));
