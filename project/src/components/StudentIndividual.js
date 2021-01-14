import React from 'react'
function StudentIndividual(props){
    const info=()=>{
        console.log("heyyyy");
    }
    return(
        <>
            <tr>
                                <td> {props.Name}</td>
                                <td> {props.RollNo}</td>
                                <td><button onClick={info} className="View">{props.View}</button></td>
            </tr>
        </>
    );
}
export default StudentIndividual;