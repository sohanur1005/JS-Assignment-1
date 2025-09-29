function calculateFinalScore(obj) {

    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return "Invalid Input";
    }

    let name = obj.name;
    let testScore = obj.testScore;
    let schoolGrade = obj.schoolGrade;
    let isFFamily = obj.isFFamily;

    if (typeof name !== 'string' ||
        typeof testScore !== 'number' || testScore > 50 ||
        typeof schoolGrade !== 'number' || schoolGrade > 30 ||
        typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    
    let finalScore = testScore + schoolGrade;
    if (isFFamily === true) {
        finalScore += 20; 
    }
    
    if (finalScore >= 80) {
        return true;
    } else {
        return false;
    }
}
