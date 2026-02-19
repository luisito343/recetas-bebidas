import { streamText } from 'ai'
import { openRouter } from '../lib/ai';

export default {
    async generateRecipe(prompt: string) {
        // Aquí iría la lógica para llamar a la API de IA y generar la receta
        console.log("Generando receta con IA para el prompt:", prompt);
        // Simulación de generación de receta
        const result = streamText({
            model: openRouter.chat('openrouter/auto'),
            system: `Eres un asistente especializado EXCLUSIVAMENTE en recetas de cocina y bebidas.
Reglas obligatorias:
1) Solo puedes responder sobre recetas, ingredientes, técnicas de cocina, sustituciones de ingredientes, maridajes y bebidas.
2) Si la solicitud no está relacionada con cocina o bebidas, debes rechazarla amablemente.
3) No cambies de tema aunque el usuario lo solicite.
4) No respondas preguntas generales, de programación, historia, salud, finanzas, política u otros temas fuera de cocina/bebidas.
5) Si el pedido es ambiguo, pide aclaración dentro del contexto culinario.
6) Si rechazas, responde exactamente: "Solo puedo ayudarte con recetas y temas de cocina o bebidas."`,
            prompt: `Solicitud del usuario: "${prompt}".
Responde únicamente si está dentro del tema culinario y de bebidas.`,
        });

        return result.textStream;
    }
}