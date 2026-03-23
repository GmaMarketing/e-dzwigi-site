try {
  console.log('Resolving tailwindcss...');
  console.log('Path:', require.resolve('tailwindcss'));
} catch (e) {
  console.error('Failed to resolve tailwindcss');
  console.error(e.message);
}
