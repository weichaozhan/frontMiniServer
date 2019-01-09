module.exports = {
	// root: true,    
	// parserOptions: {
	// 		sourceType: 'module'
	// },
	// env: {
	// 		browser: true,
	// },
	parser: 'babel-eslint',
	// plugins: [
	// 	'react',
	// ],
	rules: {
			'indent': ['error', 2, { 'SwitchCase': 1 }],
			'quotes': ['error', 'single'],
			'jsx-quotes': ['error', 'prefer-double'],
			'semi': ['error', 'always'],
	}
}