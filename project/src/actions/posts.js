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