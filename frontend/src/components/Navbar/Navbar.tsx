import { useCallback, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Account } from "../../types/Account";
import LoginForm from "../LoginForm/LoginForm";
import "./Navbar.css";

function Navbar() {
  const [account, setAccount] = useState<Account | null>(null);

  const updateAccount = useCallback(
    (account: Account) => {
      setAccount(account);
    },
    [setAccount]
  );

  return (
    <Row>
      <Col md={5}>
        <span className="display-6">
          <a href="/" className="text-decoration-none text-black">
            <FaHome className="me-1" />
            Funny Movies
          </a>
        </span>
      </Col>
      <Col md={7}>
        {account ? (
          <div className="text-end">
            <span className="me-3">Welcome {account.email}</span>
            <a href="/share" className="btn btn-dark me-3">
              Share a movie
            </a>
            <Button variant="outline-dark">Logout</Button>
          </div>
        ) : (
          <LoginForm updateAccount={updateAccount} />
        )}
      </Col>
      <hr className="mt-2 border-3" />
    </Row>
  );
}

export default Navbar;
