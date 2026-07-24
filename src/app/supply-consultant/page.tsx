import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionSupplyConsultant from "@/section/SectionSupplyConsultant/SectionSupplyConsultant";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "مشاوره عرضه اوراق بهادار و تأمین مالی | کارگزاری فدک",
    description: '',
    alternates: {
        canonical: "/supply-consultant",
    }
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