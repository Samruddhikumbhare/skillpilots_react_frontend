import React from "react";
import "./RefundPolicy.css";

export default function RefundPolicy() {
  return (
    <div className="usefulLinkData refund">
      <h1 className="heading">Return and Refund Policy</h1>
      {/* <p className="date">Last updated: July 09, 2024</p> */}
      <p>
        At SkillPilots, we strive to provide the best services and experiences
        for all our users. However, we understand that there might be situations
        where a refund may be necessary. Below is our refund policy:
      </p>

      <h2>Refund Eligibility</h2>
      <ol>
        <li>
          <div style={{ fontWeight: "bold" }}>Subscription Services:</div>
          <ul>
            <li>
              Refund requests for subscriptions can be made within{" "}
              <b>7 days of purchase </b>if the service has not been used or
              activated.
            </li>
            <li>
              If services have been partially used, refunds will be granted on a{" "}
              <b>pro-rata basis</b>, excluding administrative charges.
            </li>
          </ul>
        </li>
        <li>
          <div style={{ fontWeight: "bold" }}>One-Time Payments:</div>
          <ul>
            <li>
              Refunds for one-time services (such as assessments or placements)
              are only available if the service has not been utilized or
              delivered.
            </li>
            <li>Once the service is used, no refunds will be processed.</li>
          </ul>
        </li>
        <li>
          <div style={{ fontWeight: "bold" }}>Technical Issues:</div>
          <ul>
            <li>
              If you face any technical issues while using SkillPilots and the
              issue is unresolved within <b>14 days</b>, you are eligible for a
              refund.
            </li>
          </ul>
        </li>
        <li>
          <div style={{ fontWeight: "bold" }}>Exceptional Circumstances:</div>
          <ul>
            <li>
              Refunds may be provided in cases of fraud, accidental payments, or
              duplicate transactions upon verification.
            </li>
          </ul>
        </li>
      </ol>
      <hr />
      <h2>Refund Request Process</h2>
      <ol>
        <li>
          <div>
            {" "}
            To request a refund, please email us at{" "}
            <b>support@skillpilots.com</b> with the following details:
          </div>
          <ul>
            <li>Your registered email ID</li>
            <li>Transaction details (date, amount, and reference number)</li>
            <li>Reason for the refund request</li>
          </ul>
        </li>
        <li>
          <div>
            {" "}
            Our team will process your request and respond within{" "}
            <b>5-7 business days.</b>
          </div>
        </li>
      </ol>
      <hr />

      <h2>Refund Timeline</h2>
      <ul>
        <li>
          Approved refunds will be processed within <b>7-10 business days</b>.
        </li>
        <li>
          The amount will be credited back to the original payment method within{" "}
          <b>15 days</b>.
        </li>
      </ul>

      <hr />

      <h2>Non-Refundable Charges</h2>
      <ul>
        <li>
          Administrative fees and taxes are <b>non-refundable</b>.
        </li>
        <li>
          Refunds are not applicable for discounted or promotional offers.
        </li>
      </ul>

      <hr />
      <p>
        For further assistance, feel free to contact our support team at{" "}
        <b>support@skillpilots.com</b> We are here to help!
      </p>
    </div>
  );
}
