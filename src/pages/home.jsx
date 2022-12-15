import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/youtube");
  }, []);

  return <HomeContainer>Home</HomeContainer>;
};

const HomeContainer = styled.div`
  width: 100%;
`;

export default Home;
