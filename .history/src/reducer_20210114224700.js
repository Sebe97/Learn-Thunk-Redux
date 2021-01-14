const initialState = {
    items: [],
    loading: false,
    error: null

}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "START":
            return {
                ...state,
                items: [],
                loading: true,
                error: null
            }
        case "SUCCESS":
            return {
                ...state,
                items: [1, 2, 3, 4],
                loading: false,
                error: null
            }
        case "FAILURE":
            return {
                ...state,
                items: [],
                loading: false,
                error: action.payload
            }
        default:
            return state

    }
}