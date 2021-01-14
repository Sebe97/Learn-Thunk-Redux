const initialState = {
    items: [],
    loading: false,
    error: null,
}
const postsReducer = (state, action) => {
    switch (action.type) {
        case "START":
            return {
                ...state,
                loading: true,
                items: [],
                error: null,
            }
        case "SUCCESS":
            return {
                ...state,
                loading: false,
                items: action.payload,
                error: null,
            }
        case "FAILURE":
            return {
                ...state,
                loading: false,
                items: [],
                error: action.payload,
            }
        default:
            return state
    }
}
export default postsReducer

