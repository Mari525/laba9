function n1() {
	console.log("№1");
	let pet = {
		n: 1,
		who: "cat",
		name: "Lisa"
	}
	console.log("Список свойств: " + Object.keys(pet));
	console.log(pet.n + ". " + pet.name + " is a very good " + pet.who);
}

function n2(arr) {
	console.log("№2");
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		if (arr.length > 1) {
			console.log(arr.pop() + " осталось " + arr);
		} else {
			console.log(arr[0]);
		}
	}
}

function n3(str) {
	console.log("№3");
	let str2 = str.split("").reverse().join("");
	let bool;
	if (str == str2) {
		bool = true;
	} else {
		bool = false;
	}
	console.log(bool);
}

function n4(n, arr) {
	console.log("№4");
	let lenArr = arr.length;
	let lenStr = arr[0].length;
	let res = "";
	for (let i = 0; i < lenArr; i++) {
		for (let j = 0; j < lenStr; j++) {
			arr[i][j] *= n;
			res += arr[i][j] + " ";
		}
		res += "\n";
	}
	console.log(res);
}