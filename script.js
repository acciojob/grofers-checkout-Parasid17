const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table = document.querySelector('table');

const getSum = () => {
//Add your code here
	let sum = 0;
	let price =  document.querySelectorAll('.price');
	for (let i = 0; i < price.length; i++) {
		sum += Number(price[i].textContent);
	}
	let tr = document.createElement('tr');
	let td = document.createElement('td');

	tr.setAttribute('id', 'ans');
	td.textContent = `Total ${sum}`;
	tr.appendChild(td);
	table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

