import React, { Component } from 'react';
import { Form, Row, Col, Container, Button, Modal } from 'react-bootstrap';
import Header from './beranda-pages-header';
import { connect } from "react-redux";
import { addArtist } from "../redux/actions/artists";

const ModalTransactions = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="bg-success rounded">
                <div >
                    <h4 className="text-center pt-5 text-white">Successfully adding new artist</h4>
                    <hr />
                    <p className="text-center pb-5 text-white">
                        You can check add music to see the current artist that has been added
                    </p>
                    <a href="/" style={{textDecoration: "none"}}><p className="text-center text-warning">click here for back to the homepage</p></a>
                </div>
            </Modal.Body>
        </Modal>
        );
}


class ArtistAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            modalShow: false
            };
        }

        handleChange = (event) => {
            const { data } = this.state;
            // console.log(event.target.name)
            this.setState({
            data: { ...data, [event.target.name]: event.target.value },
            });
        };
        
        handleSubmit = async (event) => {
            event.preventDefault();
            console.log(this.state.data)
            this.props.addArtist(this.state.data).then(res => {
                this.setState({modalShow: true})
            });
            this.setState({ data: {} });
        };

    render(){
        const { data } = this.state;
        const { data: addArtist } = this.props.artist;
        if (!(Object.keys(addArtist).length === 0 && addArtist.constructor === Object)){
            console.log(addArtist);
        }
        
        return(
            <>
                <Header />
                <div className="bg-dark" style={{height: "100vh", width: "100%"}}>
                    <div style={{height: 20}} className="bg-dark"></div>
                    <Container className="text-white  " style={{width: 900, marginTop: 40, fontSize: 24, fontWeight: 500  }}>Add Artist</Container>
                    <Container className="rounded" style={{background: "#1F1F1F", marginTop: 35, paddingBottom: 20, width: 900}}>
                        <Row className="py-3 pt-5">
                            <Col xs={0} md={3} lg={1}></Col>
                            <Col xs={12} md={3} lg={10}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control 
                                            type="text"
                                            name="name" 
                                            placeholder="Name"
                                            value={data.name ? data.name : ""}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput2">
                                        <Form.Control 
                                            type="number" 
                                            placeholder="Old" 
                                            name="old" 
                                            value={data.old ? data.old : ""}
                                            onChange={this.handleChange}
                                            />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select" 
                                            name="type"
                                            onChange={this.handleChange}
                                        >
                                            <option>Type</option>
                                            <option>RnB</option>
                                            <option>Pop</option>
                                            <option>Rock</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput3">
                                        <Form.Control 
                                            type="number" 
                                            placeholder="Start Career" 
                                            name="startCareer"
                                            value={data.startCareer ? data.startCareer : ""}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <div  className="text-center">
                                        <Button type="submit" style={{width: 200, background: "#1DB954", borderColor: "#1DB954"}}>
                                            Add Artist 
                                        </Button>
                                    </div>
                                </Form>
                            </Col>
                            <Col xs={0} md={3} lg={1}></Col>
                        </Row>
                    </Container>
                </div>
                <ModalTransactions 
                    show={this.state.modalShow}
                    onHide={() => this.setState({modalShow:false})}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        artist: state.artist
    };
};

export default connect(mapStateToProps, { addArtist })(ArtistAdd);

