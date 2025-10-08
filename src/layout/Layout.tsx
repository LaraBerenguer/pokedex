import type { ReactNode } from "react";
import "./layout.css";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout min-h-screen">
            <div className="layout-wrapper relative z-10 min-h-screen flex items-center justify-center p-10">
                <div className="layout-rounded bg-rose-300/95 backdrop-blur-md rounded-2xl shadow- p-3">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl w-[60vw] h-[80vh] overflow-hidden flex flex-col">
                        <div className="p-6 h-full w-full overflow-y-auto flex flex-col">
                            {children}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Layout;