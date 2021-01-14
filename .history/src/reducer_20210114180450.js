const initialState = {
    items=[],
    loading: false,
    error: "",
}
const postsReducer = (state = [], action) => {
    switch (action.type) {
        case "START-FETCH":
            return action.payload
        case "FETCH_POSTS":
            return action.payload
        case "FETCH_POSTS":
            return action.payload
        default:
            return state
    }
}
export default postsReducer



so, i want to:

- have an case for starting to fetch
    - have an case for succsec
        - have an case for fail

            - loading set to false after finihing(error or success)
                - set data on success
                    - empty data on fail
                        - set errro to error on fail
                            - clear error on succes and starting

                                - change the logic on action