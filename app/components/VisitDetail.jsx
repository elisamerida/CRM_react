import React from 'react';
import {Col, Row, Button} from 'react-bootstrap';

export default class VisitDetail extends React.Component {

    // Contructor
    constructor(props) {
        super(props);
        this.favPressed = this.favPressed.bind(this);
    }

    favPressed() {
        let visitFav = this.props.visit;
        this.props.detailFavPressed(visitFav.id);

    }

    render() {
        let visit = this.props.visit;
        let auxPlannedFor = visit.plannedFor.toString().split('T');
        let datePlannedFor = auxPlannedFor[0];
        let dateFulfilledAt = "Empty";
        if (visit.fulfilledAt !== null) {
            dateFulfilledAt = visit.fulfilledAt.toString().split('T')[0];
            // dateFulfilledAt = auxFulfilledAt[0];
        }
        if(visit.favourite === true) {
            return(
                <Row>
                    <Col lg={4} md={4}>
                        <ul>
                            <h2><span className="glyphicon glyphicon-info-sign" />   Info</h2>
                            <li><strong><span className="glyphicon glyphicon-calendar" />   Planned For: </strong>{datePlannedFor}</li>
                            <li><strong><span className="glyphicon glyphicon-calendar" />   Fulfilled At: </strong>{dateFulfilledAt}</li>
                        </ul>
                    </Col>
                    <Col lg={4} md={4}>
                        <ul>
                            <li>
                        <h2><span className="glyphicon glyphicon-star" />   Favourite</h2>
                        <h3><strong>Press to mark fav/unfav: </strong></h3>
                        <Button className="favButton2" onClick={this.favPressed}>
                            <span className="glyphicon glyphicon-star" />
                        </Button>
                            </li>
                        </ul>
                    </Col>
                </Row>
            );

        }
        return(
                <Row>
                    <Col lg={4} md={4}>
                        <ul>
                            <h2><span className="glyphicon glyphicon-info-sign" />   Info</h2>
                            <li><strong><span className="glyphicon glyphicon-calendar" />   Planned For: </strong>{datePlannedFor}</li>
                            <li><strong><span className="glyphicon glyphicon-calendar" />   Fulfilled At: </strong>{dateFulfilledAt}</li>
                        </ul>
                    </Col>
                    <Col lg={4} md={4}>
                        <ul>
                            <li>
                                <h2><span className="glyphicon glyphicon-star" />   Favourite</h2>
                                <h3><strong>Press to mark fav/unfav: </strong></h3>
                                <Button className="favButton" onClick={this.favPressed}><span className="glyphicon glyphicon-star" /></Button>
                            </li>
                        </ul>
                    </Col>
                </Row>
        );

    }
}
