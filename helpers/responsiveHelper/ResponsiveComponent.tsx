"use client";
import React, { ReactNode } from "react";
import useScreenSize from "./handleSize";

type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "undefined";

interface ResponsiveComponentProps {
  // eslint-disable-next-line no-unused-vars
  children: (props: { size: ScreenSize }) => ReactNode;
}

const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({
  children,
}) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
