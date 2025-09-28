class Solution {
    public boolean wordPattern(String pattern, String s) {
        Map<Character, String> pMap = new HashMap<>();
        Map<String, Character> sMap = new HashMap<>();

        String[] words = s.split(" ");
        if (pattern.length() != words.length) return false;

        for (int i = 0; i < pattern.length(); i++) {
            char c = pattern.charAt(i);
            String word = words[i];
            if ((pMap.containsKey(c) && !pMap.get(c).equals(word)) ||
                (sMap.containsKey(word) && !sMap.get(word).equals(c))) {
                return false;
            }
            if (!pMap.containsKey(c)) {
                pMap.put(c, word);
            }
            if (!sMap.containsKey(word)) {
                sMap.put(word, c);
            }
        }
        return true;
    }
}