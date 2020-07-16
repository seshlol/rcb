import * as React from 'react';
import IngredientsContainerSearchForm from '../ingredients-container-search-form/ingredients-container-search-form';
import IngredientsContainerResultList from '../ingredients-container-result-list/ingredients-container-result-list';
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
