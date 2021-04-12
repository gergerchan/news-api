import React, {useState} from 'react'
import {Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
  } from 'reactstrap';
import {NavLink, Route, Switch} from 'react-router-dom'
import Tempo from './Tempo'
import Okezone from './Okezone'
import Bbc from './Bbc'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <>
           <Container>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Berita</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="mr-2">
                            <NavLink to="/tempo">Tempo</NavLink>
                        </NavItem>
                        <NavItem className="mr-2">
                            <NavLink to="/okezone">Okezone</NavLink>
                        </NavItem>
                        <NavItem className="mr-2">
                            <NavLink to="/bbc">BBC</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Gerry</NavbarText>
                    </Collapse>
                </Navbar>

               <Switch>
                   <Route path="/tempo">
                        <Tempo />
                   </Route>
                   <Route path="/okezone">
                        <Okezone/>
                   </Route>
                   <Route path="/bbc">
                        <Bbc />
                   </Route>
                   <Route path="/">
                        <h1>Silahkan pilih berita diatas</h1>
                   </Route>
               </Switch>
           </Container>
        </>
    )
}

export default Home
