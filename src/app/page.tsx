import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
// import SectionBeginInvestment from "@/section/SectionBeginInvestment/SectionBeginInvestment";
// import SectionCapitalMarketServices from "@/section/SectionCapitalMarketServices/SectionCapitalMarketServices";
// import SectionFooter from "@/section/SectionFooter/SectionFooter";
// import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
// import SectionServiceOfferings from "@/section/SectionServiceOfferings/SectionServiceOfferings";
// import SectionTrading from "@/section/SectionTrading/SectionTrading";
import {Metadata} from "next";
import {redirect} from "next/navigation";

export const metadata: Metadata = {
    title: 'کارگزاری فدک',
    description: 'Learn more about our company',
};

export default function Home() {
    redirect("/home");

    return (
        <>
            <SectionNavbarMenu/>
            {/*<SectionBeginInvestment/>*/}
            {/*<SectionServiceOfferings/>*/}
            {/*<SectionCapitalMarketServices/>*/}
            {/*<SectionTrading/>*/}
            {/*<SectionOrganization/>*/}
            {/*<SectionFooter/>*/}
        </>
    );
}
