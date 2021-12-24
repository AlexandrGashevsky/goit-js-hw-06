const allElements = document.querySelectorAll('.item');
console.log(`Number of categories: ${allElements.length}`);

allElements.forEach(element => {
    const elementTitle = element.querySelector('h2');
    const elementLi = element.querySelectorAll('li');
    console.log(`Category: ${elementTitle.textContent}`);
    console.log(`Category: ${elementLi.length}`);
})