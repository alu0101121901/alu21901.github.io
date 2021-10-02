import '../styles/hero.css'

import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from '../images/perfilcc.png'

/**
 * Component that displays the Portfolio Presentation
 */
const Hero = () => {

  const [menuOptions, setMenuOptions] = useState(
    [
      {
        name:   "ABOUT ME",
        id: 1,
        isActive: true,
      },
      {
        name:   "SKILLS",
        id: 2,
        isActive: false,
      },
      {
        name:   "MY PROJECTS",
        id: 3,
        isActive: false,
      },
/*       {
        name:   "SOME ACADEMIC PROJECTS",
        id: 4,
        isActive: false,
      }, */
      {
        name:   "CONTACT ME",
        id: 5,
        isActive: false,
      },
    ]
  );

  const handleClick = (indexToCheck) => {
    let newMenu = [...menuOptions];
    newMenu.map((opt) => {
      if (opt.isActive) opt.isActive = false;
      if (indexToCheck === opt.id) {
        opt.isActive = true;
      }
    });
    setMenuOptions(newMenu);
  }

  // Ocultar foto de perfil en resolución de móvil!!
  return (
    <Container fluid className="header">
      <Row style={{justifyContent: "space-between"}}>
        <Col xs={12} md={8}>
          <h1 className="presentation"> Hi, <br />I'm <span className="animated">Rafael Cala</span>,<br />a front-end<br />developer.</h1>
          <img src={logo} style={{height: "55vh", marginBottom: 0}} alt="Logo" />
        </Col>
        <Col xs={12} md={4} className="portf-menu">
          {/* <p style={{fontSize: 12}}>Scroll down or select what you want to see...</p> */}
          {menuOptions.map((row) => {
            if (!row.isActive){
              return (
                <a href="#" className="menu-opt" onClick={() => handleClick(row.id)}>{row.name}</a>
              )
            }
            else {
              return (
                <a href="#" onClick={() => {handleClick(row.id)}} className="menu-opt selected">{row.name}</a>
              )
            }
          }) }
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;