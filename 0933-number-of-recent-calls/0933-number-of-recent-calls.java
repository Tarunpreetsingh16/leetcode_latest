class RecentCounter {

    private PriorityQueue<Integer> queue;
    
    public RecentCounter() {
        queue = new PriorityQueue<Integer>();    
    }
    
    public int ping(int t) {
        int lowest = t - 3000;
        while (!queue.isEmpty() && queue.peek() < lowest) {
            queue.poll();
        }
        queue.add(t);
        return queue.size();
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = new RecentCounter();
 * int param_1 = obj.ping(t);
 */