import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Ingredient from '../ingredient/index';
import './ingredient-container-result.scss';

class IngredientContainerResult extends React.Component {

    render = () => {
        const {isLoading, ingredientPages, currentPage, errorMessage} = this.props;
        const ingredientsToRender = ingredientPages[currentPage];
        return (
            <Row style={{margin: '0.5rem'}}>
                <div className={'ingredient-container-result'}>
                    {
                        isLoading ? this.renderLoading(isLoading)
                            : ingredientsToRender ? this.renderIngredients(ingredientsToRender)
                            : this.renderError(errorMessage)
                    }
                </div>
            </Row>
        );
    };

    renderLoading = (isLoading) => {
        return isLoading ? (
                <div className={'ingredient-container-result-nocontent'}>
                    <FontAwesomeIcon className={'ingredient-container-result-nocontent-loading'}
                                     icon={['fas', 'spinner']}
                                     spin={true}/>
                </div>
            )
            : null;
    };

    renderIngredients = (ingredients) => {
        return ingredients ? (
                <div className={'ingredient-container-result-content'}>
                    {
                        ingredients.map(ingredient => {
                            const {id, ...props} = ingredient;
                            return <Ingredient key={id} ingredient={props}/>;
                        })
                    }
                </div>
            )
            : null;
    };

    renderError = (errorMessage) => {
        return errorMessage ? (
                <div className={'ingredient-container-result-nocontent'}>
                    <span className={'ingredient-container-result-nocontent-error'}>{errorMessage}</span>
                </div>
            )
            : null;
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.ingredientReducer.isLoading,
        ingredientPages: state.ingredientReducer.ingredientPages,
        currentPage: state.ingredientReducer.currentPage,
        errorMessage: state.ingredientReducer.errorMessage
    };
};

export default connect(mapStateToProps)(IngredientContainerResult);
