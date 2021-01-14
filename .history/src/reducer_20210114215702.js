const initialState = {
    items: [],
    loading: false,
    error: null

}
const dataReducer (state = initialState, action) => {
    switch (action.type) {
        case "START":
        case "SUCCESS":
        case "FAILURE":
        default:
            return state

    }
}