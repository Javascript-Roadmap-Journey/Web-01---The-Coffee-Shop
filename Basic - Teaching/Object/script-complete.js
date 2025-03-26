// Create a global student object variable
let student;

// Display the student object in JSON format when the "Create Object" button is clicked
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
    document.getElementById("objectOutput").textContent = JSON.stringify(
      student,
      null,
      2
    );
    console.log("Student object created:", student);
  });

// Access the properties of the student object and display them in a readable format
document
  .getElementById("accessPropertiesBtn")
  .addEventListener("click", function () {
    if (!student) {
      alert("Please create a student object first!");
      return;
    }

    const properties = `Name: ${student.name}\nAge: ${student.age}\nMajor: ${student.major}`;
    document.getElementById("propertiesOutput").textContent = properties;
    console.log("Accessed properties:", properties);
  });

// Add a method called 'introduce' to the student object that returns a greeting message
document.getElementById("addMethodBtn").addEventListener("click", function () {
  if (!student) {
    alert("Please create a student object first!");
    return;
  }

  student.introduce = function () {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and I study ${this.major}.`;
  };

  const greeting = student.introduce();
  document.getElementById("methodOutput").textContent = greeting;
  console.log("Greeting message:", greeting);
});

// Manipulate the student object
document.getElementById("updateAgeBtn").addEventListener("click", function () {
  if (!student) {
    alert("Please create a student object first!");
    return;
  }

  // Update the age property
  student.age += 1; // Increment age by 1
  const updatedInfo = `Updated Age: ${student.age}`;
  document.getElementById("manipulationOutput").textContent = updatedInfo;
  console.log("Updated student age:", updatedInfo);
});

document.getElementById("alertInfoBtn").addEventListener("click", function () {
  if (!student) {
    alert("Please create a student object first!");
    return;
  }

  const info = `Name: ${student.name}\nAge: ${student.age}\nMajor: ${student.major}`;
  alert(info);
  console.log("Displayed student info in alert:", info);
});
