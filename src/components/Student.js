import React from "react";

const Student = function (props) {
  const editStudentHandler = () => {
    props.onEditRequest(props.id, props.name, props.age,props.studentClass, props.phoneNumber);
  };

  const deleteStudentHandler = () => {
    props.onDeleteRequest(props.id);
  };

  return (
    <React.Fragment>
      <tr>
        <td>{props.name}</td>
        <td>{props.age}</td>
        <td>{props.studentClass}</td>
        <td>{props.phoneNumber}</td>
        <td>
          <button onClick={editStudentHandler}>Edit</button>
        </td>
        <td>
          <button onClick={deleteStudentHandler}>Delete</button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Student;
