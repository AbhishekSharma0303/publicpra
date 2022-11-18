const a = {
    y: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(a))
  // expected output: Array ["a", "b", "c"]

  console.log(Object.values(a))
  console.log(a[Object.keys(a)].a)

// let a = document.getElementsByClassName("container")[0];
// a.onclick = () => {
//   alert("bye")
// }

// uuu(() => {
//   alert('uuuuuuuuuuu');
// })
// uuu();


// f.addEventListener('mouseup',function(e){
//   alert('byebye')
// })

$(document).ready(function(){

  $("#f").draggable();

}
);
  

