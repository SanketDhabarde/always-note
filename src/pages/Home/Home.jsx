import React from "react";
import { CreateNote, Note, Sidebar } from "../../components";
import "./Home.css";

function Home() {
  return (
    <div className="home grid-1-5-col">
      <Sidebar />
      <main className="py-1">
        <div className="create-note center-div">
          <CreateNote />
        </div>
        <div className="notes py-2">
          <Note
            title="title"
            note="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, repellat amet maiores eaque at, maxime architecto praesentium pariatur magni sed earum, optio tempore quasi nam! Iste atque eius tempora veritatis."
            color="red"
          />
          <Note
            title="title"
            note="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, repellat amet maiores eaque at, maxime architecto praesentium pariatur magni sed earum, optio tempore quasi nam! Iste atque eius tempora veritatis."
            color="green"
          />
          <Note
            title="title"
            note="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, repellat amet maiores eaque at, maxime architecto praesentium pariatur magni sed earum, optio tempore quasi nam! Iste atque eius tempora veritatis."
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
