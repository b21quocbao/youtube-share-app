import { Button, Form, Row } from "react-bootstrap";
import "./LoginForm.css";
import { useCallback, useState } from "react";
import { Account, Auth } from "../../types/Account";

function LoginForm({
  updateAccount,
}: {
  updateAccount: (data: { user: Account, auth: Auth }) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const register = useCallback(async (email: string, password: string) => {
    const urlencoded = new URLSearchParams();
    urlencoded.append("[name]", "");
    urlencoded.append("[email]", email);
    urlencoded.append("[password]", password);
    urlencoded.append("[password_confirmation]", password);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/auth`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlencoded,
      }
    );
    const result = await response.json();
    return result;
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const urlencoded = new URLSearchParams();
    urlencoded.append("[email]", email);
    urlencoded.append("[password]", password);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/auth/sign_in`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlencoded,
      }
    );
    const result = await response.json();
    return { result, headers: response.headers };
  }, []);

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const registerResult = await register(email, password);
        if (
          registerResult.errors &&
          registerResult.errors.full_messages[0] !=
            "Email has already been taken"
        ) {
          setError(registerResult.errors.full_messages[0]);
          return;
        }
        const { result, headers } = await login(email, password);
        if (result.errors) {
          setError(result.errors[0]);
        }
        if (result.data) {
          updateAccount({
            user: result.data,
            auth: {
              uid: headers.get("uid") || "",
              client: headers.get("client") || "",
              accessToken: headers.get("access-token") || "",
            },
          });
        } else {
          setError("Internal server error");
        }
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
      <p className="text-danger mb-0">{error}</p>
    </Form>
  );
}

export default LoginForm;
