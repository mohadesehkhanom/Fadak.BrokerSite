import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionOnlineTrading from "@/section/SectionOnlineTrading/SectionOnlineTrading";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "سامانه معاملات آنلاین بورس | کارگزاری فدک",
    description: 'با سامانه‌های معاملات آنلاین کارگزاری فدک، سفارش‌های بورسی، پرتفوی و وضعیت بازار را سریع و آنلاین مدیریت کنید.',
    keywords: [
        "سامانه معاملات آنلاین بورس",
        "معاملات آنلاین بورس",
        "سامانه معاملاتی کارگزاری فدک",
        "ورود به سامانه فدک",
        "سامانه اکسیر کارگزاری فدک",
        "سامانه امکس",
        "خرید و فروش آنلاین سهام",
        "پرتفوی آنلاین بورس",
    ],
    alternates: {
        canonical: "/online-trading",
    }
};

export default function Page() {

    return (
        <>
            <SectionNavbarMenu/>
            <SectionOnlineTrading/>
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}