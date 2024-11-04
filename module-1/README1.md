# Car Speed Analysis
This project calculates the average speed for individual cars and a total average speed across multiple cars.

## Solution Approach
The solution is designed to process data from a list of cars, where each car has multiple arrays of speed measurements. The code flattens these arrays, calculates the average speed for each car, and then computes a total average across all cars. Here’s a breakdown of the key functions:

1. `findAverageSpeedOfCar(car)`: Calculates the average speed of an individual car by:

- Flattening the nested arrays of speed measurements.
- Summing the speeds and dividing by the total number of measurements.

2. `findTotalAverage(cars)`: Calculates the average speed across all cars by:

- Summing the average speeds of each car and dividing by the number of cars.

3. **Main Execution**: The program prints the average speed of each car individually and then the total average speed for all cars.

## Assumptions
- Each car’s speed property contains an array of arrays, where each sub-array represents a set of speed measurements.
- The input data is pre-validated to ensure only numerical speed values.

## Running the Code
To execute the code:

1. Ensure you have a JavaScript runtime, such as Node.js, installed.
2. Run the file with the command:

node filename.js

3. The console output will display each car’s average speed and the total average speed for all cars.