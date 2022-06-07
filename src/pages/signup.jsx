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
        confirmPassword: ""
    })
    let [errors, setErrors] = useState({
        firstName: "", 
        lastName: "",
        phoneNumber: "",
        Email: "",
        password: "",
        confirmPassword: ""
    })
    function handleErrors(name, value){
        switch (name){
            case "firstName" : 
                if (value.length < 3) {
                    setErrors({...errors, firstName: "Please input a valid first name"})
                }else{
                    setData({...data, firstName: value})
                }
            case "lastName" : 
                if (value.length < 3) {
                    setErrors({...errors, firstName: "Please input a valid last name"})
                }
            case "phoneNumber" : 
                if (value.length != 10) {
                    setErrors({...errors, phoneNumber: "Please input a valid first name"})
                }
            case "email" : 
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                    setErrors({...errors, Email: "Please input a valid email"})
                }
            case "password" : 
                if (value.length < 3) {
                    setErrors({...errors, password: "Please input a valid first name"})
                }
            
            case "confirmPassword" : 
                if (value!=data.password) {
                    setErrors({...errors, confirmPassword: "Value must be same as password"})
                }
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
                                {errors.firstName && <p>{errors.firstName}</p>}
                            </div>
                            <div className="form-col">
                                <label>Last Name </label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col">
                                <label>Phone Number </label>
                                <input type="number" />
                            </div>
                            <div className="form-col">
                                <label>Email </label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col">
                                <label>Password </label>
                                <input type="password" />
                            </div>
                            <div className="form-col">
                                <label>Confirm Password </label>
                                <input type="password" />
                            </div>
                        </div>
                        <div className="checkbox-container">
                            <div className="checkbox">
                                <input type="checkbox" className="checkbox" name="receiveEmail" id="receiveEmail" />
                                <p>Yes, I want to receive the lottery display emails</p>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox"  className="checkbox" name="termsAndPolicy" id="termsAndPolicy" />
                                <p>I agree to all Term, Privacy Policy, and Fees</p>
                            </div>
                        </div>
                            

                        <button type="submit" className="formSubmitButton">Create Account</button>
                    </form>
                    <p className="checkAccount">Already have an account ? <button type="button">Log in</button></p>
               </div>
        </>
     );
}
 
export default SignUp;