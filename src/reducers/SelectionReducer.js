export default (state, action) => {
    switch(action.type) {
        case 'select-library':
            return action.payload;
        default:
            return state;
    }
};