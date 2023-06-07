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
              <Accordion.Header >What is zkPiggy Token?</Accordion.Header>
              <Accordion.Body className="accor_heading">
                Living on the Binance Smart Chain, zkPiggy is custom-tuned for
                your gains. The features include HOLDR Rewards, burning to
                facilitate deflation, a Marketing Wallet to promote the project
                for growth, and contract renouncement so the community can run
                the project collectively.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="mt-4" eventKey="1">
              <Accordion.Header>
                What Fees Does zkPiggy Charge?
              </Accordion.Header>
              <Accordion.Body className="accor_heading">
                zkPiggy only charges fees to those selling their tokens to leave
                the community. For such transactions, the fee charged is 10%.
                Within the 10%, half goes back to HOLDRs as rewards, and the
                other half goes to fund marketing efforts.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mt-4" eventKey="2">
              <Accordion.Header>What are HOLDR Rewards?</Accordion.Header>
              <Accordion.Body className="accor_heading">
                HOLDR rewards are the zkPiggy community's gift to you. The more
                zkPiggy tokens you have, the larger the reward you get. Rewards
                accumulate from half of the 10% sell-off transaction fee. You
                can watch your balance grow autonomously due to HOLDR rewards.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mt-4" eventKey="3">
              <Accordion.Header>What is the Marketing fee?</Accordion.Header>
              <Accordion.Body className="accor_heading">
                zkPiggy takes half of the 10% sell-off transaction fee for
                marketing purposes. The marketing fee helps promote the project
                to help strengthen the community and grow its size. A strong
                community brings more gains for you.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mt-4" eventKey="4">
              <Accordion.Header>
                What is the Max Sell Transaction Limit?
              </Accordion.Header>
              <Accordion.Body className="accor_heading">
                Many tokens have a max sell-off transaction limit. Such a
                transaction limit makes it cumbersome to sell your balance once
                you make your gains. For this reason, there is no transaction
                limit on sell-off orders. With zkPiggy, you can cash out anytime
                with ease.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="mt-4" eventKey="5">
              <Accordion.Header>
                How Many Tokens Does The zkPiggy Team Get?
              </Accordion.Header>
              <Accordion.Body className="accor_heading">
                Zero. The zkPiggy team will not be making profits on the tokens.
                All token profits are for the community only, including you.
                With zkPiggy, the team will never hoard the profits the
                community and you deserve.
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
