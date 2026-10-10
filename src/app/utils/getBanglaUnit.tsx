export const getBanglaUnit = (unit: string) => {
    switch (unit.toLowerCase()) {
        case "kg":
            return "কেজি";
        case "gram":
            return "গ্রাম";
        case "liter":
            return "লিটার";
        case "litre":
            return "লিটার";
        case "piece":
            return "পিস";
        case "dozen":
            return "ডজন";
        default:
            return unit;
    }
};