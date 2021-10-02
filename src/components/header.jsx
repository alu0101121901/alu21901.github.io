import Button from 'react-bootstrap/Button'

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6}>
        <h1 className="presentation"> Hi, <br />I'm <span className="animated">Rafael Cala</span>,<br />
         a young<br /> front-end developer.</h1>
         <p className="presentation-desc">COMPUTER ENGINEER | FRONTEND DEVELOPER</p>
        </Col>
        <Col xs={12} md={6}>
          ABOUT ME<br />
          SKILLS<br />
        </Col>
      </Row>
    </Container>
  )
}

export default Header;

