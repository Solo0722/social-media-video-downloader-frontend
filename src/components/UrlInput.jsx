import { Form, Input, Button, message } from "antd";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/context";
import { getVideo } from "../utils/axios";

const UrlInput = ({ category }) => {
  const [url, setUrl] = useState("");
  const { setYoutubeVideoData } = useContext(GlobalContext);

  const handleVideoData = (category, data) => {
    switch (category) {
      case "youtube":
        setYoutubeVideoData(data);
        break;
      case "youtube-playlist":
        setYoutubePlaylistData(data);
        break;
      case "twitter":
        setTwitterVideoData(data);
        break;
      case "facebook":
        setFacebookVideoData(data);
        break;
      case "instagram":
        setInstagramVideoData(data);
        break;
      default:
        return;
    }
  };

  const handleUrlConversion = async () => {
    if (!url) message.error("Invalid url provided!");
    else {
      await getVideo(category, url)
        .then(({ data }) => {
          console.log(data);
          handleVideoData(category, data);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <InputContainer>
      <InputField
        placeholder={`Enter ${category} video url`}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <StyledButton type="primary" onClick={handleUrlConversion}>
        Convert
      </StyledButton>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, 0.1);
  /* box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px; */
  border-radius: 7px;

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

const InputField = styled(Input)`
  width: 80%;
  border: none;
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }
`;

const StyledButton = styled(Button)`
  width: 20%;
  border-radius: 0px 4px 4px 0px;
`;

export default UrlInput;
