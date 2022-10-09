$(document).ready(function () {
	//Validation for the form
	$("#member_form").validate(
		{
			//Rules for madatory fields
			rules:
			{
				//Validation for Arraival Date field
				fName:
				{
					required: true //Field is required
				},
				lName:
				{
					required: true //Field is required
				},
				email:
				{
					required: true, //Field is required
					email: true //It should be in email format
				},
				dob:
				{
					required: true, //Field is required
					date: true //It should be in date format
				},
				phone:
				{
					required: true, //Field is required
				}
				
			},

			//Alert Message
			messages:
			{
				//Alert Message
				fname:
				{
					//Error messages
					required: "Enter valid First name."
				},
				lname:
				{
					//Error messages
					required: "Enter valid Last name."
				},
				email:
				{
					//Error messages
					required: "Enter valid EMAIL."
				},
				dob:
				{
					//Error messages
					required: "Select a Date."
				},
				phone: 
				{
					// Error message
					required: "Enter a valid contact number"

				}
			
			}
		})
}); 