/* eslint-disable jsx-a11y/anchor-has-content */
import React, { ComponentPropsWithoutRef } from "react";
type ButtonProps = {} & ComponentPropsWithoutRef<"button"> & { href?: never };
type AnchorProps = {} & ComponentPropsWithoutRef<"a"> & { href?: string };

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a {...props}></a>;
  }

  return <button {...props}></button>;
}

export default Button;
