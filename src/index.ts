// Importa os estilos da biblioteca (tema + utilidades Tailwind)
import "./index.css";

// Exporta TODOS os componentes customizados
export * from "./components/custom";

// Exporta utilidades
export { cn } from "./lib/utils";

// Reexporta ícones do lucide-react para uso direto pela lib
// Ex.: import { Check, X } from "design-system-fatec"
export * from "lucide-react";
