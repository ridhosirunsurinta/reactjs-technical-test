import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGithubRepoByUsername } from '../redux/github/github.actions';
import { Container, Form, Row, Col, Card, Button } from 'react-bootstrap';
import store from '../redux/store';

const PageHome = ({ repos }) => {
  const [ username, setUsername ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    store.dispatch(getGithubRepoByUsername(username))
  };

  return (
    <Fragment>
      <Container>
        <h1 className="my-5">Find your github repo</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label
              column
              sm={2}
            >
              Username
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                onChange={e => setUsername(e.target.value)}
              />
            </Col>
            <Col sm={2}>
              <Button
                variant="primary"
                onClick={(e) => handleSubmit(e)}
              >
                Search
              </Button>
            </Col>
          </Form.Group>
          
        </Form>

        {repos.repos ?
          repos.repos.map(repo => {
            return (
            <Card className="p-4 m-2">
              <h3>{repo.name}</h3>
            </Card> 
          )})
         : null}
      </Container>
      
    </Fragment>
  )
};

PageHome.propTypes = {
  getGithubRepoByUsername: PropTypes.func.isRequired,
  repos: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  repos: state.repos
});

export default connect(mapStateToProps, { getGithubRepoByUsername })(PageHome);