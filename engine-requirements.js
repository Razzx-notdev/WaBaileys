const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 22) {
      console.error(
    `\n❌ Paket ini membutuhkan Node.js 22+ untuk berjalan dengan baik.\n` +
    `   Anda menggunakan Node.js ${process.versions.node}.\n` +
    `   Silakan upgrade ke Node.js 22+ untuk melanjutkan.\n`
  );
  process.exit(1);
}
