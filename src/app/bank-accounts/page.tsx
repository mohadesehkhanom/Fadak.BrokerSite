'use client'
import BankAccount from "@/components/ui/BankAccount/BankAccount";
import 'animate.css';
import './bank-accounts.css';
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import {Metadata} from "next";
import {useEffect} from "react";



export default function Page() {

    useEffect(() => {
        document.title = 'About Us | My Website';
    }, []);


    const EnergyBankAccounts = [
        {
            name: "بانک ملت",
            address: "خیابان حافظ، مقابل سازمان بورس اوراق بهادار",
            Branch: "62059",
            telephone: "85644008",
            ShebaNumber: "IR420120000000004543764714",
            AccountNumber: "4543764714",
            image: "/assets/images/bank/bank-mellat/bank-mellat.jpg",
        }];

    const KalaBankAccounts = [
        {
            name: "بانک ملت",
            address: "خیابان ولیعصر، خیابان طالقانی، نبش کوچه انزلی، ساختمان بورس کالا ",
            Branch: "62117",
            telephone: "85644008",
            ShebaNumber: "IR220120000000001905562178",
            AccountNumber: "1905562178",
            image: "/assets/images/bank/bank-mellat/bank-mellat.jpg",
        },
        {
            name: "بانک صادرات",
            address: "خیابان طالقانی، بعد از ولیعصر، پلاک 351",
            Branch: "1900383",
            telephone: "88383484",
            ShebaNumber: "IR110190000000103469579000",
            AccountNumber: "0103469579000",
            image: "/assets/images/bank/bank-saderat/bank-saderat.jpg",
        },
        {
            name: "بانک کشاورزی",
            address: "خیابان ولیعصر، خیابان طالقانی، نبش کوچه انزلی، ساختمان بورس کالا",
            Branch: "4819",
            telephone: "88383508-9",
            ShebaNumber: "IR890160000000000540124011",
            AccountNumber: "540124011",
            image: "/assets/images/bank/bank-keshavarzi/Agri-bank_logo.png",
        },
        {
            name: "بانک رفاه کارگران",
            address: "خیابان طالقانی، نبش خیابان بندر انزلی، ساختمان بورس کال",
            Branch: "169",
            telephone: "88383489",
            ShebaNumber: "IR720130100000000206132475",
            AccountNumber: "206132475",
            image: "/assets/images/bank/bank-refah/bank-refah.jpg",
        },
        {
            name: "بانک صنعت و معدن",
            address: "خیابان طالقانی، نبش خیابان بندر انزلی، ساختمان بورس کالا",
            Branch: "0145",
            telephone: "88383531",
            ShebaNumber: "IR870110000000100049460006",
            AccountNumber: "0100049460006",
            image: "/assets/images/bank/bank-Sanat-va-madan/Sanat-va-madan.jpg",
        },
        {
            name: "بانک شهر",
            address: "میدان فردوسی، خیابان سپهبدقرنی، نبش خسرو، پلاک 145",
            Branch: "201",
            telephone: "88381797",
            ShebaNumber: "IR380610000001001001476096",
            AccountNumber: "1001001476096",
            image: "/assets/images/bank/bank-shahr/bank-shahr.jpg",
        },

    ];


    const OraghBahadarBankAccounts = [
        {
            name: "بانک ملی",
            address: "سعادت آباد، بلوار شهرداری، ساختمان شهرداری",
            Branch: "695",
            telephone: "021-26359436",
            ShebaNumber: "IR410170000000101662426008",
            AccountNumber: "0101662426008",
            image: "/assets/images/bank/bank-meli/bank-meli.jpg",
        },
        {
            name: "بانک تجارت",
            address: "خیابان حافظ جنوبی، نبش بن بست ایرانیان",
            Branch: "110",
            telephone: "66700156",
            ShebaNumber: "IR860180000000000156354880",
            AccountNumber: "0156354880",
            image: "/assets/images/bank/bank-tejarat/bank-tejarat.jpg",
        },
        {
            name: "بانک اقتصاد نوین",
            address: "خیابان حافظ جنوبی، نبش کوچه کامران صالحی",
            Branch: "106",
            telephone: "66700267",
            ShebaNumber: "IR360550010600200053333001",
            AccountNumber: "1062533331",
            image: "/assets/images/bank/bank-eghtesad-novin/bank-eghtesad-novin.jpg",
        },
        {
            name: "بانک صادرات ایران",
            address: "خیابان جمهوری، روبروی ساختمان آلومینیوم",
            Branch: "239",
            telephone: "6673677",
            ShebaNumber: "IR950190000000103537464005",
            AccountNumber: "0103537464005",
            image: "/assets/images/bank/bank-saderat/bank-saderat.jpg",
        },
        {
            name: "بانک کار آفرین",
            address: "تهران، فردوسی، خیابان جمهوری، نبش چهار راه سی تیر، پلاک505",
            Branch: "5300195",
            telephone: "66742591",
            ShebaNumber: "IR760530000000100681200605",
            AccountNumber: "0100681200605",
            image: "/assets/images/bank/bank-karafarin/bank-karafarin-2.jpg",
        },
        {
            name: "بانک دی",
            address: "خیابان حافظ جنوبی، نرسیده به خیابان کامران صالح",
            Branch: "129",
            telephone: "66713707",
            ShebaNumber: "IR300660000000100003996003",
            AccountNumber: "0100003996003",
            image: "/assets/images/bank/bank-day/bank-ayandeh.jpg",
        },
        {
            name: "بانک سامان",
            address: "سعادت آباد، بلوار سرو غربی، شماره 77",
            Branch: "866",
            telephone: "22094613",
            ShebaNumber: "IR420560084904000059259001",
            AccountNumber: "84940592591",
            image: "/assets/images/bank/bank-saman/bank-saman.jpg",
        },
        {
            name: "بانک سامان",
            address: "خیابان دکتر فاطمی، رو به روی خیابان کاج، نبش کوچه ششم، پلاک 140",
            Branch: "810",
            telephone: "88982181",
            ShebaNumber: "IR760560081004000059259001",
            AccountNumber: "81040592591",
            image: "/assets/images/bank/bank-saman/bank-saman.jpg",
        },
        {
            name: "بانک پاسارگارد",
            address: "خیابان جمهوری، تقاطع خیابان حافظ",
            Branch: "270",
            telephone: "۶۶۷۵۲۳۴۰",
            ShebaNumber: "IR560570027011010497610001",
            AccountNumber: "270110104976101",
            image: "/assets/images/bank/bank-pasargad/bank-pasargad.jpg",
        },
        {
            name: "بانک پارسيان",
            address: "خیابان حافظ، پایین تر از خیابان نوفل لوشاتو",
            Branch: "1039",
            telephone: "66723395",
            ShebaNumber: "IR620540103902110113680007",
            AccountNumber: "0100113680007",
            image: "/assets/images/bank/bank-parsian/bank-parsian.jpg",
        },
        {
            name: "بانک پارسيان",
            address: "یوسف آباد، خیابان سیدجمال الدین اسدآبادی، پلاک 417",
            Branch: "1265",
            telephone: "88619754",
            ShebaNumber: "IR830540126520101146797601",
            AccountNumber: "201-01146797-601",
            image: "/assets/images/bank/bank-parsian/bank-parsian.jpg",
        },
        {
            name: "بانک ملی",
            address: "سعادت آباد، بلوار شهرداری، ساختمان شهرداری",
            Branch: "( مخصوص شعب استانی) 695",
            telephone: "26359436",
            ShebaNumber: "IR830170000000101751838009",
            AccountNumber: "0101751838009",
            image: "/assets/images/bank/bank-meli/bank-meli.jpg",
        },
        {
            name: "بانک ملی",
            address: "سعادت آباد، بلوار شهرداری، ساختمان شهرداری",
            Branch: "695",
            telephone: "26359436",
            ShebaNumber: "IR050170000000108666006009",
            AccountNumber: "0108666006009",
            image: "/assets/images/bank/bank-meli/bank-meli.jpg",
        },
        {
            name: "بانک ملت",
            address: "خیابان حافظ، مقابل سازمان بورس اوراق بهادار",
            Branch: "62059",
            telephone: "85644008",
            ShebaNumber: "IR360120000000003154667689",
            AccountNumber: "3154667689",
            image: "/assets/images/bank/bank-mellat/bank-mellat.jpg",
        },
        {
            name: "بانک ملت",
            address: "خیابان حافظ، مقابل سازمان بورس اوراق بهادار",
            Branch: "62059",
            telephone: "85644008",
            ShebaNumber: "IR900120000000005010834079",
            AccountNumber: "5010834079",
            image: "/assets/images/bank/bank-mellat/bank-mellat.jpg",
        },
        {
            name: "بانک شهر",
            address: "خیابان آزادی، ما بین خ شهیدان و جیحون، ابتدای کوچه مشعوف، پلاک378",
            Branch: "218",
            telephone: "66067052",
            ShebaNumber: "IR560610000001001003072586",
            AccountNumber: "1001003072586",
            image: "/assets/images/bank/bank-shahr/bank-shahr.jpg",
        },
        {
            name: "بانک رفاه کارگران",
            address: "خیابان طالقانی، نبش خیابان بندرانزلی، داخل شرکت بورس کالای ایران، پلاک 351",
            Branch: "169",
            telephone: "77572005",
            ShebaNumber: "IR280130100000000387277663",
            AccountNumber: "0387277663 ",
            image: "/assets/images/bank/bank-refah/bank-refah.jpg",
        },
        {
            name: "بانک ایران ونزوئلا",
            address: "میدان شیخ بهایی، ابتدای سئول، کوچه مهتاب، پلاک 19",
            Branch: "100",
            telephone: "86080903 ",
            ShebaNumber: "IR5440950000000001001885978",
            AccountNumber: "1001885978",
            image: "/assets/images/bank/bank-iran-venezuela/Iran_-_Venezuela_logo.png",
        },
        {
            name: "بانک ایران ونزوئلا",
            address: "میدان شیخ بهایی، ابتدای سئول، کوچه مهتاب، پلاک 19",
            Branch: "100",
            telephone: "3001885968 ",
            ShebaNumber: "IR400950000000003001885968",
            AccountNumber: "",
            image: "/assets/images/bank/bank-iran-venezuela/Iran_-_Venezuela_logo.png",
        },
    ];


    return (
        <>

            <SectionNavbarMenu/>

            <section className="broker-review-section overflow-hidden section cmn-bg2 ">
                <div className="container">

                    <div className="section-card securities-section ">
                        <div className="section-content">
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="bi icon bi-graph-up"></i>
                                </div>
                                <h2 className="section-title section__header-title">اوراق بهادار</h2>
                            </div>

                            <p className="section-description">
                                حساب‌های مربوط به معاملات بورس اوراق بهادار شامل سهام، اوراق مشارکت و سایر اوراق مالی
                            </p>

                            <div className="account-container scroll-section">
                                <BankAccount bankList={OraghBahadarBankAccounts}></BankAccount>
                            </div>
                        </div>
                    </div>

                    <div className="section-card commodity-section">
                        <div className="section-content">
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="bi icon bi-coin"></i>
                                </div>
                                <h2 className="section-title section__header-title">کالا</h2>
                            </div>

                            <p className="section-description">
                                حساب‌های مربوط به معاملات بورس کالا شامل فلزات، محصولات کشاورزی و سایر کالاهای قابل
                                معامله
                            </p>

                            <div className="account-container scroll-section">
                                <BankAccount bankList={KalaBankAccounts}></BankAccount>
                            </div>
                        </div>
                    </div>

                    <div className="section-card energy-section">
                        <div className="section-content">
                            <div className="section-header">
                                <div className="section-icon">
                                    <i className="bi icon bi-lightning-fill"></i>
                                </div>
                                <h2 className="section-title section__header-title">انرژی</h2>
                            </div>

                            <p className="section-description">
                                حساب‌های مربوط به معاملات بورس انرژی شامل برق، نفت، گاز و سایر حامل‌های انرژی
                            </p>

                            <div className="account-container scroll-section">
                                <BankAccount bankList={EnergyBankAccounts}></BankAccount>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <SectionFooter/>
        </>

    );
}
