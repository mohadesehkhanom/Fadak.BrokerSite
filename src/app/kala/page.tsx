import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionKala from "@/section/SectionKala/SectionKala";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "کارگزاری بورس کالا و دریافت کد بورس کالا | کارگزاری فدک",
    description: 'برای دریافت کد بورس کالا، افتتاح حساب وکالتی و انجام معاملات محصولات صنعتی، معدنی، پتروشیمی و سیمان با فدک همراه شوید.',
    alternates: {
        canonical: "/kala",
    }
};

export default function ServicesPage() {

    return (
        <>
            <SectionNavbarMenu/>
            <SectionKala/>
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}