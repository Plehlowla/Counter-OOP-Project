function Counter(element,value){
    console.log(element,value);
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueCount = element.querySelector('.value');
    // const spanValue = this.valueCount;
    // spanValue.innerHTML = value;
    this.valueCount.textContent = this.value;
    // this.valueCount.innerHTML = this.value;
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