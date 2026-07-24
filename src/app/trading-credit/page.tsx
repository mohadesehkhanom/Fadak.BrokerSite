import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionServices from "@/section/SectionServices/SectionServices";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "دریافت اعتبار معاملاتی بورس | کارگزاری فدک",
    description: 'شرایط دریافت اعتبار معاملاتی از کارگزاری فدک، مدارک موردنیاز و نحوه افزایش قدرت خرید در بازار سرمایه را بررسی کنید.',
    alternates: {
        canonical: "/credit",
    }
};

export default function ServicesPage() {

    return (
        <>
            <SectionNavbarMenu/>

            <SectionServices/>
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}