function insert_Row() {
    //Write your code here
  const table = document.querySelector('#sampleTable');
 //  const insert = document.querySelector('input[type="button"]');
	// insert.addEventListener('click',function(){
	// 	const newRow = document.createElement('tr');
	// 	newRow.innerHTML = `<td>New Cell1</td><td>New Cell2</td>`;
	// 	table.appendChild(newRow);
	// })
	const newRow = table.insertRow(0);
	const cell1 = newRow.insertCell(0);
	const cell2 = newRow.insertCell(1);
	cell1.textContent = 'New Cell1';
	cell2.textContent = 'New Cell2';
}
