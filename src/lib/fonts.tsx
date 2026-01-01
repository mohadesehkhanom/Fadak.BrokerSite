// styles/fonts.ts
import localFont from 'next/font/local';

export const ModamFont = localFont({
    src: [
        {
            path: '../../public/fonts/Modam/ModamWeb-Regular.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Modam/ModamWeb-Bold.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Modam/ModamWeb-Bold.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Modam/ModamWeb-Bold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Modam/ModamWeb-Bold.woff',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-Modam',
    display: 'swap',
});

export const ModamNumber = localFont({
    src: [
        {

            path: '../../public/fonts/Modam/farsi_number/ModamFaNumWeb-Regular.woff',
            weight: 'regular',
            style: 'normal',
        }
    ],
    variable: '--font-Modam-number',
    display: 'swap',
});
