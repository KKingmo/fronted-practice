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

// solution - mento - for
function solution(nums) {
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    if (
      nums.length / 2 !== answer.length &&
      answer.includes(nums[i]) === false
    ) {
      answer.push(nums[i]);
    }
  }
  return answer.length;
}

// solution - mento - ( for: new Set )
function solution(nums) {
  const answer = new Set([]);

  for (let i = 0; i < nums.length; i++) {
    if (nums.length / 2 !== answer.size) {
      answer.add(nums[i]);
    }
  }
  return answer.size;
}

// solution - mento - forEach
function solution(nums) {
  // 폰켓몬들을 담는 배열
  const pocket = [];

  nums.forEach((monster) => {
    if (pocket.includes(monster) === false && pocket.length < nums.length / 2) {
      pocket.push(monster);
    }
  });
  return pocket.length;
}

// solution - mento - ( forEach: new Set )
function solution(nums) {
  // 폰켓몬들을 담는 배열
  const pocket = new Set([]);

  nums.forEach((monster) => {
    if (pocket.size < nums.length / 2) {
      pocket.add(monster);
    }
  });
  return pocket.size;
}

// solution - mento - new Set
function solution(nums) {
  const answer = new Set(nums).size;
  const limit = nums.length / 2;

  if (limit >= answer) return answer;

  return limit;
}
