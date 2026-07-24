import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import {Metadata} from "next";
import SectionEnergy from "@/section/SectionEnergy/SectionEnergy";


export const metadata: Metadata = {
    title: "بورس انرژی",
    description: '',
    alternates: {
        canonical: "/energy",
    }
};

export default function ServicesPage() {

    return (
        <>
            <SectionNavbarMenu/>

            <SectionEnergy/>
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}