import "./App.css";
import {applicationDSL} from "../openblocks/tauri-with-openblocks-poc.json";
import "openblocks-sdk/dist/style.css";
import { OpenblocksAppView } from "openblocks-sdk";

export default function App() {
  return (
    <OpenblocksAppView appId="" className="app" appDsl={applicationDSL} />
  );
}
