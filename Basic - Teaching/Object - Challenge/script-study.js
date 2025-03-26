// Step 1: Create a global variable to hold the student object
let student = {
  name: "Your Name", // Replace with your actual name
  age: 20, // Replace with your actual age
  major: "Your Major", // Replace with your field of study
};

// Step 2: Function to get an attribute
// Description: Retrieve the value of a specific attribute from the student object
// parameters: [attributeName: string]
// returns: any | string
// Example: getAttribute("name") -> "Your Name"
// Example: getAttribute("age") -> 20
// Example: getAttribute("major") -> "Your Major"
function getAttribute(attributeName) {
  try {
    // Code this block to get the attribute from the student object
    if (student.hasOwnProperty(attributeName)) {
      // Return the value of the attribute
    } else {
      throw new Error(
        "Attribute not found. Please enter a valid attribute name (name, age, major)."
      );
    }
  } catch (error) {
    return error.message; // Return the error message
  }
}

// Step 3: Function to update an attribute
// Description: Update the attribute value in the student object
// parameters: [attributeName: string, newValue: any]
// returns: string
// Example: updateAttribute("name", "Alice") -> "name updated to: Alice"
// Example: updateAttribute("age", 25) -> "age updated to: 25"
function updateAttribute(attributeName, newValue) {
  try {
    if (student.hasOwnProperty(attributeName)) {
      // Update the attribute value
      // Set the new value
      return `${attributeName} updated to: ${newValue}`; // Return success message
    } else {
      throw new Error(
        "Attribute not found. Please enter a valid attribute name (name, age, major)."
      );
    }
  } catch (error) {
    return error.message; // Return the error message
  }
}

// Step 4: Function to delete an attribute
// Description: Delete the attribute from the student object
// parameters: [attributeName: string]
// returns: string
// Example: deleteAttribute("name") -> "name deleted"
function deleteAttribute(attributeName) {
  try {
    if (student.hasOwnProperty(attributeName)) {
      // Delete the attribute from the student object, using the delete operator
      // Remove the attribute
      return `${attributeName} has been deleted.`; // Return success message
    } else {
      throw new Error(
        "Attribute not found. Please enter a valid attribute name (name, age, major)."
      );
    }
  } catch (error) {
    return error.message; // Return the error message
  }
}

// DO NOT CHANGE THIS PART OF THE CODE

// Step 5: Event listener for getting an attribute
document
  .getElementById("getAttributeBtn")
  .addEventListener("click", function () {
    const attributeName = prompt(
      "Enter the attribute name you want to get (name, age, major):"
    );
    const value = getAttribute(attributeName);
    alert(value); // Display the value in an alert
  });

// Step 6: Event listener for updating an attribute
document
  .getElementById("updateAttributeBtn")
  .addEventListener("click", function () {
    const attributeName = prompt(
      "Enter the attribute name you want to update (name, age, major):"
    );
    const newValue = prompt("Enter the new value:");
    const message = updateAttribute(attributeName, newValue);
    alert(message); // Display the update message in an alert
  });

// Step 7: Event listener for deleting an attribute
document
  .getElementById("deleteAttributeBtn")
  .addEventListener("click", function () {
    const attributeName = prompt(
      "Enter the attribute name you want to delete (name, age, major):"
    );
    const message = deleteAttribute(attributeName);
    alert(message); // Display the delete message in an alert
  });
