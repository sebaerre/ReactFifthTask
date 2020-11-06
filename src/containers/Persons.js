import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actions from '../store/actions';

class Persons extends Component {
    state = {
        persons: []
    }


    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.personsProp.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onRemovePerson(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        personsProp: state.persons
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: () => dispatch({ type: actions.ADD_PERSON }),
        onRemovePerson: (personId) => dispatch({ type: actions.REMOVE_PERSON, personid: personId })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);