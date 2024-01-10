class Project {
    int profit;
    int capital;
    public Project(int profit, int capital) {
        this.profit = profit;
        this.capital = capital;
    }
}

class Solution {
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        Project[] projects = createListOfProjects(profits, capital);
        
        //sort projects - descending order of capital. if capital is same, ascending order of profit.
        Arrays.sort(projects, (p1, p2) -> p1.capital - p2.capital);

        return getMaxCapital(k, w, projects);
    }

    private int getMaxCapital(int k, int w, Project[] projects) {
        PriorityQueue<Integer> maxQueue = new PriorityQueue<>(Collections.reverseOrder());

        int projectsPushed = 0;

        while (k > 0) {
            while (projectsPushed < projects.length && projects[projectsPushed].capital <= w) {
                maxQueue.add(projects[projectsPushed].profit);
                projectsPushed++;
            }
            if (maxQueue.size() == 0) return w;
            Integer profit = maxQueue.poll();
            w += profit;
            k--;
        }
        return w;
    }

    private Project[] createListOfProjects(int[] profits, int[] capital) {
        Project[] projects = new Project[profits.length];
        for (int i = 0 ; i < profits.length; i++) {
            projects[i] = new Project(profits[i], capital[i]);
        }
        return projects;
    }
}