const initialData = {
    data: JSON.parse(localStorage.getItem('apiData')) || []
}
const saveDataReducer = (state = initialData, action) => {
    switch (action.type) {
        case "SAVE_DATA":
            state.data = [...action.payload]
            return state
        default:
            return state;
    }
}


export default saveDataReducer