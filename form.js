// FORMOS TIKRINIMAS su REGEX
let re1 = /^[a-zA-Z]{5,12}$/;
let re2 = /^[a-zA-Z0-9_.]{7,12}$/;
let re3 = /^[a-zA-Z]+$/;
let re5 = /^[0-9_.]+$/;
let re6 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let username = document.getElementById('username');
let password = document.getElementById('password');
let name = document.getElementById('name');
let address = document.getElementById('address');
let country = document.getElementById('country');
let zip = document.getElementById('zip');
let email = document.getElementById('email');
let male = document.getElementById('male');
let female = document.getElementById('female');
let radios = document.getElementsByTagName('gender');
let english = document.getElementById('english');
let other = document.getElementById('other');
let about = document.getElementById('about');
let radioList = document.getElementsByTagName('radAnswer');
country.selectedIndex = -1;

function submitted() {
  // username check
  if (username.value === '') {
    alert("Please enter your username");
    return;
  } else {
    if (!re1.test(username.value)) {
      alert("USERNAME must contain 5-12 characters");
      return;
    } else {
      console.log("1.username_submitted");
    }
  }
  // password check
  if (password.value === '') {
    alert("Please enter your password");
    return;
  } else {
    if (!re2.test(password.value)) {
      alert("PASSWORD must contain 7-12 characters");
      return;
    } else {
      console.log("2.password_submitted");
    }
  }

  // name check
  if (name.value === '') {
    alert("Please enter your name");
    return;
  } else {
    if (!re3.test(name.value)) {
      alert("NAME must contain only letters");
      return;
    } else {
      console.log("3.name_submitted");
    }
  }

  // country check
  if (country.selectedIndex < 0) {
    alert("COUNTRY must be selected");
    return;
  } else {
    console.log("5.country_submitted");
  }

  // zip check
  if (zip.value === '') {
    alert("Please enter your ZIP-CODE");
    return;
  } else {
    if (!re5.test(zip.value)) {
      alert("ZIP-CODE must contain only numbers");
      return;
    } else {
      console.log("6.zip_submitted");
    }
  }

  // email check
  if (email.value === '') {
    alert("Please enter your email address");
    return;
  } else {
    if (!re6.test(email.value)) {
      alert("EMAIL is not valid");
      return;
    } else {
      console.log("7.email_submitted");
    }
  }

  // gender check
  if (!male.checked & !female.checked) {
    alert("GENDER must be selected");
    return;
  } else {
    console.log("8.gender_selected");
  }

  // language check
  if (!english.checked & !other.checked) {
    alert("LANGUAGE must be selected");
    return;
  } else {
    console.log("9.language_selected");
  }
  alert("subbmitted");
}
