import { toBanglaNumber } from "./toBanglaNumbers";

export interface IMarketProps {
    market: string,
    division: string,
    min: number,
    max: number

}
export const gethighestPrice = (markets: IMarketProps[]): string => {
    let highPrice = markets[0].min;
    markets.map(price => {
        if (price.max > highPrice) {
            highPrice = price.max
        }
    })
    const banglaConvertedValue = toBanglaNumber(highPrice)

    return banglaConvertedValue
}