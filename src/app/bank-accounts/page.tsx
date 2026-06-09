import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import BankAccount2 from "@/components/ui/BankAccount2/BankAccount2";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'شماره حساب ها',
    description: '',
    icons: {
        icon: [
            { url: "/fav96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [
            { url: "/fav192.png", sizes: "192x192", type: "image/png" },
        ],
    },
};


export default function Page() {

    return (
        <>
            <SectionNavbarMenu/>
            <section className="broker-review-section overflow-hidden section cmn-bg2 ">
                <div className="container">
                    <BankAccount2/>
                </div>
            </section>
            <SectionFooter/>
        </>

    );
}
