import { useState } from "react";

export default function Feed() {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(false);
  const [reason, setReason] = useState("");
  const [passwordError, setPasswordError] = useState("");
  function maskPassword(password) {
    return "*".repeat(password.length);
  }

  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }

  function handleReasonChange(event) {
    setReason(event.target.value);
    console.log(event.target.value);

    const password = event.target.value;
    setReason(password);

    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (!hasLetter || !hasNumber) {
      setPasswordError("Пароль повинен містити букви  цифри");
    } else {
      setPasswordError("");
    }
  }
  return (
    <section>
      <form>
        <label htmlFor="name" className="name">
          Ваше имя
        </label>
        <input
          className="input"
          type="text"
          id="name"
          value={name}
          minLength={2}
          maxLength={12}
          style={{ border: hasError ? "1px solid red" : null }}
          onChange={handleNameChange}
        ></input>

        <label htmlFor="reason" className="password">
          Ваш пароль
        </label>
        <input
          type="password"
          className="input"
          id="reason"
          value={reason}
          maxLength={12}
          minLength={5}
          style={{ border: hasError ? "1px solid red" : null }}
          onChange={handleReasonChange}
        ></input>
        {passwordError && <p className={"error"}>{passwordError}</p>}
        <button className="buttonthird">Отправить</button>

        <pre className="pre">Name: {name}</pre>
        <pre className="pre">Password: {maskPassword(reason)}</pre>
      </form>
    </section>
  );
}
