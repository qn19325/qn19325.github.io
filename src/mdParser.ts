// Step 1: Fetch the content of the MD file.
fetch('./artificialIntelligence.md')
  .then((response) => response.text())
  .then((md) => {
    // Step 2: Parse the MD content into HTML using the marked library.
    console.log(md);
    
  })
  .catch((error) => {
    console.error(error);
  });
