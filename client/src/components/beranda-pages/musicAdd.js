import React, { Component } from 'react';
import { Form, Row, Col, Container, Button, Modal, ProgressBar } from 'react-bootstrap';
import Header from './beranda-pages-header';
import { connect } from "react-redux";
import { addMusics } from "../redux/actions/musics";
import { getAllArtist } from "../redux/actions/artists";
import { FaCloudUploadAlt } from 'react-icons/fa';
import "./musicAdd.css";

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
                    <h4 className="text-center pt-5 text-white">Successfully adding new music</h4>
                    <hr />
                    <p className="text-center pb-5 text-white">
                        You can check your homepage to see the current music that has been added
                    </p>
                    <a href="/" style={{textDecoration: "none"}}><p className="text-center text-warning">click here for back to the homepage</p></a>
                </div>
            </Modal.Body>
        </Modal>
        );
}   
const ModalTransactions2 = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="bg-success rounded">
                <div >
                    <h4 className="text-center pt-5 text-white">Please wait until uploading finished</h4>
                    <hr />
                    <div className="text-center pb-5">
                        
                        <ProgressBar animated now={100} />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        );
}

class MusicAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            sound: '',
            modalShow:false,
            modalShow2:false,
            };
        }

        componentDidMount(){
            this.props.getAllArtist()
        }

        handleChange = (event) => {
            const { data } = this.state;
            // console.log(event.target.name)
            this.setState({
            data: { ...data, [event.target.name]: event.target.type === 'file' ? event.target.files[0] : event.target.value },
            });
        };

        handleSound = (event) => {
            this.setState({sound:event.target.files[0]})
        }
        
        handleSubmit = async (event) => {
            event.preventDefault();
            //console.log(this.state.data)
            this.props.addMusics(this.state.data).then(res=>{
                this.setState({modalShow: true})
            });
            this.setState({ data: {} });
        };

        onSubmitData = (event) => {
            event.preventDefault();
            this.setState({modalShow2: true})
            const data = new FormData()
                data.append("file", this.state.sound)
                data.append("upload_preset", "dumbtify")
                data.append("cloud_name", "eizeiky777")
                fetch("https://api.cloudinary.com/v1_1/eizeiky777/video/upload", {
                    method:"post",
                    body:data
                })
                .then(res => res.json())
                .then(data => {
                    this.setState({modalShow2: false})
                    console.log(data.url) 
                    const newData = {...this.state.data, attach: data.url }
                    this.props.addMusics(newData).then(res=>{
                        this.setState({modalShow: true})
                        
                    });
                    this.setState({ data: {}, sound:'' });
                })
                .catch(err => {
                    console.log(err)
                    return
                })
        }

        // handleTest = (event) => {
        //     event.preventDefault();
        //     console.log(this.state.data)
        // }

    render(){
        const { data } = this.state;
        const { data: allArtists} = this.props.artists;
        const { data: addMusic } = this.props.music;
        if (!(Object.keys(addMusic).length === 0 && addMusic.constructor === Object)){
            console.log(addMusic);
        }

        console.log(allArtists)
        return(
            <>
                <Header />
                <div className="bg-dark" style={{height: "100vh", width: "100%"}}>
                    <div style={{height: 10}} className="bg-dark"></div>
                    <Container className="text-white  " style={{width: 900, marginTop: 40, fontSize: 24, fontWeight: 500  }}>Add Music</Container>
                    <Container className="rounded" style={{background: "#1F1F1F", marginTop: 35, paddingBottom: 20, width: 900}}>
                        <Row className="py-3 pt-5">
                            <Col xs={0} md={3} lg={1}></Col>
                            <Col xs={12} md={3} lg={10}>
                                <Form onSubmit={this.onSubmitData}>
                                    <Form.Group controlId="exampleForm.ControlInput11" className="d-inline-flex">
                                        <Form.Control
                                            style={{width: 680, marginRight: 5}}
                                            type="text"
                                            name="title" 
                                            placeholder="Title"
                                            value={data.title ? data.title : ""}
                                            onChange={this.handleChange}
                                        />
                                        <Form.Control
                                            className="thumbnail"
                                            type="text"
                                            placeholder="Thumbnail"
                                        />
                                        <Form.Control
                                            style={{paddingTop: 5, width: "15%", right: 13, position: "absolute", zIndex: 999, opacity: 0, cursor:"pointer"}}
                                            type="file" 
                                            name="thumbnail"
                                            placeholder="Attach Thumbnail"
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput2">
                                        <Form.Control 
                                            type="number" 
                                            placeholder="Year" 
                                            name="year" 
                                            value={data.year ? data.year : ""}
                                            onChange={this.handleChange}
                                            />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select" 
                                            name="artistId"
                                            onChange={this.handleChange}
                                        >
                                            <option>Singer</option>
                                            {
                                                Object.keys(allArtists).length !== 0 && 
                                                    allArtists.map((artist,index) => {
                                                        return(
                                                            <option key={index} value={artist.id}>
                                                                {artist.name}
                                                            </option>
                                                        )
                                                    })
                                            }
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput3">
                                        <span className="thumbnail2">
                                            <FaCloudUploadAlt />
                                            Choose File
                                        </span>
                                        <Form.Control
                                            style={{paddingTop: 5, width: "15%",top: "65%", left: 13, position: "absolute", zIndex: 999, opacity: 0, cursor:"pointer"}}
                                            type="file" 
                                            accept=".mp3"
                                            name="attach"
                                            placeholder="Attach Sound"
                                            onChange={this.handleSound}
                                        />
                                    </Form.Group>
                                    <div  className="text-center">
                                        <Button type="submit" style={{width: 300, background: "#1DB954", borderColor: "#1DB954"}}>
                                            Add Music
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
                <ModalTransactions2 
                    show={this.state.modalShow2}
                    onHide={() => this.setState({modalShow2:false})}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        music: state.music,
        artists: state.allArtist
    };
};

export default connect(mapStateToProps, { addMusics, getAllArtist })(MusicAdd);

