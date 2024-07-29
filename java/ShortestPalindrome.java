class ShortestPalindrome {
    public String shortestPalindrome(String s) {

        String rev = new StringBuilder(s).reverse().toString();

        // Create a new string by concatenating the original string, a separator, and the reversed string
        String newString = s + "#" + rev;

        // Inicialize the Longest Prefix Suffix for the newString
        int[] lps = new int[newString.length()];
        int prevLps = 0;
        int i = 1;

        // Build LPS array
        while (i < newString.length()) {
            if (newString.charAt(i) == newString.charAt(prevLps)) {
                lps[i] = prevLps + 1;
                prevLps += 1;
                i += 1;
            } else {
                if (prevLps == 0) {
                    lps[i] = 0;
                    i += 1;
                } else {
                    prevLps = lps[prevLps - 1];
                }
            }
        }

        // Lenght of the LPS array
        int kmpLength = lps[newString.length() - 1];

        // Characters to add to the beginning of the original string
        String toAdd = rev.substring(0, s.length() - kmpLength);

        return toAdd + s;
    }
}
