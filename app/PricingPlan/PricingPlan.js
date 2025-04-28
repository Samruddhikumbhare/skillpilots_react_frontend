"use client";

import React, { useEffect, useState } from "react";
import "./PricingPlan.css";
import { Button, Grid, Modal, Box, Typography, TextField } from "@mui/material";
import { Check } from "@mui/icons-material";
import Swal from "sweetalert2";
import { api } from "../api.js";

function PricingPlan() {
  const [data, setData] = useState([
    {
      heading: "Start-Up",
      price: "1500",
      duration: "per year",
      para: "Use this space to describe your start up prize and its importance to users that how this plan can be helpful.",
      features: [
        "Easy Customizable",
        "Goal-focused recommendations",
        "Hands-on tech training with add-on",
        "Certification prep",
      ],
    },
    {
      heading: "Intermediate",
      price: "2000",
      duration: "per 2year",
      para: "Use this space to describe your start up prize and its importance to users that how this plan can be helpful.",
      features: [
        "Easy Customizable",
        "Goal-focused recommendations",
        "Hands-on tech training with add-on",
        "Certification prep",
      ],
    },
    {
      heading: "Advance",
      price: "2500",
      duration: "per 3year",
      para: "Use this space to describe your start up prize and its importance to users that how this plan can be helpful.",
      features: [
        "Easy Customizable",
        "Goal-focused recommendations",
        "Hands-on tech training with add-on",
        "Certification prep",
      ],
    },
  ]);
  console.log(api);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [order, setOrder] = useState({
    orderAmount: "",
    customerName: "",
    customerPhone: "",
    email: "",
  });

  const [error, setError] = useState({
    customerName: "",
    customerPhone: "",
    email: "",
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // Load Cashfree SDK dynamically
    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    script.async = true;
    script.onload = () => console.log("Cashfree SDK Loaded");
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (order.customerName === "") {
      setError((prev) => {
        return { ...prev, customerName: "Name is required" };
      });
    }

    if (order.customerPhone === "") {
      setError((prev) => {
        return { ...prev, customerPhone: "Contact Number is required" };
      });
    } else if (!/^\d{10}$/.test(order.customerPhone)) {
      setError((prev) => {
        return { ...prev, customerPhone: "Contact must be a 10-digit number" };
      });
    }

    if (order.email === "") {
      setError((prev) => {
        return { ...prev, email: "Email Id is required" };
      });
    } else if (!/^\S+@\S+\.\S+$/.test(order.email)) {
      setError((prev) => {
        return { ...prev, email: "Invalid Email Id" };
      });
    }

    if (
      order.customerName !== "" &&
      order.customerPhone !== "" &&
      order.email !== "" &&
      /^\d{10}$/.test(order.customerPhone) &&
      /^\S+@\S+\.\S+$/.test(order.email)
    ) {
      setLoading(true);
      const orderId = `OD-${Date.now().toString()}`;
      let orderData = {
        orderAmount: order.orderAmount,
        orderId: orderId,
        customerName: order.customerName,
        customerPhone: order.customerPhone,
        returnUrl: `${api}/skillpilot/payment-success?order_id=` + orderId, // Redirect after payment
        email: order.email,
      };
      fetch(`${api}/newskill/createOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-version": "2025-01-01",
          "x-client-id": "776689d42f191ff3e94d70f486986677",
          "x-client-secret":
            "cfsk_ma_prod_f15b6a714c430ac9172c4ce29d49dd1a_b3217ffd",
        },
        body: JSON.stringify(orderData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Response Data:", data);

          if (data.sessionId) {
            try {
              const cashfree = Cashfree({
                mode: "production", // Change to "production" in live mode
              });
              let checkoutOptions = {
                paymentSessionId: data.sessionId,
                redirectTarget: "_modal",
              };
              cashfree.checkout(checkoutOptions).then((result) => {
                setOrder({
                  orderAmount: "",
                  customerName: "",
                  customerPhone: "",
                  email: "",
                });
                handleClose();
                if (result.error) {
                  console.log(
                    "Payment error or user closed the popup:",
                    result.error
                  );
                  Swal.fire({
                    title: "Error",
                    text: "Payment Canceled.",
                    icon: "error",
                    confirmButtonText: "OK",
                  });
                }
                // if (result.redirect) {
                //   console.log("Redirecting to payment page...");
                // }
                if (result.paymentDetails) {
                  console.log(
                    "Payment Completed:",
                    result.paymentDetails.paymentMessage
                  );

                  if (
                    result.paymentDetails.paymentMessage ===
                    "Payment finished. Check status."
                  ) {
                    Swal.fire({
                      title: "Success!",
                      text: "Payment Successful!",
                      icon: "success",
                      confirmButtonText: "OK",
                    });
                  } else {
                    Swal.fire({
                      title: "Error",
                      text: "Payment Failed. Please try again.",
                      icon: "error",
                      confirmButtonText: "OK",
                    });
                  }
                }
              });
            } catch (err) {
              console.error("Cashfree Error:", err);
            }
          } else {
            handleClose();

            Swal.fire({
              title: "Error",
              text: "Payment session ID not received from server.",
              icon: "error",
              confirmButtonText: "OK",
            });
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        });
      setLoading(false);
    }
  };

  return (
    <div className="pricingMain">
      {/* <h1 className="pricingHead">Pricing Plans</h1>
      <div className="dashedPricing"></div>

      <p>
        SkillPilots offers competitive rates and pricing plans to help you find
        a plan that fits the needs and budget.
      </p>

      <Grid container spacing={4} mt={1} mb={1} className="mainGrid">
        {data.map((v, ind) => {
          return (
            <Grid item xs={12} sm={12} md={4} key={ind}>
              <div className="pricingBox">
                <h4 className="heading">{v.heading}</h4>
                <div className="pricing">
                  <span>Rs</span>
                  <div>{v.price}</div>
                </div>
                <div className="priceDuration">{v.duration}</div>

                {v.features.map((vv, inx) => {
                  return (
                    <div className="pricingCheckList" key={inx}>
                      <Check />
                      {vv}
                    </div>
                  );
                })}

            
                <Modal open={open} onClose={handleClose}>
                  <Box
                    component="form"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 400,
                      bgcolor: "background.paper",
                      boxShadow: 24,
                      p: 4,
                      borderRadius: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6">Enter Your Details</Typography>

                    <TextField
                      label="Name"
                      name="customerName"
                      value={order.customerName}
                      onChange={handleChange}
                      fullWidth
                      helperText={error.customerName}
                      error={error.customerName !== "" ? true : false}
                    />
                    <TextField
                      label="Contact Number"
                      name="customerPhone"
                      type="number"
                      value={order.customerPhone}
                      onChange={handleChange}
                      fullWidth
                      helperText={error.customerPhone}
                      error={error.customerPhone !== "" ? true : false}
                    />
                    <TextField
                      label="Email Id"
                      name="email"
                      type="email"
                      value={order.email}
                      onChange={handleChange}
                      fullWidth
                      helperText={error.email}
                      error={error.email !== "" ? true : false}
                    />
                    <TextField
                      label="Order Amount"
                      name="orderAmount"
                      value={order.orderAmount}
                      fullWidth
                      disabled
                    />

                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handlePayment}
                        style={{ marginLeft: "10px" }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Box>
                </Modal>
              </div>
            </Grid>
          );
        })}
      </Grid> */}
    </div>
  );
}

export default PricingPlan;
