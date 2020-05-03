import React, {Component} from 'react';
import {Container } from "react-bootstrap";
import "../css/Projects.css";
export default class Projects extends Component {
    render(){
        return(
            <Container className= "projects">
                <div className="project_card_container">
                    <h1>Projects</h1>
                    <div className="card_container">
                        
                    </div>
                </div>
            </Container>
        );
    }
}