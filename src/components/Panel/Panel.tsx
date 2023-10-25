import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { setRandomPass } from "../../store/slices/generateSlice";
import style from "./Panel.module.scss";

const Panel: React.FC = () => {
  const [rangeValue, setRangeValue] = useState<number>(15);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);

  const dispatch = useAppDispatch();
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(parseInt(e.target.value));
  };

  const generatePassword = () => {
    const options = {
      count: rangeValue,
      uppercase,
      lowercase,
      numbers,
      specialChars,
    };

    dispatch(setRandomPass(options));
  };

  return (
    <>
      <div className={style.panel}>
        <label>
          Length
          <input type="range" min={1} max={15} value={rangeValue} onChange={handleRangeChange} />
        </label>
        <label>
          <span className={style.text}>Uppercase</span>
          <input type="checkbox" onChange={() => setUppercase(!uppercase)} />
        </label>
        <label>
          <span className={style.text}>Lowercase</span>
          <input type="checkbox" onChange={() => setLowercase(!lowercase)} />
        </label>
        <label>
          <span className={style.text}>Numbers</span>
          <input type="checkbox" onChange={() => setNumbers(!numbers)} />
        </label>
        <label>
          <span className={style.text}>Special Characters</span>
          <input type="checkbox" onChange={() => setSpecialChars(!specialChars)} />
        </label>
      </div>
      <button className={style.btn} onClick={generatePassword}>
        Generate
      </button>
    </>
  );
};

export { Panel };
