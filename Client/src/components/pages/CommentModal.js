import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import BottomNav from '../BottomNav';

function CommentModal() {
  return (
   <div>
    <BottomNav/>
    <div className='custom-modal'>
    <Container className="py-4">
      <Row className="justify-content-md-center">
        <Col md={10} lg={8}>
          {/* <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
            <Row className="d-flex align-items-center">
              <Col md={2} xs={3}>
                <Image
                  className="rounded-circle"
                  style={{ width: '3rem', height: '3rem' }}
                  src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S"
                  alt="User"
                />
              </Col>
              <Col md={10} xs={9}>
                <div className="hstack gap-2 mb-1">
                  <a href="#" className="fw-bold link-dark">
                    Studio KonKon
                  </a>
                </div>
                <Form>
                  <Form.Group className="mb-3" controlId="my-comment">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '7rem' }}
                    />
                  </Form.Group>
                  <div className="hstack justify-content-end gap-2">
                    <Button variant="link" className="btn-sm link-secondary text-uppercase">
                      Cancel
                    </Button>
                    <Button variant="primary" className="btn-sm text-uppercase">
                      Comment
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div> */}
          <div className="bg-white rounded-3 shadow-sm p-4">
            <h4 className="mb-4">7 Comments</h4>

            {/* Comment 1 */}
            <div className="py-3">
              <Row className="d-flex comment">
                <Col md={2} xs={3}>
                  <Image
                    className="rounded-circle comment-img"
                    src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S"
                    alt="User"
                  />
                </Col>
                <Col md={10} xs={9}>
                  <div className="mb-1">
                    <a href="#" className="fw-bold link-dark me-1">
                      Studio KonKon
                    </a>
                    <span className="text-muted text-nowrap">2 days ago</span>
                  </div>
                  <div className="mb-2">
                    Lorem ipsum dolor sit amet, ut qui commodo sensibus, id utinam inermis
                    constituto vim. In nam dolorum interesset, per fierent ponderum ea. Eos
                    aperiri feugiat democritum ne.
                  </div>
                  <div className="hstack align-items-center mb-2">
                    <a className="link-primary me-2" href="#">
                      <i className="zmdi zmdi-thumb-up"></i>
                    </a>
                    <span className="me-3 small">55</span>
                    <a className="link-secondary me-4" href="#">
                      <i className="zmdi zmdi-thumb-down"></i>
                    </a>
                    <a className="link-secondary small" href="#">
                      REPLY
                    </a>
                    <a className="link-danger small ms-3" href="#">
                      DELETE
                    </a>
                  </div>
                  <a className="fw-bold d-flex align-items-center" href="#">
                    <i className="zmdi zmdi-chevron-down fs-4 me-3"></i>
                    <span>Hide Replies</span>
                  </a>
                </Col>
              </Row>
              {/* Comment 1 Replies */}
              <div className="comment-replies mt-4 bg-dark p-3 rounded" style={{ '--bs-bg-opacity': '.025' }}>
                {/* Reply 1 */}
                <Row className="d-flex py-2">
                  <Col md={2} xs={3}>
                    <Image
                      className="rounded-circle comment-img"
                      src="https://via.placeholder.com/128/cc99ff/7f00ff.png?text=S"
                      alt="User"
                    />
                  </Col>
                  <Col md={10} xs={9}>
                    <div className="mb-1">
                      <a href="#" className="fw-bold link-dark pe-1">
                        Shinobu KonKon
                      </a>
                      <span className="text-muted text-nowrap">1 day ago</span>
                    </div>
                    <div className="mb-2">
                      Disputando voluptatibus ei sit. Et veri deserunt theophrastus pri, at mutat
                      choro eum.
                    </div>
                    <div className="hstack align-items-center">
                      <a className="link-secondary me-2" href="#">
                        <i className="zmdi zmdi-thumb-up"></i>
                      </a>
                      <span className="me-3 small">1</span>
                      <a className="link-secondary me-4" href="#">
                        <i className="zmdi zmdi-thumb-down"></i>
                      </a>
                      <a className="link-secondary small" href="#">
                        REPLY
                      </a>
                    </div>
                  </Col>
                </Row>
                {/* Reply 2 */}
                <Row className="d-flex py-2">
                  <Col md={2} xs={3}>
                    <Image
                      className="rounded-circle comment-img"
                      src="https://via.placeholder.com/128/ffcc99/ff8000.png?text=O"
                      alt="User"
                    />
                  </Col>
                  <Col md={10} xs={9}>
                    <div className="mb-1">
                      <a href="#" className="fw-bold link-dark pe-1">
                        Oomiya Yuki
                      </a>
                      <span className="text-muted text-nowrap">1 minute ago</span>
                    </div>
                    <div className="mb-2">
                      Munere consetetur an usu, vis quot maiestatis concludaturque at. Ne etiam
                      indoctum referrentur eum, vix legimus nominati eu. Epicurei quaestio sea ut,
                      munere deserunt adipiscing qui te.
                    </div>
                    <div className="hstack align-items-center">
                      <a className="link-secondary me-2" href="#">
                        <i className="zmdi zmdi-thumb-up"></i>
                      </a>
                      <span className="me-3 small"></span>
                      <a className="link-primary me-4" href="#">
                        <i className="zmdi zmdi-thumb-down"></i>
                      </a>
                      <a className="link-secondary small" href="#">
                        REPLY
                      </a>
                    </div>
                  </Col>
                </Row>
                {/* Reply 3 */}
                <Row className="d-flex py-2">
                  <Col md={2} xs={3}>
                    <Image
                      className="rounded-circle comment-img"
                      src="https://via.placeholder.com/128/ff99cc/fe669e.png?text=K"
                      alt="User"
                    />
                  </Col>
                  <Col md={10} xs={9}>
                    <div className="mb-1">
                      <a href="#" className="fw-bold link-light bg-primary py-1 px-2 rounded-pill me-1">
                        Kamisato Mugi
                      </a>
                      <span className="text-muted text-nowrap">just now</span>
                    </div>
                    <div className="mb-2">
                      <a href="#">@Shinobu_KonKon</a> Vivamus ac varius augue. Curabitur luctus
                      convallis lorem, vitae convallis dui volutpat nec.
                    </div>
                    <div className="hstack align-items-center">
                      <a className="link-secondary me-2" href="#">
                        <i className="zmdi zmdi-thumb-up"></i>
                      </a>
                      <span className="me-3 small">2</span>
                      <a className="link-secondary me-4" href="#">
                        <i className="zmdi zmdi-thumb-down"></i>
                      </a>
                      <a className="link-secondary small" href="#">
                        REPLY
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="py-3">
              <Row className="d-flex comment">
                <Col md={2} xs={3}>
                  <Image
                    className="rounded-circle comment-img"
                    src="https://via.placeholder.com/128/99ccff/0073e6.png?text=A"
                    alt="User"
                  />
                </Col>
                <Col md={10} xs={9}>
                  <div className="mb-1">
                    <a href="#" className="fw-bold link-dark pe-1">
                      Asai Kazuma
                    </a>
                    <span className="text-muted text-nowrap">8 hours ago</span>
                  </div>
                  <div className="mb-2">
                    Ei saepe abhorreant temporibus cum, hinc praesent voluptatum ea has.
                    <br />
                    <br />
                    Vis nihil tacimates senserit ut, quo posse labores honestatis te. Ex duo nullam
                    posidonium deterruisset, altera aeterno duo.
                  </div>
                  <div className="hstack align-items-center">
                    <a className="link-secondary me-2" href="#">
                      <i className="zmdi zmdi-thumb-up"></i>
                    </a>
                    <span className="me-3 small">26</span>
                    <a className="link-secondary me-4" href="#">
                      <i className="zmdi zmdi-thumb-down"></i>
                    </a>
                    <a className="link-secondary small" href="#">
                      REPLY
                    </a>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Comment 3 */}
            <div className="py-3">
              <Row className="d-flex comment">
                <Col md={2} xs={3}>
                  <Image
                    className="rounded-circle comment-img"
                    src="https://via.placeholder.com/128/ff99cc/fe669e.png?text=K"
                    alt="User"
                  />
                </Col>
                <Col md={10} xs={9}>
                  <div className="mb-1">
                    <a href="#" className="fw-bold link-light bg-primary py-1 px-2 rounded-pill me-1">
                      Kamisato Mugi
                    </a>
                    <span className="text-muted text-nowrap">10 hours ago</span>
                  </div>
                  <div className="mb-2">
                    Aenean non tellus sed erat ultrices rutrum. Sed ac dolor tempus, efficitur diam
                    vitae, sagittis nisi. Morbi bibendum congue nisl eu congue. Mauris eu eros
                    bibendum, pretium ex ac, aliquam lorem.
                  </div>
                  <div className="hstack align-items-center mb-2">
                    <a className="link-primary me-2" href="#">
                      <i className="zmdi zmdi-thumb-up"></i>
                    </a>
                    <span className="me-3 small">8</span>
                    <a className="link-secondary me-4" href="#">
                      <i className="zmdi zmdi-thumb-down"></i>
                    </a>
                    <a className="link-secondary small" href="#">
                      REPLY
                    </a>
                  </div>
                  <a className="fw-bold d-flex align-items-center" href="#">
                    <i className="zmdi zmdi-chevron-down fs-4 me-3"></i>
                    <span>Hide Replies</span>
                  </a>
                </Col>
              </Row>
              {/* Comment 3 Replies */}
              <div className="comment-replies mt-4 bg-dark p-3 rounded" style={{ '--bs-bg-opacity': '.025' }}>
                {/* Reply 1 */}
                <Row className="d-flex py-2">
                  <Col md={2} xs={3}>
                    <Image
                      className="rounded-circle comment-img"
                      src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S"
                      alt="User"
                    />
                  </Col>
                  <Col md={10} xs={9}>
                    <div className="mb-1">
                      <div>
                        <a href="#" className="fw-bold link-dark">
                          Studio KonKon
                        </a>
                      </div>
                      <div className="text-muted small">Replying to @Kamisato_Mugi</div>
                    </div>
                    <Form>
                      <Form.Group className="mb-2" controlId="my-comment-reply">
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: '7rem' }}
                        />
                      </Form.Group>
                      <div className="hstack justify-content-end gap-2">
                        <Button variant="link" className="btn-sm link-secondary text-uppercase">
                          Cancel
                        </Button>
                        <Button variant="primary" className="btn-sm text-uppercase">
                          Comment
                        </Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
                {/* Reply 2 */}
                <Row className="d-flex py-2">
                  <Col md={2} xs={3}>
                    <Image
                      className="rounded-circle comment-img"
                      src="https://via.placeholder.com/128/ffcc99/ff8000.png?text=O"
                      alt="User"
                    />
                  </Col>
                  <Col md={10} xs={9}>
                    <div className="mb-1">
                      <a href="#" className="fw-bold link-dark pe-1">
                        Oomiya Yuki
                      </a>
                      <span className="text-muted text-nowrap">5 minutes ago</span>
                    </div>
                    <div className="mb-2">
                      Integer et lorem lacus. Aenean bibendum ex sem, at pretium metus mollis sit
                      amet. Morbi quis egestas ante. Praesent diam odio, fermentum non sapien vitae,
                      fringilla placerat diam.
                    </div>
                    <div className="hstack align-items-center">
                      <a className="link-secondary me-2" href="#">
                        <i className="zmdi zmdi-thumb-up"></i>
                      </a>
                      <span className="me-3 small"></span>
                      <a className="link-secondary me-4" href="#">
                        <i className="zmdi zmdi-thumb-down"></i>
                      </a>
                      <a className="link-secondary small" href="#">
                        REPLY
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="bg-white rounded-3 shadow-sm p-4 mb-4 mt-3">
            <Row className="d-flex align-items-center">
              <Col md={2} xs={3}>
                <Image
                  className="rounded-circle"
                  style={{ width: '3rem', height: '3rem' }}
                  src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S"
                  alt="User"
                />
              </Col>
              <Col md={10} xs={9}>
                <div className="hstack gap-2 mb-1">
                  <a href="#" className="fw-bold link-dark">
                    Studio KonKon
                  </a>
                </div>
                <Form>
                  <Form.Group className="mb-3" controlId="my-comment">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '7rem' }}
                    />
                  </Form.Group>
                  <div className="hstack justify-content-end gap-2">
                    <Button variant="link" className="btn-sm link-secondary text-uppercase">
                      Cancel
                    </Button>
                    <Button variant="primary" className="btn-sm text-uppercase">
                      Comment
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
    </Container>
    </div>
   </div>
  );
}

export default CommentModal;


