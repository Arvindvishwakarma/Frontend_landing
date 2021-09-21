import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'


export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-0 intro-text'>
                <Card
                  style={{
                    width: '40rem', height: '35rem',
                    backgroundColor: 'white', marginTop: '-180px',
                    borderRadius: '10px', opacity: '.95'
                  }}>
                  <Card.Body>
                    <Card.Title className="kk">Upload Your Rooms And Get verified Tenants !</Card.Title>
                    <p id="jk">They can easily get the verified tenants.
                      Also Tenants can book room with verified landlord's .
                   
                    </p>
                   
                    <Form.Select style={{ width: '300px', height: '50px', borderWidth: '2px', borderColor: '#8D448B' }} >
                      
                      <option>  Select your city</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                   
                    </Form.Select>
                  </Card.Body>
                

                  <button  type="button" class="btn btn-primary" id="mk">Upload Rooms</button>
                  
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
