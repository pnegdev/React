import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Gmc() {
    return (
        <div className="App">

            {/* Navigation */}
            <Navbar className="sticky-top" bg="danger" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className='lugrasimo' href="#">Ciao !</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#">Accueil</Nav.Link>
                        <Nav.Link href="#">Vols</Nav.Link>
                        <Nav.Link className='text-white' href="#">Destinations</Nav.Link>
                        <Nav.Link href="#">Bons plans</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* Cards */}
            <Container>
                <h1 className='m-5'>Nos destinations</h1>
                <div className='d-flex flex-wrap justify-content-around'>
                    <Card className='mt-3' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src='https://media.istockphoto.com/id/148543868/photo/park-guell-in-barcelona-spain.jpg?s=612x612&w=0&k=20&c=IYdRNJtNOxNaySqP7oKe37TR7XBQncj623Ye13qCxBs=' />
                            <Card.Body>
                                <Card.Title>Barcelone</Card.Title>
                                <Card.Text>
                                Barcelone est l'une des villes les plus attractives et culturelles d'Europe, elle attire un nombre important de voyageurs chaque année par sa localisation, ses températures clémentes.
                                </Card.Text>
                                <Button variant="primary">A partir de 475 000 Fcfa</Button>
                            </Card.Body>
                    </Card>
                    <Card className='mt-3' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src='https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=' />
                            <Card.Body>
                                <Card.Title>Rome</Card.Title>
                                <Card.Text>
                                Rome est aussi célèbre pour ses fontaines, sa gastronomie, ses glaciers, ou encore sa vie étudiante et nocturne. En somme, Rome dispose de tous les atouts pour séduire et captiver ses visiteurs.
                                </Card.Text>
                                <Button variant="primary">A partir de 325 000 Fcfa</Button>
                            </Card.Body>
                    </Card>
                    <Card className='justify-content-center mt-3' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src='https://media.istockphoto.com/id/672664688/photo/a-view-of-mykonos-port-and-town-island-of-mykonos-cyclades-greece.jpg?s=612x612&w=0&k=20&c=0iPgibR2mUVIjClYut7quhkEMA5zZOEjiquk-NPOBPo=' />
                            <Card.Body>
                                <Card.Title>Mykonos</Card.Title>
                                <Card.Text>
                                Mykonos est réputé pour ses magnifiques paysages, ses brises rafraîchissantes, ses plages de sable fin, ses croisières, ses safaris mais aussi sa folle vie de nuit et sa foule cosmopolite.
                                </Card.Text>
                                <Button variant="primary">A partir de 380 000 Fcfa</Button>
                            </Card.Body>
                    </Card>
                    <Card className='justify-content-center mt-3' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src='https://media.istockphoto.com/id/1345873706/photo/mahe-island-seychelles-holiday-vocation-on-the-beautiful-exotic-anse-intendance-tropical.jpg?s=612x612&w=0&k=20&c=7KYsRK0wwN2QdwRpl1jmaYiRjsasycp-ecbU40I35qU='/>
                            <Card.Body>
                                <Card.Title>Seychelles</Card.Title>
                                <Card.Text>
                                Avec 7 heures de soleil par jour et des températures moyennes de 28 degrés, les îles des Seychelles attirent des touristes toute l'année, venus profiter de ce climat équatorial doux et agréable.
                                </Card.Text>
                                <Button variant="primary">A partir de 415 000 Fcfa</Button>
                            </Card.Body>
                    </Card>        
                </div>
            </Container>
        </div>
    )
}
export default Gmc;