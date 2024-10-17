import { LitNodeClient } from "@lit-protocol/lit-node-client";

export const litSetup = async () => {
  const litNodeClient = new LitNodeClient({
    litNetwork: 'datil',
    debug: true,
  })

  await litNodeClient.connect();
}