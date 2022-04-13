// https://programmers.co.kr/learn/courses/30/lessons/1845
// solution - me
function solution(nums) {
  const pocket = [nums[0]];
  for (let i = 1; i <= nums.length - 1; i++) {
    if (pocket.length >= nums.length / 2) return pocket.length;
    if (!pocket.includes(nums[i])) {
      pocket.push(nums[i]);
    }
  }
  return pocket.length;
}

// solution - mento
function solution(nums) {
  const answer = new Set([]);
  for (let i = 0; i < nums.length; i++) {
    if (answer.size < nums.length / 2) {
      answer.add(nums[i]);
    }
  }
  return answer.size;
}
