import { Google } from "./Google"
import { Facebook } from  "./Facebook"
import { Apple } from "./Apple"
import { Orbar } from "./Or"
import { FormHolder } from "./FormHolder"

export const Container = ()=> {
    return (
        <div className="container12">
            <Google />            
            <Facebook />
            <Apple />
            <Orbar />
            <FormHolder />
        </div>
    )
}