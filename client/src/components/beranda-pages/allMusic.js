import React, { useState, useEffect } from 'react'
import Header from './beranda-pages-header';
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getMusics, deleteMusics } from "../redux/actions/musics";

import "./allMusic.css"

const AllMusic = ({musics, getMusics, deleteMusics}) => {
    const [dataMusics, setDataMusics] = useState([])
    const [updatedMusics, setUpdatedMusics] = useState([])
    useEffect(()=>{
        getMusics().then(res=>{
            setDataMusics(res.value)
        })
    },[getMusics, updatedMusics])

    const deleteMusic = async (e) => {
        deleteMusics(e).then(res=>{
            setUpdatedMusics(res.value)
        })
    }

    console.log(dataMusics)
    return (
        <>
            <Header />
            <div className="w-100 pb-5" style={{height: "100%", background:"black"}}>
            <h1 className="text-center text-white py-4">LIST MUSIC</h1>
                <Container>
                    <Row>
                        
                        {
                            dataMusics.length !== 0 &&
                                dataMusics.map((item,index) => {
                                    return(
                                        <Col key={index} xs={6} md={2} lg={2}>
                                            <div className="list-musics">
                                                <Image src={`http://localhost:5000/public/${item.thumbnail}`} />
                                                <div className="text-white list-musics-description">
                                                    <div className="d-flex justify-content-between">
                                                        <span>{item.title.substring(0,14)}</span>
                                                        <span>{item.year}</span>
                                                    </div>
                                                    <div className="text-left">
                                                        <span>{item.Artist.name}</span>
                                                    </div>
                                                    <div>
                                                        <div className="list-musics-description-buttons">
                                                            <Button>Update</Button>
                                                            <Button onClick={() => deleteMusic(item.id)}>Delete</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        musics: state.music
    }
}

export default connect(mapStateToProps, {getMusics,deleteMusics})(AllMusic)
