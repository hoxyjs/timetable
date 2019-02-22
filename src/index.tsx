import * as React from "react";
import * as ReactDOM from "react-dom";
import Timetable from "./components/Timetable";
import { HeadingData } from "./types";

/*[...Array(7)].map(
  (elem: any, index: number): HeadingData => ({
    title: String(index),
    subtitle: "test"
  })
);*/

ReactDOM.render(
  <Timetable
    headingData={[{ title: "1", subtitle: "test" }]}
    mainData={[
      {
        from: new Date(),
        to: new Date(),
        name: "test",
        content: "test",
        bgColor: "test"
      }
    ]}
  />,
  document.getElementById("app")
);
