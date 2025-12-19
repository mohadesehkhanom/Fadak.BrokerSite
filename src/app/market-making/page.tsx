import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionMarketMaking from "@/section/SectionMarketMaking/SectionMarketMaking";

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
