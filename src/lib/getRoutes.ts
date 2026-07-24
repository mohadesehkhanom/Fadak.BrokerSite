import fs from "fs";
import path from "path";


function getAppDirectory() {

    const possiblePaths = [
        path.join(process.cwd(), "app"),
        path.join(process.cwd(), "src/app"),
    ];


    for (const p of possiblePaths) {
        if (fs.existsSync(p)) {
            return p;
        }
    }


    throw new Error("app directory not found");
}



export function getRoutes(
    dir = getAppDirectory(),
    base = ""
): string[] {

    const routes: string[] = [];

    const files = fs.readdirSync(dir);


    for (const file of files) {

        const fullPath = path.join(dir, file);


        const stat = fs.statSync(fullPath);


        if (stat.isDirectory()) {


            // حذف فولدرهای Next
            if (
                file.startsWith("_") ||
                file.startsWith(".") ||
                file.startsWith("(")
            ) {
                continue;
            }


            routes.push(
                ...getRoutes(
                    fullPath,
                    `${base}/${file}`
                )
            );
        }


        if (
            file === "page.tsx" ||
            file === "page.jsx" ||
            file === "page.js"
        ) {

            routes.push(
                base === "" ? "/" : base
            );

        }

    }


    return routes;
}