import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // eslint: {
    //     // Warning: This allows production builds to successfully complete even if
    //     // your project has ESLint errors.
    //     ignoreDuringBuilds: true,
    // }
    trailingSlash: false,
    output: 'export', // این خط بسیار مهم است
    // اگر از تصاویر Next.js (next/image) استفاده می‌کنید، باید غیرفعال شود
    // چون در حالت استاتیک بهینه ساز تصویر سمت سرور نداریم
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
