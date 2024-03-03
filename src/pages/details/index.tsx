import React from "react";


const DetailsPage = () => {
  const [postData, setPostData] = React.useState({});
  const [responseData, setResponseData] = React.useState(null);

  const handlePostRequest = async () => {
    try {
      const response = await fetch("https://diagnox-model-api.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Additional headers if needed
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      
    </>
  );
};

export default DetailsPage;
