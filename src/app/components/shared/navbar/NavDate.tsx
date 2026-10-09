const NavDate = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })
    return (
        <span className="text-xs text-slate-500">{date}</span>

    );
};

export default NavDate;