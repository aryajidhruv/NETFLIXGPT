

export const validateData = (email, password,name) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z\s]{3,}$/.test(name);

    if(!isEmailValid) return "Email Is Not Valid";
    if(!isPasswordValid) return "Password Is Not Valid"
       if(!isNameValid) return "Name Is Not Valid"
  }