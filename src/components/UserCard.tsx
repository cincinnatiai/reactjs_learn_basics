import React from "react";

interface UserCardProps {
  userName: string;
  userImageURL: string;
}

const UserCard: React.FC<UserCardProps> = ({ userImageURL, userName }) => {
  return (
    <div className="card">
      <img src={userImageURL} alt="User Image" className="user-image" />
      <div className="user-name">{userName}</div>
    </div>
  );
};

export default UserCard;
