import * as React from "react";
import { HeadingData } from "../types";
import Heading from "./Heading";
import DefaultTd from "./Td";
import DefaultTr from "./Tr";

interface TimetableProp {
  mainData: Array<{
    from: Date;
    to: Date;
    name: string;
    content?: string;
    bgColor: string;
  }>;
  headingData: HeadingData[];
  Td?: React.SFC;
  Tr?: React.SFC;
}

const Timetable: React.SFC<TimetableProp> = ({
  Td = DefaultTd,
  Tr = DefaultTr,
  ...others
}: TimetableProp) => {
  const { headingData } = others;
  const headingProp = { headingData, Td, Tr };
  return (
    <table>
      <Heading {...headingProp} />
    </table>
  );
};
export default Timetable;
