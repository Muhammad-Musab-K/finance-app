let discription = document.getElementById('discription')
let amount = document.getElementById('amount')
let income = document.getElementById('income')
let expanse = document.getElementById('expanse')
let table = document.getElementById("table")
let amountTotal = 0


function PutValue(type) {
if(!discription.value && !amount.value ){
    alert("Enter the value first")
    return;
}
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    td1.innerHTML = discription.value
    td2.innerHTML = amount.value
    td3.innerHTML = type
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    table.append(tr)
    cls()
}

function cls() {
    discription.value = ''
    amount.value = ''
}
let sum = 0
function total() {
   
    let table = document.getElementById("table")
    for (let i = 1; i < table.rows.length; i++) {
        sum = sum + parseFloat(table.rows[i].cells[1].innerHTML);
    }
    console.log(sum);
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    td1.innerHTML = 'Total'
    td2.innerHTML = sum
    td3.innerHTML = ""
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    table.append(tr)
}