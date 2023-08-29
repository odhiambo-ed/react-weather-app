import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    const [cityName, setCityName] = useState("");

    useEffect((cityName) => {
        fetchWeatherData(cityName)
    }, [cityName])

    const fetchWeatherData = async (cityName) => {
        const url = 'https://open-weather13.p.rapidapi.com/city/landon';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '716f238d96msha65ec4c38fa151ap191c77jsn318966762a7e',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setWeatherData(result);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = () => {}

    return (
        <>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="cityName">
                            <Form.Label>Enter City Name</Form.Label>
                            <Form.Control type="text" placeholder='Enter city' />
                        </Form.Group>
                        <Button variant='primary' type='submit' >Get Weather</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                {weatherData && (
                    <div>
                        <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2> 
                    </div>
                )}
            </Row>
        </>
    )
}

export default Weather