const buffer = Buffer.from("Vicky Alexander", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("Vmlja3kgQWxleGFuZGVy", "base64");
console.info(bufferBase64.toString("utf8"));