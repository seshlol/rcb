import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Ingredient from '../ingredient/index';
import './ingredient-container-result.scss';

class IngredientContainerResult extends React.Component {

    render = () => {
        const {isLoading, ingredientPages, currentPage, errorMessage} = this.props;
        const visibleIngredients = ingredientPages[currentPage];
        return (
            <Row style={{margin: '0.5rem'}}>
                <div className={'ingredient-container-result'}>
                    {
                        isLoading ? this.renderLoading()
                            : visibleIngredients ? this.renderIngredients(visibleIngredients)
                                : errorMessage ? this.renderError(errorMessage)
                                    : null
                    }
                </div>
            </Row>
        );
    };

    renderLoading = () => {
        return (
            <div className={'ingredient-container-result-nocontent'}>
                <FontAwesomeIcon className={'ingredient-container-result-nocontent-loading'}
                                 icon={['fas', 'spinner']}
                                 spin={true}/>
            </div>
        );
    };

    renderIngredients = (ingredients) => {
        return (
            <div className={'ingredient-container-result-content'}>
                {
                    ingredients.map(ingredient => {
                        const {id, ...props} = ingredient;
                        return <Ingredient key={id} ingredient={props}/>;
                    })
                }
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
        ingredientPages: state.ingredientReducer.ingredientPages,
        currentPage: state.ingredientReducer.currentPage,
        errorMessage: state.ingredientReducer.errorMessage
    };
};

export default connect(mapStateToProps)(IngredientContainerResult);
