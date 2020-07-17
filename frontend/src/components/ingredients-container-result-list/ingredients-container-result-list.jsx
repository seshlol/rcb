import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Ingredient from '../ingredient/index';
import './ingredients-container-result-list.scss';

class IngredientsContainerResultList extends React.Component {

    render = () => {
        const {isLoading, ingredients, errorMessage} = this.props;
        return (
            <Row style={{margin: '0.5rem'}}>
                <div className={'ingredients-result'}>
                    {this.renderLoading(isLoading)}
                    {this.renderIngredients(ingredients)}
                    {this.renderError(errorMessage)}
                </div>
            </Row>
        );
    };

    renderLoading = (isLoading) => {
        return isLoading ?
            <div className={'ingredient-result-nocontent'}>
                <FontAwesomeIcon className={'ingredient-result-nocontent-loading'}
                                 icon={['fas', 'spinner']}
                                 spin={true}/>
            </div>
            : null
    };

    renderIngredients = (ingredients) => {
        return ingredients.map(ingredient => {
            const {id, ...props} = ingredient;
            return <Ingredient key={id} ingredient={props}/>;
        })
    };

    renderError = (errorMessage) => {
        return errorMessage ?
            <div className={'ingredient-result-nocontent'}>
                <span className={'ingredient-result-nocontent-error'}>{errorMessage}</span>
            </div>
            : null
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.ingredientReducer.isLoading,
        ingredients: state.ingredientReducer.ingredients,
        errorMessage: state.ingredientReducer.errorMessage
    }
};

export default connect(mapStateToProps)(IngredientsContainerResultList);
