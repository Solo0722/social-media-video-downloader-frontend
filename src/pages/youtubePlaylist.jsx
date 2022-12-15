import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import UrlInput from "../components/UrlInput";
import { GlobalContext } from "../context/context";
import Spinner from "../utils/spinner";
import { SocialMediaContainer } from "./youtube";

const YoutubePlaylist = () => {
  const { youtubePlaylistData } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  const CustomizedDropdown = ({ item }) => {
    const items =
      item &&
      item.dataFormats.map((dataFormat) => {
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
      <Dropdown menu={{ items }} trigger="click">
        <Button type="default">
          <Space>
            Download
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    );
  };

  return (
    <SocialMediaContainer>
      <UrlInput category={"youtube-playlist"} setLoading={setLoading} />

      <BodyContainer>
        {!youtubePlaylistData && loading ? (
          <Spinner />
        ) : !youtubePlaylistData && !loading ? (
          <h3>Enter a url to download the video</h3>
        ) : (
          <ol>
            {youtubePlaylistData.dataDownloads.map((item) => (
              <VideoContainer>
                <Space direction="horizontal">
                  <img src={item.thumbnail} alt="" />
                  <p>{item.title}</p>
                  <CustomizedDropdown item={item} />
                </Space>
              </VideoContainer>
            ))}
          </ol>
        )}
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

const VideoContainer = styled.li`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;

  img {
    width: 100px;
    height: 100px;
  }
`;

export default YoutubePlaylist;
