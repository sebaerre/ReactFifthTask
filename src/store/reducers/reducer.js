import * as actions from '../actions';
const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_PERSON: 
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor(Math.random() * 40)
            }
            return {
                persons: state.persons.concat(newPerson)
            }
        

            break;
            case actions.REMOVE_PERSON:
                return { persons: state.persons.filter(person => action.personid !== person.id) }

                break;

        default:
            return state;
            break;
    }
};

export default reducer;