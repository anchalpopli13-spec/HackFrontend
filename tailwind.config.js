/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nova-bg": "#0f111a",
        "nova-surface": "#1a1d2d",
        "nova-surface-hover": "#22253a",
        "primary": "#6366f1",
        "primary-glow": "#818cf8",
        "accent": "#22d3ee",
        "success": "#34d399",
        "warning": "#fbbf24",
        "text-main": "#f1f5f9",
        "text-muted": "#94a3b8",
        "border-subtle": "#334155",
        "primary-hover": "#4f46e5",
        "nova-dark": "#0B0C15",
        "nova-card": "#151725",
        "nova-input": "#1E2130",
        "accent-cyan": "#06b6d4",
        "accent-purple": "#8b5cf6",
        "primary-soft": "rgba(79, 70, 229, 0.15)",
        "background-dark": "#0f1115",
        "surface-dark": "#181b21",
        "surface-hover": "#22262e",
        "card-dark": "#1e2229",
        "text-sub": "#94a3b8",
        "accent-blue": "#38bdf8",
        "accent-pink": "#f472b6",
        "secondary": "#6366F1",
        "background-light": "#f6f6f8",
        "border-dark": "#2A2D40",
        "text-light": "#E0E7FF",
        "text-muted-dark": "#9CA3AF",
        "nova-accent": "#e0e7ff",
        "nova-ai-bg": "#2A2B3F",
        "progress-fill": "#4ADE80",
        "progress-bg": "#374151",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
      boxShadow: {
        'neon': '0 0 20px rgba(99, 102, 241, 0.2)',
        'neon-strong': '0 0 30px rgba(99, 102, 241, 0.4)',
        'glow-success': '0 0 20px rgba(52, 211, 153, 0.2)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.15)',
        'glow-strong': '0 0 30px rgba(99, 102, 241, 0.25)',
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.15)",
        "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        charging: 'charging 2s ease-out forwards',
      },
      keyframes: {
        float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
        },
        charging: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
      }
      }
    },
  },
  plugins: [],
}
