// Code your solution in this file!
function distanceFromHqInBlocks(n){
    return (n >= 42) ? n - 42 : 42 - n;
}
function distanceFromHqInFeet(n){
    return (distanceFromHqInBlocks(n) * 264)
}
function distanceTravelledInFeet(n, n2) {
    let overallDistance = (n >= n2) ? n - n2 : n2 - n;
    return (overallDistance * 264)
}
function calculatesFarePrice(n, n1){
    let distanceTravelled = distanceTravelledInFeet(n, n1)
    if (distanceTravelled < 400) {
        return 0
    } else if (distanceTravelled > 399 && distanceTravelled < 2000) {
        let nn = distanceTravelled - 400
        return nn * 0.02
    } else if (distanceTravelled > 1999 && distanceTravelled < 2500) {
        return 25
    } else if (distanceTravelled > 2499) {
        return "cannot travel that far"
    }
}