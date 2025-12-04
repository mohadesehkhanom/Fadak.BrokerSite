"use client";
import React from 'react';
import './BankAccount2.css'
const EnergyBankAccounts = [
    {
        name: "بانک ملت",
        address: "خیابان حافظ، مقابل سازمان بورس اوراق بهادار",
        branch: "62059",
        telephone: "85644008",
        shebaNumber: "IR420120000000004543764714",
        accountNumber: "4543764714",
        image: "/assets/images/bank/bank-mellat/bank-mellat.jpg",
    },
];

const KalaBankAccounts = [
    {
        name: "بانک ملت",
        address: "خیابان ولیعصر، خیابان طالقانی، نبش کوچه انزلی، ساختمان بورس کالا ",
        branch: "62117",
        telephone: "85644008",
        shebaNumber: "IR220120000000001905562178",
        accountNumber: "1905562178",
        image: "/assets/images/bank/bank-mellat/bank-mellat.jpg",
    },
    {
        name: "بانک صادرات",
        address: "خیابان طالقانی، بعد از ولیعصر، پلاک 351",
        branch: "1900383",
        telephone: "88383484",
        shebaNumber: "IR110190000000103469579000",
        accountNumber: "0103469579000",
        image: "/assets/images/bank/bank-saderat/bank-saderat.jpg",
    },
    {
        name: "بانک کشاورزی",
        address: "خیابان ولیعصر، خیابان طالقانی، نبش کوچه انزلی، ساختمان بورس کالا",
        branch: "4819",
        telephone: "88383508-9",
        shebaNumber: "IR890160000000000540124011",
        accountNumber: "540124011",
        image: "/assets/images/bank/bank-keshavarzi/Agri-bank_logo.png",
    },
    {
        name: "بانک رفاه کارگران",
        address: "خیابان طالقانی، نبش خیابان بندر انزلی، ساختمان بورس کال",
        branch: "169",
        telephone: "88383489",
        shebaNumber: "IR720130100000000206132475",
        accountNumber: "206132475",
        image: "/assets/images/bank/bank-refah/bank-refah.jpg",
    },
    {
        name: "بانک صنعت و معدن",
        address: "خیابان طالقانی، نبش خیابان بندر انزلی، ساختمان بورس کالا",
        branch: "0145",
        telephone: "88383531",
        shebaNumber: "IR870110000000100049460006",
        accountNumber: "0100049460006",
        image: "/assets/images/bank/bank-Sanat-va-madan/Sanat-va-madan.jpg",
    },
    {
        name: "بانک شهر",
        address: "میدان فردوسی، خیابان سپهبدقرنی، نبش خسرو، پلاک 145",
        branch: "201",
        telephone: "88381797",
        shebaNumber: "IR380610000001001001476096",
        accountNumber: "1001001476096",
        image: "/assets/images/bank/bank-shahr/bank-shahr.jpg",
    }
];

