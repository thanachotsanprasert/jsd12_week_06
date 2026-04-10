async function getAllAnimalsByLetter(letter) {
  let allResults = [];
  let offset = 0;

  async function fetchNextPage() {
    // 1. Added closing backtick and the offset parameter
    const url = `https://api.api-ninjas.com/v1/animals?name=${letter}&offset=${offset}`;

    const response = await fetch(url, {
      headers: { "X-Api-Key": "YOUR_API_KEY_HERE" },
    });
    
    const data = await response.json();

    // 2. Base case: if no more data, return what we have
    if (data.length === 0) {
      return allResults;
    }

    // 3. Store data and increment offset for the next "page"
    allResults.push(...data);
    offset += data.length; 

    // 4. Recursive call: Wait for the next page to finish
    return fetchNextPage();
  }

  return fetchNextPage();
}

// Usage
getAllAnimalsByLetter("a")
  .then((animals) => {
    console.log(`Finished. Found ${animals.length} animals.`);
    console.log(animals.map((a) => a.name));
  })
  .catch((err) => console.error("Error:", err));