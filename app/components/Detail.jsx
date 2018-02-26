import React from 'react';
import VisitDetail from "./VisitDetail";
import TargetDetail from "./TargetDetail";
import CustomerDetail from "./CustomerDetail";
import SalesmanDetail from "./SalesmanDetail";
import {Col, Row} from 'react-bootstrap';
import $ from 'jquery';

export default class Detail extends React.Component {

    // Contructor
    constructor(props) {
        super(props);
        this.detailFavPressed = this.detailFavPressed.bind(this);
    }

    detailFavPressed(fav) {
        this.props.appFavPressed(fav);
    }

    render() {
        let visits = this.props.visits;
        if (visits === null) {
            return (<div className="loaderWrapper"><div className="loader" /></div>);// (<p>Cargando..</p>);
        }
        let visit = visits[this.props.visitSelected];
        return(
                <div>
                    <Row>
                    <VisitDetail visit={visit} fav={this.props.fav} detailFavPressed={this.detailFavPressed}/>
                    <hr/>
                    </Row>
                    <Row>
                    <TargetDetail targets={visit.Targets}/>
                    <hr/>
                    </Row>
                    <Row>
                    <Col lg={4} md={4}>
                        <CustomerDetail customer={visit.Customer}/>
                    </Col>
                    <Col lg={4} md={4}>
                        <SalesmanDetail salesman={visit.Salesman}/>
                    </Col>
                    </Row>
                </div>
        );

    }

}