const OraghBahadarBankAccounts = [
    {
        name: "بانک ملی",
        address: "سعادت آباد، بلوار شهرداری، ساختمان شهرداری",
        branch: "695",
        telephone: "021-26359436",
        shebaNumber: "IR410170000000101662426008",
        accountNumber: "0101662426008",
        image: "/assets/images/bank/bank-meli/bank-meli.jpg",
    },
    {
        name: "بانک تجارت",
        address: "خیابان حافظ جنوبی، نبش بن بست ایرانیان",
        branch: "110",
        telephone: "66700156",
        shebaNumber: "IR860180000000000156354880",
        accountNumber: "0156354880",
        image: "/assets/images/bank/bank-tejarat/bank-tejarat.jpg",
    },
    {
        name: "بانک اقتصاد نوین",
        address: "خیابان حافظ جنوبی، نبش کوچه کامران صالحی",
        branch: "106",
        telephone: "66700267",
        shebaNumber: "IR360550010600200053333001",
        accountNumber: "1062533331",
        image: "/assets/images/bank/bank-eghtesad-novin/bank-eghtesad-novin.jpg",
    },
    {
        name: "بانک صادرات ایران",
        address: "خیابان جمهوری، روبروی ساختمان آلومینیوم",
        branch: "239",
        telephone: "6673677",
        shebaNumber: "IR950190000000103537464005",
        accountNumber: "0103537464005",
        image: "/assets/images/bank/bank-saderat/bank-saderat.jpg",
    },
    {
        name: "بانک کار آفرین",
        address: "تهران، فردوسی، خیابان جمهوری، نبش چهار راه سی تیر، پلاک505",
        branch: "5300195",
        telephone: "66742591",
        shebaNumber: "IR760530000000100681200605",
        accountNumber: "0100681200605",
        image: "/assets/images/bank/bank-karafarin/bank-karafarin-2.jpg",
    },
    {
        name: "بانک دی",
        address: "خیابان حافظ جنوبی، نرسیده به خیابان کامران صالح",
        branch: "129",
        telephone: "66713707",
        shebaNumber: "IR300660000000100003996003",
        accountNumber: "0100003996003",
        image: "/assets/images/bank/bank-day/bank-ayandeh.jpg",
    },
    {
        name: "بانک سامان",
        address: "سعادت آباد، بلوار سرو غربی، شماره 77",
        branch: "866",
        telephone: "22094613",
        shebaNumber: "IR420560084904000059259001",
        accountNumber: "84940592591",
        image: "/assets/images/bank/bank-saman/bank-saman.jpg",
    },
    {
        name: "بانک سامان",
        address: "خیابان دکتر فاطمی، رو به روی خیابان کاج، نبش کوچه ششم، پلاک 140",
        branch: "810",
        telephone: "88982181",
        shebaNumber: "IR760560081004000059259001",
        accountNumber: "81040592591",
        image: "/assets/images/bank/bank-saman/bank-saman.jpg",
    },
    {
        name: "بانک پاسارگارد",
        address: "خیابان جمهوری، تقاطع خیابان حافظ",
        branch: "270",
        telephone: "66752340",
        shebaNumber: "IR560570027011010497610001",
        accountNumber: "270110104976101",
        image: "/assets/images/bank/bank-pasargad/bank-pasargad.jpg",
    },
    {
        name: "بانک پارسيان",
        address: "خیابان حافظ، پایین تر از خیابان نوفل لوشاتو",
        branch: "1039",
        telephone: "66723395",
        shebaNumber: "IR620540103902110113680007",
        accountNumber: "0100113680007",
        image: "/assets/images/bank/bank-parsian/bank-parsian.jpg",
    },
    {
        name: "بانک پارسيان",
        address: "یوسف آباد، خیابان سیدجمال الدین اسدآبادی، پلاک 417",
        branch: "1265",
        telephone: "88619754",
        shebaNumber: "IR830540126520101146797601",
        accountNumber: "201-01146797-601",
        image: "/assets/images/bank/bank-parsian/bank-parsian.jpg",
    },
    {
        name: "بانک ملی",
        address: "سعادت آباد، بلوار شهرداری، ساختمان شهرداری",
        branch: "( مخصوص شعب استانی) 695",
        telephone: "26359436",
        shebaNumber: "IR830170000000101751838009",
        accountNumber: "0101751838009",
        image: "/assets/images/bank/bank-meli/bank-meli.jpg",
    },
    {
        name: "بانک ملی",
        address: "سعادت آباد، بلوار شهرداری، ساختمان شهرداری",
        branch: "695",
        telephone: "26359436",
        shebaNumber: "IR050170000000108666006009",
        accountNumber: "0108666006009",
        image: "/assets/images/bank/bank-meli/bank-meli.jpg",
    },
    {
        name: "بانک ملت",
        address: "خیابان حافظ، مقابل سازمان بورس اوراق بهادار",
        branch: "62059",
        telephone: "85644008",
        shebaNumber: "IR360120000000003154667689",
        accountNumber: "3154667689",
        image: "/assets/images/bank/bank-mellat/bank-mellat.jpg",
    },
    {
        name: "بانک ملت",
        address: "خیابان حافظ، مقابل سازمان بورس اوراق بهادار",
        branch: "62059",
        telephone: "85644008",
        shebaNumber: "IR900120000000005010834079",
        accountNumber: "5010834079",
        image: "/assets/images/bank/bank-mellat/bank-mellat.jpg",
    },
    {
        name: "بانک شهر",
        address: "خیابان آزادی، ما بین خ شهیدان و جیحون، ابتدای کوچه مشعوف، پلاک378",
        branch: "218",
        telephone: "66067052",
        shebaNumber: "IR560610000001001003072586",
        accountNumber: "1001003072586",
        image: "/assets/images/bank/bank-shahr/bank-shahr.jpg",
    },
    {
        name: "بانک رفاه کارگران",
        address: "خیابان طالقانی، نبش خیابان بندرانزلی، داخل شرکت بورس کالای ایران، پلاک 351",
        branch: "169",
        telephone: "77572005",
        shebaNumber: "IR280130100000000387277663",
        accountNumber: "0387277663 ",
        image: "/assets/images/bank/bank-refah/bank-refah.jpg",
    },
    {
        name: "بانک ایران ونزوئلا",
        address: "میدان شیخ بهایی، ابتدای سئول، کوچه مهتاب، پلاک 19",
        branch: "100",
        telephone: "86080903 ",
        shebaNumber: "IR544095000000001001885978",
        accountNumber: "1001885978",
        image: "/assets/images/bank/bank-iran-venezuela/Iran_-_Venezuela_logo.png",
    },
    {
        name: "بانک ایران ونزوئلا",
        address: "میدان شیخ بهایی، ابتدای سئول، کوچه مهتاب، پلاک 19",
        branch: "100",
        telephone: "3001885968 ",
        shebaNumber: "IR400950000000003001885968",
        accountNumber: "",
        image: "/assets/images/bank/bank-iran-venezuela/Iran_-_Venezuela_logo.png",
    }
];

