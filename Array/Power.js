function Power(Base,exponent) {
    let result = 1;
    for (let i = 1; i <=exponent; i++){
    result *=Base
    }
    return result
    }
    let Base= 245
    let exponent=4
    console.log(Power(Base,exponent))