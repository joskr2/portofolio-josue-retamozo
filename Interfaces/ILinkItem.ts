import { HTMLAttributeAnchorTarget } from "react";
import { Url } from "url";


// href, path, target, children
export interface ILinkItem {
  href: Url | string,
  path?: Url | string,
  target?: HTMLAttributeAnchorTarget | undefined,
  children: React.ReactNode,
  display?:string,
  alignItems?:string,
  style?:React.CSSProperties
  pl?:string|number,
}