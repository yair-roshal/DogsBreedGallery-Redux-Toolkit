export function ArrayToObject(array) {
	const arrOfObj = []
	for (let i = 0; i < array.length; ++i)
		if (array[i] !== undefined) {
			const rv = {}
			rv.id = i
			rv.breed = array[i]
			rv.image = null
			rv.likes = 0
			arrOfObj.push(rv)
		}
	console.log("ArrayToObject :>> ", ArrayToObject)
	return arrOfObj
}

function random(min, max) {
	return Math.round(min + Math.random() * (max - min))
}

export function randomArray(array) {
	const randomArr = []
	for (let i = 0; i < 80; i++) {
		randomArr.push(array[random(0, array.length)])
	}
	console.log("randomArr :>> ", randomArr)
	return randomArr
}
