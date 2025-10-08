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
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-[60vw] max-h-[80vh] overflow-hidden flex flex-col">
                        <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
                            {children}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Layout;