/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: 'true',
  		padding: '20px',
  		screens: {
  			'2xl': '1440px'
  		}
  	},
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'hsl(var(--foreground))',
  			bg_primary: '#000000',
  			primary: {
  				DEFAULT: 'var(--primary)',
  			},
			gray: {
				DEFAULT: 'var(--gray)',
				2: 'var(--gray2)',
				3: 'var(--gray3)',
				4: 'var(--gray4)',
			},
			brown: {
				DEFAULT: 'var(--brown)',
				2: 'var(--brown2)',
			},

  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			title_2: ["48px", { lineHeight: "60px" }],
  			title_3: ["36px", { lineHeight: "44px" }],
  			title_4: ["30px", { lineHeight: "38px" }],
  			title_5: ["24px", { lineHeight: "32px" }],
  			lg: ["18px", { lineHeight: "28px" }],
  			md: ["16px", { lineHeight: "24px" }],
  			sm: ["14px", { lineHeight: "20px" }]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
