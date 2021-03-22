/* server.js for react-express-authentication */
"use strict";
const log = console.log;

const express = require("express");
// starting the express server
const app = express();
const path = require('path')

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false); // for some deprecation issues

// import the mongoose models
const { User, Post } = require("./models/user");

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require('connect-multiparty');

const fs = require('fs');
const multer = require('multer');

// cloudinary: configure using credentials found on your Cloudinary Dashboard
// sign up for a free account here: https://cloudinary.com/users/register/free
// const cloudinary = require('cloudinary');
// cloudinary.config({
//     cloud_name: 'onetrade-team40',
//     api_key: '823466749188792',
//     api_secret: 'xAGjWtBWirKbIGgYaZ0CIbpMuQM'
// });

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
const user = require("./models/user");
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(__dirname + '/public'));


function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

// middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } else {
        next()  
    }   
}

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
    if (req.session.user) {
        User.findById(req.session.user).then((user) => {
            if (!user) {
                return Promise.reject()
            } else {
                req.user = user
                next()
            }
        }).catch((error) => {
            res.status(401).send("Unauthorized")
        })
    } else {
        res.status(401).send("Unauthorized")
    }
}


/*** Session handling **************************************/
app.use(
    session({
        secret: "our hardcoded secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 1800000, //set session to 30mins
            httpOnly: true
        }
    })
);

// A route to login and create a session
app.post("/users/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Use the static method on the User model to find a user
    // by their email and password
    User.findByUsernamePassword(email, password)
        .then(user => {
            // Add the user's id to the session.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = user._id;
            req.session.firstname = user.firstname;
            req.session.lastname = user.lastname;
            req.session.email = user.email;
            req.session.isExec = user.isExec;
 // we will later send the email to the browser when checking if someone is logged in through GET /check-session (we will display it on the frontend dashboard. You could however also just send a boolean flag).
            res.send({ 
                user: user._id,
                currentEmail: user.email, 
                currentFirstName: user.firstname,
                currentLastName: user.lastname,
                check: user.isExec
                });
        })
        .catch(error => {
            res.status(400).send()
        });
});

// A route to logout a user
app.get("/users/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        res.status(200).send("log out successful")
        if (error) {
            console.log("server log out 3")
            res.status(500).send(error);
        }
    });
});

// A route to check if a user is logged in on the session
app.get("/users/check-session", (req, res) => {
    if (req.session.user) {
        res.send({ currentEmail: req.session.email,
                    currentFirstName: req.session.firstname,
                    currentLastName: req.session.lastname,
                    check: req.session.isExec
                });
    } else {
        res.status(401).send();
    }
});

app.post('/api/users', mongoChecker, async (req, res) => {
    console.log(req.body)

    // Create a new user
    const user = new User({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        email: req.body.email,
        password: req.body.password,
        isExec: false
    })

    try {
        // Save the user
        const newUser = await user.save()
        res.send(newUser)
    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request') // bad request for changing the student.
        }
    }
})


// GET request for all users
app.get('/api/getUsers', mongoChecker, async (req, res) => {

    try {
        const users = await User.find()
        res.send({ users })
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})

app.delete('/users/:id', mongoChecker, (req, res) => {

    const id = req.params.id

    // Delete the user from the database
    User.findOneAndRemove({ _id: id })
    .then(user => {
        if (!user) {
            res.status(404).send();
        } else {
            res.send(user);
        }
    })
    .catch(error => {
        res.status(500).send(); // server error, could not delete.
    });
})


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/Resource/PostImage')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    } 
})
const upload = multer({ storage: storage })

app.post('/api/addPost', mongoChecker, upload.single('image'), (req, res) => {
        log(req.file)

        const post = new Post({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            image: {
                data: fs.readFileSync(path.join(__dirname + '/src/Resource/PostImage/' + req.file.filename)),
                contentType: 'image/png'
            }
        })
    
        try {
            // Save the post
            post.save()
            res.redirect('/')
        } catch (error) {
            if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
                res.status(500).send('Internal server error')
            } else {
                log(error)
                res.status(400).send('Bad Request') // bad request for changing the student.
            }
        }
})

// a Get route to get all posts
app.get('/api/posts', mongoChecker, async (req, res) => {

    try {
        const posts = await Post.find()
        res.send({ posts })
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }

})


/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(path.join(__dirname, "/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/", "/Login", "/Register", "/AboutUs", "/AcademicResource", "/MCSSTeam", "/OtherClubs", "/Programs", "/UsefulInformation"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(path.join(__dirname, "/build/index.html"));
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 3000;
app.listen(port, () => {
    log(`Listening on port ${port}...`);
});