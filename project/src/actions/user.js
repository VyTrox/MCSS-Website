// Functions to help with user actions.
import {Redirect} from "react-router-dom";
// Send a request to check if a user is logged in through the session cookie
export const checkSession = (app) => {
    const url = "/users/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentEmail) {
                app.setState({
                    currentFirstName: json.currentFirstName,
                    currentLastName: json.currentLastName,
                    currentEmail: json.currentEmail,
                    check: json.check
                    })
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const updateRegisterForm = (registerComp, field) => {
    const value = field.value;
    const name = field.name;
    registerComp.setState({
        [name]: value
    });
};

export const updatePostForm = (postComp, field) => {
    const value = field.value;
    const name = field.name;
    postComp.setState({
        [name]: value
    });
};

// A functon to update the login form state
export const updateLoginForm = (loginComp, field) => {
    const value = field.value;
    const name = field.name;

    loginComp.setState({
        [name]: value
    });
};

// A function to send a POST request with the user to be logged in
export const login = (loginComp, app) => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/users/login", {
        method: "post",
        body: JSON.stringify(loginComp.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json.currentEmail !== undefined) {
                console.log("success")
                app.setState({ 
                    currentFirstName: json.currentFirstName,
                    currentLastName: json.currentLastName,
                    currentEmail: json.currentEmail,
                    check: json.check});
            }
        })
        .catch(error => {
            alert('Invalid Email or password.')
            console.log(error);
        });
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
    const url = "/users/logout";

    console.log("action log out 1")
    fetch(url)
        .then(res => {   
            console.log("action log out 2")
            app.setState({
                currentFirstName: null,
                currentLastName: null,
                currentEmail: null,
                check: null,
                message: { type: "", body: "" }
            });
            if(res.status == 200)
                console.log("logout successful")
        })
        .catch(error => {
            console.log("action log out 3")
            console.log(error);
        });
};

export const addUser = (registerComp, app) =>{
    const url = "/api/users";

    const user = registerComp.state
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                app.setState({
                    message: {
                        body: "Successfull add the new user.",
                        type: "success"
                    }
                });
                // registerComp.toLogin()
            } else {
                app.setState({
                    message: {
                        body: "Error: Could not add an user.",
                        type: "error"
                    }
                });
            }
            alert(app.state.message.body)
        })
        .catch(error => {
            console.log(error)
        });
}

export const addPost = (postComp, app) =>{
    const url = "/api/addPost";

    const post = postComp.state
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(post),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    console.log(post)
    // Send the request with fetch()
    fetch(request)
        .then(function (res) {
            
            if (res.status === 200) {
                app.setState({
                    message: {
                        body: "Successfully create the post.",
                        type: "success"
                    }
                });
            } else {
                app.setState({
                    message: {
                        body: "Error: Could not create the post.",
                        type: "error"
                    }
                });
            }
            alert(app.state.message.body)
        })
        .catch(error => {
            console.log(error)
        });
}

// get all users
export const getUsers = (comp) => {
    const url = "/api/getUsers";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log('Error loading users.');
            }
        })
        .then(json => {
            comp.setState({ users: json.users.filter(function(user) {
                return user.username !== 'admin'
              }) })
        })
        .catch(error => {
            console.log(error);
        });
}


// delete a user by id
export const deleteUser = (comp, id) => {

    const url = "/users/"+id

    const request = new Request(url, {
        method: "delete",
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                comp.setState({
                    message: {
                        body: "Success: Deleted a user.",
                        type: "success"
                    }
                });
            } else {
                comp.setState({
                    message: {
                        body: "Error: Could not delete a user.",
                        type: "error"
                    }
                });
            }
        })
        .catch(error => {
            console.log(error);
        });

}