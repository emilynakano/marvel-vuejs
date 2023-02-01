import md5 from "md5";

const { VITE_PUBLIC_KEY, VITE_PRIVATE_KEY } = import.meta.env;

export default function configRouter() {
  const timeStamp = Date.now().toString();
  const hash = createHash(timeStamp);

  function createHash(timeStamp: string) {
    const toBeHashed = timeStamp + VITE_PRIVATE_KEY + VITE_PUBLIC_KEY;
    const hashedMessage = md5(toBeHashed);
    return hashedMessage;
  }

  return `ts=${timeStamp}&apikey=${VITE_PUBLIC_KEY}&hash=${hash}`;
}
