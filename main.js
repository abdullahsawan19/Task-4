// ! Task 1
function displayDate() {
  // let date = new Date();

  // document.write(` the day is : ${date.getDate()} <br>`);
  // document.write(` the month is : ${date.getMonth() + 1} <br>`);
  // document.write(` the year is : ${date.getFullYear()} <br>`);
  // document.write(` the time is : ${date.toLocaleTimeString()} <br>`);

  //   ? another solution

  const date = Temporal.Now.plainDateISO();
  const time = Temporal.Now.plainTimeISO();

  document.write(` the day is : ${date.day} <br>`);
  document.write(` the month is : ${date.month} <br>`);
  document.write(` the year is : ${date.year} <br>`);
  document.write(` the time is : ${time.toString().split(".")[0]} <br>`);
}

// ! Task 2

function openWindow() {
  setTimeout(function () {
    let myWindow = window.open("", "_blank", "width=400,height=400");

    myWindow.document.write(`
      <h1>Advertising Window</h1>
      <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button onclick="window.close()">Close Me</button>
    `);
  }, 3000);
}

// ! Task 3

function evenOrOdd(num) {
  let regex = /^[0-9]*[02468]$/;
  return regex.test(num)
    ? document.write(` the num : ${num} is true`)
    : document.write(` the num : ${num} is false`);
}

console.log(evenOrOdd("368746321"));

// ! Task 4

function handelSubmit(e) {
  e.preventDefault();

  const nameRegex = /^[a-zA-Z\s]+$/;
  const phoneNumberRejex = /^[0-9]{8}$/;
  const mobileNumberRejex = /^(010|011|012|015)[0-9]{8}$/;
  const EmailRejex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const favColorRejex = /^(red|green|blue)$/i;

  const name = userName.value;
  const phoneNumber = phone.value;
  const mobileNumber = mobile.value;
  const Email = userEmail.value;
  const favColorValue = favColor.value;

  if (!nameRegex.test(name)) {
    alert("Invalid Name! Letters only.");
    return;
  }

  if (!phoneNumberRejex.test(phoneNumber)) {
    alert("Invalid Phone! Must be 8 digits.");
    return;
  }

  if (!mobileNumberRejex.test(mobileNumber)) {
    alert("Invalid Mobile! 11 digits starting with 010/011/012/015.");
    return;
  }

  if (!EmailRejex.test(Email)) {
    alert("Invalid Email format!");
    return;
  }

  if (!favColorRejex.test(favColorValue)) {
    alert(
      "Please select a color from red or green or blue (case insensitive)!",
    );
    return;
  }

  alert("data submitted successfully");
  console.log("Validation Passed:", {
    name,
    phoneNumber,
    mobileNumber,
    Email,
    favColorValue,
  });
}
