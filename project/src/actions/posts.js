export const getPosts = (home) => {
    const url = "/api/posts";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log('Error loading posts.');
            }
        })
        .then(json => {
            home.setState({ posts: json.posts })
        })
        .catch(error => {
            console.log(error);
        });
};

export const getPostbyId = (home, path) => {

    const id = path.substring(path.lastIndexOf('/') + 1)
    const url = "/posts/"+id
    fetch(url)
        .then(res => {
             if (res.status === 200) {
                 return res.json();
             } else {
                 console.log('Error Loading item');
             }
         })
         .then(json => {
             home.setState({ post: json.post });
         })
         .catch(error => {
             console.log(error);
         });
 };

 export const deletePost = ( comp, id) => {

    const url = "/posts/"+id
    const request = new Request(url, {
        method: "DELETE",
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                alert("Success: Deleted a post.")
                comp.props.history.push('/EventsPage')
            } else {
                alert("Could not delete a post.")
            }
            getPosts(comp)
        })
        .catch(error => {
            console.log(error);
        });

}

export const editPost = (comp, id) => {
    const url = "/posts/"+id
    const body = {
        title: comp.state.title,
        date: comp.state.date,
        description:comp.state.description,
    }
    const request = new Request(url, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                alert("Successfull edited.")
                comp.props.history.push('/EventsPage')
            } else {
                alert("Error")
            }
        })
        .catch(error => {
            console.log(error);
    });
 }