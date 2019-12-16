// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor (attr){
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
    }
}
    volume = function () {
    return this.length * this.width * this.height
    }
    surfaceArea = function() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.