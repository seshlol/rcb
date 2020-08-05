import * as React from 'react';
import IngredientsContainerSearchForm from '../ingredients-container-search/ingredients-container-search';
import IngredientsContainerResultList from '../ingredients-container-result/ingredients-container-result';
import './ingredients-container.scss';

export default class IngredientsContainer extends React.Component {

    render = () => {
        return (
            <div>
                <IngredientsContainerSearchForm/>
                <IngredientsContainerResultList/>
            </div>
        );
    };
}
