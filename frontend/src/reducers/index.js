import HeaderReducer from "./headerReducer";
import HomeReducer from "./homeReducer";
import LoadingReducer from "./loadingReducer";
import OCPReducer from "./ocpReducer";
import QuayReducer from "./quayReducer";
import SideMenuReducer from "./sideMenuReducer";
import TelcoReducer from "./telcoReducer";
import ToastReducer from "./toastReducer";
import { combineReducers } from "redux";

export default combineReducers({
  loading: LoadingReducer,
  toast: ToastReducer,
  sidemenu: SideMenuReducer,
  cpt: HomeReducer,
  ocp: OCPReducer,
  quay: QuayReducer,
  telco: TelcoReducer,
  header: HeaderReducer,
});
