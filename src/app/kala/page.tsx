import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionKala from "@/section/SectionKala/SectionKala";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "بورس کالا",
    description: '',
};

export default function ServicesPage() {

    return (
        <>
            <SectionNavbarMenu/>
            <SectionKala/>
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}