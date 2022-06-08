import React, { useState } from "react"
import fileSkeleton from "../assets/images/file_skeleton.png"
import ComputerIcon from "../assets/images/computer.png"
import "../styles/signup.css"

const SignUp = () => {
    let [data, setData] = useState({
        firstName: "", 
        lastName: "",
        phoneNumber: "",
        Email: "",
        password: "",
        confirmPassword: "",
        receiveEmail: false,
        termsAndPolicy: false
    })
    let [errors, setErrors] = useState({
        firstName: "", 
        lastName: "",
        phoneNumber: "",
        Email: "",
        password: "",
        confirmPassword: ""
    })

    let isFormValid = () => {
        let valid = true;
        for (const key in data) {
            let value = data[key];
            switch (key){
                case "firstName" : 
                    if (value.length < 3) {
                        valid = false
                    }
                    break;
                case "lastName" : 
                    if (value.length < 3) {
                        valid = false
                    }
                    break;
                case "phoneNumber" : 
                    if (value.length != 10) {
                        valid = false
                    }
                    break;
                case "email" : 
                    if (/^\w+*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                        valid = false
                    }
                    break;
                case "password" : 
                    if (value.length < 3) {
                        valid = false
                    }
                    break;
                case "confirmPassword" : 
                    if (value!=data.password) {
                        valid = false
                    }
                    break;
            }
        }
        return valid
    }
    
    function handleErrors(name, value){
        switch (name){
            case "firstName" : 
                if (value.length < 3) {
                    setErrors({...errors, firstName: "Please input a valid first name"})
                }else{
                    setData({...data, firstName: value})
                    setErrors({...errors, firstName: ""})
                }
                break;
            case "lastName" : 
                if (value.length < 3) {
                    setErrors({...errors, lastName: "Please input a valid last name"})
                }else{
                    setData({...data, lastName: value})
                    setErrors({...errors, lastName: ""})
                }
                break;
            case "phoneNumber" : 
                if (value.length != 10) {
                    setErrors({...errors, phoneNumber: "Please input a valid phone number"})
                }else{
                    setData({...data, phoneNumber: value})
                    setErrors({...errors, phoneNumber: ""})
                }
                break;
            case "email" : 
                if (/\w+*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                    setErrors({...errors, Email: "Please input a valid email"})
                }else{
                    setData({...data, Email: value})
                    setErrors({...errors, Email: ""})
                }
                break;
            case "password" : 
                if (value.length < 3) {
                    setErrors({...errors, password: "Please input a valid password"})
                }else{
                    setData({...data, password: value})
                    setErrors({...errors, password: ""})
                }
                break;
            case "confirmPassword" : 
                if (value!=data.password) {
                    setErrors({...errors, confirmPassword: "Value must be same as password"})
                }else{
                    setData({...data, confirmPassword: value})
                    setErrors({...errors, confirmPassword: ""})
                }
                break;
            case "receiveEmail" :
                setData({...data, receiveEmail: value})
                break;
            case "termsAndPolicy" : 
                setData({...data, termsAndPolicy: value})
                break;
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        if (isFormValid) {
             
        }
    }
    return ( 
        <>
            <div className="sidebar-container">
                <div className="sidebar">
                   <div className="sidebar-header">
                        <img src={ComputerIcon} alt="computer icon" />
                        <h1>Lottery Display</h1>
                   </div>
                    <p>A few clicks away from creating your Lottery Display</p>
               </div>
               <img src={fileSkeleton} alt="skeleton structure of a file" />
            </div>      
            
            <div className="form-container">
                 <h1 className="title">Register</h1>
                 <p className="subtitle">Manage All your lottery efficiently</p>
                 <p className="description">Let's get you all set up so  you can verify your personal account and begin setting up your profile</p>  
                 <form>
                     <div className="form-row">
                         <div className="form-col">
                             <label>First Name </label>
                             <input type="text" name="firstName" onChange={(e) => handleErrors(e.target.name, e.target.value)} defaultValue={data.firstName}/>
                             {errors.firstName && <p className="error">{errors.firstName}</p>}
                         </div>
                         <div className="form-col">
                             <label>Last Name </label>
                             <input type="text" name="lastName" onChange={(e) => handleErrors(e.target.name, e.target.value)}/>
                             {errors.lastName && <p className="error">{errors.lastName}</p>}
                         </div>
                     </div>
                     <div className="form-row">
                         <div className="form-col">
                             <label>Phone Number </label>
                             <input type="number" name="phoneNumber" onChange={(e) => handleErrors(e.target.name, e.target.value)}/>
                             {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                         </div>
                         <div className="form-col">
                             <label>Email </label>
                             <input type="text" name="email" onChange={(e) => handleErrors(e.target.name, e.target.value)}/>
                             {errors.Email && <p className="error">{errors.Email}</p>}
                         </div>
                     </div>
                     <div className="form-row">
                         <div className="form-col">
                             <label>Password </label>
                             <input type="password" name="password" onChange={(e) => handleErrors(e.target.name, e.target.value)}/>
                             {errors.password && <p className="error">{errors.password}</p>}
                         </div>
                         <div className="form-col">
                             <label>Confirm Password </label>
                             <input type="password" name="confirmPassword" onChange={(e) => handleErrors(e.target.name, e.target.value)}/>
                             {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                         </div>
                     </div>
                     <div className="checkbox-container">
                         <div className="checkbox">
                             <input type="checkbox" className="checkbox" name="receiveEmail" id="receiveEmail" onChange={(e) => handleErrors(e.target.name, e.target.checked)}/>
                             <p>Yes, I want to receive the lottery display emails</p>
                         </div>
                         <div className="checkbox">
                             <input type="checkbox"  className="checkbox" name="termsAndPolicy" id="termsAndPolicy" onChange={(e) => handleErrors(e.target.name, e.target.checked)}/>
                             <p>I agree to all Term, Privacy Policy, and Fees</p>
                         </div>
                     </div>
                         
                        <button type="submit" className="formSubmitButton" onClick={(e) => handleSubmit(e)}>Create Account</button>
                    </form>
                    <p className="checkAccount">Already have an account ? <button type="button">Log in</button></p>
               </div>
        </>
     );
}
 
export default SignUp;