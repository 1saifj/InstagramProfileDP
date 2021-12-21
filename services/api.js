import axios from "axios";

// let username='instagram';
const myData = (username) => {
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

export default myData;
