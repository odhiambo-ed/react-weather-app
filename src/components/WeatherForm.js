import React from 'react'
import { Row, Col, Form, Button} from 'react-bootstrap'

const WeatherForm = () => {
  return (
      <Row>
          <Col>
              <Form>
                  <Form.Group controlId="cityName">
                      <Form.Label>Enter City Name</Form.Label>
                      <Form.Control type="text" placeholder='Enter city' />
                  </Form.Group>
                  <Button variant='primary' type='submit' >Get Weather</Button>
              </Form>
          </Col>
    </Row>
  )
}

export default WeatherForm