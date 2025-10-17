'use client';

import CopyText from "@/components/ui/CopyNumber/CopyNumber";
import Image from "next/image";
import { useEffect } from 'react';


class BankAccountItem {
    name?: string;
    address?: string;
    telephone?: string;
    Branch?: string;
    AccountNumber?: string;
    image?: string;
    ShebaNumber?: string;
}


type BankAccountProps = {
    bankList: Array<BankAccountItem>;
};


export default function BankAccount ({ bankList = []}: BankAccountProps) {

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         new WOW.WOW().init();
    //     }
    // }, []);

    return <>
        <div className="broker-review-wrap">
            {bankList.map((item, index) => (
                <div  key={index} className="broker-review-inner white-bg p-2">
                    <div className="broker-review-item style1 style02 d-flex align-items-center justify-content-around position-relative">
                        <div className="broker-thumb-area">
                            <div className="thumb rounded-circle">
                                <Image
                                    src={item.image || "/assets/images/bank/Bank-markazi/bank-markazi.jpg" }
                                    width={500}
                                    height={500}
                                    className="rounded-3"
                                    alt={item.name || ''}
                                />
                            </div>
                            <div className="cont">
                                <p className="h4 mb-1 black-clr">{item.name}</p>
                                <p className="black-clr"><small>{item.address}</small></p>
                            </div>
                        </div>
                        <div className="custom-line d-xl-block d-none"></div>
                        <ul className="d-grid gap-1">
                            <li className="d-flex align-items-center gap-xxl-2 gap-1 pra-clr text-nowrap fs-small">
                                <i className="bi bi-copy primary-clr headingSix"></i>
                                شعبه:
                                <CopyText text={item.Branch} label={item.Branch} />
                            </li>
                            <li className="d-flex align-items-center gap-xxl-2 gap-1 pra-clr text-nowrap fs-small">
                                <i className="bi bi-copy primary-clr headingSix"></i>
                                شماره تماس:
                                <CopyText text={item.telephone} label={item.telephone} />
                            </li>
                        </ul>
                        <div className="custom-line d-xl-block d-none"></div>
                        <ul className="d-grid gap-1">
                            <li className="d-flex align-items-center gap-xxl-2 gap-1 pra-clr text-nowrap fs-small">
                                <i className="bi bi-copy primary-clr headingSix"></i>
                                شماره شبا:
                                <CopyText text={item.ShebaNumber} label={item.ShebaNumber} />
                            </li>
                            <li className="d-flex align-items-center gap-xxl-2 gap-1 pra-clr text-nowrap fs-small">
                                <i className="bi bi-copy primary-clr headingSix"></i>
                                شماره حساب:
                                <CopyText text={item.AccountNumber} label={item.AccountNumber} />
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </>
}