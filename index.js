const input = document.querySelector('input')
const text = document.getElementById('text')
const add = document.getElementById('add')
const remove = document.getElementById('remove')
const list = document.getElementById('list')
// const text = document.querySelector('span')

let items = []
add.addEventListener('click', (event)=> {
    items.push(`<li class="listItem-${items.length}" style="display:block ;">
        <input type="checkbox" class="DoneCheckbox" onchange="handleCheck(${items.length})" />
        <span id="TodoText-${items.length}">${text.value}</span>
        <button id="remove" onclick="handleRemove(${items.length})">Remove</button>
    </li>`)

    list.innerHTML = items.join('');
});

const handleRemove = (index) => {
    items = items.filter((item, i) => i !== index);
    list.innerHTML = items.join('');
}

const handleCheck = (index) => {
    const currentText = document.getElementById(`TodoText-${index}`);
    console.log(currentText.style.textDecoration);
    currentText.style.textDecoration = currentText.style.textDecoration === 'line-through' ? 'none' : 'line-through';

}


const sumToCycle = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log( sumToCycle(100) );


const sumToRecursion = (n) => {
    if (n === 1) return 1;
    return n + sumToRecursion(n - 1);
  }
  
  console.log( sumToRecursion(100) );



//   const printNumbers = (from, to) => {
//     if (from > to) return;
//     console.log(from);
//     setTimeout(() => printNumbers(from + 1, to), 1000);
//   }


//   printNumbers(1, 5)


// const printNumbers = (from, to) =>  {
//     let current = from;
  
//     let timerId = setInterval(function() {
//       console.log(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }, 1000);
//   }
//   printNumbers(1, 5);


// let i = 0 ;
// setInterval(( ) => {
//     if(i < 5){
//         i++;
//         console.log ( `прошло ${i} сек`)
//     } else {clearInterval(setInterval)}
        
// }, 1000)

 
 