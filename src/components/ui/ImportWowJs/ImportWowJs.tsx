'use client'
import Script from "next/script";

export function ImportWowJs() {
    return (
        <>
            <Script src="/vendor/wow.min.js" strategy="afterInteractive" onLoad={()=>{
                if (typeof window !== 'undefined') {
                    // Use type assertion
                    const WOW = (window as any).WOW;
                    if (WOW) {
                        new WOW().init();
                    }
                }
            }}/>
        </>
    );
}