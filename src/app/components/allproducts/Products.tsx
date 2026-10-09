"use client"
import type { Key } from "@heroui/react";
import { ListBox, Select } from "@heroui/react";
import { useState } from "react";
import ProductCards, { IProductProps } from "../ProductCards";
import { toBanglaNumber } from "@/app/utils/toBanglaNumbers";

interface IProductsSortedProps {
    receivedData: IProductProps[]
}

const Products = ({ receivedData }: IProductsSortedProps) => {
    const states = [
        {
            id: "default",
            name: "ডিফল্ট",
        },
        {
            id: "price-asc",
            name: "দাম: কম থেকে বেশি",
        },
        {
            id: "price-desc",
            name: "দাম: বেশি থেকে কম",
        }
    ];
    const [state, setState] = useState<Key | null>("default");
    const selectedState = states.find((s) => s.id === state);
    const priceAscSortedData = [...receivedData].sort((a, b) => a.today - b.today)
    const priceDescSortedData = [...receivedData].sort((a, b) => b.today - a.today)
    return (
        <main>
            <section>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-slate-500">মোট {toBanglaNumber(receivedData.length)} টি পণ্য দেখানো হচ্ছে</p>
                    </div>
                    <div className="space-y-2 flex gap-2">
                        <p className="text-slate-500 self-end">সাজান</p>
                        <Select
                            className=""
                            aria-label="সাজান"
                            defaultValue={state}
                            value={state}
                            onChange={(value) => setState(value)}
                        >
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    {states.map((state) => (
                                        <ListBox.Item key={state.id} id={state.id} textValue={state.name}>
                                            {state.name}
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    ))}
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>
                </div>
                <div className="grid md;grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-5">
                    {/* Data here */}
                    {
                        selectedState?.id === "price-desc" ? priceDescSortedData.map((data) => (<ProductCards key={data.id} product={data}></ProductCards>)) : selectedState?.id === "price-asc" ? priceAscSortedData.map((data) => (<ProductCards key={data.id} product={data}></ProductCards>)) : selectedState?.id === "default" && receivedData.map((data) => (<ProductCards key={data.id} product={data}></ProductCards>))
                    }
                </div>
            </section>
        </main>

    );
};

export default Products;