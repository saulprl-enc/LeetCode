class Solution {
    public int maxProfit(int[] prices) {
        ArrayList<Integer> profitsL = new ArrayList<Integer>();
        ArrayList<Integer> profitsR = new ArrayList<Integer>();
        int pricesL = prices.length;
        int result = 0, highest = 0;
        int minP = prices[0], maxP = prices[pricesL-1];

        for (int i = 0; i < pricesL; i++) {
            int profit = prices[i] - minP;

            if (minP > prices[i]) {
                minP = prices[i];
            } else if ( profit > highest){
                highest = profit;
            }

            profitsL.add(highest);
        }
        
        highest = 0;

        for (int i = pricesL - 1; i >= 0; i--) {
            int profit = maxP - prices[i];

            if (maxP < prices[i]) {
                maxP = prices[i];
            } else if (profit > highest){
                highest = profit;
            }

            profitsR.add(highest);
        }

        Collections.reverse(profitsR);

        for (int i = 0; i < pricesL; i++) {
            int n1 = profitsL.get(i), n2 = profitsR.get(i);
            int maxProfit = n1 + n2;

            if(maxProfit > result) {
                result = maxProfit;
            }
        }

        return result;
    }
}