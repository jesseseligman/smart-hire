// getJobs
export function getJobs(userId) {
  return {
    type: 'GET_JOBS',
    userId
  }
}
