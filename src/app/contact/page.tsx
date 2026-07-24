import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionContactUs from "@/section/SectionContactUs/SectionContactUs";
import {Metadata} from "next";



export const metadata: Metadata = {
    title: "تماس با کارگزاری فدک",
    description: '',
    alternates: {
        canonical: "/contact",
    }
};


export default function Page() {

    return (
        <>
            {/*<TestHeader/>*/}
            <SectionNavbarMenu/>
            <SectionContactUs/>
            <SectionOrganization/>
            <SectionFooter/>
        </>

    );
}
