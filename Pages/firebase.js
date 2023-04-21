const firebaseConfig = {
    apiKey: "AIzaSyCQ_YgvZpE5SYJb6WtYPNnlULtXd8FmD1Y",
    authDomain: "makearoom-reg.firebaseapp.com",
    databaseURL: "https://makearoom-reg-default-rtdb.firebaseio.com",
    projectId: "makearoom-reg",
    storageBucket: "makearoom-reg.appspot.com",
    messagingSenderId: "390218314137",
    appId: "1:390218314137:web:c48acfafc87b748ff9a308"
};

firebase.initializeApp(firebaseConfig);
const regFormDB = firebase.database().ref('registrationForm');

document.getElementById('registrationForm').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var password = getElementVal('password');
    var confirmPassword = getElementVal('confirm-password');

    saveDetails(name, email, password, confirmPassword)
}

const saveDetails = (name, email, password, confirmPassword) => {
    var newRegistrationForm = regFormDB.push();

    newRegistrationForm.set({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};