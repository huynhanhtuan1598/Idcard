import React, { ReactNode } from "react";
// import  Helmet  from "react-helmet";

interface Props {
  children: ReactNode;
  title?: string;
}

const Layout = ({ title = "VipId", children }: Props) => (
  <>
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </>
    {children}
  </>
);

export { Layout };

