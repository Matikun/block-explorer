const fontSizes = [12, 14, 16, 18, 20, 24, 36, 48, 80, 96];
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const lineHeights = [1, 1.25, 1.5];
const radii = ['0px', '2px', '4px', '8px', '16px', '48px'];
const space = [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512];

const defaultValues = {
	space,
	fontSizes,
	fontWeights,
	lineHeights,
	radii,
};
export const columnsBreakpoints = { lg: 1, md: 1, xs: 1 };

const theme = {
	dark: {
		...defaultValues,
		colors: {
			primary: { dark: '#121212', light: '#272727' },
			interactive: '#6C63FF',
			bg: { dark: '#121212', light: '#272727' },
			text: { title: '#FDFDFD', paragraph: '#bebec0 ' },
		},
	},
};

export default theme;
