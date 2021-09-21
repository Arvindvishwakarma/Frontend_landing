
import { Row, Col, Container, Card, Image } from 'react-bootstrap'
import search from '../search.png'
import request from '../request.png'
import confirmation from '../confirmation.png'
import home from '../home.png'
export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div  className='container'>
        <div  className='col-md-10 col-md-offset-1 section-title'>
          <h2  style={{marginTop:'85px'}}>How It Works </h2>
        </div>
        <div className='row'  >
          <Container style={{ marginBottom: '40px' }}>
            <Row >
              <Col md={3} style={{marginTop:'15px'}} >
                <Card id="features_card" >
                  <Card.Body>
                  <Image src={search}  id="imgicon" />
                    <div id="ll">
                   
                     Search Rooms
                    </div>
                    <Card.Text style={{textAlign:'left',  marginLeft:'10px'}}>
                     Search Rooms at any location in your city as per your convenience
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} style={{marginTop:'15px'}} >
                <Card id="features_card" >
                <Card.Body>
                <Image src={request}  id="imgicon" />
                    <div id="ll">
                     Send Request
                    </div>
                    <Card.Text style={{textAlign:'left',  marginLeft:'10px'}}>
                    Fill the booking form and send a booking request to the landlord.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} style={{marginTop:'15px'}}>
              
                <Card id="features_card" >
                <Image src={confirmation}  id="imgicon" />
                <Card.Body>
                    <div id="ll">
                    Confirmation
                    </div>
                    <Card.Text style={{textAlign:'left',  marginLeft:'10px'}}>
                    Wait twenty four hours for conifurm your booking by landlord.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} style={{marginTop:'15px'}}>
                <Card id="features_card" >
                <Image src={home}  id="imgicon" />
                <Card.Body>
                    <div id="ll">
                    Enjoy your Stay
                    </div>
                    <Card.Text style={{textAlign:'left',  marginLeft:'10px'}}>
                    After confirmation, go to your booked room and enjoy your stay.
                     </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}
