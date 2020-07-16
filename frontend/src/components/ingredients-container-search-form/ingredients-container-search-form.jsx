import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {getIngredients} from '../../actions/ingredient-actions';
import './ingredients-container-search-form.scss';

class IngredientsContainerSearchForm extends React.Component {

    state = {
        ingredientName: ''
    };

    render = () => {
        return (
            <Row style={{margin: '0.5rem'}}>
                <form className={'ingredients-form'}
                      onSubmit={this.onSubmitHandler}>
                    <input className={'ingredients-form-input'}
                           placeholder={'ingredient name'}
                           id={'ingredientName'}
                           value={this.state.ingredientName}
                           onChange={this.onChangeHandler}/>
                    <button className={'ingredients-form-button'}>
                        <FontAwesomeIcon className={'ingredients-form-button-icon'}
                                         icon={['fas', 'search']}/>
                    </button>
                </form>
            </Row>
        );
    };

    onSubmitHandler = (evt) => {
        evt.preventDefault();
        this.props.getIngredients(this.state.ingredientName);
    };

    onChangeHandler = (evt) => {
        this.setState({[evt.target.id]: evt.target.value})
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getIngredients: ingredients => dispatch(getIngredients(ingredients))
    }
};

export default connect(null, mapDispatchToProps)(IngredientsContainerSearchForm);
