import React, { Component } from 'react';
import Header from './beranda-pages-header';
//import { useHistory } from "react-router-dom";
import { Container,Row,Col, Dropdown } from 'react-bootstrap';
import { connect } from "react-redux";
import { checkTransaction } from "../redux/actions/listTransactions";
import { updateTransactionUser } from "../redux/actions/updateTransaction";
import moment from 'moment';

class ListTransactions extends Component {
    

    componentDidMount() {
        this.props.checkTransaction()
    }

    componentWillUnmount(){
        console.log('test');
    }

    handleChange = async (status, ids) => {
        this.props.updateTransactionUser(status, ids);
    };

    render(){

        const { data: listTransactions } = this.props.listTransaction;
        const { data: updateTransactions } = this.props.updateTransaction;

        let LIST = Object.values(listTransactions);
        let UPDATED = Object.values(updateTransactions);
        if ( UPDATED.length !== 0 ) LIST = UPDATED;

        let color_second = '#2B2B2B';
        let color_third = '#1F1F1F';
        let x = '';
        let num = 0;
        console.log(LIST)
        return (
            <>
            <Header />
            <div>
            </div>
            <div className="" style={{ background: 'black', paddingBottom: 200}}>
                <div style={{height: 1}} className="bg-dark"></div>
            <Container className='mt-5 text-left text-white font-weight-bold' style={{width: '100%', height: 20, marginLeft:'15%'}}>
                <Row>
                    <Col>
                        <h5>Incoming Transaction</h5>
                    </Col>
                </Row>
            </Container>
            <Container className='  mt-5 bg-dark text-white' style={{width: 900, height: '100%'}}>
                <Row style={{fontSize: 14, color: '#EE4622', backgroundColor: '#1F1F1F'}} className="py-3 text-left  border-bottom border-light">
                    <Col md={1} xs={1}>
                    No
                    </Col>
                    <Col md={2} xs={1}>
                    Users
                    </Col>
                    <Col md={2} xs={1}>
                    Transaction id
                    </Col>
                    <Col md={2} xs={1}>
                    Remaining Active
                    </Col>
                    <Col md={2} xs={1}>
                    Status User
                    </Col>
                    <Col md={2} xs={1}>
                    Status payment
                    </Col>
                    <Col md={1} xs={1}>
                    Action
                    </Col>
                </Row>
                {
                LIST.map( customer => { 
                    let color = '#FF0742'; // red
                    let colorPay = '';
                    let colorAct = '#1C9CD2';

                    let statusPayment = 'Pending';
                    let stat = 'Not Active';

                    if ( customer.User.subscribe === true ){
                        statusPayment = 'Approved';
                        stat = 'Active'
                        color = '#0ACF83';
                    }

                    x = customer.id % 2 === 1 ? (x = color_second) : (x = color_third);
                    
                    return <div key={customer.id} className="text-left">
                        <Row style={{fontSize: 14, background: x }} className="my-0 dropdrop2    ">

                            <Col md={1}  xs={1} className=' border-bottom border-light py-3'>
                                {++num}
                            </Col>
                            <Col md={2} xs={1} className=' border-bottom border-light py-3'>
                                {customer.User.fullName}
                            </Col>
                            <Col md={2} xs={1} className=' border-bottom border-light py-3'>
                                {JSON.parse(customer.snaps).transaction_id.substr(-9)}
                            </Col>
                            <Col md={2} xs={1} className=' border-bottom border-light py-3'>
                                { moment(customer.dueDate).diff(moment(customer.startDate), 'days', true)} days
                            </Col>
                            <Col md={2} style={{color: `${color}`, fontWeight: 'bold'}} xs={1} className=' border-bottom border-light py-3'>
                                {stat}
                            </Col>
                            <Col md={2} style={{color: `${colorPay}`, fontWeight: 'bold'}} xs={1} className=' border-bottom border-light py-3'>
                                <span style={{color: `${colorPay}`}}> {statusPayment} </span>
                            </Col>
                            <Col md={1} xs={1} className=' border-bottom border-light'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className="caret dropdrop" style={{color: `${colorAct}`}}>
                            
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu 
                                        className="dropdown-menu-list-js"
                                    >
                                        <Dropdown.Item className="text-success" onClick={() => this.handleChange('Approved', customer.id)}>
                                                Approved
                                        </Dropdown.Item>
                                        <Dropdown.Item className="text-danger"  onClick={() => this.handleChange('Cancel', customer.id)}>
                                                Cancel
                                        </Dropdown.Item>
                                        <Dropdown.Item className="text-warning" onClick={() => this.handleChange('Pending', customer.id)} >
                                                Pending
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                </div>
                })
            }
        </Container>
        <div style={{height: 400}}></div>
    </div> 
    </>
        );
    }
    }

const mapStateToProps = (state) => {
    return {
        listTransaction: state.listTransaction,
        updateTransaction: state.updateTransaction
    };
};

export default connect(mapStateToProps, { checkTransaction, updateTransactionUser })(ListTransactions);


