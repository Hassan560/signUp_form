function signUp() {
  const userName = document.getElementById("username");
  const passWord = document.getElementById("pass");
  const email = document.getElementById("email");

  if (userName.value !== "" && passWord.value !== "" && email.value !== "") {
    // Taking Data From Object In Object Lietrals
    var signUpObject = {
      userName: userName.value,
      passWord: passWord.value,
      email: email.value,
    };

    // Getting data from Object literal and Pussing into Array
    var signUpUserData = JSON.parse(localStorage.getItem("userData")) || [];

    var flag = true;

    for (var i = 0; i < signUpUserData.length; i++) {
      if (
        email.value == signUpUserData[i].email
        // passWord.value == signUpUserData[i].passWord
      ) {
        flag = false;
        alert("Email & Password Already Rigestered");
      }
    }
    if (flag == true) {
      signUpUserData.push(signUpObject);

      // setting data to localstorage data from getItem line
      localStorage.setItem("userData", JSON.stringify(signUpUserData));
      location.href = "login.html";
    }

    // console.log(signUpObject);
  } else {
    alert("Please Fill The Form");
  }
}

function logIn() {
  const email = document.getElementById("email");
  const passWord = document.getElementById("pass");

  const signInonject = {
    email: email.value,
    passWord: passWord.value,
  };
  var loginUserData = JSON.parse(localStorage.getItem("userData"));

  console.log(loginUserData);

  var flag = false;

  for (var i = 0; i < loginUserData.length; i++) {
    if (
      loginUserData[i].email === signInonject.email &&
      loginUserData[i].passWord === signInonject.passWord
    ) {
      flag = true;
    }
  }
  if (flag) {
    location.href = "welcome.html";
  } else {
    alert("Please Enter Correct Email or Password");
  }
}
