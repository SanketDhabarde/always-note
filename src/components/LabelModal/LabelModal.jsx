import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useLabels } from "../../context";
import Label from "../Label/Label";
import "./LabelModal.css";

function LabelModal({ setIsLabelModalVisible }) {
  const [label, setLabel] = useState("");
  const [error, setError] = useState(false);
  const { labelsState, labelsDispatch } = useLabels();
  const { labels } = labelsState;

  const closeModalHandler = (event) => {
    if (event.target.classList.contains("backdrop")) {
      setIsLabelModalVisible(false);
    }
  };

  const createLabelHandler = (e) => {
    e.preventDefault();
    const newLabel = { _id: uuid(), label };
    const isLabelExists = labels.some((_label) => _label.label === label);
    if (!isLabelExists) {
      labelsDispatch({ type: "CREATE_LABEL", payload: newLabel });
      setLabel("");
    } else {
      setError(true);
    }
  };

  const changeHandler = (label) => {
    setError(false);
    setLabel(label);
  };

  return (
    <div className="backdrop" onClick={closeModalHandler}>
      <div className="label-modal p-2">
        <h4>Edit labels</h4>
        <div className="label-header">
          <form onSubmit={createLabelHandler}>
            <input
              type="text"
              placeholder="Create a label"
              value={label}
              className="create-label-input py-1"
              onChange={(e) => changeHandler(e.target.value)}
            />
            <div
              className="note-icon center-div"
              title="Create label"
              onClick={createLabelHandler}
            >
              <i className="fas fa-check"></i>
            </div>
          </form>
        </div>
        {error && <small className="input-err p-1">Label already exists</small>}
        <div className="labels py-2">
          {labels.map((label) => (
            <Label key={label._id} singleLabel={label} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LabelModal;
