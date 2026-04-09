fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then((response) => {
  return response.json();
})

 .then((data) =>{
    console.log(data);
 })
.catch((error) => {
    cpnsole.error("something went banana!", error);
});