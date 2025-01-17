import React, { useState, useEffect } from "react";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";
import EditStudentForm from "./components/EditStudentForm";

const API_URL = "http://localhost:8080/api/students";

function App() {
  const [students, setStudents] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editStudent, setEditStudent] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch students from the API when the app loads
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`${API_URL}?name=${searchQuery}`);
      const data = await response.json();
      console.log("data:", data);
      
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // Add a new student
  const studentInputHandler = async (student) => {
    try {
      console.log(student);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
      const newStudent = await response.json();
      console.log("new Student: ", newStudent);
      setStudents((prevStudents) => [newStudent, ...prevStudents]);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  // Edit student
  const studentEditHandler = async (student) => {
    try {
      console.log("editStudent: ", student);
      const response = await fetch(`${API_URL}/${student.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
      const updatedStudent = await response.json();
      setStudents((prevStudents) =>
        prevStudents.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
      );
      setIsEdit(false);
    } catch (error) {
      console.error("Error editing student:", error);
    }
  };

  // Delete student
  const deleteHandler = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Set up for editing a student
  const editHandler = (student) => {
    setIsEdit(true);
    setEditStudent(student);
  };

  // Handle input change for the search bar
  const searchInputHandler = (event) => {
    setSearchQuery(event.target.value);
  };


  return (
    <React.Fragment>
      <h1>Students Management App</h1>
      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={searchInputHandler}
        />
        <button onClick={fetchStudents}>Search</button>
      </div>
      {!isEdit ? (
        <AddStudentForm onStudentInput={studentInputHandler} />
      ) : (
        <EditStudentForm
          editStudent={editStudent}
          onStudentEdit={studentEditHandler}
        />
      )}
      <StudentList
        onDelete={deleteHandler}
        onEdit={editHandler}
        students={students}
      />
    </React.Fragment>
  );
}

export default App;
