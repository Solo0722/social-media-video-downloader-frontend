import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import {
  FaYoutubeSquare,
  FaTwitterSquare,
  FaSoundcloud,
  FaDailymotion,
  FaInstagramSquare,
  FaFacebookSquare,
  FaTiktok,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const navLinks = [
  {
    name: "Youtube",
    color: "red",
    icon: <FaYoutubeSquare />,
    url: "/youtube",
  },
  {
    name: "Youtube Playlist",
    color: "red",
    icon: <FaYoutubeSquare />,
    url: "/youtube-playlist",
  },
  {
    name: "Twitter",
    color: "#1d9bf0 ",
    icon: <FaTwitterSquare />,
    url: "/twitter",
  },
  {
    name: "Instagram",
    color: "#d62976",
    icon: <FaInstagramSquare />,
    url: "/instagram",
  },

  {
    name: "Facebook",
    color: "#1977f3",
    icon: <FaFacebookSquare />,
    url: "/facebook",
  },
];

const SecondaryNav = () => {
  const navigate = useNavigate();

  return (
    <SecondaryNavWrapper>
      {navLinks.map((item, i) => (
        <Button
          key={i}
          icon={item.icon}
          type={location.pathname === item.url ? "primary" : "default"}
          style={{
            margin: "0 10px",
            display: "flex",
            alignItems: "center",
            borderWidth: 0,
            justifyContent: "center",
            boxShadow: "none",
            borderColor: `${location.pathname === item.url ? item.color : ""}`,
            backgroundColor: `${
              location.pathname === item.url ? item.color : ""
            }`,
          }}
          onClick={() => navigate(item.url)}
        >
          <span style={{ marginLeft: "7px" }}>{item.name}</span>
        </Button>
      ))}
    </SecondaryNavWrapper>
  );
};

const SecondaryNavWrapper = styled.nav`
  height: 40px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default SecondaryNav;
