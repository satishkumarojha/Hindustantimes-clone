import React, { Component, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import  { GoogleLogin } from "react-google-login"

export const Google = ()=> {
    let navigate = useNavigate();
    const responseGoogle = (response)=>{
        console.log(response);
        console.log(response.tokenId);
        if(response.error===undefined){
            gauth(response);
        }
      }
      const gauth = async(response)=>{
          let res = await fetch("http://localhost:5000/register",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: response.profileObj.email,
                password: "123456",
                
            }),
          })
          let data = await res.json();
          console.log(data);
          if(data.message==undefined){
            navigate(`/`)
          }
          else if(data.message=="Email already exists"){
            navigate(`/`)
          }
          else{
              alert(data.message);
          }

      }
    //   useEffect(()=>{
    //       gauth();
    //   },[]);
    return(
        <div  className="google">
        <GoogleLogin
       
        clientId="807683840246-h02oqp9buhvgeseb69q7u3k8ooij2ckh.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
       />
        </div>
    )
}