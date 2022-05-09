import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const FormHolder2 = ()=> {
    let navigate = useNavigate();
    const[password,setpassword] = useState("");
    const[em,setEmail] = useState("");
    // const handleChange = (e)=>{
    //     let passval = e.target.value;
    //     let name = e.target.name;
    //     console.log(passval);
    //     setpassword(passval)
    // }
    const gauth = async(response)=>{
        let res = await fetch("http://localhost:5000/login",{
          method: "POST",
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify({
              email: em,
              password: password,
              
          }),
        })
        let data = await res.json();
          console.log(data);
          if(data.message==undefined){
              localStorage.setItem("token",data.token);
            navigate(`/`)
          }
         
          else{
              alert(data.message);
          }
}
    const handleContinue = ()=>{
        gauth();
}

    return (

<div className="formHolder">
            <div className="inputSec">
                <div className="label">Email or Mobile Number*</div>
                <div className="inputHolder">
                    <input onChange={(e)=>{
                        setEmail(e.target.value);
                        console.log(e.target.value);
                    }} type="text" className="phoneEmail" name ="email"/>
                </div> <br /><br />               
                <div  className="label">Enter your password</div>
                <div className="inputHolder">
                    <input onChange={(e)=>{
                        setpassword(e.target.value)
                    }} type="text" className="phoneEmail"name="pass" />
                </div>   
                <div onClick={handleContinue} className="signin_btn">Continue</div>             
            </div>
    </div>
    );
}