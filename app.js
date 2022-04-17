function Counter(element,value){
    console.log(element,value);
    
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

// const firstValue = document.querySelector('.first-counter .value');

function getElement(selection){
    const element = document.querySelector(selection);
    if(element){
        // console.log(element);
        return element
    }
    throw new Error(`Please check "${selection}" selector, no such element exists`);
}

// getElement('.first-counter');