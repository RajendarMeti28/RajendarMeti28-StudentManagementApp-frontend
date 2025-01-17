import React from "react";
import StudentForm from "./StudentForm";

const EditStudentForm = ({ editStudent, onStudentEdit }) => {
  const editStudentHandler = (updatedStudent) => {
    onStudentEdit(updatedStudent);
  };

  return <StudentForm student={editStudent} onSubmit={editStudentHandler} buttonText="EDIT" />;
};

export default EditStudentForm;
