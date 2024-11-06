import AllotmentForm from "./Components/AllotmentForm";
import Nav from "./Components/Nav";


function FirstForm(props){
    return(
        <>
            <Nav/>
            <AllotmentForm form1 = {props.form1} setFormData = {props.setFormData} formName = {props.formName}/>
        </>
    )
}

export default FirstForm;