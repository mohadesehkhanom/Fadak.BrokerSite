import type { MetadataRoute } from "next";
import {getRoutes} from "@/lib/getRoutes";


export const dynamic = "force-static";


export default function sitemap(): MetadataRoute.Sitemap {

    const routes = getRoutes();


    return routes.map((route) => ({
        url: `https://ffg.ir${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "/" ? 1 : 0.7,
    }));

}