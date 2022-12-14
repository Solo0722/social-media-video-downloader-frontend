import axios from "axios";
import qs from "qs";

const url = "https://socialmedia0-downloader.onrender.com/api";

export const getVideo = (socialMediaCategory, videoURL) =>
  axios({
    method: "post",
    url: `${url}/${socialMediaCategory}`,
    data: qs.stringify({
      url: videoURL,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
