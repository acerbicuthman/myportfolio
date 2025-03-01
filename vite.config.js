import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}