function waitingTime(waitingTimes, serialNumber) {
   
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }

    
    let avgTime = 0;
    if (waitingTimes.length > 0) {
        let total = waitingTimes.reduce((sum, val) => sum + val, 0);
        avgTime = Math.round(total / waitingTimes.length);
    }

    
    let remaining = (serialNumber - 1) - waitingTimes.length;

    
    if (remaining <= 0) {
        return 0;
    }

    return remaining * avgTime;
}
