import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useAppProvider } from "../../provider/AppProvider";
import "./ShareMovieForm.css";

function ShareMovieForm() {
  const [link, setLink] = useState("");
  const { auth } = useAppProvider();

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!auth) return;
        await fetch(
          `${process.env.REACT_APP_API_URL}/api/v1/movies`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              client: auth.client,
              uid: auth.uid,
              "access-token": auth.accessToken,
            },
            body: JSON.stringify({
              link,
            }),
          }
        );
      }}
    >
      <Row className="justify-content-center pt-5 mt-5">
        <Col md={6} className="border p-5">
          <h3 className="text-center mb-5">Share a Youtube movie</h3>
          <Form.Group controlId="formBasicUrl">
            <Row>
              <Form.Label className="col-3">Youtube URL:</Form.Label>
              <div className="col-9">
                <Form.Control
                  type="url"
                  value={link}
                  onChange={(e) => setLink(e.currentTarget.value)}
                />
                <Button
                  variant="outline-dark"
                  type="submit"
                  className="mt-4 w-100"
                >
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
