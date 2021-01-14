import React from "react"
import StudentIndividual from './StudentIndividual'
function StudentInfo(){
    const add= function(){
        console.log("Added");
    }
    const delt= ()=>{
        console.log("deleted");
    }
    return(
        <>
            <h1>Student File</h1>
            <div>
                <h2 >Add Student </h2>
                <button className="Button" onClick={add}>ADDING</button>
            </div>
            <div>
                <h2 >Delete Student </h2>
                <button className="Button" onClick={delt}>DELETE</button>

            </div>
            <div>
                <br/>
            </div>
            <div>
                <table>
                     <tr>
                                <th> Name</th>
                                <th> Roll No</th>
                                <th> Information</th>
                    </tr>
                   <StudentIndividual Name="Bhushan" RollNo="01" View="View Information"/>
                   <StudentIndividual Name="Kajal" RollNo="02" View="View Information"/>
                   <StudentIndividual Name="kamini" RollNo="03" View="View Information"/>
                </table>
            </div>
        </>
    );
}
export default StudentInfo;