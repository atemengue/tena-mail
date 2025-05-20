import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import exp from 'constants';

type Song = {
  id: string;
  title: string;
  // add other song properties as needed
};

const songSlice = createSlice({
  name: 'song',
  initialState: [] as Song[],
  reducers: {
    addSong: (state, action: PayloadAction<Song>) => {
      state.push(action.payload);
    },
    removeSong: (state, action: PayloadAction<{ id: string }>) => {
     // return state.filter((song) => song.id !== action.payload.id);
    },
  }
})

const authSLice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    register: (state, action) => {
      //
    },
  }
})

const store = configureStore({
  reducer: {
    auth: authSLice.reducer,
  },
});

const startingState = store.getState();
console.log('startingState', startingState);
  
// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song"
// });

  console.log('state after dispatch', JSON.stringify(store.getState()))



export { store };
export const { login, register } = authSLice.actions;
