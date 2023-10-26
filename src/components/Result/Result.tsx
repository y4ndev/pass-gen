import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import copyImg from "../../assets/copy.png";
import style from "./Result.module.scss";

const Result: React.FC = () => {
  const [isTextVisible, setTextVisible] = useState(false);

  const password = useAppSelector((state) => state.generate.password);

  const handleCopy = () => {
    if (password.length > 0) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          setTextVisible(!isTextVisible);
          setTimeout(() => {
            setTextVisible(false);
          }, 500);
        })
        .catch((error) => {
          console.error("Не удалось скопировать текст: ", error);
        });
    }
  };

  return (
    <>
      <div className={style.result}>
        <input className={style.password} type="text" readOnly value={password} />
        <div className={style.btn} onClick={handleCopy}>
          <img src={copyImg} alt="copy" />
        </div>
        <div className={`${style.fadeInOut} ${isTextVisible ? style.fadeInOutShow : ""}`}>
          Сopied!
        </div>
      </div>
    </>
  );
};

export { Result };
