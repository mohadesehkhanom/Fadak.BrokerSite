import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import {Metadata} from "next";
import SectionBeginInvestment2 from "@/section/SectionBeginInvestment2/SectionBeginInvestment2";
import SectionServiceOfferings from "@/section/SectionServiceOfferings/SectionServiceOfferings";
import SectionCapitalMarketServices from "@/section/SectionCapitalMarketServices/SectionCapitalMarketServices";
import SectionTrading from "@/section/SectionTrading/SectionTrading";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";

export const metadata: Metadata = {
    title: "معاملات آنلاین بورس، مشتقه و بورس کالا | کارگزاری فدک",
    description: 'کارگزاری فدک ارائه‌دهنده خدمات معاملات آنلاین سهام، اختیار معامله، بورس کالا، اعتبار معاملاتی، بازارگردانی و مشاوره تأمین مالی است.',
    keywords: [
        "کارگزاری فدک",
        "گروه سرمایه گذاری ثروت فدک",
        "کارگزاری بورس",
        "ثبت نام کارگزاری",
        "ثبت نام کارگزاری فدک",
        "کارگزاری بازار سرمایه",
        "خدمات کارگزاری بورس",
        "افتتاح حساب کارگزاری",
        "معاملات آنلاین بورس",
    ],
    alternates: {
        canonical: "",
    }
};


export default function Home() {
    return (
        <>
            <SectionNavbarMenu/>
            <SectionBeginInvestment2/>
            <SectionServiceOfferings/>
            <SectionCapitalMarketServices/>
            <SectionTrading/>
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}
