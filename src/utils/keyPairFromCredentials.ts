import { sha512 } from "js-sha512";
import * as ethers from "ethers";
import * as randomSeed from "random-seed";

export async function generateKeysFromCredentials(
  credentials: any
): Promise<Object> {
  const hash: string = sha512(credentials.login + credentials.password);

  const rand: any = randomSeed.create(hash);

  const privateKeyBuffer = Buffer.alloc(32, 0);

  for (let i = 0; i < privateKeyBuffer.length; i++) {
    privateKeyBuffer[i] = rand.range(256);
  }
  const privateKey = "0x" + privateKeyBuffer.toString("hex");
  const wallet = new ethers.Wallet(privateKey);

  const address = wallet.address;

  return { privateKey, address };
}
