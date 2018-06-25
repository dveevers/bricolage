import React from 'react';
import { Row, Col, Table } from 'reactstrap';

class Message extends React.Component {
    
    constructor(){
        super();
        this.state = newValue();
        };
    }

    componentDidMount() {
        setInterval( () => {
          this.newValue()
        },10000)
    }

    newValue() {
        fetch('https://bt-showcase-api.herokuapp.com/api/v1/messages?keyword=CCC')
            .then(response => response.json())			
            .then(responseJson => this.setState({ messages: responseJson.messages, messagecount:responseJson.count }));
        this.setState({
            curTime : new Date().toLocaleString()
          })
    }
    

    render() {
        return (
        <div>
            <Row className='justify-content-md-center'>
                <Col xs="9">
                    <img src="/img/rm.png" class="img-fluid" alt="Responsive image"/>
                </Col>
            </Row>            
            <Row className="justify-content-md-center">
                <Col xs="9">
                    Last updated at: {this.state.curTime}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs="9">
                Number of received messages: {this.state.messages.length}
                </Col>                
            </Row>
            <Row className="justify-content-md-center">
                <Col xs="9">
                    Messages:<br/>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th scope="col">Created</th>
                                <th scope="col">Channel</th>
                                <th scope="col">Author</th>
                                <th scope="col">Message</th>
                            </tr>
                        </thead>
                        <tbody>
						
                            {this.state.messages.map((message, index) => (
                                <tr eventKey={index}>
									<td>{message.created_at}</td>
                                    <td>{message.channel}</td>
                                    <td>{message.created_by}</td>
                                    <td>{message.content}</td>
                                </tr>
                            ))}
							
						
							
							
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
        )
    }
}

export default Message;