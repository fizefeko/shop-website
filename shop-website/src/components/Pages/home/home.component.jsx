import React, { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    document.title = `Home page`;
  }, []);
  return <h1>This is home page</h1>;
};
export default Home;
