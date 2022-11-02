interface IKao {
	name: string,
	age: number
}

export function add(x: number, y: number) : number {
	return x + y
}

export function kao(): IKao {
	return {
		name: 'ztc',
		age: 123
	}
}

