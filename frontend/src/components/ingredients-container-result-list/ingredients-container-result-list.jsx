import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {connect} from 'react-redux';
import Ingredient from '../ingredient/index';
import './ingredients-container-result-list.scss';

class IngredientsContainerResultList extends React.Component {

    render = () => {
        return (
            <Row style={{margin: '0.5rem'}}>
                <div className={'ingredients-result'}>
                    {
                        this.isLoading()
                    }
                    {
                        this.props.ingredients.map(ingredient => {
                            const {id, ...props} = ingredient;
                            return <Ingredient key={id} ingredient={props}/>;
                        })
                    }
                </div>
            </Row>
        );
    };

    isLoading = () => {
        return this.props.isLoading ? <div>Loading...</div> : null;
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredientReducer.ingredients
    }
};

export default connect(mapStateToProps)(IngredientsContainerResultList);
