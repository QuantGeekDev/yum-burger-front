import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import burgersReducer from "./features/burgers/burgersSlice";
import uiReducer from "./features/ui/uiSlice";

export const rootReducer = combineReducers({ burgersReducer, uiReducer });

export const store = configureStore({
  reducer: { rootReducer: rootReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
