import React from "react";
import { useLabels } from "../../context";
import "./Label.css";

function Label({ singleLabel }) {
  const { labelsDispatch } = useLabels();
  const { _id, label } = singleLabel;

  const deleteLabelHandler = (id) => {
    labelsDispatch({ type: "DELETE_LABEL", payload: id });
  };

  return (
    <div className="label py-1">
      <div className="label-left">
        <div className="note-icon center-div">
          <i className="fas fa-hashtag"></i>
        </div>
        <p>{label}</p>
      </div>
      <div
        className="note-icon center-div"
        title="Delete label"
        onClick={() => deleteLabelHandler(_id)}
      >
        <i className="fas fa-trash-alt"></i>
      </div>
    </div>
  );
}

export default Label;
