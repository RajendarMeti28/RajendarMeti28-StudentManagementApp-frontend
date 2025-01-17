import React, { useState, useEffect } from "react";
import "../styles/StudentForm.css";

const StudentForm = ({ student = {}, onSubmit, buttonText }) => {
  const [id, setId] = useState(student.id || "");
  const [name, setName] = useState(student.name || "");
  const [age, setAge] = useState(student.age || "");
  const [studentClass, setStudentClass] = useState(student.studentClass || "");
  const [phoneNumber, setPhoneNumber] = useState(student.phoneNumber || "");

  useEffect(() => {
    if (student.id) {
      setId(student.id);
      setName(student.name);
      setAge(student.age);
      setStudentClass(student.studentClass);
      setPhoneNumber(student.phoneNumber);
    }
  }, [student]);

  const handleInputChange = (setter) => (event) => setter(event.target.value);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (name.trim() !== "" && age.trim() !== "" && studentClass.trim() !== "" && phoneNumber.trim() !== "") {
      const studentData = { id, name, age, studentClass, phoneNumber };
      await onSubmit(studentData);
    }
    setId("");
    setAge("");
    setName("");
    setStudentClass("");
    setPhoneNumber("");
  };

  return (
    <React.Fragment>
      <h2>{buttonText}</h2>
      <form className="form-controls" onSubmit={formSubmitHandler}>
        <span>
          <label>Name: </label>
          <input type="text" onChange={handleInputChange(setName)} value={name} />
          <label>Age: </label>
          <input type="text" onChange={handleInputChange(setAge)} value={age} />
          <label>Class: </label>
          <input type="text" onChange={handleInputChange(setStudentClass)} value={studentClass} />
          <label>Phone: </label>
          <input type="text" onChange={handleInputChange(setPhoneNumber)} value={phoneNumber} />
          <button>{buttonText}</button>
        </span>
      </form>
    </React.Fragment>
  );
};

export default StudentForm;
