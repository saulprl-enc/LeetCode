let maxProfit = function(prices){
    let maxCumulativeProfit = 0;
    let smallestPriceLeft = prices[0];
    let profitLeft;
    let i;
    let arrLength = prices.length;
    let profitsArrayLeft = [0];

    ///////Check from left to right//////
    for(i=1; i<arrLength; i++){
            if(prices[i]<smallestPriceLeft){
                smallestPriceLeft = prices[i];
            }
            //Getting biggest possible profit
            profitLeft = prices[i] - smallestPriceLeft;
            if(profitLeft>maxCumulativeProfit){
                maxCumulativeProfit = profitLeft
            }
            profitsArrayLeft.push(maxCumulativeProfit)

            
    }; 

    maxCumulativeProfit = 0;

    //////////End check left to right

    //////////Check right to lefton
    let biggestPriceRight = prices[arrLength-1];
    let profitRight;
    let j;
    let profitsArrayRight = [0];

    for(j=arrLength-2; j>=0; j--){
        if(prices[j]>=biggestPriceRight){
            biggestPriceRight = prices[j]
        };
         //Getting biggest possible profit
        profitRight = biggestPriceRight - prices[j];
        if(profitRight>maxCumulativeProfit){
            maxCumulativeProfit = profitRight
        }
        profitsArrayRight.push(maxCumulativeProfit);
    }
        //////////End check right to left


        maxCumulativeProfit = 0;

        let k;
        let profitsArrLength = profitsArrayLeft.length
        let leftAndRightProfit=0;
        for(k=0; k < profitsArrLength; k++){
            //Find biggest profit when combined
            leftAndRightProfit = profitsArrayLeft[k] + profitsArrayRight[profitsArrayRight.length-1-k];
            if(leftAndRightProfit>maxCumulativeProfit){
                maxCumulativeProfit = leftAndRightProfit;
            }
        }

    return maxCumulativeProfit;
}   /////End maxProfit()