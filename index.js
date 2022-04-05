// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    let distance = pickupLocation - 42;
    // Convert distance to absolute (positve) value
    if(Math.sign(distance) === -1) {
        distance = distance * -1;
    }

    return distance;
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(pickupLocation, dropoffLocation) {
    return Math.abs((pickupLocation - dropoffLocation) * 264);
}

function calculatesFarePrice(pickupLocation, dropoffLocation) {
    // This variable = the return value in the distanceTravelledInFeet function
    let distance = distanceTravelledInFeet(pickupLocation, dropoffLocation);

    if(distance <= 400) {
        return 0;
    } else if(distance > 400 && distance <= 2000) {
        return (distance - 400) * .02;
    } else if(distance > 2000 && distance <= 2500) {
        return 25;
        // number must be over 2500 at this point 
    } else {
        return 'cannot travel that far';
    }
}