import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionKala from "@/section/SectionKala/SectionKala";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "کارگزاری بورس کالا و دریافت کد بورس کالا | کارگزاری فدک",
    description: 'برای دریافت کد بورس کالا، افتتاح حساب وکالتی و انجام معاملات محصولات صنعتی، معدنی، پتروشیمی و سیمان با فدک همراه شوید.',
    keywords: [
        "کارگزاری بورس کالا",
        "دریافت کد بورس کالا",
        "ثبت نام بورس کالا",
        "افتتاح حساب وکالتی",
        "خرید از بورس کالا",
        "سامانه ایبیگو",
        "معاملات بورس کالا",
        "خرید خودرو از بورس کالا",
        "خرید سیمان از بورس کالا",
        "معاملات محصولات پتروشیمی",
        "بورس انرژی",
        "کد بورس کالا اشخاص حقوقی",
    ],
    alternates: {
        canonical: "/kala",
    }
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