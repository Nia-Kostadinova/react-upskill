const cars = [
{
    name: "Car 1",
    speed: [[50, 60, 70], [75, 70], [80]]
}, {
    name: "Car 2",
    speed: [[66, 50, 40, 45], [78, 88, 100]]
}, {
    name: "Car 3",
    speed: [[90], [79, 60]]
}];

const findAverageSpeedOfCar = (car) => {
    const flattenedSpeedArr =  car.speed.flat();
    const sumOfMeasurements = flattenedSpeedArr.reduce((acc, speed) => acc + speed, 0);
    return sumOfMeasurements/flattenedSpeedArr.length;
}

const findTotalAverage = (cars) => {
    return cars.reduce((sum, car) => sum + findAverageSpeedOfCar(car), 0)/cars.length;
}

cars.forEach((car, index) => {
    console.log(`Car ${index + 1} average speed: ${findAverageSpeedOfCar(car).toFixed(2)}`)
});

console.log('Total average speed for all cars: ' + findTotalAverage(cars).toFixed(2));