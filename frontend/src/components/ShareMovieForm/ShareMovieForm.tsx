import { Button, Col, Form, Row } from "react-bootstrap";
import "./ShareMovieForm.css";

function ShareMovieForm() {
  return (
    <Form>
      <Row className="justify-content-center pt-5 mt-5">
        <Col md={6} className="border p-5">
          <h3 className="text-center mb-5">Share a Youtube movie</h3>
          <Form.Group controlId="formBasicUrl">
            <Row>
              <Form.Label className="col-3">Youtube URL:</Form.Label>
              <div className="col-9">
                <Form.Control type="url" />
                <Button variant="outline-dark" type="submit" className="mt-4 w-100">
                  Share
                </Button>
              </div>
            </Row>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default ShareMovieForm;
