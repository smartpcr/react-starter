let login = (username, password) => {
    if (username !== "admin" || password != "password") {
        console.log("invalid login");
    }
    else {
        console.log(`user ${username} logged in`);
    }
};

export { login };