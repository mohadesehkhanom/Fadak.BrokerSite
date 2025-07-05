import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionFaq from "@/section/SectionFaq/SectionFaq";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionSupport from "@/section/SectionSupport/SectionSupport";
import Certificate from "@/section/certificate/certificate";
import Undici from "undici-types";
import Headers = Undici.Headers;
import SectionHeader from "@/section/SectionHeader/SectionHeader";

export default function Home() {


    return (
        <>
            <SectionHeader/>
            <SectionFaq></SectionFaq>
            <Certificate/>
            <SectionSupport/>
            <SectionOrganization/>
            <SectionFooter/>
        </>

    );
}
