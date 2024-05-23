import React from "react";

const students = [
    {name: "김서현"},
    {name: "박성언"},
    {name: "스상준"},
    {name: "신효은"}
];

function StudentList(props) {
    return(
        <ul>
            {students.map((student) => {
                return <li>{student.name}</li>
            })}
        </ul>
    )
}

export default StudentList;