const sections = {
    bourse: OraghBahadarBankAccounts,
    kala: KalaBankAccounts,
    energy: EnergyBankAccounts,
} as const;

type SectionKey = keyof typeof sections;

export default function BankAccount2() {
    const [active, setActive] = React.useState<SectionKey>('bourse');

    const currentData = sections[active];

    const copyToClipboard = (text: string) => {
        if (!text?.trim()) return;
        navigator.clipboard.writeText(text.trim()).catch((err) => {
            // console.warn('کپی ناموفق:', err);
            alert('کپی متن با خطا مواجه شد.');
        });
    };

    return (
        <div className="container mt-4">
            <ul className="nav nav-tabs mb-4">
                <li className="nav-item" onClick={() => setActive('bourse')}>
                    <a
                        className={`nav-link ${active === 'bourse' ? 'active' : ''}`}
                        role="tab"
                        aria-selected={active === 'bourse'}
                        style={{ cursor: 'pointer' }}
                    >
                        بورس اوراق
                    </a>
                </li>
                <li className="nav-item" onClick={() => setActive('kala')}>
                    <a
                        className={`nav-link ${active === 'kala' ? 'active' : ''}`}
                        role="tab"
                        aria-selected={active === 'kala'}
                        style={{ cursor: 'pointer' }}
                    >
                        بورس کالا
                    </a>
                </li>
                <li className="nav-item" onClick={() => setActive('energy')}>
                    <a
                        className={`nav-link ${active === 'energy' ? 'active' : ''}`}
                        role="tab"
                        aria-selected={active === 'energy'}
                        style={{ cursor: 'pointer' }}
                    >
                        بورس انرژی
                    </a>
                </li>
            </ul>

            <h3 className="mb-4 text-center">لیست شماره حساب‌های بانکی</h3>

            <div className="table-responsive">
                <table className="table table-striped fadak-striped table-bordered">
                    <thead className="table-fadak">
                        <tr>
                            <th>ردیف</th>
                            <th>لوگو</th>
                            <th className="text-center">شماره شعبه</th>
                            <th className="text-center">آدرس</th>
                            <th className="text-center">شماره حساب</th>
                            <th className="text-center">شماره شبا</th>
                        </tr>
                    </thead>
                    <tbody>
                    {currentData.map((item, index) => (
                        <tr className="align-middle" key={`${item.name}-${item.branch}-${index}`}>
                            <td className="">{index + 1}</td>
                            <td className="" style={{ width: '200px' }}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{ width: '40px', height: 'auto', objectFit: 'contain' }}
                                    className="img-fluid rounded mx-1"
                                />
                                {item.name}
                            </td>
                            <td className="text-center ">{item.branch}</td>
                            <td className="">{item.address}</td>
                            <td className="text-end" style={{ width: '160px' }}>
                                {item.accountNumber ? (
                                    <>
                                        {item.accountNumber}
                                        <button
                                            type="button"
                                            className="btn btn-sm p-0"
                                            onClick={() => copyToClipboard(item.accountNumber)}
                                            disabled={!item.accountNumber?.trim()}
                                            title="کپی شماره حساب">
                                            <i className="bi bi-clipboard fs-5 color-navy"></i>
                                        </button>
                                    </>
                                ) : ''
                                }
                            </td>
                            <td className="text-end" style={{ width: '250px' }}>
                                {item.shebaNumber ? (
                                    <>
                                        {item.shebaNumber || ''}
                                        <button
                                            type="button"
                                            className="btn btn-sm p-0"
                                            onClick={() => copyToClipboard(item.shebaNumber)}
                                            title="کپی شماره شبا">
                                            <i className="bi bi-clipboard fs-5 color-navy"></i>
                                        </button>
                                    </>
                                ) : ''}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}