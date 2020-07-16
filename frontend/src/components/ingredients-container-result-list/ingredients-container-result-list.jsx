import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import Ingredient from '../ingredient/index';
import './ingredients-container-result-list.scss';
import {connect} from "react-redux";

class IngredientsContainerResultList extends React.Component {

    render = () => {
        return (
                <Row style={{margin: '0.5rem'}}>
                    <div className={'ingredients-result'}>
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
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredientReducer.ingredients
    }
};

export default connect(mapStateToProps)(IngredientsContainerResultList);
