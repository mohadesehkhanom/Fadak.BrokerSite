import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionDerivative from "@/section/SectionDerivative/SectionDerivative";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'مشتقه',
    description: '',
};

export default function Page() {

    return (
        <>
            <SectionNavbarMenu/>
            <SectionDerivative/>
            <SectionOrganization/>
            <SectionFooter/>
        </>

    );
}
