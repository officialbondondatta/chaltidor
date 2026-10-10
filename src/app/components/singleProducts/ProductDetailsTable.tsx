import { IDetailedProductProps } from "@/app/types/detailedProductType";
import { toBanglaNumber } from "@/app/utils/toBanglaNumbers";
import { Table } from '@heroui/react';

interface ITableDetailsProps {
    details: IDetailedProductProps
}

const ProductDetailsTable = ({ details }: ITableDetailsProps) => {
    const sortByMinimumprice = [...details.markets].sort((a, b) => a.min - b.min)
    return (
        <div className="mt-4">
            <Table className="rounded-xl [&_td]:rounded-none [&_th]:rounded-none p-0 border">
                <Table.ScrollContainer>
                    <Table.Content aria-label="বাজারভিত্তিক আজকের দাম" >
                        <Table.Header>
                            <Table.Column isRowHeader className={`text-sm`}>বাজার</Table.Column>
                            <Table.Column className={`text-sm`}>বিভাগ</Table.Column>
                            <Table.Column className={`text-sm`}>সর্বনিম্ন</Table.Column>
                            <Table.Column className={`text-sm`}>সর্বাধিক</Table.Column>
                            <Table.Column className={`text-sm`}>গড়</Table.Column>
                        </Table.Header>
                        <Table.Body >
                            {
                                sortByMinimumprice.map((market, ind) => (
                                    <Table.Row
                                        key={ind}
                                        className={ind % 2 === 1 ? "*:bg-slate-100" : ""}
                                    >
                                        <Table.Cell>{market.market}</Table.Cell>
                                        <Table.Cell>{market.division}</Table.Cell>
                                        <Table.Cell>{toBanglaNumber(market.min)} টাকা</Table.Cell>
                                        <Table.Cell>{toBanglaNumber(market.max)} টাকা</Table.Cell>
                                        <Table.Cell className={"font-semibold"}>{toBanglaNumber((Math.abs((market.min) + (market.max)) / 2).toFixed(2))} টাকা</Table.Cell>
                                    </Table.Row>
                                ))
                            }

                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default ProductDetailsTable;
