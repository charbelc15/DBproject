
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{
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

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
		<label>StudentID</label>
		<input
			name='studentID'
			placeholder='studentID'
			value = {this.state.studentID}
			onChange={this.handleChange}
		/>

		</div>
    <div>
		<label>First Name</label>
		<input
			name='firstName'
			placeholder='firstName'
			value = {this.state.firstName}
			onChange={this.handleChange}
		/>
		</div>

    <div>
		<label>Last Name</label>
		<input
			name='lastName'
			placeholder='lastName'
			value = {this.state.lastName}
			onChange={this.handleChange}
		/>
		</div>

    
    <div>
		<label>Address</label>
		<input
			name='address'
			placeholder='address'
			value = {this.state.address}
			onChange={this.handleChange}
		/>
		</div>

    <div>
		<label>Email</label>
		<input
			name='email'
			placeholder='email'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>

    <div>
		<label htmlFor='phoneNo'>Phone Number</label>
		<input
			name='phoneNo'
			placeholder='Phone No'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div>
    
		<div>
		<label htmlFor='age'>Age</label>
		<input
			name='age'
			placeholder='Age'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>

    <div>
		<label>Username</label>
		<input
			name='username'
			placeholder='username'
			value = {this.state.username}
			onChange={this.handleChange}
		/>
		</div>

    <div>
		<label>Password</label>
		<input
			name='password'
			placeholder='password'
			value = {this.state.password}
			onChange={this.handleChange}
		/>
		</div>



		<div>
		<button>Create Account</button>
		</div>
	</form>
	)
}
}

export default App