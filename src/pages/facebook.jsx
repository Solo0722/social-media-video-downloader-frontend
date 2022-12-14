import { Button } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import UrlInput from "../components/UrlInput";
import Spinner from "../utils/spinner";
import { SocialMediaContainer } from "./youtube";

const Facebook = () => {
  return (
    <SocialMediaContainer>
      <UrlInput category={"facebook"} />

      <BodyContainer>
        <Spinner />
        {/* <>
          <h3>Hello World - This is social media downloader</h3>
          <ImageContainer>
            <img src="/vite.svg" alt="" />
          </ImageContainer>
          <p>
            Video source: <a href="">FIFATV</a>
          </p>
          <ButtonsContainer>
            <Button type="primary">Download as mp3</Button>
            <Button type="primary">Download as mp4</Button>
          </ButtonsContainer>
        </> */}
      </BodyContainer>
    </SocialMediaContainer>
  );
};



const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-bottom: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 1rem 0;
  background: #f5f5f5;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 1rem 0;
  }
`;

export default Facebook;
