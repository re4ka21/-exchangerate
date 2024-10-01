export default function Tabstwo() {
  const [tab, setTab] = useState("feedback");
  return (
    <div>
      <Tabs active={tab} onChange={(current) => setTab(current)} />
      {tab === "main" && <Feed />}
      {tab === "feedback" && <FeedBack />}
    </div>
  );
}
