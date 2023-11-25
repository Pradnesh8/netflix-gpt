export const validateSignInForm = (email, password) => {
    const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    const validatePassword = password.length >= 8;
    if (!validateEmail) return "Invalid Email address";
    if (!validatePassword) return "Email ID / Password is not correct";
    return null
}
export const validateSignUpForm = (name, email, password, cpassword) => {
    const validateName = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(name);
    const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const validatePassword = /^^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if (!validateName) return "Invalid Name, Minimum 5 characters and space is allowed";
    if (!validateEmail) return "Invalid Email address";
    if (!validatePassword) return "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    if (password !== cpassword) return "Passwords does not match";
    return null
}