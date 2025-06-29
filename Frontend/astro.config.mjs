// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react"; 
import node from "@astrojs/node";
import clerk from "@clerk/astro";
import dotenv from "dotenv";
dotenv.config();
// https://astro.build/config
export default defineConfig({
    integrations: [
        clerk(),
        react() // <- ¡agregá esto acá también!
    ],
    adapter: node({
        mode: "standalone",
    }),
    output: "server",
});


