import { toBanglaNumber } from "./toBanglaNumbers";

export interface IMarketProps {
    market: string,
    division: string,
    min: number,
    max: number

}
export const getAverageUnit = (market: IMarketProps[]): string => {

    const total = market.reduce((acc, val) => {
        return acc + val.min + val.max
    }, 0)

    const avg = Math.round(total / (market.length * 2))

    const banglaConvertedValue = toBanglaNumber(avg)

    return banglaConvertedValue
};

