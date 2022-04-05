import React, { useState } from "react";
import LabelModal from "../LabelModal/LabelModal";
import Nav from "../Nav/Nav";
import "./Sidebar.css";

function Sidebar() {
  const [isLabelModalVisible, setIsLabelModalVisible] = useState(false);
  return (
    <div className="sidebar py-1">
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
      {isLabelModalVisible && <LabelModal setIsLabelModalVisible={setIsLabelModalVisible}/>}
    </div>
  );
}

export default Sidebar;
