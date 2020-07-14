import * as React from 'react';
import Row from 'react-grid-system/build/grid/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ingredient.scss';

export default class Ingredient extends React.Component {

    render = () => {
        return (
            <Row style={{margin: '0 0 0.25rem 0'}}>
                <div className={'get-ingredients-result-item'}>
                    <div className={'get-ingredients-result-item-logo'}>
                        {/*<img/>*/}
                        <FontAwesomeIcon className={'get-ingredients-result-item-logo-icon'}
                                         icon={['far', 'image']}/>
                    </div>
                    <div className={'get-ingredients-result-item-info'}>
                        <div className={'get-ingredients-result-item-info-name'}>

                        </div>
                        <div className={'get-ingredients-result-item-info-actions'}>
                            <FontAwesomeIcon className={'get-ingredients-result-item-info-actions-item'}
                                             icon={['far', 'plus-square']}/>
                        </div>
                    </div>
                </div>
            </Row>
        );
    };
}


