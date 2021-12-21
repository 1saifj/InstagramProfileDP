import { createContext, useState } from "react";
import axios from "axios";

const InstagramContext = createContext({
  userInfo: {},
  searchInstagramUser: (username) => {},
});

export const InstagramContextProvider = ({ children }) => {
  const [info, setInfo] = useState({});

  // let testURL = `https://instagram.com/${username}/?__a=1`;

  const searchInstagramUser = (username) => {
    try {
      axios
        .get(`https://instagram.com/${username}/?__a=1`)
        .then((response) => {
          if (response.status === 200) {
            setInfo(response.data.graphql.user);
            console.log(response.data.graphql.user);
          } else {
            alert("you've unsuccess request");
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };

  const context = {
    userInfo: info,
    searchInstagramUser: searchInstagramUser,
  };

  return (
    <InstagramContext.Provider value={context}>
      {children}
    </InstagramContext.Provider>
  );
};

export default InstagramContext;
