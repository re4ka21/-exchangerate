import Tabs from "./components/Tabs";
import "./App.css";
import FeedBack from "./components/FeedBack";
import { useState } from "react";
import Feed from "./components/Feed";

function App() {
  const [tab, setTab] = useState("feedback");
  return (
    <div>
      <Tabs active={tab} onChange={(current) => setTab(current)} />
      {tab === "main" && <Feed />}
      {tab === "feedback" && <FeedBack />}
    </div>
  );
}

export default App;
