import React from "react";
import Student from "./Student";

const StudentList = function (props) {
  const editRequestHandler = (id, name, age, studentClass, phoneNumber) => {
    props.onEdit({id, name, age,studentClass, phoneNumber});
  };

  const deleteRequestHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <React.Fragment>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Class</td>
            <td>PhoneNumber</td>
          </tr>
        </thead>
        <tbody>
          {props.students &&
            props.students.map((student) => (
              <Student
                key={student.id}
                id={student.id}
                name={student.name}
                age={student.age}
                studentClass={student.studentClass}
                phoneNumber={student.phoneNumber}
                onDeleteRequest={deleteRequestHandler}
                onEditRequest={editRequestHandler}
              ></Student>
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default StudentList;
