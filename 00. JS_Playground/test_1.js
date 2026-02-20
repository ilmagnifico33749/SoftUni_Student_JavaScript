const x = 42;
const getX = function () {
    return this.x;
}

const module = {x, getX};

const unboutGetX = module.getX;
// console.log(unboutGetX());

const boundGetX = unboutGetX.bind(module);
console.log(boundGetX());
