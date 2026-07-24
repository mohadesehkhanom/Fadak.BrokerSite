import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionManagementTeam from "@/section/SectionManagementTeam/SectionManagementTeam";
import SectionHero from "@/section/SectionHero/SectionHero";
import SectionAbout2 from "@/section/SectionAbout2/SectionAbout2";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'درباره کارگزاری فدک | سوابق، مجوزها و مدیران',
    description: '',
    alternates: {
        canonical: "/about",
    }
};



export default function Page() {


    return (
        <>
            <SectionNavbarMenu/>
            <SectionHero/>
            <SectionAbout2/>
            <SectionManagementTeam/>
            <SectionOrganization/>
            <SectionFooter/>
        </>

    );


}