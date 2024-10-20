import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function Home() {
  return (
    <TonConnectUIProvider manifestUrl="https://<url>/tonconnect-manifest.json">
      <div id="root"></div>
    </TonConnectUIProvider>
  );
}
