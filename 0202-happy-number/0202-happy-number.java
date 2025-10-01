class Solution {
    public boolean isHappy(int n) {
        HashSet<Integer> set = new HashSet<>();

        while (true) {
            if (n == 1) {
                return true;
            }

            int newNum = 0;
            while (n > 0) {
                newNum += Math.pow((n % 10), 2);
                n /= 10;
            }

            n = newNum;

            if (set.contains(n)) {
                break;
            }
            set.add(n);
        }

        return false;
    }
}