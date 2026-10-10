import { toBanglaNumber } from "./toBanglaNumbers";

export interface IMarketProps {
    market: string,
    division: string,
    min: number,
    max: number

}
export const getLowestPrice = (markets: IMarketProps[]): string => {
    let lowPrice = markets[0].min;
    markets.map(price => {
        if (price.min < lowPrice) {
            lowPrice = price.min
        }
    })
    const banglaConvertedValue = toBanglaNumber(lowPrice)

    return banglaConvertedValue
}