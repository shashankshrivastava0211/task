export const validate=(email,password)=>{
    const isEmailValid =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const ispasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!isEmailValid){
        return "Enter a valid E-mail"
    }

    if(!ispasswordValid){
        return "Please enter a valid password"
    }

    return null;


}