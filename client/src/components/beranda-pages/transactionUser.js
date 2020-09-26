import React, { useState, useEffect } from 'react';
import { Button,  Container, Row, Col, Modal } from 'react-bootstrap';
import {  FaCheck  } from 'react-icons/fa';
import Header from './beranda-pages-header';
import { connect } from "react-redux";
import { postTransaction } from "../redux/actions/transactions";
import axios from 'axios';
import './transactionUser.css';

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
                    <h4 className="text-center pt-5 text-white">Thank You for Subscribing our Service</h4>
                    <hr />
                    <p className="text-center pb-5 text-white">
                        Now you can check your favourite music anytime
                    </p>
                    <a href="/" style={{textDecoration: "none"}}><p className="text-center text-warning">click here for back to the homepage</p></a>
                </div>
            </Modal.Body>
        </Modal>
        );
}

const TransactionUser = ({postTransaction, transaction }) => {
    const [dataSnaps, setDataSnaps] = useState('')
    const [modalShow, setModalShow] = useState(false)

    useEffect(()=>{
        if(dataSnaps){
            postTransaction(dataSnaps, localStorage.getItem('id')).then(res => {
                setTimeout(setModalShow(true), 2000)
            })
        }
    },[dataSnaps, postTransaction])

    const handlePayment = async (price) => {
        // postTransaction(localStorage.getItem('id'));
        axios.get(`http://localhost:5000/api/v1/transaction/snaps/${price}`)
            .then(function (res) {
                window.snap.pay(res.data.token, {
                    // Optional
                    onSuccess: function(result){
                        setDataSnaps(result)
                    },
                    // Optional
                    onPending: function(result){
                        console.log(result)
                    },
                    // Optional
                    onError: function(result){
                        console.log(result)
                    }
                });
            })
            .catch(function (error) {
                return error
            })
    };

    // const handleAll = async (d) => {
    //     postTransaction(d, localStorage.getItem('id'));
    // }

    const { data: userTransaction } = transaction;
    if ( Object.keys(userTransaction).length !== 0 ){
        console.log(userTransaction);
    }
    // const { data: dataUsers, loading, error } = this.props.user;
    return (
        <>
        <Header />
        <div style={{ height: "100%", width:"100%", paddingTop: 50, background: "#161616"}}>
                <div className="text-white text-center mb-5">
                    <div className="pt-5 pb-4">
                        <h1>Premium</h1>
                    </div>
                    <div>
                        <span style={{fontSize: 18}}>Bayar sekarang dan nikmati streaming music yang kekinian dari </span>
                        <span style={{color: "#1DB954", fontSize: 18}}> DUMB</span>
                        <span style={{fontSize: 18}}>TIFY</span>
                    </div>
                </div>
            <Container className="p-0">
                <Row className="p-0 m-0">
                    <Col xs={12} md={4} lg={3}>
                        <div className="payment-user-plans bg-white p-3 mb-5 shadow rounded">
                            <h1>Berlangganan, gratis 1 bulan </h1>
                            <h2>Bayar sekali atau berlangganan</h2>
                            <h5>Individual</h5>
                            <p className="mb-0">Penawaran dari Rp 49990 /bulan</p>
                            <p>1 akun</p>
                            <hr />
                            <div className="payment-user-plans-check">
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>Dengarkan musik bebas iklan</span>
                                </div>
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>Putar dimana saja sesuka kamu</span>
                                </div>
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>Playback on Demand</span>
                                </div>
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>Prabayar atau berlangganan</span>
                                </div>
                            </div>
                            <Button onClick={() =>{
                                    handlePayment("49990")
                                }
                            }>PAY NOW</Button>
                            <div id="syarat">
                                <span>Syarat dan ketentuan berlaku.</span>
                                <span>1 bulan gratis tidak tersedia untuk pengguna yang pernah mencoba Premium.</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className="payment-user-plans bg-white p-3 mb-5 shadow rounded">
                            <h1>Berlangganan, gratis 1 bulan </h1>
                            <h2>Bayar sekali atau berlangganan</h2>
                            <h5>Duo</h5>
                            <p className="mb-0">Penawaran dari Rp 64990 / bulan</p>
                            <p>2 akun</p>
                            <hr />
                            <div className="payment-user-plans-check">
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>2 akun Premium untuk pasangan yang tinggal serumah</span>
                                </div>
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>Duo Mix: playlist untuk dua orang, diperbarui berkala dengan musik yang kalian berdua nikmati</span>
                                </div>
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>Mendengarkan musik bebas iklan, mode offline, playback berdasarkan permintaan</span>
                                </div>
                            </div>
                            <Button onClick={() =>{
                                    handlePayment("64990")
                                }}
                            >PAY NOW</Button>
                            <div id="syarat">
                                <span>Syarat dan ketentuan berlaku.</span>
                                <span>1 bulan gratis tidak tersedia untuk pengguna yang pernah mencoba Premium.</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className="payment-user-plans bg-white p-3 mb-5 shadow rounded">
                            <h1>Berlangganan, gratis 1 bulan </h1>
                            <h2>Bayar sekali atau berlangganan</h2>
                            <h5>Family</h5>
                            <p className="mb-0">Penawaran dari Rp 79000 / bulan</p>
                            <p>6 akun</p>
                            <hr />
                            <div className="payment-user-plans-check">
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>6 akun Premium untuk anggota keluarga yang tinggal serumah</span>
                                </div>
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>Family Mix: playlist untuk keluarga, diperbarui berkala dengan musik yang kalian nikmati</span>
                                </div>
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>Blokir musik explicit</span>
                                </div>
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>Mendengarkan musik bebas iklan, mode offline, playback berdasarkan permintaan</span>
                                </div>
                            </div>
                            <Button onClick={() =>{
                                    handlePayment("79000")
                                }}
                            >PAY NOW</Button>
                            <div id="syarat">
                                <span>Syarat dan ketentuan berlaku.</span>
                                <span>1 bulan gratis tidak tersedia untuk pengguna yang pernah mencoba Premium.</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className="payment-user-plans bg-white p-3 mb-5 shadow rounded">
                            <h1>Berlangganan, gratis 1 bulan </h1>
                            <h2>Bayar sekali atau berlangganan</h2>
                            <h5>Student</h5>
                            <p className="mb-0">Penawaran dari Rp 24990/bulan</p>
                            <p>1 akun</p>
                            <hr />
                            <div className="payment-user-plans-check">
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>Diskon khusus untuk pelajar di tingkat universitas yang memenuhi syarat.</span>
                                </div>
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>Dengarkan musik bebas iklan</span>
                                </div>
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>Putar di mana saja - bahkan secara offline</span>
                                </div>
                                <div>
                                    <div className="arrow-check">
                                    <FaCheck />
                                    </div>
                                    <span>Playback on-demand.</span>
                                </div>
                            </div>
                            <Button onClick={() =>{
                                    handlePayment("24990")
                                }}
                            >PAY NOW</Button>
                            <div id="syarat">
                                <span>Syarat dan ketentuan berlaku.</span>
                                <span>1 bulan gratis tidak tersedia untuk pengguna yang pernah mencoba Premium.</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <ModalTransactions 
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        transaction: state.transaction
    };
};

export default connect(mapStateToProps, { postTransaction })(TransactionUser);

