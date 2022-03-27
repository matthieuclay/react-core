import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  if (loading) return <Loading />;
  return (
    <div className="home">
      <Header />
      <h1>Hello Home!</h1>
      <Footer />
    </div>
  );
};

export default Home;
