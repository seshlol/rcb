import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {getIngredients} from '../../actions/ingredient-actions';
import './ingredient-container-search.scss';

class IngredientContainerSearch extends React.Component {

    state = {
        name: ''
    };

    render = () => {
        return (
            <Row style={{margin: '0.5rem'}}>
                <form className={'ingredient-container-search'}
                      onSubmit={this.handleSubmit}>
                    <input className={'ingredient-container-search-input'}
                           placeholder={'ingredient name'}
                           value={this.state.name}
                           onChange={this.handleChange}/>
                    <button className={'ingredient-container-search-button'}>
                        <FontAwesomeIcon className={'ingredient-container-search-button-icon'}
                                         icon={['fas', 'search']}/>
                    </button>
                </form>
            </Row>
        );
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.getIngredients(this.state.name);
        this.setState({name: ''});
    };

    handleChange = (evt) => {
        this.setState({name: evt.target.value})
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getIngredients: ingredients => dispatch(getIngredients(ingredients))
    }
};

export default connect(null, mapDispatchToProps)(IngredientContainerSearch);