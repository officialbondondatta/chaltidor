import React from "react";

const Navbar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h2>This is Navbar</h2>
            {children}
        </div>
    );
};

export default Navbar;