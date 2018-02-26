import React from 'react';
import TargetElement from "./TargetElement";
import {Button, Panel, PanelGroup} from 'react-bootstrap';

export default class TargetDetail extends React.Component {

    render() {
        let targets = this.props.targets;
        if(targets.length === 0) {
            return(
                <div>
                    <ul>
                        <h1><span className="glyphicon glyphicon-pushpin" />  Targets</h1>
                        <li>Empty</li>
                    </ul>
                </div>);
        }
        let targetsList = targets.map((target, index)=>{
            return(
                <div>
                        <li>
                            <div class="panel-heading">{target.Company.name}</div>
                            <div class="panel-body">
                                <TargetElement key={target.id} target={target} index={index}/>
                            </div>
                        </li>
                </div>
            );
        });
        return(
            <ul>
                <h1><span className="glyphicon glyphicon-pushpin" />  Targets</h1>
                {targetsList}
            </ul>
        );

    }
}
