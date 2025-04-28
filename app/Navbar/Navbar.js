"use client";

import Image from "next/image";
import "./Navbar.css";
import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { Menu } from "@mui/icons-material";
import { Drawer, useMediaQuery } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const isScreenSmall = useMediaQuery("(max-width:390px)");
  const [open, setOpen] = useState(false);
  const [pathname, setPathname] = useState("/");
  const [linkData, setLinkData] = useState([
    { path: "/", name: "Home" },
    { path: "/aboutUs", name: "About Us" },
    // { path: "/blogs", name: "Blogs" },
    { path: "/features", name: "Features" },
    { path: "/contactUs", name: "Contact Us" },
  ]);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 1) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <main className={scroll ? "navBarScroll" : "navBar"}>
      <div className="flex flex-row items-center justify-between">
        <Image
          className="relative"
          src={logo}
          alt="Logo"
          width={isScreenSmall ? 90 : 150}
          height={isScreenSmall ? 30 : 35}
          style={{ marginTop: "-10px" }}
          priority
        />
        <div className="menuMain">
          {linkData.map((v, ind) => {
            return (
              <div
                className="dropdown"
                key={ind}
                onClick={() => setPathname(v.path)}
              >
                <Link href={v.path}>
                  <button
                    className={
                      v.path === "/blogs"
                        ? pathname.includes(v.path)
                          ? "dropbtnActive"
                          : "dropbtn"
                        : pathname === v.path
                        ? "dropbtnActive"
                        : "dropbtn"
                    }
                  >
                    {v.name}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <button className="getQuoteBtn">
            <Link href="https://home.skillpilots.com/home" target="_blank">
              LOGIN
            </Link>
          </button>
          {/* <button className="getQuoteBtnR">
            <Link
              href="https://home.skillpilots.com/student_reg_step1"
              target="_blank"
            >
              REGISTER
            </Link>
          </button> */}
        </div>
        <div className="mobileMenu">
          <button className="getQuoteBtnMobile">
            <Link href="https://home.skillpilots.com/home" target="_blank">
              LOGIN
            </Link>
          </button>
          {/* <button className="getQuoteBtnMobileR">
            <Link
              href="https://home.skillpilots.com/student_reg_step1"
              target="_blank"
            >
              REGISTER
            </Link>
          </button> */}
          <Menu
            onClick={toggleDrawer}
            style={{ color: pathname === "/" && !scroll ? "white" : "#2a1fbc" }}
          />

          <Drawer anchor="right" open={open} onClose={toggleDrawer}>
            <div className="mobileMenuButton">
              {linkData.map((v, ind) => {
                return (
                  <div
                    className="mobileDropdown"
                    key={ind}
                    onClick={() => setPathname(v.path)}
                  >
                    <Link href={v.path}>
                      <button
                        className={
                          v.path === "/blogs"
                            ? pathname.includes(v.path)
                              ? "dropbtnActive"
                              : "dropbtn"
                            : pathname === v.path
                            ? "dropbtnActive"
                            : "dropbtn"
                        }
                      >
                        {v.name}
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </Drawer>
        </div>
      </div>
    </main>
  );
}
