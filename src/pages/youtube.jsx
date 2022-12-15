import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import React, { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import UrlInput from "../components/UrlInput";
import { GlobalContext } from "../context/context";
import Spinner from "../utils/spinner";

const Youtube = () => {
  const { youtubeVideoData } = useContext(GlobalContext);

  const [loading, setLoading] = useState(false);

  const items =
    youtubeVideoData &&
    youtubeVideoData.dataFormats.map((dataFormat) => {
      return {
        label: (
          <a href={dataFormat.dataDownload} target="_blank" download>
            <Space>
              {dataFormat.ext}
              {dataFormat.format}
              {dataFormat.filesize}kb
            </Space>
          </a>
        ),
        key: `${dataFormat.dataDownload}`,
      };
    });

  return (
    <SocialMediaContainer>
      <UrlInput category={"youtube"} setLoading={setLoading} />

      <BodyContainer>
        {!youtubeVideoData && loading ? (
          <Spinner />
        ) : !youtubeVideoData && !loading ? (
          <h3>Enter a url to download the video</h3>
        ) : (
          <>
            <h3>{youtubeVideoData.title}</h3>
            <ImageContainer>
              <img src={youtubeVideoData.thumbnail} alt="" />
            </ImageContainer>
            <p>
              Video source:{" "}
              <a href={youtubeVideoData.channelUrl} target="_blank">
                {youtubeVideoData.uploader}
              </a>
            </p>
            <ButtonsContainer>
              <Dropdown menu={{ items }} trigger="click">
                <Button type="primary" block>
                  <Space>
                    Download
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </ButtonsContainer>
          </>
        )}
      </BodyContainer>
    </SocialMediaContainer>
  );
};

export const SocialMediaContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    & {
      width: 80%;
    }
  }
  @media screen and (max-width: 486px) {
    & {
      width: 100%;
    }
  }
`;

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
    object-fit: contain;
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

export default Youtube;
