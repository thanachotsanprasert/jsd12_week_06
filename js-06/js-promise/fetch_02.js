const url = "https://api.api-ninjas.com/v1/stockprice?ticker=AAPL";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": "ZkOXvNjjqyV6u3Lqd5fH4vxqo3mhb246afp5w5PG",
        "Content-Type": "application/json",

    },
};

fetch(url, options)
 .then((response) => {
  return response.json();
})

 .then((data) =>{
    console.log(data);
 })
.catch((error) => {
    console.error("something went banana!", error);
});