class RecentCounter {

    private LinkedList<Integer> list;
    
    public RecentCounter() {
        list = new LinkedList<Integer>();    
    }
    
    public int ping(int t) {
        int lowest = t - 3000;
        while (!list.isEmpty() && list.peek() < lowest) {
            list.poll();
        }
        list.add(t);
        return list.size();
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = new RecentCounter();
 * int param_1 = obj.ping(t);
 */