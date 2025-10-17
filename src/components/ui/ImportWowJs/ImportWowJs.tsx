'use client'
import Script from "next/script";

export function ImportWowJs() {

    return (
        <>
            <Script  src="/vendor/wow.min.js" strategy="afterInteractive" onLoad={()=>{
                    if (typeof window !== 'undefined' && window.WOW) {
                        new window.WOW().init();
                    }
            }}/>
        </>
    )

}