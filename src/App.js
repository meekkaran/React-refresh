import './App.css';
import { useRef, useState } from 'react';
// import MyListComponent from './MyListComponent';
// import MyStylesComponent from './MyStylesComponent';
// import ConditionalComponent from './ConditionalComponent';
// import UseEffectHook from './UseEffectHook';
// import Parent from './Parent';
// import MyContext from './MyContext';

function App(){

    const nameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();
    const deptRef = useRef();
    const isAgreedRef = useRef();

    const [nameErr, setNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [deptErr, setDeptErr] = useState("");
    const [isAgreedErr, setIsAgreedErr] = useState("");


    const resetForm = () =>{
        console.log("on reset fn");
        nameRef.current.value = "";
        emailRef.current.value = "";
        ageRef.current.value = "";
        deptRef.current.value = "";
        isAgreedRef.current.checked = false;
        setNameErr("");
        setEmailErr("");
        setDeptErr("");
        setIsAgreedErr("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("on submit fn")
        let isFormValid = validateForm();
        if (isFormValid){
            submitForm()
        }
    }

    const submitForm = () =>{
        console.log("Full name: " +nameRef.current.value);
        console.log("Email: " +emailRef.current.value);
        console.log("Age: " +ageRef.current.value);
        console.log("Department: " +deptRef.current.value);
        console.log("Is Agreed to T&C: " +isAgreedRef.current.value);
        resetForm();
    }

    const validateForm = () => {
        let isValid = false;
        let fullName = nameRef.current.value;
        let email = emailRef.current.value;
        let age = ageRef.current.value;
        let dept = deptRef.current.value;
        let isAgreed = isAgreedRef.current.checked;
        //name email and department should be required
        //email should be in standard email formt
        //user should get an error message
        if (fullName.trim() === ""){
            setNameErr("Full name is required");
            nameRef.current.focus();
        }else if (email.trim()===""){
            setNameErr("");
            setEmailErr("Email is required");
            emailRef.current.focus();
        }else if(!validateEmail(email)){
            setEmailErr("Email is not valid");
            emailRef.current.focus();
        }else if(dept.trim()===""){
            setEmailErr("");
            setDeptErr("Department is required");
            deptRef.current.focus();
        }else if(!isAgreed){
            setDeptErr("");
            setIsAgreedErr("Please agree to terms and conditions");
            isAgreedRef.current.focus();
        }else{
            setIsAgreedErr("");
            isValid = true;
        }
        return isValid;
    }

    const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    return false;
    }

    return (
        <div>
            <h2>Form Handling</h2>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div className={`form-group ${nameErr.length > 0 ? 'err' : null}`}>
                        <label htmlFor='fname'>First name</label>
                        <input className='form-control' type='text' id='fname' ref={nameRef}/>
                        <span className='error'>{nameErr}</span>
                    </div>
                    <div className={`form-group ${emailErr.length > 0 ? 'err' : null}`}>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' type='text' id='email' ref={emailRef}/>
                        <span className='error'>{emailErr}</span>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='age'>Age</label>
                        <input className='form-control' type='number' id='age' ref={ageRef}/>
                    </div>
                    <div className={`form-group ${deptErr.length > 0 ? 'err' : null}`}>
                        <label htmlFor='dept'>Department</label>
                        <select className='form-control' id='dept'ref={deptRef}>
                            <option value="">Select</option>
                            <option value="finance">Finance</option>
                            <option value="hr">HR</option>
                            <option value="it">IT</option>
                            <option value="rmg">RMG</option>
                            <option value="transport">transport</option>
                        </select>
                        <span className='error'>{deptErr}</span>
                    </div>
                    <div className={`form-group ${isAgreedErr.length > 0 ? 'err' : null}`}>
                        <div className='checkbox-input'>
                            <input type='checkbox' ref={isAgreedRef}/>
                            <label>Agree with Terms and Conditions?</label>
                        </div>
                        <span className='error specisl'>{isAgreedErr}</span>
                    </div>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                    <button type="button" className='btn btn-default' onClick={resetForm}>Reset</button>
                </form>
            </div>
            {/* <MyContext.Provider value={5}>
                <Parent />
            </MyContext.Provider> */}
            {/* <MyListComponent /> */}
            {/* <MyStylesComponent /> */}
            {/* <ConditionalComponent /> */}
            {/* <UseEffectHook /> */}
        </div>    
    );
}

export default App