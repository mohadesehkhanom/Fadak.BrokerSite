import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionSupplyConsultant from "@/section/SectionSupplyConsultant/SectionSupplyConsultant";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "مشاوره عرضه اوراق بهادار و تأمین مالی | کارگزاری فدک",
    description: '',
    keywords: [
        "مشاور عرضه اوراق بهادار",
        "عرضه اوراق بهادار",
        "انتشار اوراق بدهی",
        "تأمین مالی از بازار سرمایه",
        "مشاوره تأمین مالی شرکت‌ها",
        "عرضه اولیه سهام",
        "تهیه بیانیه ثبت",
        "انتشار اوراق تأمین مالی",
    ],
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