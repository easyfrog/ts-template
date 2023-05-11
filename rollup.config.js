import terser from '@rollup/plugin-terser';

// 是否为 release 版本
// 默认只打印esm版本，release会打包出umd版本
var isRelease = process.env.release

var outputs = [
	{
		file: './dist/bundle/bundle.esm.js',
		format: 'esm'
	}
]

// 如果是 release
if (isRelease) {
	outputs.push({
		file: './dist/bundle/bundle.umd.js',
		format: 'umd',
        name: 'om',
		plugins: [terser()]
	})
}

export default {
	input: './dist/js/index.js',
	output: outputs
}