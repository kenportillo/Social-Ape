let db = {
    screams : [
        {
            userHandle : 'user',
            body : 'this is the scream body',
            createdAt : "2020-03-28T04:35:00.222Z",
            likeCount : 5,
            commentCount : 4,
        }
    ]
}

const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
};