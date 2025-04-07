function findInputs() {
    // Find Login ID and Password fields
    var loginId = document.getElementById("loginId");
    var password = document.getElementById("password");
    return [loginId, password];
  }
  
  // Check if inputs are filled
  function validateInputs(inputs) {

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "") {
        return false; 
      }
    }
    return true; 
  }
  
  // Check if Remember Me is checked
  function login() {
    var rememberMe = document.getElementById("remember");
  
    if (rememberMe.checked) {
      alert("Logged in successfully with Remember Me marked as set");
    } else {
      alert("Logged in successfully");
    }
  }
  
  // Clear all fields
  function clear() {
    var inputs = findInputs();
  
    
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  
    // Uncheck the checkbox
    document.getElementById("remember").checked = false;
  }
  
  // When OK button is clicked
  function handleOk() {
    var inputs = findInputs(); 
    var isValid = validateInputs(inputs); 
  
    if (isValid === false) {
      alert("Please fill in both Login ID and Password!");
      return;
    }
  
    login(); 
  }
  
 

  function handleCancel() {
    alert("Cancel is clicked");
    clear();
  }
  