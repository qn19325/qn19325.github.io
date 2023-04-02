"use strict";
fetch('./artificialIntelligence.md')
    .then((response) => response.text())
    .then((md) => {
    console.log(md);
})
    .catch((error) => {
    console.error(error);
});
