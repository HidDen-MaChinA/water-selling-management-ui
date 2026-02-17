import blazeCentralConfiguration from "../blazeCentralConfiguration";
import type { ReactNode } from "react";


const TBody = blazeCentralConfiguration.blazeTables?.TBody
const THead = blazeCentralConfiguration.blazeTables?.Thead

export type BlazeBaseTablePropsType = {
  headers?: string[];
  children?: ReactNode
};


export function BlazeBaseTable(props: BlazeBaseTablePropsType) {
  const { headers, children } = props;
  return (
    <table>
      {THead ? (
        <THead>
          <tr>
            {headers?.map((header, index) => (
              <th key={"blaze-table-header"+index}>{header}</th>
            ))}
          </tr>
        </THead>
      ) : (
        <thead>
          <tr>
            {headers?.map((header, index) => (
                <th key={"blaze-table-header"+index}>{header}</th>
            ))}
          </tr>
        </thead>
      )}
      {TBody ? <TBody>{children}</TBody> : <tbody>{children}</tbody>}
    </table>
  );
}
