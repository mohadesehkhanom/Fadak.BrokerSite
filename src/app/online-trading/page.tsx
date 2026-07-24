import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionOnlineTrading from "@/section/SectionOnlineTrading/SectionOnlineTrading";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "معاملات آنلاین",
    description: '',
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