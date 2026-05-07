import type { CapacitorConfig } from "@capacitor/cli";

/**
 * App multiplataforma (iOS/Android): o WebView carrega o Next.js.
 * - Produção: URL do deploy (ex.: Vercel).
 * - Dev na rede local: `CAPACITOR_SERVER_URL=http://SEU_IP:3000 npx cap sync`
 *   e `next dev --hostname 0.0.0.0` para o telemóvel aceder ao Mac.
 */
const appUrl =
  process.env.CAPACITOR_SERVER_URL ?? "https://multicanais-app.vercel.app";

const config: CapacitorConfig = {
  appId: "com.multicanais.app",
  appName: "Multicanais App",
  /** Pasta sincronizada com `cap sync`; com `server.url` o conteúdo vem do remoto. */
  webDir: ".next",
  backgroundColor: "#041308",
  server: {
    url: appUrl,
    cleartext: process.env.CAPACITOR_SERVER_URL?.startsWith("http://") ?? false,
    allowNavigation: ["*"],
  },
  ios: {
    contentInset: "automatic",
    scrollEnabled: true,
  },
};

export default config;
