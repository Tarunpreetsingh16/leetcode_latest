class Solution {
    public boolean isIsomorphic(String s, String t) { 
        if (s.length() != t.length()) return false;
        Map<Character, Character> sMap = new HashMap<>();
        Map<Character, Character> tMap = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char a = s.charAt(i);
            char b = t.charAt(i);

            if (sMap.containsKey(a) && sMap.get(a) != b) {
                return false;
            }
            else if (!sMap.containsKey(a)) {
                sMap.put(a, b);
            }

            if (tMap.containsKey(b) && tMap.get(b) != a) {
                return false;
            }
            else if (!tMap.containsKey(b)) {
                tMap.put(b, a);
            }
        }
        return true;
    }
}