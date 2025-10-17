import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionBeginInvestment from "@/section/SectionBeginInvestment/SectionBeginInvestment";
import SectionCapitalMarketServices from "@/section/SectionCapitalMarketServices/SectionCapitalMarketServices";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionMission from "@/section/SectionMission/SectionMission";
import SectionOnlineTradingSystem from "@/section/SectionOnlineTradingSystem/SectionOnlineTradingSystem";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionServiceOfferings from "@/section/SectionServiceOfferings/SectionServiceOfferings";
import SectionTrading from "@/section/SectionTrading/SectionTrading";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'About Us | My Website',
    description: 'Learn more about our company',
};

export default function Home() {


    return (
        <>
            <SectionNavbarMenu/>
            {/*  <CopyText text="789012" label="کد فعالسازی" />*/}
            {/*  <CopyText*/}
            {/*      text="secret-api-key-123"*/}
            {/*      label="API Key"*/}
            {/*      className="bg-blue-100 text-blue-800"*/}
            {/*  />*/}
            <SectionBeginInvestment/>
            <SectionServiceOfferings/>
            <SectionCapitalMarketServices/>
            <SectionTrading/>
            {/*<SectionMission/>*/}
            {/*<SectionOnlineTradingSystem/>*/}
            <SectionOrganization/>
            {/*<SectionSupport/>*/}
            {/*<WorkingSection/>*/}
            {/*<SectionHeader></SectionHeader>*/}
            {/*</NavbarMenu>*/}
            <SectionFooter/>
        </>
    );
}
