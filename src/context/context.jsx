import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [youtubeVideoData, setYoutubeVideoData] = useState(null);
  const [youtubePlaylistData, setYoutubePlaylistData] = useState(null);
  const [facebookVideoData, setFacebookVideoData] = useState(null);
  const [twitterVideoData, setTwitterVideoData] = useState(null);
  const [instagramVideoData, setInstagramVideoData] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        youtubeVideoData,
        youtubePlaylistData,
        facebookVideoData,
        twitterVideoData,
        instagramVideoData,
        setYoutubeVideoData,
        setYoutubePlaylistData,
        setFacebookVideoData,
        setTwitterVideoData,
        setInstagramVideoData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
