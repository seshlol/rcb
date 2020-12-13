import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Ingredient from '../ingredient/index';
import './ingredient-container-result.scss';

class IngredientContainerResult extends React.Component {

    render = () => {
        const {isLoading, visibleIngredients, errorMessage} = this.props;
        return (
            <Row style={{margin: '0.5rem'}}>
                <div className={'ingredient-container-result'}>
                    {this.defineContent(isLoading, visibleIngredients, errorMessage)}
                </div>
            </Row>
        );
    };

    defineContent = (isLoading, visibleIngredients, errorMessage) => {
        if (isLoading) {
            return this.renderLoading();
        }
        if (visibleIngredients.length > 0) {
            return this.renderIngredients(visibleIngredients);
        }
        if (errorMessage) {
            return this.renderError(errorMessage)
        }
        return null;
    }

    renderLoading = () => {
        return (
            <div className={'ingredient-container-result-nocontent'}>
                <FontAwesomeIcon className={'ingredient-container-result-nocontent-loading'}
                                 icon={['fas', 'spinner']}
                                 spin={true}/>
            </div>
        );
    };

    renderIngredients = (visibleIngredients) => {
        const ingredients = visibleIngredients.map((ingredient, i) => {
            return <Ingredient key={ingredient.id} ingredient={{...ingredient, zIndex: i}}/>;
        });
        return (
            <div className={'ingredient-container-result-content'}>
                {ingredients}
            </div>
        );
    };

    renderError = (errorMessage) => {
        return (
            <div className={'ingredient-container-result-nocontent'}>
                <span className={'ingredient-container-result-nocontent-error'}>{errorMessage}</span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.ingredientReducer.isLoading,
        visibleIngredients: state.ingredientReducer.visibleIngredients,
        errorMessage: state.ingredientReducer.errorMessage
    };
};

export default connect(mapStateToProps)(IngredientContainerResult);
