import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
// import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    // postcssPresetEnv(),
    cssnano({ preset: "default" }), // Solo en producción
  ],
};
