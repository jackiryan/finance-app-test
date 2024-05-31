import { PropsWithChildren } from "react";
import { Breadcrumb } from "../breadcrumb";
import { Menu } from "../menu";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout h-screen w-screen">
      <Menu />
      <div className="content relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Breadcrumb />
        <>{children}</>
      </div>
    </div>
  );
};
