class Project {
    int profit;
    int capital;
    public Project(int profit, int capital) {
        this.profit = profit;
        this.capital = capital;
    }

    public String toString() {
        return this.profit + " " + this.capital;
    }
}

class Solution {
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        Project[] projects = createListOfProjects(profits, capital);
        
        //sort projects - descending order of capital. if capital is same, ascending order of profit.
        Arrays.sort(projects, new SortProjects());

        for (Project project : projects) {
             System.out.println(project);
        }

        return getMaxCapital(k, w, projects);
    }

    private int getMaxCapital(int k, int w, Project[] projects) {
        PriorityQueue<Project> maxQueue = new PriorityQueue<Project>(new ProjectComparator());

        int projectsPushed = 0;

        while (k > 0) {
            while (projectsPushed < projects.length && projects[projectsPushed].capital <= w) {
                maxQueue.add(projects[projectsPushed]);
                projectsPushed++;
            }
            if (maxQueue.size() == 0) return w;
            Project project = maxQueue.poll();
            w += project.profit;
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

class SortProjects implements Comparator<Project> {
    @Override
    public int compare(Project p1, Project p2) {
        return p1.capital - p2.capital == 0 ?
            p2.profit - p1.profit :
            p1.capital - p2.capital;
    }
}

class ProjectComparator implements Comparator<Project> {
    @Override
    public int compare(Project p1, Project p2) {
        return p2.profit - p1.profit;
    }
}