import React from "react";
import { Accordion } from "react-bootstrap";
import "./Faq.css";

function Faq() {
  return (
    <div className="Faq_main" id="FAQ">
      <div className="header-sections py-5">
        <h2>FAQ</h2>
      </div>
      <div className="Faq_accor_main">
        <div className="container Faq_accor">
          <div className="row">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is $MeGods Token?</Accordion.Header>
                <Accordion.Body className="accor_heading">TBD</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="mt-4" eventKey="1">
                <Accordion.Header>What does $MeGods Charge?</Accordion.Header>
                <Accordion.Body className="accor_heading">TBD</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className="mt-4" eventKey="2">
                <Accordion.Header>What are the HOLDR Rewards?</Accordion.Header>
                <Accordion.Body className="accor_heading">
                  HOLDR rewards are coming, stay tuned!
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className="mt-4" eventKey="3">
                <Accordion.Header>What is the Marketing fee?</Accordion.Header>
                <Accordion.Body className="accor_heading">
                  Marketing is included within the token supply to the team.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className="mt-4" eventKey="4">
                <Accordion.Header>
                  What are the buy transaction limits?
                </Accordion.Header>
                <Accordion.Body className="accor_heading">
                  There is currently a minimum buy of 0.01 ETH with a maximum
                  buy at 5 ETH.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className="mt-4" eventKey="5">
                <Accordion.Header>
                  How many tokens does the Memegods team get?
                </Accordion.Header>
                <Accordion.Body className="accor_heading">
                  The team has set 50 Billion tokens aside for the team for the
                  purposes for marketing, future development and running costs.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
