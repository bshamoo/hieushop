import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Meta from '../components/Meta';
import dice from './dice.gif'

const BookScreen = () => {

    return (
        <>
            <Meta title='hieu | Welcome' />
            <Row className="align-items-center justify-content-center">
                <Col className="text-center">
                    <h3 className="collection-name font-weight-bold">collection 001 <span className="collection-date"> spring 2021</span></h3>
                    <h3 className="font-weight-bold">coming soon</h3>
                </Col>
            </Row>
            <div className="align-items-center justify-content-center mt-4">
                <img className='dice' src={dice} alt="loading..." />
            </div>
        </>
    )
}

export default BookScreen

/*
<Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/datafiles/IvYwQZ0wlB1eYm8/data.json"
                style={{ height: '300px', width: '300px' }}
                >
                </Player>
*/