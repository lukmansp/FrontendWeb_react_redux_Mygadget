import React, { Component } from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions/user';
import UserAdd from './UserAdd';
import UserDelete from './UserDelete';
import Navbar from '../layout/Navbar'


class Book extends Component {
  state = {
    show: false,
    showEdit: false,
    showDelete: false,
    selectBook: null,
    selectUserDelete: null,
  }
  componentDidMount() {
    this.getAllUser();
  }

  getAllUser = async () => {
    await this.props.dispatch(getUser());
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }
  handleShowDelete = () => {
    this.setState({
      showDelete: true
    })
  }

  handleCloseDelete = () => {
    this.setState({
      showDelete: false
    })
  }
  onSelectUserDelete = (user) => {
    this.setState({
      selectUserDelete: user,
      showDelete: true
    })
  }
  onLogout() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('token');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('otoritas_id');
    this.props.history.push('/login');
  }
  render() {
    const { user } = this.props;
    const itemUser = user.user.map((user, index) => <UserItem user={user} key={index} onSelectItemUserEdit={this.onSelectItemUserEdit} onSelectUserDelete={this.onSelectUserDelete} />);

    return (
      <React.Fragment>
        <Navbar onClick={this.onLogout.bind(this)} />
        <Container style={{ marginTop: "20px" }}>
          <Row style={{ marginBottom: "20px" }}>
            <Col sm={10}>
              <h5>Manage users</h5>
            </Col>
            <Col sm={2}>
              <Button variant="primary" size="sm" onClick={this.handleShow} >Add User</Button>
            </Col>
          </Row>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role Id</th>
                <th scope="col">Created_at</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {itemUser}
            </tbody>
          </Table>
          <UserAdd show={this.state.show} onHide={this.handleClose} />
          <UserDelete show={this.state.showDelete} onHide={this.handleCloseDelete} user={this.state.selectUserDelete} />
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Book);