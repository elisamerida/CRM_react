import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export default class Visit extends React.Component {
    // Contructor
    constructor(props) {
        super(props);
        this.visitElementClicked = this.visitElementClicked.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    // metodo que guarda el indice de la vistita seleccionada
    visitElementClicked() {
        this.props.visitListClick(this.props.index);
    }

    handleKeyPress(e) {
        e.preventDefault();
    }

    render() {
        let visit = this.props.visit;
        let auxDate = visit.plannedFor.toString().split('T');
        let date = auxDate[0];
        return (
            <ListGroupItem >
                <div className="elementButton" role="button" tabIndex={0} onClick= {this.visitElementClicked} onKeyPress={this.handleKeyPress}>
                    <br />
                    <li><span className="glyphicon glyphicon-barcode" /><strong>   Visit ID:</strong> {visit.id}</li>
                    <li><span className="glyphicon glyphicon-calendar" /><strong> Date:</strong> {date}</li>
                    <li ><span className="glyphicon glyphicon-shopping-cart" /><strong> Customer:</strong> {visit.Customer.name}</li>
                    <li><span className="glyphicon glyphicon-briefcase" /><strong>  Salesman: </strong>{visit.Salesman.fullname}</li>
                    <li><strong><span className="glyphicon glyphicon-star" />  Favourite: </strong>{visit.favourite.toString()}</li>
                    <br />
                </div>
            </ListGroupItem>
        );
    }
}
