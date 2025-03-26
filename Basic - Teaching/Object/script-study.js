// Step 1: Create a global variable to hold the student object
let student; // This will store our student object

// Step 2: Create the student object when the "Create Object" button is clicked
document
  .getElementById("createObjectBtn")
  .addEventListener("click", function () {
    // Create an object called 'student' with properties: name, age, and major.
    student = {
      name: "Your Name", // Replace 'Your Name' with your actual name
      age: 20, // Replace with your actual age
      major: "Your Major", // Replace with your field of study
    };

    // Display the student object in JSON format
    // JSON.stringify() converts a JavaScript object to a JSON string
    // The second argument is for a replacer function or an array of properties to include
    // The third argument is the number of spaces to use for indentation
    document.getElementById("objectOutput").textContent = JSON.stringify(
      student,
      null,
      2
    );

    // Log the student object to the console
    console.log("Student object created:", student);
  });

// Step 3: Access the properties of the student object and display them in a readable format
document
  .getElementById("accessPropertiesBtn")
  .addEventListener("click", function () {
    if (!student) {
      alert("Please create a student object first!"); // Alert if the object doesn't exist
      return; // Exit the function if the student object is not created
    }

    // Access the properties of the student object and format them into a string
    const properties = `Name: ${student.name}\nAge: ${student.age}\nMajor: ${student.major}`;

    // Use the innerHTML property to set the content of the element with the id "propertiesOutput"
    document.getElementById("propertiesOutput").textContent = properties;

    // Log the accessed properties to the console
    console.log("Accessed properties:", properties);
  });

// Step 4: Add a method called 'introduce' to the student object that returns a greeting message
document.getElementById("addMethodBtn").addEventListener("click", function () {
  if (!student) {
    alert("Please create a student object first!"); // Alert if the object doesn't exist
    return; // Exit the function if the student object is not created
  }

  // Add a method called 'introduce' to the student object
  student.introduce = function () {
    // Return a greeting message using the properties of the student object
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and I study ${this.major}.`;
  };

  // Call the 'introduce' method and display the greeting message
  const greeting = student.introduce();

  // Use the innerHTML property to set the content of the element with the id "methodOutput"
  document.getElementById("methodOutput").textContent = greeting;

  // Log the greeting message to the console
  console.log("Greeting message:", greeting);
});

// Step 5: Manipulate the student object
document.getElementById("updateAgeBtn").addEventListener("click", function () {
  if (!student) {
    alert("Please create a student object first!"); // Alert if the object doesn't exist
    return; // Exit the function if the student object is not created
  }

  // Update the age property
  student.age += 1; // Increment age by 1

  // Display the updated age information
  const updatedInfo = `Updated Age: ${student.age}`;

  // Use the innerHTML property to set the content of the element with the id "manipulationOutput"
  document.getElementById("manipulationOutput").textContent = updatedInfo;

  // Log the updated age information to the console
  console.log("Updated student age:", updatedInfo);
});

// Step 6: Alert the student information
document.getElementById("alertInfoBtn").addEventListener("click", function () {
  if (!student) {
    alert("Please create a student object first!"); // Alert if the object doesn't exist
    return; // Exit the function if the student object is not created
  }

  // Display the student information in an alert message
  const info = `Name: ${student.name}\nAge: ${student.age}\nMajor: ${student.major}`;

  // Use the alert() function to display the student information
  alert(info);
  // Log the displayed student information in an alert message
  console.log("Displayed student info in alert:", info);
});
