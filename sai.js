const form1 = document.getElementById("f");
let a = false;
    let b = false;
    let c = false;
    let d = false;
    let g = false;
    let f = false;

form1.addEventListener("submit", (e) => {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const npass = document.getElementById("npass");
    const cpass = document.getElementById("cpass");
    const mno = document.getElementById("mno");
    const gender = document.getElementById("gender");
    let unvalue = username.value.trim();
    let emailvalue = email.value.trim();
    let npassvalue = npass.value.trim();
    let cpassvalue = cpass.value.trim();
    let mnovalue = mno.value.trim();

     a = false;
     b = false;
     c = false;
     d = false;
     g = false;
     f = false;
    //  e.preventDefault();
    if (unvalue == "") {
        setError(username, "username cannot be empty");
        e.preventDefault(); // Prevent form submission
    } else if (unvalue.length < 3) {
        setError(username, "username length must be greater than 3");
        e.preventDefault(); // Prevent form submission
    } else {
        setSuccess(username);
        a = true;
    }

    if (emailvalue == "") {
        setError(email, "mail should not be empty");
        e.preventDefault(); // Prevent form submission
    } else if (!checking(emailvalue)) {
        setError(email, "your email is not valid");
        e.preventDefault(); // Prevent form submission
    } else {
        setSuccess(email);
        b = true;
    }

    if (npassvalue == "") {
        setError(npass, "password should not be empty");
        e.preventDefault(); // Prevent form submission
    } else if (npassvalue.length < 8) {
        setError(npass, "password should contain a minimum of 8 characters");
        e.preventDefault(); // Prevent form submission
    } else {
        setSuccess(npass);
        c = true;
    }

    if (npassvalue != cpassvalue) {
        setError(cpass, "confirm password is wrong");
        e.preventDefault(); // Prevent form submission
    } else if (cpassvalue == "") {
        setError(cpass, "confirm password should not be empty");
        e.preventDefault(); // Prevent form submission
    } else {
        setSuccess(cpass);
        d = true;
    }

    if (mnovalue.length !== 10) {
        setError(mno, "mobile number must contain 10 digits only");
        e.preventDefault(); // Prevent form submission
    } else {
        setSuccess(mno);
        g = true;
    }

    if (!gender.checked) {
        mani(gender, "select your gender");
        e.preventDefault(); // Prevent form submission
    } else {
        setSuccess(gender);
        f = true;
    }

    // Check if there are no errors before allowing form submission
    /*if (a && b && c && d && g && f) {
        // window.location.href="./signup_valid.php"
    } else {
        // If there are errors, you can display a general error message, or individual error messages
        alert('Please correct the errors in the form.');
        // You can also display individual error messages to the user if needed
    }*/
});

function setError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector("small");
    small.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
}

function setSuccess(input) {
    let parent = input.parentElement;
    parent.classList.remove("error");
    parent.classList.add("success");
}

function checking(input) {
    let reg = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let valid = reg.test(input);
    return valid;
}

function mani(input, message) {
    let p1 = input.parentElement;
    let p2 = p1.parentElement;
    let sm = p2.querySelector("small");
    sm.innerText = message;
    p2.classList.add("error");
    p2.classList.remove("success");
}
//php
/*<?php
require_once 'db_connection.php';
    $name= $_POST["username"];
    $mail= $_POST["email"];
    $pass =$_POST["npass"];
    $number= $_POST["mno"];
    $gender= $_POST["gender"];
    $select="SELECT * FROM users WHERE email='$mail'";
    $getuser=mysqli_query($conn, $select);  
    if(mysqli_num_rows($getuser)==1){
        //header("Location: register.html");
        echo "<script>alert('already you are registered')</script>";
    }
    else{
        $insert="INSERT INTO users(username,email,password,mobile_no,gender) VALUES('$name','$mail','$pass','$number','$gender')";
        $insertuser=mysqli_query($conn, $insert);
        if($insertuser){
            // echo "<script>confirm('registered successfully')</script>";
            header("Location: index.html");
            exit(); 
        }
        else{
            echo "<script>alert('registeration failed')</script>";
        }
    }
    
 ?>*/


