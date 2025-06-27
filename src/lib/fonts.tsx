// styles/fonts.ts
import localFont from 'next/font/local';

export const yekanBakh = localFont({
    src: [
        {
            path: '../../public/fonts/yekanbakh/YekanBakhFaNum-Light.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/yekanbakh/YekanBakhFaNum-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/yekanbakh/YekanBakhFaNum-SemiBold.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/yekanbakh/YekanBakhFaNum-Bold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/yekanbakh/YekanBakhFaNum-ExtraBold.woff',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-yekanbakh',
    display: 'swap',
});
