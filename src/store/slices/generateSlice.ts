import { createSlice } from "@reduxjs/toolkit";
import { generateOptions } from "../../utils/generate";

export interface IGenerate {
  password: string;
}

const initialState: IGenerate = {
  password: "",
};

export const generateSlice = createSlice({
  name: "genetate",
  initialState,
  reducers: {
    setRandomPass: (state, action) => {
      const { count, uppercase, lowercase, numbers, specialChars } = action.payload;
      const characters = generateOptions(uppercase, lowercase, numbers, specialChars);
      let randomChars = "";

      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomChar = characters.charAt(randomIndex);
        randomChars += randomChar;
      }

      state.password = randomChars;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRandomPass } = generateSlice.actions;
export default generateSlice.reducer;
