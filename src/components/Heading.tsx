import * as React from "react";
import { HeadingData } from "../types";
import Td from "./Td";
import Tr from "./Tr";

interface HeadingProp {
  headingData: HeadingData[];
  Td: React.SFC;
  Tr: React.SFC;
}

const Heading: React.SFC<HeadingProp> = ({ Td, Tr, headingData }) => {
  console.log(headingData);

  return (
    <Tr>
      {headingData.map((each: HeadingData, index: number) => (
        <Td key={index}>
          <h2>{each.title}</h2> <p>{each.subtitle}</p>
        </Td>
      ))}
      }
    </Tr>
  );
};

export default Heading;
