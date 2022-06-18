import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import Filter from "../Filter/Filter";
import LabelModal from "../LabelModal/LabelModal";
import Nav from "../Nav/Nav";
import "./MobileSidebar.css";

function MobileSidebar() {
  const [isLabelModalVisible, setIsLabelModalVisible] = useState(false);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };
  return (
    <div className="mobile-sidebar py-1">
      <button
        className="btn btn-primary"
        onClick={() => setIsLabelModalVisible(true)}
      >
        Create labels
      </button>
      <Nav icon={<i className="fas fa-home"></i>} title="Home" link="/home" />
      <Nav
        icon={<i className="fas fa-archive"></i>}
        title="Archive"
        link="/archive"
      />
      <Nav
        icon={<i className="fas fa-trash-alt"></i>}
        title="Trash"
        link="/trash"
      />
      <Filter />
      <div className="sidebar-user-info px-1">
        <div className="sidebar-user">
          <div className="avatar avatar-txt center-div avatar-sm m-1">
            <span>{`${user?.firstName[0]}${user?.lastName[0]}`}</span>
          </div>
          <div className="user-name">{`${user?.firstName} ${user?.lastName}`}</div>
        </div>
        <div
          className="note-icon center-div"
          title="Logout"
          onClick={logoutHandler}
        >
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
      {isLabelModalVisible && (
        <LabelModal setIsLabelModalVisible={setIsLabelModalVisible} />
      )}
    </div>
  );
}

export default MobileSidebar;
