import React from "react"
import fileSkeleton from "../assets/images/file_skeleton.png"
import ComputerIcon from "../assets/images/computer.png"
import "../styles/signup.css"

const SignUp = () => {
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
                    <h1>Register</h1>
                    <p>Manage All your lottery efficiently</p>
                    <p>Let's get you all set up so  you can verify your personal account and begin setting up your profile</p>  

                    <form>
                        <div className="form-row">
                            <div className="form-col">
                                <label>First Name </label>
                                <input type="text" />
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
                    </form>
               </div>
        </>
     );
}
 
export default SignUp;