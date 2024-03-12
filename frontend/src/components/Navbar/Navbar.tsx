import { useCallback, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Account, Auth } from "../../types/Account";
import LoginForm from "../LoginForm/LoginForm";
import "./Navbar.css";
import Cookies from "js-cookie";
import { useAppProvider } from "../../provider/AppProvider";

function Navbar() {
  const { setAccount, setAuth, account } = useAppProvider();

  const getCookies = useCallback(() => {
    const accessToken = Cookies.get("_access_token");
    const client = Cookies.get("_client");
    const uid = Cookies.get("_uid");
    const user = JSON.parse(localStorage.getItem("USER") as string);
    if (accessToken && client && uid && user) {
      setAccount(user);
      setAuth({
        accessToken,
        client,
        uid,
      });
    }
  }, []);

  useEffect(() => {
    getCookies();
  }, [getCookies]);

  const updateAccount = useCallback(
    ({ user, auth }: { user: Account; auth: Auth }) => {
      Cookies.set("_access_token", auth.accessToken);
      Cookies.set("_client", auth.client);
      Cookies.set("_uid", auth.uid);
      localStorage.setItem("USER", JSON.stringify(user));
      getCookies();
    },
    [getCookies]
  );

  useEffect(() => {

  })

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
