import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionKala from "@/section/SectionKala/SectionKala";
import {Metadata} from "next";
import SectionEnergy from "@/section/SectionEnergy/SectionEnergy";


export const metadata: Metadata = {
    title: "بورس کالا و انرژی",
    description: '',
};

export default function ServicesPage() {

    return (
        <>
            <SectionNavbarMenu/>

            <SectionEnergy/>
            {/*<SectionEnergy/>*/}
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}