import React from 'react';

export default class TargetElement extends React.Component {

    render() {
        let target = this.props.target;
        return(
            <div >
                <li><strong><span className="glyphicon glyphicon-info-sign" />   Target type: </strong>{target.TargetType.name}</li>
                <li><strong><span className="glyphicon glyphicon-file" />   Target notes: </strong>{target.notes}</li>
                <li><strong><span className="glyphicon glyphicon-comment" />   Company info: </strong>{target.Company.notes}</li>
                <li><strong><span className="glyphicon glyphicon-globe" />   Company website: </strong>{target.Company.web1}</li>
            </div>
        );
    }
}
