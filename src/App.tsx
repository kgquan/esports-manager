import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Dropdown, ListGroup, Nav, Navbar, NavItem, NavLink, Row, Table } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Esports Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>Play</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>View draft lottery</Dropdown.Item>
                  <Dropdown.Item>Until draft</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col sm={12} md={2}>
            <ListGroup defaultActiveKey="#dashboard">
            <ListGroup.Item action href="#dashboard">
              Dashboard
            </ListGroup.Item>
          </ListGroup>
          </Col>
          <Col>
            <Container fluid>
              <Row>
                <h1>Dashboard</h1>
                <Col sm={12} md={6}>
                  <h2>Standings</h2>
                  <Table size="sm">
                    <thead>
                      <tr>
                        <th>Team</th>
                        <th>GB</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>QSM</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>C9</td>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col sm={12} md={6}>
                  <h2>League Headlines</h2>
                </Col>
              </Row>
              <h2>Starting Lineup</h2>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Gamertag</th>
                    <th>Role</th>
                    <th>Age</th>
                    <th>OVR</th>
                    <th>POT</th>
                    <th>Contract</th>
                    <th>K</th>
                    <th>D</th>
                    <th>A</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Player 1</td>
                    <td>DPS</td>
                    <td>21</td>
                    <td>{Math.floor(Math.random() * 60)}</td>
                    <td>{Math.ceil(Math.random() * 60)}</td>
                    <td>2022</td>
                    <td>{Math.floor(Math.random() * 4)}</td>
                    <td>{Math.floor(Math.random() * 4)}</td>
                    <td>{Math.floor(Math.random() * 10)}</td>
                  </tr>
                  <tr>
                    <td>Player 2</td>
                    <td>DPS</td>
                    <td>22</td>
                    <td>{Math.floor(Math.random() * 60)}</td>
                    <td>{Math.ceil(Math.random() * 60)}</td>
                    <td>2022</td>
                    <td>{Math.floor(Math.random() * 4)}</td>
                    <td>{Math.floor(Math.random() * 4)}</td>
                    <td>{Math.floor(Math.random() * 10)}</td>
                  </tr>
                  <tr>
                    <td>Player 3</td>
                    <td>Tank</td>
                    <td>23</td>
                    <td>{Math.floor(Math.random() * 60)}</td>
                    <td>{Math.ceil(Math.random() * 60)}</td>
                    <td>2022</td>
                    <td>{Math.floor(Math.random() * 4)}</td>
                    <td>{Math.floor(Math.random() * 4)}</td>
                    <td>{Math.floor(Math.random() * 10)}</td>
                  </tr>
                  <tr>
                    <td>Player 4</td>
                    <td>Tank</td>
                    <td>24</td>
                    <td>{Math.floor(Math.random() * 60)}</td>
                    <td>{Math.ceil(Math.random() * 60)}</td>
                    <td>2022</td>
                    <td>{Math.floor(Math.random() * 4)}</td>
                    <td>{Math.floor(Math.random() * 4)}</td>
                    <td>{Math.floor(Math.random() * 10)}</td>
                  </tr>
                  <tr>
                    <td>Player 5</td>
                    <td>Support</td>
                    <td>25</td>
                    <td>{Math.floor(Math.random() * 60)}</td>
                    <td>{Math.ceil(Math.random() * 60)}</td>
                    <td>2022</td>
                    <td>{Math.floor(Math.random() * 4)}</td>
                    <td>{Math.floor(Math.random() * 4)}</td>
                    <td>{Math.floor(Math.random() * 10)}</td>
                  </tr>
                  <tr>
                    <td>Player 6</td>
                    <td>Support</td>
                    <td>26</td>
                    <td>{Math.floor(Math.random() * 60)}</td>
                    <td>{Math.ceil(Math.random() * 60)}</td>
                    <td>2022</td>
                    <td>{Math.floor(Math.random() * 4)}</td>
                    <td>{Math.floor(Math.random() * 4)}</td>
                    <td>{Math.floor(Math.random() * 10)}</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
