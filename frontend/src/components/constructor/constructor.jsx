import * as React from 'react';
import Container from 'react-grid-system/build/grid/Container';
import Row from 'react-grid-system/build/grid/Row';
import Col from 'react-grid-system/build/grid/Col';
import IngredientContainer from '../ingredients-container';
import './constructor.scss';

export default class Constructor extends React.Component {

    render = () => {
        return (
            <Container style={{paddingLeft: '0', paddingRight: '0.5rem'}} fluid>
                <Row nogutter>
                    <Col xl={4} lg={6}>
                        <div className={'ingredients-container'}>
                            <IngredientContainer/>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    };
}
