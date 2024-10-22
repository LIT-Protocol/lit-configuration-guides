import { LitNodeClient } from "@lit-protocol/lit-node-client";
import { version as LitNodeClientVersion } from '@lit-protocol/constants';

export const litSetup = async () => {
  const litNodeClient = new LitNodeClient({
    litNetwork: 'datil',
    debug: true,
  })

  await litNodeClient.connect();
}

export {
  LitNodeClientVersion
}