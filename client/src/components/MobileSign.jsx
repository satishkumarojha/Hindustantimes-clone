


import { Container2  } from "./Container2";
import { HeaderLogin } from "./HeaderLogin";
import { Login2 } from "./Login2";
import "./MobileSign.css";


export const MobileSign = ()=> {
    return(
        <div className="container-invelop">
         <HeaderLogin />
          <Login2 />
          <Container2 />
        </div>
    );
}