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
    const jobs = createJobs(startTime, endTime, profit);
    jobs.sort(sortJobs);

    const cache = Array.from({length: profit.length});

    return generateMaxProfit(0, jobs, cache); // (backtracking or dfs with caching)
};

const createJobs = (startTime, endTime, profit) =>{
    const jobs = [];

    for (let i = 0; i < startTime.length; i++) {
        jobs.push(new Job(startTime[i], endTime[i], profit[i]));
    }

    return jobs;
};

const sortJobs = (job1, job2) => job1.startTime - job2.startTime;
    
const generateMaxProfit = (i, jobs, cache) => {
    if (i >= jobs.length) return 0;
    if (cache[i]) return cache[i];

    const {endTime, profit} = jobs[i];

    const profitIfNextPicked = generateMaxProfit(i + 1, jobs, cache);
    
    // since the jobs are sorted, we can find the next job using binary search
    let nextJob = findNextJob(jobs, i + 1, jobs.length - 1, endTime); 

    if (nextJob) {
        const profitFromNextScheduledJob = generateMaxProfit(nextJob, jobs, cache);
        cache[i] = Math.max(profit, profit + profitFromNextScheduledJob);

    }
    cache[i] = Math.max(profitIfNextPicked, cache[i] ? cache[i] : profit);
    return cache[i];
};

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
