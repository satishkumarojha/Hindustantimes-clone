

import { Login } from "./Login";
import { Container  } from "./Container";
import { HeaderLogin } from "./HeaderLogin";

export const ContainerInvelop = ()=> {
    return(
        <div className="container-invelop">
        <HeaderLogin />
          <Login />
          <Container />
        </div>
    )
}