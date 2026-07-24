import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import {Metadata} from "next";
import SectionBeginInvestment2 from "@/section/SectionBeginInvestment2/SectionBeginInvestment2";
import SectionServiceOfferings from "@/section/SectionServiceOfferings/SectionServiceOfferings";
import SectionCapitalMarketServices from "@/section/SectionCapitalMarketServices/SectionCapitalMarketServices";
import SectionTrading from "@/section/SectionTrading/SectionTrading";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";

export const metadata: Metadata = {
    title: "کارگزاری فدک | معاملات آنلاین بورس، مشتقه و بورس کالا",
    description: '',
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
