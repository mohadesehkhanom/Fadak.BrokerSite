"use client";

import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import {useState, useEffect} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";


// تنظیم آیکون leaflet برای Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// کامپوننت داخلی برای flyTo روی مرکز استان
function MapFlyTo({center}) {
    const map = useMap();
    useEffect(() => {
        if (center) map.flyTo(center, 12, {duration: 1.5});
    }, [center, map]);
    return null;
}

export default function Page() {


    // فقط استان‌های مورد نظر
    const provinces = [
        "اصفهان",
        "تهران",
        "آذربایجان غربی",
        "خراسان جنوبی",
        "کرمانشاه"
    ];



    const [selectedProvince, setSelectedProvince] = useState("تهران");

    // مختصات مرکز استان‌ها
    const provinceCenters = {
        "اصفهان": [32.6546, 51.6680],
        "تهران": [35.6892, 51.3890],
        "آذربایجان غربی": [37.5553, 45.0723], // ارومیه
        "خراسان جنوبی": [32.8649, 59.2211], // بیرجند
        "کرمانشاه": [34.3142, 47.0650],
    };

    // اطلاعات شعب با داده واقعی
    const branches = {
        "اصفهان": [
            {
                name: "شعبه اصفهان",
                address: "چهارراه نظر، سازمان بورس، طبقه سوم",
                phone: "031-36671986",
                fax: "",
                email: "",
                postalCode: "",
                position: [32.6550, 51.6685],
            }
        ],
        "تهران": [
            {
                name: "شعبه تهران",
                address: "خیابان حافظ جنوبی، بعد از سازمان بورس، بن‌بست ایرانیان، ساختمان ایرانیان، پلاک 2، طبقه اول",
                phone: "021-26350393",
                fax: "",
                email: "",
                postalCode: "",
                position: [35.6895, 51.3895],
            }
        ],
        "آذربایجان غربی": [
            {
                name: "شعبه ارومیه",
                address: "خیابان برق، جنب تربیت بدنی، سازمان بورس، طبقه همکف",
                phone: "044-33477196",
                fax: "",
                email: "",
                postalCode: "5715794344",
                position: [37.5553, 45.0723],
            }
        ],
        "خراسان جنوبی": [
            {
                name: "شعبه بیرجند",
                address: "سه راه اسدی، سازمان بورس، طبقه همکف",
                phone: "0563-2211933",
                fax: "",
                email: "",
                postalCode: "9714685451",
                position: [32.8649, 59.2211],
            }
        ],
        "کرمانشاه": [
            {
                name: "شعبه کرمانشاه",
                address: "بلوار شهید بهشتی، سازمان بورس، طبقه دوم",
                phone: "0833-8254514",
                fax: "",
                email: "",
                postalCode: "6714648163",
                position: [34.3142, 47.0650],
            }
        ]
    };

    const currentBranches = branches[selectedProvince] || [];
    const mapCenter = provinceCenters[selectedProvince] || [32.4279, 53.6880];

    return (
        <>
            <SectionNavbarMenu/>

            <section className="contact section py-5">
                <div className="container">
                    <div className="row gy-5 justify-content-center justify-content-lg-between">

                        {/* جدول شعب */}
                        <div className="col-12 col-lg-7">
                            <div className="p-4 bg-white rounded shadow-sm h-100">
                                <h4 className="mb-3">شعبات استان {selectedProvince}</h4>
                                <div className="col-12 mb-3">
                                    {/*<label className="form-label">استان</label>*/}
                                    <select
                                        className="form-select"
                                        value={selectedProvince}
                                        onChange={(e) => setSelectedProvince(e.target.value)}
                                    >
                                        {provinces.map((p) => (
                                            <option key={p} value={p}>{p}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="table-responsive">
                                    <table
                                        className="table table-striped table-bordered align-middle table-hover table-sm table-bordered">
                                        <thead className="table-light">
                                        <tr>
                                            <th>نام شعبه</th>
                                            <th>آدرس</th>
                                            <th>تلفن</th>
                                            <th>کد پستی</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {currentBranches.map((b, i) => (
                                            <tr key={i}>
                                                <td>{b.name}</td>
                                                <td>{b.address}</td>
                                                <td><a href={`tel:${b.phone}`}>{b.phone}</a></td>
                                                <td>{b.postalCode}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* نقشه */}
                        <div className="col-12 col-lg-5">
                            <div className="p-2 bg-white rounded shadow-sm" style={{height: "500px"}}>
                                <MapContainer
                                    center={mapCenter}
                                    zoom={12}
                                    style={{height: "100%", width: "100%"}}
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                                    />
                                    <MapFlyTo center={mapCenter}/>
                                    {currentBranches.map((branch, idx) => (
                                        <Marker key={idx} position={branch.position}>
                                            <Popup>
                                                <div className="dir-rtl ">
                                                    <h5>{branch.name}</h5>
                                                    <p>{branch.address}</p>
                                                    <p><i className="bi bi-postcard"></i> کد پستی: {branch.postalCode}
                                                    </p>
                                                    <p>
                                                        <i className="bi bi-telephone-fill"></i>
                                                        تماس: <a href={`tel:${branch.phone}`}>{branch.phone}</a><br/>
                                                    </p>
                                                </div>
                                            </Popup>
                                        </Marker>
                                    ))}
                                </MapContainer>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <SectionOrganization/>
            <SectionFooter/>
        </>
    );
}
