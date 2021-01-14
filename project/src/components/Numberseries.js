import React,{useState} from 'react'
function Numberseries(){
    //For even
    let Increment=()=>{
        seteven(()=>{return even+2;});
    };
    const [even,seteven]=useState(0);
    //for odd
    let Odd=()=>{
        setodd(()=>{return odd+2;});
    };
    const [odd,setodd]=useState(1);
    return(
        <div>
            <div>
                <h1> Number Series!</h1>
            </div>
            <div>
                <h1>{even}</h1>
                <div>
                <button className="Button" onClick={Increment}>Tap to Get Even No.</button>
                </div>
            </div>
            <div>
                <h1>{odd}</h1>
                <div>
                <button className="Button" onClick={Odd}>Tap to Get Odd No.</button>
                </div>
            </div>
        </div>
    );
}
export default Numberseries;