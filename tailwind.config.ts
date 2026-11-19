import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#201b18', cream: '#f8f5ef', gold: '#b18a55', muted: '#82776d' }, fontFamily: { display: ['Georgia', 'serif'] }, boxShadow: { soft: '0 18px 50px rgba(44,34,24,.08)' } } }, plugins: [] };
export default config;
