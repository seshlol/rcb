import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ingredients-container-search-form.scss';
import {getIngredients} from "../../actions/ingredient-actions";
import {connect} from "react-redux";
import {serviceGetIngredients} from "../../services/ingredient-service";

class IngredientsContainerSearchForm extends React.Component {

    render = () => {
        return (
            <Row style={{margin: '0.5rem'}}>
                <form className={'ingredients-form'}
                      onSubmit={this.getIngredients}>
                    <input className={'ingredients-form-input'}
                           placeholder={'ingredient name'}/>
                    <button className={'ingredients-form-button'}>
                        <FontAwesomeIcon className={'ingredients-form-button-icon'}
                                         icon={['fas', 'search']}/>
                    </button>
                </form>
            </Row>
        );
    };

    getIngredients = (evt) => {
        evt.preventDefault();
        const ingredients = serviceGetIngredients();
        this.props.getIngredients(ingredients);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getIngredients: ingredients => dispatch(getIngredients(ingredients))
    }
};

export default connect(null, mapDispatchToProps)(IngredientsContainerSearchForm);
