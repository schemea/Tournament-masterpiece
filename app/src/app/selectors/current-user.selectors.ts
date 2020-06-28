import { createFeatureSelector } from "@ngrx/store";
import { currentUserFeatureKey } from "../reducers/login-page.reducer";

export const selectCurrentUser = createFeatureSelector(currentUserFeatureKey)
