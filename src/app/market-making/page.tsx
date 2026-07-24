import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionMarketMaking from "@/section/SectionMarketMaking/SectionMarketMaking";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "خدمات و صندوق بازارگردانی | کارگزاری فدک",
    description: '',
    alternates: {
        canonical: "/market-making",
    }
};

export default function Page() {

    return (
        <>
            <SectionNavbarMenu/>
            <SectionMarketMaking/>
            <SectionOrganization/>
            <SectionFooter/>
        </>

    );
}
