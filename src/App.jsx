import React, { Component } from "react"
import  { GoogleLogin } from "react-google-login"

function App() {
  const responseGoogle = (response)=>{
    console.log(response);
    console.log(response.profileObj);
  }

  return (
    <div className="App">
  
     <GoogleLogin
    clientId="807683840246-h02oqp9buhvgeseb69q7u3k8ooij2ckh.apps.googleusercontent.com"
    buttonText="Sign with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  )
}

export default App
