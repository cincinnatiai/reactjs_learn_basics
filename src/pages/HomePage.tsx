import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserCard from "../components/UserCard";
import { userDataBase } from "../assets/data.tsx";

const userCardComponents = userDataBase.map((item) => (
  <UserCard
    key={item.userID}
    userName={item.userName}
    userImageURL={item.userImageURL}
  />
));

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <main>{userCardComponents}</main>
      <Footer />
    </div>
  );
};

export default HomePage;
