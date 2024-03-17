import React from "react";
import { Menu } from "@/components/component/menu";

type LayoutProps = {
  children: React.ReactElement;
};

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <div>
      <Menu>{props.children}</Menu>
    </div>
  );
};

export default Layout;
