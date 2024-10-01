export default function Tabs({ active, onChange }) {
  return (
    <section>
      <button
        className={"buttonfirst"}
        active={active === "main" ? "active" : ""}
        onClick={() => onChange("main")}
      >
        калькулятор валют
      </button>

      <button
        className={"buttonsecond"}
        active={active === "feedback" ? "active" : ""}
        onClick={() => onChange("feedback")}
      >
        курс валют
      </button>
    </section>
  );
}
