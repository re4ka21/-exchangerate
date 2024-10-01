import { sentence, nomer } from "./const";

export default function Tab3() {
  const handleCopy = () => {
    navigator.clipboard.writeText(sentence).catch((error) => {
      console.error("Error copying text: ", error);
    });
  };
  const handleCopyy = () => {
    navigator.clipboard.writeText(nomer).catch((error) => {
      console.error("Error copying text: ", error);
    });
  };
  return (
    <div>
      <h3>Якщо у вас виникла помилка:</h3>
      <p>Можете написати нам на електронну пошту або на номер телефону:</p>

      <p onClick={handleCopy} style={{ cursor: "pointer", color: "blue" }}>
        {sentence}
      </p>
      <p onClick={handleCopyy} style={{ cursor: "pointer", color: "blue" }}>
        {nomer}
      </p>
    </div>
  );
}
