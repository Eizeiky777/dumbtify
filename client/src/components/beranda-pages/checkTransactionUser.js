import React, { Component } from 'react';
import Header from './beranda-pages-header';
import { Container,Row,Col, Dropdown } from 'react-bootstrap';
import { connect } from "react-redux";
import { checkTransaction } from "../redux/actions/listTransactions";
//import { updateTransactionUser } from "../redux/actions/updateTransaction";
import { findTransactionUser } from "../redux/actions/findTransaction";
import { getUsers } from "../redux/actions/user";

import './checkTransactionUser.css';

class FindListTransactionsUser extends Component {
    
    constructor(props){
        super(props);
        this.state = {dataUsers: []}
    }

    componentDidMount() {
        this.props.checkTransaction()
        this.props.getUsers().then(data=>{
            this.setState({dataUsers: data.value})
        })
    }

    submitCheckUserTransaction = async (ids) => {
        //const { data } = this.state;
        // console.log(event)
        // console.log(ids)
        this.props.findTransactionUser(ids);
    };
    
    // handleSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(event.target.value)
    //     //this.props.updateTransactionUser(event);
    //     // this.setState({ data: {} });
    //     // this.props.onHide()
    // };

    render(){

        const { data: findTransactions } = this.props.find;
        const { data: allUsers } = this.props.users;

        let FIND = Object.values(findTransactions);
        console.log(FIND)
        const male ="#17c5e8"
        const female ="pink"
        if(FIND.length !== 0 ){
            console.log(JSON.parse(FIND[0].snaps))
        }
        return (
            <>
            <Header />
            <div className="" style={{ background: 'black', paddingBottom: 200}}>
                <div style={{height: 20, background: "black"}}></div>
            <Container className='mt-5 text-left text-white font-weight-bold' style={{width: '100%', height: 20, marginLeft:'15%'}}>
                <Row>
                    <Col>
                        <h5>User Information</h5>
                    </Col>
                </Row>
            </Container>
            <Container className='  mt-5 bg-dark text-white' style={{width: 1200, height: '100%'}}>
                <Row style={{fontSize: 14, color: '#EE4622', backgroundColor: '#1F1F1F'}} className="py-4 text-left  border-bottom border-light">
                    <Col md={1} xs={1}>
                    No
                    </Col>
                    <Col md={2} xs={1}>
                    User
                    </Col>
                    <Col md={2} xs={1}>
                    Email
                    </Col>
                    <Col md={2} xs={1}>
                    Gender
                    </Col>
                    <Col md={2} xs={1}>
                    Phone
                    </Col>
                    <Col md={2} xs={1}>
                    Address
                    </Col>
                    <Col md={1} xs={1}>
                    Action
                    </Col>
                </Row>
                {
                Object.keys(allUsers).length !== 0 && allUsers.slice(-10).map( (customer, index) => { 
                    return <div key={index} className="text-left">
                        <Row className="my-0 list-customer">
                            <Col md={1}  xs={1} className=' border-bottom border-light py-3'>
                                {++index}
                            </Col>
                            <Col md={2} xs={1} className=' border-bottom border-light py-3'>
                                {customer.fullName}
                            </Col>
                            <Col md={2} xs={1} className=' border-bottom border-light py-3 '>
                                {customer.email}
                            </Col>
                            <Col md={2} xs={1} className=' border-bottom border-light py-3' style={{color: customer.gender === "male" ? male : female }}>
                                {customer.gender}
                            </Col>
                            <Col md={2} xs={1} className=' border-bottom border-light py-3'>
                                {customer.phone}
                            </Col>
                            <Col md={2}  xs={1} className=' border-bottom border-light py-3'>
                                {customer.address}
                            </Col>
                            <Col md={1} xs={1} className=' border-bottom border-light'>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic" className="list-customer-drop-down">
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => this.submitCheckUserTransaction(customer.id)}>history transaction</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                            </Col>
                        </Row>
                </div>
                })
            }
        </Container>
        {
            
        }
        <Container style={{paddingBottom: 10, marginTop: 30, background:"white", width: 700, height: "100%"}}>
            <Row>
                <Col>
                    <Container className="p-0 pt-3">
                        <div>
                            <h6 className="w-100 p-3 mb-2 rounded" style={{background:"#68f771"}}>history transaksi : </h6>
                            <div className="d-flex justify-content-between align-items-center px-5">
                                <h6>ID Transaction</h6>
                                <h6>Start Date</h6>
                                <h6>Due Date</h6>
                                <h6>Price</h6>
                                <h6>Status</h6>
                            </div>
                            <hr />
                            {
                                FIND.length !== 0 && 
                                    FIND.map((user, index) => {
                                        // if(user.status === "error") return <div key={index}><h6 className="text-center">User don't have any transactions </h6></div>
                                        return(
                                            <div className="d-flex align-items-center px-5 check-user" key={index}>
                                                <h6 style={{textAlign:"left"}}>{user.id}</h6>
                                                <h6 style={{paddingRight: 10}}>{user.startDate}</h6>
                                                <h6>{user.dueDate}</h6>
                                                <h6>{(parseInt(JSON.parse(user.snaps).gross_amount)).toLocaleString("id-ID", {style: "currency", currency: "IDR", minimumFractionDigits: 2})}</h6>
                                                <h6 className={user.status === "approved" ? "text-success" : user.status === "cancel" ? "text-danger" : "text-warning"} style={{width:50, marginLeft: 20}}>
                                                    {user.status}
                                                </h6> 
                                            </div>
                                        )
                                    })
                            }
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
        <div style={{height: 400}}></div>
    </div> 
    </>
        );
    }
    }

const mapStateToProps = (state) => {
    return {
        find: state.find,
        listTransaction: state.listTransaction,
        updateTransaction: state.updateTransaction,
        users: state.user
    };
};

export default connect(mapStateToProps, { checkTransaction, findTransactionUser, getUsers  })(FindListTransactionsUser);


//  { moment(customer.dueDate).diff(moment(customer.startDate), 'days', true)} days