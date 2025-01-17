import React from "react";
import StudentForm from "./StudentForm";

const AddStudentForm = ({ onStudentInput }) => {
  const addStudentHandler = async (studentData) => {
    onStudentInput(studentData);
  };

  return <StudentForm onSubmit={addStudentHandler} buttonText="ADD" />;
};

export default AddStudentForm;
