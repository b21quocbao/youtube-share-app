import { Button, Form, Row } from "react-bootstrap";
import "./LoginForm.css";
import { useState } from "react";
import { Account } from "../../types/Account";

function LoginForm({
  updateAccount,
}: {
  updateAccount: (account: Account) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      onSubmit={() => {
        updateAccount({ email });
      }}
    >
      <Row>
        <Form.Group className="col-4" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="col-4" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </Form.Group>

        <Button className="col-4" variant="outline-dark" type="submit">
          Login / Register
        </Button>
      </Row>
    </Form>
  );
}

export default LoginForm;
