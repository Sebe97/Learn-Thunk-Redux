const postsReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_POST":
            return action.payload
    }
}
export default postsReducer