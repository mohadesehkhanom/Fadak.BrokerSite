import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionDerivative from "@/section/SectionDerivative/SectionDerivative";

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
