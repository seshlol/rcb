import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Ingredient from '../ingredient/index';
import './ingredients-container.scss';
import {getIngredients} from "../../actions/ingredient-actions";
import {connect} from "react-redux";
import {serviceGetIngredients} from "../../services/ingredient-service";

class IngredientsContainer extends React.Component {

    render = () => {
        const {ingredients} = this.props;
        return (
            <div>
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
                <Row style={{margin: '0.5rem'}}>
                    <div className={'ingredients-result'}>
                        {
                            ingredients.map(ingredient => {
                                const {id, ...props} = ingredient;
                                return <Ingredient key={id} ingredient={props}/>;
                            })
                        }
                    </div>
                </Row>
            </div>
        );
    };

    getIngredients = (evt) => {
        evt.preventDefault();
        const ingredients = serviceGetIngredients();
        this.props.getIngredients(ingredients);
    }
}

const mapStateToProps = ({ingredientReducer: {ingredients}}) => {
    return {
        ingredients
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getIngredients: ingredients => dispatch(getIngredients(ingredients))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer);
