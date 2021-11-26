import React, { Component } from "react";
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {studentID:null, 
                    firstName:'', 
                    lastName:'', 
                    address:'', 
                    email:'', 
                    phoneNo:'', 
                    age:null, 
                    username:'', 
                    password:''}
    
        this.handleChange = this.handleChange.bind(this) //binding the value every time something changes in the input fields : this is why we have example: this.state.email in the value field of the inputs
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    // Form submitting logic, prevent default page refresh
    handleSubmit(event){
      //saving data in state
        const { studentID, firstName, lastName, address, email, phoneNo, age, username, password } = this.state
        event.preventDefault();
    
      //preparing a form to send to php side
      let formData = new FormData(); //creating a form to send to DB
      formData.append("studentID",this.state.studentID); 
      formData.append("firstName",this.state.firstName);
      formData.append("lastName",this.state.lastName);
      formData.append("address",this.state.address);
      formData.append("email",this.state.email);
      formData.append("phone",this.state.phoneNo); //'phone' is the variable name inside of the $_POST on index.php side ; this.state.phoneNo is the saved value from react side
      formData.append("age",this.state.age);
      formData.append("username",this.state.username);
      formData.append("password",this.state.password);
     
      
      //connecting to php backend PHP PORT 80
      const url = "http://localhost:80/react-backend/index.php" 
    
      //sending it the data
      axios.post(url,formData)  
      .then(res=> console.log(res.data))
      .catch(err=>console.log(err));
    
      //friendly extra pop up for user
        alert(`Thank you ${firstName}, for providing us with your information!`);
    }
    
    // Method causes to store all the values of the
    // input field in react state single method handle
    // input changes of all the input field
    handleChange(event){
        this.setState({
        // Computed property names
        // keys of the objects are computed dynamically
        [event.target.name] : event.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Student ID</label>
                    <input type="text" className="form-control" name="studentID" value = {this.state.studentID} onChange={this.handleChange} placeholder="Student ID" />
                </div>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" name="firstName" value = {this.state.firstName} onChange={this.handleChange} placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" name='lastName' value = {this.state.lastName} onChange={this.handleChange} placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" name='address' value = {this.state.address} onChange={this.handleChange} placeholder="Enter Address" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name='email' value = {this.state.email} onChange={this.handleChange} placeholder="Enter Email" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" name='phoneNo' value = {this.state.phoneNo} onChange={this.handleChange} placeholder="Enter Phone Number" />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" name='age' value = {this.state.age} onChange={this.handleChange} placeholder="Enter Age" />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" name='username' value = {this.state.username} onChange={this.handleChange} placeholder="Enter Username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name='password' value = {this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                
                <p className="forgot-password text-right">Already registered <a href="/sign-in">sign in?</a></p>

            </form>
        );
    }
}