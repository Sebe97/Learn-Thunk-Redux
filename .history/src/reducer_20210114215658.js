const initialState = {
    items: [],
    loading: false,
    error: null

}
const dataReducer (state, action) => {
    switch (action.type) {
        case "START":
        case "SUCCESS":
        case "FAILURE":
        default:
            return state

    }
}