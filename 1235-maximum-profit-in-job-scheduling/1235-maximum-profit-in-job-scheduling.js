/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
const Job = function(startTime, endTime, profit) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.profit = profit;
}

var jobScheduling = function(startTime, endTime, profit) {
    // Gather jobs and sort on the basis of start time
    const jobs = createJobs(startTime, endTime, profit);
    jobs.sort(sortJobs);

    // create cache for memoization
    const cache = Array.from({length: profit.length});

    return generateMaxProfit(0, jobs, cache); // (backtracking or dfs with caching)
};

/**
*   Method to create jobs out of startTime, endTime and profit
*/
const createJobs = (startTime, endTime, profit) =>{
    const jobs = [];

    for (let i = 0; i < startTime.length; i++) {
        jobs.push(new Job(startTime[i], endTime[i], profit[i]));
    }

    return jobs;
};

/**
*   Method to sort jobs based on start time
*/
const sortJobs = (job1, job2) => job1.startTime - job2.startTime;

/**
*   Method to run backtracking or dfs with memoization 
*/
const generateMaxProfit = (i, jobs, cache) => {
    if (i >= jobs.length) return 0;
    // if we have already calculated the max profit from a start time it will be present in the cache
    if (cache[i]) return cache[i];

    const {endTime, profit} = jobs[i];

    // we need to know if we pick the next job will it generate more profit
    // As the jobs are already sorted the next job will either start at *i* time or greater than that
    const profitIfNextPicked = generateMaxProfit(i + 1, jobs, cache);
    
    // since the jobs are sorted, we can find the next job using binary search
    let nextJob = findNextJob(jobs, i + 1, jobs.length - 1, endTime); 

    if (nextJob) {
        // get the combined profit of current job and job that can be picked next
        const profitFromNextScheduledJob = generateMaxProfit(nextJob, jobs, cache);
        cache[i] = Math.max(profit, profit + profitFromNextScheduledJob);

    }

    // now that we have the max profit of -
    // 1. Current job + next scheduled job
    // 2. Next Job that start after/adjacent to current job
    // We can store check what is max between those and store it in the cache
    // By storing in cache, we will always get the maximum profit if we start the job scheduling from index *i*, which means we do not have to compute again. This does not mean job at index i will be a part of profit, but it will always have the max profit stored in it from job *i* till the length of jobs.
    cache[i] = Math.max(profitIfNextPicked, cache[i] ? cache[i] : profit);
    return cache[i];
};

/**
*   Method to find the index of the next job
*/
const findNextJob = (jobs, left, right, endTime) => {
    let i;

    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        const startTime = jobs[mid].startTime
        if (startTime >= endTime) {
            i = mid;
            right = mid - 1;
        }
        else if (startTime < endTime) {
            left = mid + 1;
        }
    }

    return i;
};
