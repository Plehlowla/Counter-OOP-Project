

function getElement(selection){
    const element = document.querySelector(selection);
    if(element){
        // console.log(element);
        return element
    }
    throw new Error(`Please check "${selection}" selector, no such element exists`);
}

class Counter {
    constructor(element,value){
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueCount = element.querySelector('.value');
    this.valueCount.textContent = this.value;

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);

    }
    increase(){
        this.value++;
        this.valueCount.textContent = this.value;
    }
    decrease(){
        this.value--;
        this.valueCount.textContent = this.value;
    }
    reset(){
        this.value = 0;
        this.valueCount.textContent = this.value;
    }
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);