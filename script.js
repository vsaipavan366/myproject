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
    if (unvalue == "") {
        setError(username, "username cannot be empty");
        e.preventDefault(); 
    } else if (unvalue.length < 3) {
        setError(username, "username length must be greater than 3");
        e.preventDefault(); 
    } else {
        setSuccess(username);
        a = true;
    }

    if (emailvalue == "") {
        setError(email, "mail should not be empty");
        e.preventDefault(); 
    } else if (!checking(emailvalue)) {
        setError(email, "your email is not valid");
        e.preventDefault(); 
    } else {
        setSuccess(email);
        b = true;
    }

    if (npassvalue == "") {
        setError(npass, "password should not be empty");
        e.preventDefault(); 
    } else if (npassvalue.length < 8) {
        setError(npass, "password should contain a minimum of 8 characters");
        e.preventDefault(); 
    } else {
        setSuccess(npass);
        c = true;
    }

    if (npassvalue != cpassvalue) {
        setError(cpass, "confirm password is wrong");
        e.preventDefault(); 
    } else if (cpassvalue == "") {
        setError(cpass, "confirm password should not be empty");
        e.preventDefault(); 
    } else {
        setSuccess(cpass);
        d = true;
    }

    if (mnovalue.length !== 10) {
        setError(mno, "mobile number must contain 10 digits only");
        e.preventDefault(); 
    } else {
        setSuccess(mno);
        g = true;
    }

    if (!gender.checked) {
        mani(gender, "select your gender");
        e.preventDefault(); 
    } else {
        setSuccess(gender);
        f = true;
    }
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

