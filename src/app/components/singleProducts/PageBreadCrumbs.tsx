"use client";
export interface IBreadcrumbProps {
    category: string,
    categoryNameBn: string,
    nameBn: string
}
import { Breadcrumbs } from "@heroui/react";
const PageBreadCrumbs = ({ details }: { details: IBreadcrumbProps }) => {
    return (
        <Breadcrumbs className="mb-5">
            <Breadcrumbs.Item href="/">হোম</Breadcrumbs.Item>
            <Breadcrumbs.Item href={`/category/${details.category}`}>{details.categoryNameBn}</Breadcrumbs.Item>
            <Breadcrumbs.Item href={`#`}>{details.nameBn}</Breadcrumbs.Item>

        </Breadcrumbs>
    );
};

export default PageBreadCrumbs;