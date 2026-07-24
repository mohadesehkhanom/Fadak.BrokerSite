import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionDerivative from "@/section/SectionDerivative/SectionDerivative";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'معاملات اختیار و بازار مشتقه | کارگزاری فدک',
    description: 'معاملات اختیار و ابزارهای مشتقه را با سامانه امکس، پرتفوی پیشرفته و پشتیبانی تخصصی کارگزاری فدک انجام دهید.',
    keywords: [
        "معاملات اختیار معامله",
        "بازار مشتقه",
        "اختیار معامله",
        "قرارداد اختیار معامله",
        "معاملات آتی سهام",
        "سامانه معاملات اختیار",
        "سامانه امکس",
        "وجه تضمین اختیار معامله",
        "استراتژی اختیار معامله",
        "کارگزاری اختیار معامله",
    ],
    alternates: {
        canonical: "/derivative",
    }
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
