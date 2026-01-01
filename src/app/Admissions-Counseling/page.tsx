import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionSupplyConsultant2 from "@/section/SectionSupplyConsultant2/SectionSupplyConsultant2";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'مشاوره پذیرش',
    description: '',
};


export default function Page() {

    return (
        <>
            <SectionNavbarMenu/>
            <SectionSupplyConsultant2/>
            <SectionOrganization/>
            <SectionFooter/>
        </>

    );
}
