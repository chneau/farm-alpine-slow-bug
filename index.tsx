import "antd/dist/reset.css";
import { createRoot } from "react-dom/client";
import { Main } from "./main";

const container = document.querySelector("#root") as Element;
const root = createRoot(container);
root.render(<Main />);
