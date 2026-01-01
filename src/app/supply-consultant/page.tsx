import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionSupplyConsultant from "@/section/SectionSupplyConsultant/SectionSupplyConsultant";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "مشاوره عرضه",
    description: '',
};


export default function ServicesPage() {

    return (
        <>
            <SectionNavbarMenu/>

            <SectionSupplyConsultant/>
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}