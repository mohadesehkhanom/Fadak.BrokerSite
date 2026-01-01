import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionFaq from "@/section/SectionFaq/SectionFaq";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import {Metadata} from "next";



export const metadata: Metadata = {
    title: 'سوالات متداول',
    description: '',
};

export default function Page() {

    return (
        <>
            <SectionNavbarMenu/>
            <SectionFaq/>
            <SectionOrganization/>
            <SectionFooter/>
        </>

    );
}
