import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionBeginInvestment from "@/section/SectionBeginInvestment/SectionBeginInvestment";
import SectionServiceOfferings from "@/section/SectionServiceOfferings/SectionServiceOfferings";
import SectionCapitalMarketServices from "@/section/SectionCapitalMarketServices/SectionCapitalMarketServices";
import SectionTrading from "@/section/SectionTrading/SectionTrading";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "کارگزاری فدک",
    description: '',
};

export default function Page() {

    return (
        <>
            <SectionNavbarMenu/>
            <SectionBeginInvestment/>
            <SectionServiceOfferings/>
            <SectionCapitalMarketServices/>
            <SectionTrading/>
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}