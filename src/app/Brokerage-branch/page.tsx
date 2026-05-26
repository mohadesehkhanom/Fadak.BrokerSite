"use client";

import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/ui/MapComponent"), {
    ssr: false,
    loading: () => <p>در حال بارگذاری نقشه...</p>,
});

// ✅ تعریف لیست استان‌ها به‌صورت ثابت (immutable)
const provinces = [
    "Tehran",
    "South Khorasan",
] as const; // ⬅️ این کلید است!

// ✅ استخراج نوع استان‌ها
type Province = (typeof provinces)[number];

// ✅ نگاشت نام استان‌ها از انگلیسی به فارسی
const provinceNamesFa: Record<Province, string> = {
    Tehran: "تهران",
    "South Khorasan": "خراسان جنوبی",
};

// ✅ تعریف مختصات استان‌ها
const provinceCenters: Record<Province, [number, number]> = {
    Tehran: [35.6892, 51.3890],
    "South Khorasan": [32.8649, 59.2211]
};

interface Branch {
    name: string;
    address: string;
    phone: string;
    fax: string;
    email: string;
    postalCode: string;
    position: [number, number];
}

// ✅ شعب هر استان
const branches: Record<Province, Branch[]> = {
    Tehran: [
        {
            name: "دفتر حافظ تهران",
            address: "خیابان حافظ جنوبی، بعد از سازمان بورس، بن‌بست ایرانیان، ساختمان ایرانیان، پلاک 2، طبقه اول و طبقه دوم",
            phone: "021-26350393",
            fax: "",
            email: "",
            postalCode: "",
            position: [35.692062, 51.410490],
        }
    ],

    "South Khorasan": [
        {
            name: "شعبه بیرجند",
            address: "سه راه اسدی، سازمان بورس، طبقه همکف",
            phone: "0563-2211933",
            fax: "",
            email: "",
            postalCode: "9714685451",
            position: [32.8821890, 59.2108500],
        },
    ],

};

export default function Page() {
    const [selectedProvince, setSelectedProvince] = useState<Province>("Tehran");

    const currentBranches = branches[selectedProvince];
    const mapCenter = provinceCenters[selectedProvince];


        useEffect(() => {
            document.title = 'شعب و دفاتر';
        }, []);

    return (
        <>
            <SectionNavbarMenu />

            <section className="contact section py-5">
                <div className="container">
                    <div className="row gy-5 justify-content-center justify-content-lg-between">
                        {/* جدول شعب */}
                        <div className="col-12 col-lg-7">
                            <div className="p-4 bg-white rounded shadow-sm h-100">
                                <h4 className="mb-3">شعبات استان {provinceNamesFa[selectedProvince]}</h4>
                                <div className="col-12 mb-3">
                                    <select
                                        className="form-select"
                                        value={selectedProvince}
                                        onChange={(e) => setSelectedProvince(e.target.value as Province)}
                                    >
                                        {provinces.map((p) => (
                                            <option key={p} value={p}>
                                                {provinceNamesFa[p]}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="">
                                    {currentBranches.map((b, i) => (
                                        <div key={i} className="card border shadow-sm mb-3 horizontal-card">
                                            <div className="card-body p-3">
                                                <div className="row align-items-center g-0 g-md-3">
                                                    <div className="col-12 col-md-4">
                                                        <div className="d-flex align-items-center">
                                                            <i className="bi bi-building text-primary me-2"></i>
                                                            <div>
                                                                {/*<span className="text-muted d-block d-md-none">نام شعبه</span>*/}
                                                                <a
                                                                    href={`https://www.google.com/maps/dir/?api=1&destination=${b.position[0]},${b.position[1]}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className=" btn-sm text-nowrap"
                                                                >
                                                                    <span className="fw-bold">{b.name}</span>
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    {b.phone && (
                                                        <div className="col-12 col-md-4">
                                                            <div className="d-flex align-items-center">
                                                                <i className="bi bi-telephone-fill text-success me-2"></i>
                                                                <div>
                                                                    {/*<small className="text-muted d-block d-md-none">تلفن</small>*/}
                                                                    <a href={`tel:${b.phone}`} className="text-decoration-none number-farsi">{b.phone}</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}


                                                    {b.postalCode && (<div className="col-12 col-md-4">
                                                        <div className="d-flex align-items-center">
                                                            <i className="bi bi-postcard-fill text-info me-2"></i>
                                                            <div>
                                                                <small className="text-muted d-block d-md-none">کد
                                                                    پستی</small>
                                                                <span className="number-farsi">{b.postalCode || '-'}</span>
                                                            </div>
                                                        </div>
                                                    </div>) }

                                                    <div className="col-12 col-md-12">
                                                        <div className="d-flex align-items-center">
                                                            <a
                                                                href={`https://www.google.com/maps/dir/?api=1&destination=${b.position[0]},${b.position[1]}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className=" btn-sm text-nowrap"
                                                            >
                                                                <i title="مسیریابی" className="bi bi-geo-alt-fill text-danger me-2"></i>
                                                            </a>

                                                            <div>
                                                                {/*<small className="text-muted d-block d-md-none">آدرس</small>*/}
                                                                <span>{b.address}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* نقشه */}
                        <div className="col-12 col-lg-5">
                            <div className="p-2 bg-white rounded shadow-sm" style={{ height: "500px" }}>
                                <MapComponent center={mapCenter} branches={currentBranches} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionOrganization />
            <SectionFooter />
        </>
    );
}
