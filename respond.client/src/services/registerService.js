
export function registerUser(email, username, password){
    if (email === "peterbullhove@gmail.com" && username === "user" && password === "pass") return '200OK';
    console.log('error in registerService'); 
    throw 'User is already registered'; 
}

