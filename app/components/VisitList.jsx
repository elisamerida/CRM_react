import React from 'react';
import VisitListElement from './VisitListElement';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export default class VisitList extends React.Component {

    // Contructor
    constructor(props) {
        super(props);
        this.visitListClick = this.visitListClick.bind(this);
    }

    visitListClick(index) {
        this.props.appClick(index);
    }

    render() {
        /* let lista = this.props.visits.map((visit, index) =>{
         let auxDate = visit.plannedFor.toString().split('T');
         let date = auxDate[0];
         return (
         <div>
         <li>Visita ID: {visit.id}</li>
         <li>Date: {date}</li>
         <li>Customer: {visit.Customer.name}</li>
         <li>Salesman: {visit.Salesman.fullname}</li>
         <hr></hr>
         </div>
         );
         });*/
        let visits = this.props.visits;
        let lista = [];
        if (visits === null) {
            return(""
                // <div class="loader"></div>
            ); // (<p>Cargando..</p>);
        }
        lista = this.props.visits.map((visit, index) =>{
            return (
                    <div>
                        <ListGroup>
                            <VisitListElement key={visit.id}
                                              visit={visit}
                                              index={index}
                                              fav={this.props.fav}
                                              visitListClick={this.visitListClick}
                            />
                        </ListGroup>
                    </div>
            );
        });

        return (
            <div>
                <ul /* className="Lista"*/ className="smooth-scroll list-unstyled">
                    {lista}
                </ul>
            </div>
        );
    }
}
