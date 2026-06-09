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
    icons: {
        icon: [
            { url: "/fav96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [
            { url: "/fav192.png", sizes: "192x192", type: "image/png" },
        ],
    },
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