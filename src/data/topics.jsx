import { 
  Database, 
  GitBranch, 
  Layers, 
  BarChart3, 
  Shuffle, 
  Search, 
  TreePine, 
  Network, 
  Hash, 
  Zap,
  Target,
  ArrowUpDown
} from 'lucide-react';

// Visual Components for Code Examples
const ArrayVisual = () => (
  <div className="array-visual">
    <div className="array-container">
      {[10, 20, 30, 40, 50].map((value, index) => (
        <div key={index} className="array-item">
          <div className="array-index">{index}</div>
          <div className="array-value">{value}</div>
        </div>
      ))}
    </div>
    <p>Array elements stored in contiguous memory locations</p>
  </div>
);

const LinkedListVisual = () => (
  <div className="linkedlist-visual">
    <div className="node-chain">
      {[10, 20, 30].map((value, index) => (
        <div key={index} className="node">
          <span>{value}</span>
          {index < 2 && <span className="arrow">→</span>}
        </div>
      ))}
      <span>NULL</span>
    </div>
    <p>Nodes connected through pointers</p>
  </div>
);

const StackVisual = () => (
  <div className="stack-visual">
    <div className="stack-container">
      <div className="stack-item top">30 ← Top</div>
      <div className="stack-item">20</div>
      <div className="stack-item">10</div>
      <div className="stack-base">Stack Base</div>
    </div>
    <div className="operations">
      <div className="operation">Push: Add to top</div>
      <div className="operation">Pop: Remove from top</div>
    </div>
  </div>
);

const TreeVisual = () => (
  <div className="tree-visual">
    <div className="tree-container">
      <div className="tree-level">
        <div className="tree-node root">50</div>
      </div>
      <div className="tree-level">
        <div className="tree-node">30</div>
        <div className="tree-node">70</div>
      </div>
      <div className="tree-level">
        <div className="tree-node">20</div>
        <div className="tree-node">40</div>
        <div className="tree-node">60</div>
        <div className="tree-node">80</div>
      </div>
    </div>
    <div className="traversal-info">
      <div><strong>Inorder:</strong> 20, 30, 40, 50, 60, 70, 80</div>
      <div><strong>Preorder:</strong> 50, 30, 20, 40, 70, 60, 80</div>
      <div><strong>Postorder:</strong> 20, 40, 30, 60, 80, 70, 50</div>
    </div>
  </div>
);

export const topics = [
  {
    id: 'arrays',
    title: 'Arrays',
    icon: Database,
    color: '#3B82F6',
    difficulty: 'Beginner',
    estimatedTime: '2-3 hours',
    concepts: 8,
    problems: 25,
    tags: ['Linear', 'Indexing', 'Memory'],
    description: 'Learn the fundamental building block of programming - arrays and their operations.',
    explanation: `
      <div class="explanation-content">
        <h3>What is an Array?</h3>
        <p>Think of an array like a row of mailboxes in an apartment building. Each mailbox has a unique number (index) and can store one item (element). Just like you can quickly find mailbox #5, you can instantly access any element in an array using its index.</p>
        
        <div class="real-world-example">
          <h4>🏠 Real-World Analogy</h4>
          <p><strong>Parking Lot:</strong> Imagine a parking lot with numbered spaces (0, 1, 2, 3...). Each space can hold exactly one car. You can:</p>
          <ul>
            <li>Park a car in space 3 (arr[3] = "Toyota")</li>
            <li>Check what's in space 5 (access arr[5])</li>
            <li>Move cars around (update elements)</li>
            <li>Count total cars (array length)</li>
          </ul>
        </div>

        <h3>Key Characteristics</h3>
        <ul>
          <li><strong>Fixed Size:</strong> Like a parking lot with set number of spaces</li>
          <li><strong>Same Data Type:</strong> All elements must be the same type (all cars, not cars and trucks mixed)</li>
          <li><strong>Indexed Access:</strong> Direct access using position number</li>
          <li><strong>Contiguous Memory:</strong> Elements stored next to each other in memory</li>
        </ul>

        <div class="key-concepts">
          <h4>🔑 Essential Concepts</h4>
          <ul>
            <li><strong>Zero-based indexing:</strong> First element is at index 0, not 1</li>
            <li><strong>Bounds checking:</strong> Accessing index beyond array size causes errors</li>
            <li><strong>Memory efficiency:</strong> Elements stored in consecutive memory locations</li>
            <li><strong>Cache locality:</strong> Accessing nearby elements is faster</li>
          </ul>
        </div>

        <h3>Common Operations</h3>
        <h4>1. Access (Reading)</h4>
        <p>Like checking what's in a specific mailbox - instant access using index.</p>
        
        <h4>2. Update (Writing)</h4>
        <p>Like replacing contents of a mailbox - direct assignment to index.</p>
        
        <h4>3. Traversal</h4>
        <p>Like walking past each mailbox to check contents - visiting each element in order.</p>

        <div class="comparison">
          <h4>Arrays vs Real Life</h4>
          <div class="comparison-grid">
            <div>
              <strong>Array Operations</strong>
              <ul>
                <li>arr[0] = 10 (assign)</li>
                <li>x = arr[3] (access)</li>
                <li>for loop (traverse)</li>
              </ul>
            </div>
            <div>
              <strong>Parking Lot Analogy</strong>
              <ul>
                <li>Park car in space 0</li>
                <li>Check what's in space 3</li>
                <li>Walk through all spaces</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    codeExamples: [
      {
        title: 'Basic Array Operations',
        code: `// Creating and using arrays
int[] numbers = {10, 20, 30, 40, 50};

// Access element (O(1) time)
int firstElement = numbers[0]; // Gets 10

// Update element (O(1) time)  
numbers[2] = 35; // Changes 30 to 35

// Traverse array (O(n) time)
for(int i = 0; i < numbers.length; i++) {
    System.out.println("Index " + i + ": " + numbers[i]);
}`,
        visualization: <ArrayVisual />,
        steps: [
          "Create array with 5 elements in contiguous memory",
          "Access first element using index 0 - direct memory access",
          "Update element at index 2 - direct assignment",
          "Loop through each index from 0 to length-1",
          "Print each element with its position"
        ]
      }
    ],
    patterns: [
      {
        name: "Two Pointers",
        difficulty: "Medium",
        description: "Use two pointers moving towards each other or in same direction to solve problems efficiently.",
        whenToUse: [
          "Finding pairs in sorted arrays",
          "Reversing arrays",
          "Removing duplicates",
          "Palindrome checking"
        ],
        example: `// Two pointers to find pair with target sum
int left = 0, right = arr.length - 1;
while(left < right) {
    int sum = arr[left] + arr[right];
    if(sum == target) return true;
    else if(sum < target) left++;
    else right--;
}`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        name: "Sliding Window",
        difficulty: "Medium", 
        description: "Maintain a window of elements and slide it across the array to find optimal solutions.",
        whenToUse: [
          "Finding maximum/minimum in subarrays",
          "Substring problems",
          "Fixed-size window problems"
        ],
        example: `// Sliding window for maximum sum subarray of size k
int maxSum = 0, windowSum = 0;
for(int i = 0; i < k; i++) windowSum += arr[i];
maxSum = windowSum;

for(int i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i-k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
}`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      }
    ],
    problemSet: [
      {
        title: "Two Sum",
        difficulty: "Easy",
        rating: 4.2,
        description: "Find two numbers in array that add up to target sum.",
        concepts: ["Hash Map", "Two Pointers"],
        hints: [
          "Use hash map to store complements",
          "Check if target - current exists in map",
          "Return indices when found"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/two-sum/" },
          { platform: "HackerRank", url: "https://www.hackerrank.com/challenges/ctci-array-left-rotation" }
        ],
        javaSolution: `// Two Sum - Hash Map Solution
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    
    for(int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        
        if(map.containsKey(complement)) {
            return new int[]{map.get(complement), i};
        }
        
        map.put(nums[i], i);
    }
    
    return new int[]{-1, -1}; // No solution found
}

// Two Sum - Two Pointers Solution (for sorted array)
public int[] twoSumSorted(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    
    while(left < right) {
        int sum = nums[left] + nums[right];
        
        if(sum == target) {
            return new int[]{left, right};
        } else if(sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return new int[]{-1, -1};
}`,
        explanation: "The hash map solution stores each number and its index as we iterate. For each number, we check if its complement (target - current) exists in the map. The two pointers solution works on sorted arrays by moving pointers inward based on whether the sum is too small or too large.",
        timeComplexity: "O(n) - Hash Map, O(n log n) - Two Pointers (due to sorting)",
        spaceComplexity: "O(n) - Hash Map, O(1) - Two Pointers"
      },
      {
        title: "Maximum Subarray",
        difficulty: "Medium",
        rating: 4.5,
        description: "Find the contiguous subarray with the largest sum (Kadane's Algorithm).",
        concepts: ["Dynamic Programming", "Kadane's Algorithm"],
        hints: [
          "Keep track of maximum sum ending at current position",
          "Reset sum to 0 if it becomes negative",
          "Update global maximum at each step"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/maximum-subarray/" }
        ],
        javaSolution: `// Maximum Subarray - Kadane's Algorithm
public int maxSubArray(int[] nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    
    for(int i = 1; i < nums.length; i++) {
        // Either extend previous subarray or start new one
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        
        // Update global maximum
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}

// Maximum Subarray with indices (returns subarray bounds)
public int[] maxSubArrayWithIndices(int[] nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    int start = 0, end = 0;
    int tempStart = 0;
    
    for(int i = 1; i < nums.length; i++) {
        if(nums[i] > maxEndingHere + nums[i]) {
            maxEndingHere = nums[i];
            tempStart = i;
        } else {
            maxEndingHere = maxEndingHere + nums[i];
        }
        
        if(maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = tempStart;
            end = i;
        }
    }
    
    return new int[]{start, end, maxSoFar};
}`,
        explanation: "Kadane's algorithm maintains two variables: maxSoFar (global maximum) and maxEndingHere (maximum sum ending at current position). At each step, we decide whether to extend the previous subarray or start a new one. If the current sum becomes negative, we reset it to the current element.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Move Zeroes",
        difficulty: "Easy",
        rating: 4.0,
        description: "Move all zeroes to the end while maintaining relative order of non-zero elements.",
        concepts: ["Two Pointers", "In-place Algorithm"],
        hints: [
          "Use two pointers: one for current position, one for next non-zero",
          "Swap non-zero elements to front",
          "Fill remaining positions with zeroes"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/move-zeroes/" }
        ],
        javaSolution: `// Move Zeroes - Two Pointers
public void moveZeroes(int[] nums) {
    int nonZeroIndex = 0;
    
    // Move all non-zero elements to front
    for(int i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            nums[nonZeroIndex++] = nums[i];
        }
    }
    
    // Fill remaining positions with zeroes
    while(nonZeroIndex < nums.length) {
        nums[nonZeroIndex++] = 0;
    }
}

// Alternative: Swap-based approach
public void moveZeroesSwap(int[] nums) {
    int left = 0, right = 0;
    
    while(right < nums.length) {
        if(nums[right] != 0) {
            // Swap non-zero element to left position
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
        right++;
    }
}`,
        explanation: "The first approach uses a single pointer to track the next position for non-zero elements. We iterate through the array, moving non-zero elements to the front, then fill the remaining positions with zeroes. The swap-based approach maintains the relative order by swapping elements in place.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Container With Most Water",
        difficulty: "Medium",
        rating: 4.3,
        description: "Find two lines that together with x-axis form a container that can hold maximum water.",
        concepts: ["Two Pointers", "Greedy"],
        hints: [
          "Use two pointers at opposite ends",
          "Calculate area: min(height[left], height[right]) * (right - left)",
          "Move pointer with smaller height inward"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/container-with-most-water/" }
        ],
        javaSolution: `// Container With Most Water - Two Pointers
public int maxArea(int[] height) {
    int maxArea = 0;
    int left = 0, right = height.length - 1;
    
    while(left < right) {
        // Calculate current area
        int width = right - left;
        int h = Math.min(height[left], height[right]);
        int area = width * h;
        
        maxArea = Math.max(maxArea, area);
        
        // Move pointer with smaller height
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
}

// Alternative: Brute Force (for understanding)
public int maxAreaBruteForce(int[] height) {
    int maxArea = 0;
    
    for(int i = 0; i < height.length; i++) {
        for(int j = i + 1; j < height.length; j++) {
            int area = Math.min(height[i], height[j]) * (j - i);
            maxArea = Math.max(maxArea, area);
        }
    }
    
    return maxArea;
}`,
        explanation: "The two-pointer approach starts with maximum width and gradually reduces it while trying to increase height. We always move the pointer with the smaller height because the current area is limited by the smaller height, and moving the larger height pointer can only decrease the area.",
        timeComplexity: "O(n) - Two Pointers, O(n²) - Brute Force",
        spaceComplexity: "O(1)"
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        rating: 4.4,
        description: "Calculate how much water can be trapped between bars of different heights.",
        concepts: ["Two Pointers", "Dynamic Programming", "Precomputation"],
        hints: [
          "Water trapped = min(leftMax, rightMax) - current height",
          "Use two pointers or precompute left/right max arrays",
          "Consider edge cases: no trapping possible"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/trapping-rain-water/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/trapping-rain-water/" }
        ],
        javaSolution: `// Trapping Rain Water - Two Pointers (Optimal)
public int trap(int[] height) {
    int left = 0, right = height.length - 1;
    int leftMax = 0, rightMax = 0;
    int totalWater = 0;
    
    while(left < right) {
        if(height[left] < height[right]) {
            // Water can be trapped on left side
            if(height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            // Water can be trapped on right side
            if(height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }
    
    return totalWater;
}

// Alternative: Precomputation approach
public int trapPrecompute(int[] height) {
    int n = height.length;
    int[] leftMax = new int[n];
    int[] rightMax = new int[n];
    
    // Precompute left max heights
    leftMax[0] = height[0];
    for(int i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i-1], height[i]);
    }
    
    // Precompute right max heights
    rightMax[n-1] = height[n-1];
    for(int i = n-2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i+1], height[i]);
    }
    
    // Calculate trapped water
    int totalWater = 0;
    for(int i = 0; i < n; i++) {
        int waterLevel = Math.min(leftMax[i], rightMax[i]);
        if(waterLevel > height[i]) {
            totalWater += waterLevel - height[i];
        }
    }
    
    return totalWater;
}`,
        explanation: "The two-pointer approach is optimal with O(1) space. We track the maximum heights from left and right sides and move the pointer with smaller height inward. The precomputation approach uses O(n) space but is easier to understand - we calculate the maximum height to the left and right of each position.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) - Two Pointers, O(n) - Precomputation"
      },
      {
        title: "3Sum",
        difficulty: "Medium",
        rating: 4.6,
        description: "Find all unique triplets in the array which gives the sum of zero.",
        concepts: ["Two Pointers", "Sorting", "Hash Set"],
        hints: [
          "Sort the array first",
          "Use three pointers: i, left, right",
          "Skip duplicates to avoid duplicate triplets",
          "Use two pointers for the remaining two numbers"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/3sum/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/" }
        ],
        javaSolution: `// 3Sum - Two Pointers with Sorting
public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    
    for(int i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for i
        if(i > 0 && nums[i] == nums[i-1]) continue;
        
        int left = i + 1, right = nums.length - 1;
        
        while(left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            
            if(sum == 0) {
                result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                
                // Skip duplicates for left and right
                while(left < right && nums[left] == nums[left+1]) left++;
                while(left < right && nums[right] == nums[right-1]) right--;
                left++;
                right--;
            } else if(sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}

// Alternative: Hash Set approach (less efficient but different)
public List<List<Integer>> threeSumHashSet(int[] nums) {
    Set<List<Integer>> result = new HashSet<>();
    
    for(int i = 0; i < nums.length - 2; i++) {
        Set<Integer> set = new HashSet<>();
        
        for(int j = i + 1; j < nums.length; j++) {
            int complement = -(nums[i] + nums[j]);
            
            if(set.contains(complement)) {
                List<Integer> triplet = Arrays.asList(nums[i], complement, nums[j]);
                Collections.sort(triplet);
                result.add(triplet);
            }
            set.add(nums[j]);
        }
    }
    
    return new ArrayList<>(result);
}`,
        explanation: "The optimal approach sorts the array first, then uses three pointers. For each unique first number, we use two pointers to find pairs that sum to the negative of the first number. We skip duplicates to avoid duplicate triplets. The hash set approach is less efficient but shows an alternative method.",
        timeComplexity: "O(n²) - Two Pointers, O(n²) - Hash Set",
        spaceComplexity: "O(1) - Two Pointers, O(n) - Hash Set"
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        rating: 4.1,
        description: "Find the maximum profit you can achieve from one transaction.",
        concepts: ["Greedy", "One Pass"],
        hints: [
          "Keep track of minimum price seen so far",
          "Calculate profit if we sell at current price",
          "Update maximum profit found so far"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/stock-buy-sell/" }
        ],
        javaSolution: `// Best Time to Buy and Sell Stock - One Pass
public int maxProfit(int[] prices) {
    if(prices == null || prices.length < 2) return 0;
    
    int minPrice = prices[0];
    int maxProfit = 0;
    
    for(int i = 1; i < prices.length; i++) {
        // Update minimum price seen so far
        minPrice = Math.min(minPrice, prices[i]);
        
        // Calculate profit if we sell at current price
        int currentProfit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, currentProfit);
    }
    
    return maxProfit;
}

// Alternative: Brute Force (for understanding)
public int maxProfitBruteForce(int[] prices) {
    int maxProfit = 0;
    
    for(int i = 0; i < prices.length - 1; i++) {
        for(int j = i + 1; j < prices.length; j++) {
            int profit = prices[j] - prices[i];
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    
    return maxProfit;
}`,
        explanation: "The one-pass approach maintains the minimum price seen so far and calculates the potential profit if we sell at the current price. We update the maximum profit whenever we find a better opportunity. This is much more efficient than checking all possible pairs.",
        timeComplexity: "O(n) - One Pass, O(n²) - Brute Force",
        spaceComplexity: "O(1)"
      },
      {
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        rating: 4.0,
        description: "Remove duplicates in-place such that each element appears only once.",
        concepts: ["Two Pointers", "In-place Algorithm"],
        hints: [
          "Use two pointers: one for current position, one for next unique element",
          "Skip duplicates by moving pointer forward",
          "Return the new length of array"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/remove-duplicates-sorted-array/" }
        ],
        javaSolution: `// Remove Duplicates - Two Pointers
public int removeDuplicates(int[] nums) {
    if(nums.length == 0) return 0;
    
    int uniqueIndex = 1;
    
    for(int i = 1; i < nums.length; i++) {
        if(nums[i] != nums[i-1]) {
            nums[uniqueIndex] = nums[i];
            uniqueIndex++;
        }
    }
    
    return uniqueIndex;
}

// Alternative: Using HashSet (not in-place)
public int removeDuplicatesHashSet(int[] nums) {
    Set<Integer> set = new HashSet<>();
    int index = 0;
    
    for(int num : nums) {
        if(!set.contains(num)) {
            set.add(num);
            nums[index++] = num;
        }
    }
    
    return index;
}`,
        explanation: "The two-pointer approach is optimal for sorted arrays. We use one pointer to track the next position for unique elements and another to iterate through the array. When we find a new unique element, we place it at the unique index and increment it. The HashSet approach works for unsorted arrays but uses extra space.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) - Two Pointers, O(n) - HashSet"
      },
      {
        title: "Plus One",
        difficulty: "Easy",
        rating: 3.8,
        description: "Given a non-empty array of digits representing a non-negative integer, increment it by one.",
        concepts: ["Array Manipulation", "Carry Over"],
        hints: [
          "Start from the end of array",
          "Handle carry over when digit becomes 10",
          "If all digits are 9, create new array with extra digit"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/plus-one/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/plus-one/" }
        ],
        javaSolution: `// Plus One - Array Manipulation
public int[] plusOne(int[] digits) {
    int n = digits.length;
    
    // Start from the end
    for(int i = n - 1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0; // Set to 0 and carry over
    }
    
    // If we reach here, all digits were 9
    int[] newDigits = new int[n + 1];
    newDigits[0] = 1;
    return newDigits;
}

// Alternative: Convert to number and back (not recommended for large numbers)
public int[] plusOneConvert(int[] digits) {
    long num = 0;
    for(int digit : digits) {
        num = num * 10 + digit;
    }
    num++;
    
    String numStr = String.valueOf(num);
    int[] result = new int[numStr.length()];
    
    for(int i = 0; i < numStr.length(); i++) {
        result[i] = numStr.charAt(i) - '0';
    }
    
    return result;
}`,
        explanation: "The optimal approach processes the array from right to left. If a digit is less than 9, we simply increment it and return. If it's 9, we set it to 0 and continue to the next digit. If all digits are 9, we create a new array with an extra digit 1 at the beginning.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) - In-place, O(n) - New array (worst case)"
      },
      {
        title: "Rotate Array",
        difficulty: "Medium",
        rating: 4.2,
        description: "Rotate the array to the right by k steps, where k is non-negative.",
        concepts: ["Array Rotation", "Reverse Algorithm", "Modulo Operation"],
        hints: [
          "Use reverse algorithm: reverse whole array, then reverse first k and last n-k elements",
          "Handle case where k > array length using modulo",
          "Consider in-place rotation for space efficiency"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/rotate-array/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/array-rotation/" }
        ],
        javaSolution: `// Rotate Array - Reverse Algorithm (Optimal)
public void rotate(int[] nums, int k) {
    int n = nums.length;
    k = k % n; // Handle k > n
    
    // Reverse entire array
    reverse(nums, 0, n - 1);
    
    // Reverse first k elements
    reverse(nums, 0, k - 1);
    
    // Reverse remaining elements
    reverse(nums, k, n - 1);
}

private void reverse(int[] nums, int start, int end) {
    while(start < end) {
        int temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// Alternative: Using extra array
public void rotateExtraArray(int[] nums, int k) {
    int n = nums.length;
    k = k % n;
    
    int[] rotated = new int[n];
    
    for(int i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }
    
    // Copy back to original array
    for(int i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
}`,
        explanation: "The reverse algorithm is elegant and space-efficient. We reverse the entire array, then reverse the first k elements and the remaining elements. This gives us the rotated array. The modulo operation handles cases where k is larger than the array length. The extra array approach is simpler but uses O(n) space.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) - Reverse algorithm, O(n) - Extra array"
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        rating: 4.4,
        description: "Return an array such that each element is equal to the product of all the elements in the original array except the one at i.",
        concepts: ["Prefix Product", "Suffix Product", "Division Avoidance"],
        hints: [
          "Calculate prefix products (left to right)",
          "Calculate suffix products (right to left)",
          "Combine prefix and suffix for final result",
          "Avoid division to handle zero values"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/product-of-array-except-self/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/a-product-array-puzzle/" }
        ],
        javaSolution: `// Product of Array Except Self - Prefix and Suffix
public int[] productExceptSelf(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    
    // Calculate prefix products (left to right)
    result[0] = 1;
    for(int i = 1; i < n; i++) {
        result[i] = result[i-1] * nums[i-1];
    }
    
    // Calculate suffix products and combine
    int suffix = 1;
    for(int i = n - 1; i >= 0; i--) {
        result[i] = result[i] * suffix;
        suffix *= nums[i];
    }
    
    return result;
}

// Alternative: Using division (not recommended due to zero handling)
public int[] productExceptSelfDivision(int[] nums) {
    int n = nums.length;
    int product = 1;
    int zeroCount = 0;
    
    // Calculate total product and count zeros
    for(int num : nums) {
        if(num == 0) {
            zeroCount++;
        } else {
            product *= num;
        }
    }
    
    int[] result = new int[n];
    
    for(int i = 0; i < n; i++) {
        if(zeroCount > 1) {
            result[i] = 0;
        } else if(zeroCount == 1) {
            result[i] = nums[i] == 0 ? product : 0;
        } else {
            result[i] = product / nums[i];
        }
    }
    
    return result;
}`,
        explanation: "The optimal approach uses prefix and suffix products. We first calculate the product of all elements to the left of each position, then multiply by the product of all elements to the right. This avoids division and handles zero values correctly. The division approach is simpler but requires special handling for zeros.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) - Output array not counted as extra space"
      },
      {
        title: "Sort Colors (Dutch National Flag)",
        difficulty: "Medium",
        rating: 4.3,
        description: "Sort an array containing only 0s, 1s, and 2s in-place using one pass.",
        concepts: ["Three Pointers", "Partitioning", "Dutch National Flag Algorithm"],
        hints: [
          "Use three pointers: low, mid, high",
          "low points to next position for 0, high points to next position for 2",
          "mid traverses the array and swaps elements accordingly"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sort-colors/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/" }
        ],
        javaSolution: `// Sort Colors - Dutch National Flag Algorithm
public void sortColors(int[] nums) {
    int low = 0, mid = 0, high = nums.length - 1;
    
    while(mid <= high) {
        if(nums[mid] == 0) {
            // Swap with low pointer
            swap(nums, low, mid);
            low++;
            mid++;
        } else if(nums[mid] == 1) {
            // 1 is in correct position, move mid
            mid++;
        } else { // nums[mid] == 2
            // Swap with high pointer
            swap(nums, mid, high);
            high--;
            // Don't increment mid as we need to check the new element
        }
    }
}

private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

// Alternative: Counting sort
public void sortColorsCounting(int[] nums) {
    int[] count = new int[3];
    
    // Count occurrences
    for(int num : nums) {
        count[num]++;
    }
    
    // Fill array based on counts
    int index = 0;
    for(int i = 0; i < 3; i++) {
        while(count[i] > 0) {
            nums[index++] = i;
            count[i]--;
        }
    }
}`,
        explanation: "The Dutch National Flag algorithm uses three pointers to partition the array in one pass. The low pointer tracks the next position for 0, high tracks the next position for 2, and mid traverses the array. When we encounter 0, we swap with low; when we encounter 2, we swap with high; 1 stays in place. The counting sort approach is simpler but requires two passes.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Merge Sorted Array",
        difficulty: "Easy",
        rating: 4.0,
        description: "Merge two sorted arrays into the first array, which has enough space.",
        concepts: ["Two Pointers", "Merge Algorithm", "Backward Traversal"],
        hints: [
          "Start from the end of both arrays",
          "Compare elements and place larger one at end",
          "Handle remaining elements from second array"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/merge-sorted-array/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/merge-two-sorted-arrays/" }
        ],
        javaSolution: `// Merge Sorted Array - Backward Traversal
public void merge(int[] nums1, int m, int[] nums2, int n) {
    int p1 = m - 1; // Pointer for nums1
    int p2 = n - 1; // Pointer for nums2
    int p = m + n - 1; // Pointer for merged result
    
    while(p1 >= 0 && p2 >= 0) {
        if(nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    
    // Copy remaining elements from nums2
    while(p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}

// Alternative: Forward traversal with extra space
public void mergeForward(int[] nums1, int m, int[] nums2, int n) {
    int[] temp = new int[m];
    
    // Copy nums1 to temp
    for(int i = 0; i < m; i++) {
        temp[i] = nums1[i];
    }
    
    int p1 = 0, p2 = 0, p = 0;
    
    while(p1 < m && p2 < n) {
        if(temp[p1] <= nums2[p2]) {
            nums1[p] = temp[p1];
            p1++;
        } else {
            nums1[p] = nums2[p2];
            p2++;
        }
        p++;
    }
    
    // Copy remaining elements
    while(p1 < m) {
        nums1[p] = temp[p1];
        p1++;
        p++;
    }
    while(p2 < n) {
        nums1[p] = nums2[p2];
        p2++;
        p++;
    }
}`,
        explanation: "The backward traversal approach is optimal as it doesn't overwrite elements we still need. We start from the end of both arrays and place the larger element at the end of the merged array. This approach works because nums1 has enough space and we don't lose any information. The forward approach requires extra space to avoid overwriting.",
        timeComplexity: "O(m + n)",
        spaceComplexity: "O(1) - Backward, O(m) - Forward"
      },
      {
        title: "Missing Number",
        difficulty: "Easy",
        rating: 3.9,
        description: "Find the missing number in an array containing n distinct numbers from 0 to n.",
        concepts: ["Mathematical Formula", "XOR Operation", "Sum Difference"],
        hints: [
          "Use mathematical formula: sum = n*(n+1)/2",
          "Calculate difference between expected and actual sum",
          "Alternative: Use XOR operation for bit manipulation"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/missing-number/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-the-missing-number/" }
        ],
        javaSolution: `// Missing Number - Mathematical Formula
public int missingNumber(int[] nums) {
    int n = nums.length;
    int expectedSum = n * (n + 1) / 2;
    int actualSum = 0;
    
    for(int num : nums) {
        actualSum += num;
    }
    
    return expectedSum - actualSum;
}

// Alternative: XOR operation
public int missingNumberXOR(int[] nums) {
    int result = nums.length;
    
    for(int i = 0; i < nums.length; i++) {
        result ^= i ^ nums[i];
    }
    
    return result;
}

// Alternative: Sorting and linear search
public int missingNumberSort(int[] nums) {
    Arrays.sort(nums);
    
    for(int i = 0; i < nums.length; i++) {
        if(nums[i] != i) {
            return i;
        }
    }
    
    return nums.length;
}`,
        explanation: "The mathematical formula approach is the most efficient. We calculate the expected sum of numbers from 0 to n using the formula n*(n+1)/2, then subtract the actual sum of the array. The XOR approach is also efficient and works by XORing all numbers from 0 to n with the array elements. The sorting approach is less efficient but easier to understand.",
        timeComplexity: "O(n) - Formula/XOR, O(n log n) - Sorting",
        spaceComplexity: "O(1)"
      },
      {
        title: "Find All Numbers Disappeared in an Array",
        difficulty: "Easy",
        rating: 4.1,
        description: "Find all numbers in range [1, n] that do not appear in the array.",
        concepts: ["Array Marking", "In-place Algorithm", "Negative Marking"],
        hints: [
          "Use the array itself to mark visited numbers",
          "Mark visited numbers by making them negative",
          "Numbers that remain positive are missing"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-all-missing-numbers-in-a-given-range/" }
        ],
        javaSolution: `// Find All Numbers Disappeared - Negative Marking
public List<Integer> findDisappearedNumbers(int[] nums) {
    List<Integer> result = new ArrayList<>();
    
    // Mark visited numbers as negative
    for(int i = 0; i < nums.length; i++) {
        int index = Math.abs(nums[i]) - 1;
        if(nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }
    
    // Find positive numbers (missing numbers)
    for(int i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            result.add(i + 1);
        }
    }
    
    return result;
}

// Alternative: Using HashSet
public List<Integer> findDisappearedNumbersHashSet(int[] nums) {
    Set<Integer> set = new HashSet<>();
    List<Integer> result = new ArrayList<>();
    
    // Add all numbers to set
    for(int num : nums) {
        set.add(num);
    }
    
    // Check which numbers are missing
    for(int i = 1; i <= nums.length; i++) {
        if(!set.contains(i)) {
            result.add(i);
        }
    }
    
    return result;
}`,
        explanation: "The negative marking approach is space-efficient and in-place. We use the array itself to mark which numbers we've seen by making them negative. After marking, any positive numbers indicate missing values. The HashSet approach is simpler but uses extra space. Both approaches are efficient for this problem.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) - Negative marking, O(n) - HashSet"
      },
      {
        title: "Maximum Subarray",
        difficulty: "Medium",
        rating: 4.5,
        description: "Find the contiguous subarray with the largest sum (Kadane's Algorithm).",
        concepts: ["Dynamic Programming", "Kadane's Algorithm"],
        hints: [
          "Keep track of maximum sum ending at current position",
          "Reset sum to 0 if it becomes negative",
          "Update global maximum at each step"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/maximum-subarray/" }
        ],
        javaSolution: `// Maximum Subarray - Kadane's Algorithm
public int maxSubArray(int[] nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    
    for(int i = 1; i < nums.length; i++) {
        // Either extend previous subarray or start new one
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        
        // Update global maximum
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}

// Maximum Subarray with indices (returns subarray bounds)
public int[] maxSubArrayWithIndices(int[] nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    int start = 0, end = 0;
    int tempStart = 0;
    
    for(int i = 1; i < nums.length; i++) {
        if(nums[i] > maxEndingHere + nums[i]) {
            maxEndingHere = nums[i];
            tempStart = i;
        } else {
            maxEndingHere = maxEndingHere + nums[i];
        }
        
        if(maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = tempStart;
            end = i;
        }
    }
    
    return new int[]{start, end, maxSoFar};
}`,
        explanation: "Kadane's algorithm maintains two variables: maxSoFar (global maximum) and maxEndingHere (maximum sum ending at current position). At each step, we decide whether to extend the previous subarray or start a new one. If the current sum becomes negative, we reset it to the current element.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Move Zeroes",
        difficulty: "Easy",
        rating: 4.0,
        description: "Move all zeroes to the end while maintaining relative order of non-zero elements.",
        concepts: ["Two Pointers", "In-place Algorithm"],
        hints: [
          "Use two pointers: one for current position, one for next non-zero",
          "Swap non-zero elements to front",
          "Fill remaining positions with zeroes"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/move-zeroes/" }
        ],
        javaSolution: `// Move Zeroes - Two Pointers
public void moveZeroes(int[] nums) {
    int nonZeroIndex = 0;
    
    // Move all non-zero elements to front
    for(int i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            nums[nonZeroIndex++] = nums[i];
        }
    }
    
    // Fill remaining positions with zeroes
    while(nonZeroIndex < nums.length) {
        nums[nonZeroIndex++] = 0;
    }
}

// Alternative: Swap-based approach
public void moveZeroesSwap(int[] nums) {
    int left = 0, right = 0;
    
    while(right < nums.length) {
        if(nums[right] != 0) {
            // Swap non-zero element to left position
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
        right++;
    }
}`,
        explanation: "The first approach uses a single pointer to track the next position for non-zero elements. We iterate through the array, moving non-zero elements to the front, then fill the remaining positions with zeroes. The swap-based approach maintains the relative order by swapping elements in place.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Container With Most Water",
        difficulty: "Medium",
        rating: 4.3,
        description: "Find two lines that together with x-axis form a container that can hold maximum water.",
        concepts: ["Two Pointers", "Greedy"],
        hints: [
          "Use two pointers at opposite ends",
          "Calculate area: min(height[left], height[right]) * (right - left)",
          "Move pointer with smaller height inward"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/container-with-most-water/" }
        ],
        javaSolution: `// Container With Most Water - Two Pointers
public int maxArea(int[] height) {
    int maxArea = 0;
    int left = 0, right = height.length - 1;
    
    while(left < right) {
        // Calculate current area
        int width = right - left;
        int h = Math.min(height[left], height[right]);
        int area = width * h;
        
        maxArea = Math.max(maxArea, area);
        
        // Move pointer with smaller height
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
}

// Alternative: Brute Force (for understanding)
public int maxAreaBruteForce(int[] height) {
    int maxArea = 0;
    
    for(int i = 0; i < height.length; i++) {
        for(int j = i + 1; j < height.length; j++) {
            int area = Math.min(height[i], height[j]) * (j - i);
            maxArea = Math.max(maxArea, area);
        }
    }
    
    return maxArea;
}`,
        explanation: "The two-pointer approach starts with maximum width and gradually reduces it while trying to increase height. We always move the pointer with the smaller height because the current area is limited by the smaller height, and moving the larger height pointer can only decrease the area.",
        timeComplexity: "O(n) - Two Pointers, O(n²) - Brute Force",
        spaceComplexity: "O(1)"
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        rating: 4.4,
        description: "Calculate how much water can be trapped between bars of different heights.",
        concepts: ["Two Pointers", "Dynamic Programming", "Precomputation"],
        hints: [
          "Water trapped = min(leftMax, rightMax) - current height",
          "Use two pointers or precompute left/right max arrays",
          "Consider edge cases: no trapping possible"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/trapping-rain-water/" }
        ],
        javaSolution: `// Trapping Rain Water - Two Pointers (Optimal)
public int trap(int[] height) {
    int left = 0, right = height.length - 1;
    int leftMax = 0, rightMax = 0;
    int totalWater = 0;
    
    while(left < right) {
        if(height[left] < height[right]) {
            // Water can be trapped on left side
            if(height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            // Water can be trapped on right side
            if(height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }
    
    return totalWater;
}

// Alternative: Precomputation approach
public int trapPrecompute(int[] height) {
    int n = height.length;
    int[] leftMax = new int[n];
    int[] rightMax = new int[n];
    
    // Precompute left max heights
    leftMax[0] = height[0];
    for(int i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i-1], height[i]);
    }
    
    // Precompute right max heights
    rightMax[n-1] = height[n-1];
    for(int i = n-2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i+1], height[i]);
    }
    
    // Calculate trapped water
    int totalWater = 0;
    for(int i = 0; i < n; i++) {
        int waterLevel = Math.min(leftMax[i], rightMax[i]);
        if(waterLevel > height[i]) {
            totalWater += waterLevel - height[i];
        }
    }
    
    return totalWater;
}`,
        explanation: "The two-pointer approach is optimal in space. We maintain leftMax and rightMax as we move inward. Water can be trapped on the side with the smaller current height because the other side guarantees a higher boundary. The precomputation approach is easier to understand but uses O(n) extra space.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) - Two Pointers, O(n) - Precomputation"
      },
      {
        title: "Sort Colors (Dutch National Flag)",
        difficulty: "Medium",
        rating: 4.2,
        description: "Sort array containing only 0s, 1s, and 2s in-place using three pointers.",
        concepts: ["Three Pointers", "In-place Sorting", "Partitioning"],
        hints: [
          "Use three pointers: low, mid, high",
          "Move 0s to beginning, 2s to end",
          "Process elements with mid pointer"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sort-colors/" }
        ],
        javaSolution: `// Sort Colors - Three Pointers (Dutch National Flag)
public void sortColors(int[] nums) {
    int low = 0, mid = 0, high = nums.length - 1;
    
    while(mid <= high) {
        if(nums[mid] == 0) {
            // Move 0 to beginning
            swap(nums, low, mid);
            low++;
            mid++;
        } else if(nums[mid] == 1) {
            // 1 stays in middle
            mid++;
        } else {
            // Move 2 to end
            swap(nums, mid, high);
            high--;
        }
    }
}

private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

// Alternative: Counting Sort approach
public void sortColorsCounting(int[] nums) {
    int[] count = new int[3];
    
    // Count occurrences
    for(int num : nums) {
        count[num]++;
    }
    
    // Reconstruct array
    int index = 0;
    for(int i = 0; i < 3; i++) {
        while(count[i] > 0) {
            nums[index++] = i;
            count[i]--;
        }
    }
}`,
        explanation: "The three-pointer approach maintains three regions: 0s at the beginning, 1s in the middle, and 2s at the end. The mid pointer processes elements, low pointer tracks the end of 0s region, and high pointer tracks the beginning of 2s region. This achieves O(n) time and O(1) space complexity.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) - Three Pointers, O(1) - Counting Sort"
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        rating: 4.1,
        description: "Return an array where each element is the product of all elements except itself.",
        concepts: ["Prefix Product", "Suffix Product", "Division Avoidance"],
        hints: [
          "Calculate prefix and suffix products",
          "Avoid division operation",
          "Use two passes: left to right, then right to left"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/product-of-array-except-self/" }
        ],
        javaSolution: `// Product of Array Except Self - Two Passes
public int[] productExceptSelf(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    
    // Calculate prefix products (left to right)
    result[0] = 1;
    for(int i = 1; i < n; i++) {
        result[i] = result[i-1] * nums[i-1];
    }
    
    // Calculate suffix products and combine (right to left)
    int rightProduct = 1;
    for(int i = n-1; i >= 0; i--) {
        result[i] = result[i] * rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
}

// Alternative: Using division (not recommended for interview)
public int[] productExceptSelfDivision(int[] nums) {
    int n = nums.length;
    int totalProduct = 1;
    int zeroCount = 0;
    
    // Calculate total product and count zeros
    for(int num : nums) {
        if(num == 0) {
            zeroCount++;
        } else {
            totalProduct *= num;
        }
    }
    
    int[] result = new int[n];
    for(int i = 0; i < n; i++) {
        if(zeroCount > 1) {
            result[i] = 0;
        } else if(zeroCount == 1) {
            result[i] = nums[i] == 0 ? totalProduct : 0;
        } else {
            result[i] = totalProduct / nums[i];
        }
    }
    
    return result;
}`,
        explanation: "The two-pass approach first calculates prefix products (product of all elements to the left) in one pass, then multiplies by suffix products (product of all elements to the right) in a second pass. This avoids division and handles edge cases like zero values gracefully.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) - excluding output array"
      },
      {
        title: "4Sum",
        difficulty: "Medium",
        rating: 4.4,
        description: "Find all unique quadruplets in the array which gives the sum of target.",
        concepts: ["Two Pointers", "Sorting", "Hash Set", "Generalization"],
        hints: [
          "Sort the array first",
          "Use two nested loops for first two numbers",
          "Use two pointers for remaining two numbers",
          "Skip duplicates to avoid duplicate quadruplets"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/4sum/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-four-elements-that-sum-to-a-given-value/" }
        ],
        javaSolution: `// 4Sum - Two Pointers with Sorting
public List<List<Integer>> fourSum(int[] nums, int target) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    
    for(int i = 0; i < nums.length - 3; i++) {
        // Skip duplicates for i
        if(i > 0 && nums[i] == nums[i-1]) continue;
        
        for(int j = i + 1; j < nums.length - 2; j++) {
            // Skip duplicates for j
            if(j > i + 1 && nums[j] == nums[j-1]) continue;
            
            int left = j + 1, right = nums.length - 1;
            
            while(left < right) {
                long sum = (long)nums[i] + nums[j] + nums[left] + nums[right];
                
                if(sum == target) {
                    result.add(Arrays.asList(nums[i], nums[j], nums[left], nums[right]));
                    
                    // Skip duplicates for left and right
                    while(left < right && nums[left] == nums[left+1]) left++;
                    while(left < right && nums[right] == nums[right-1]) right--;
                    left++;
                    right--;
                } else if(sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    return result;
}

// Alternative: Hash Set approach (less efficient)
public List<List<Integer>> fourSumHashSet(int[] nums, int target) {
    Set<List<Integer>> result = new HashSet<>();
    Arrays.sort(nums);
    
    for(int i = 0; i < nums.length - 3; i++) {
        for(int j = i + 1; j < nums.length - 2; j++) {
            Set<Integer> set = new HashSet<>();
            
            for(int k = j + 1; k < nums.length; k++) {
                int complement = target - nums[i] - nums[j] - nums[k];
                
                if(set.contains(complement)) {
                    List<Integer> quadruplet = Arrays.asList(nums[i], nums[j], complement, nums[k]);
                    result.add(quadruplet);
                }
                set.add(nums[k]);
            }
        }
    }
    
    return new ArrayList<>(result);
}`,
        explanation: "The optimal approach extends the 3Sum solution by adding another nested loop. We use two nested loops for the first two numbers and two pointers for the remaining two numbers. The hash set approach is less efficient but shows an alternative method. Both approaches require sorting to handle duplicates.",
        timeComplexity: "O(n³) - Two Pointers, O(n³) - Hash Set",
        spaceComplexity: "O(1) - Two Pointers, O(n) - Hash Set"
      },
      {
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        rating: 4.6,
        description: "Find the maximum element in each sliding window of size k.",
        concepts: ["Monotonic Queue", "Sliding Window", "Deque"],
        hints: [
          "Use a monotonic decreasing queue",
          "Queue stores indices, not values",
          "Remove elements outside current window",
          "Remove smaller elements from back of queue"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sliding-window-maximum/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-element-of-every-subarray-of-size-k/" }
        ],
        javaSolution: `// Sliding Window Maximum - Monotonic Queue
public int[] maxSlidingWindow(int[] nums, int k) {
    if(nums == null || nums.length == 0 || k <= 0) {
        return new int[0];
    }
    
    int n = nums.length;
    int[] result = new int[n - k + 1];
    Deque<Integer> deque = new LinkedList<>();
    
    for(int i = 0; i < n; i++) {
        // Remove elements outside current window
        while(!deque.isEmpty() && deque.peekFirst() <= i - k) {
            deque.pollFirst();
        }
        
        // Remove smaller elements from back
        while(!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
            deque.pollLast();
        }
        
        deque.offerLast(i);
        
        // Add maximum to result
        if(i >= k - 1) {
            result[i - k + 1] = nums[deque.peekFirst()];
        }
    }
    
    return result;
}

// Alternative: Using Priority Queue (less efficient)
public int[] maxSlidingWindowPQ(int[] nums, int k) {
    if(nums == null || nums.length == 0 || k <= 0) {
        return new int[0];
    }
    
    int n = nums.length;
    int[] result = new int[n - k + 1];
    PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
    
    for(int i = 0; i < k; i++) {
        pq.offer(nums[i]);
    }
    
    result[0] = pq.peek();
    
    for(int i = k; i < n; i++) {
        pq.remove(nums[i - k]);
        pq.offer(nums[i]);
        result[i - k + 1] = pq.peek();
    }
    
    return result;
}`,
        explanation: "The monotonic queue approach maintains a decreasing sequence of indices. The front of the queue always contains the index of the maximum element in the current window. We remove elements outside the window and smaller elements that can't be the maximum. The priority queue approach is simpler but less efficient due to removal operations.",
        timeComplexity: "O(n) - Monotonic Queue, O(n log k) - Priority Queue",
        spaceComplexity: "O(k)"
      },
      {
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        rating: 4.8,
        description: "Find the median of two sorted arrays with overall time complexity O(log(m+n)).",
        concepts: ["Binary Search", "Divide and Conquer", "Median"],
        hints: [
          "Use binary search on the smaller array",
          "Partition both arrays into left and right halves",
          "Ensure left half has (m+n+1)/2 elements",
          "Check if partition is correct using boundary conditions"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/" }
        ],
        javaSolution: `// Median of Two Sorted Arrays - Binary Search
public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    // Ensure nums1 is the smaller array
    if(nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    int m = nums1.length, n = nums2.length;
    int left = 0, right = m;
    
    while(left <= right) {
        // Partition nums1
        int partitionX = (left + right) / 2;
        int partitionY = (m + n + 1) / 2 - partitionX;
        
        // Find elements around partition
        int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
        int minRightX = (partitionX == m) ? Integer.MAX_VALUE : nums1[partitionX];
        
        int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];
        int minRightY = (partitionY == n) ? Integer.MAX_VALUE : nums2[partitionY];
        
        // Check if partition is correct
        if(maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // Partition is correct, find median
            if((m + n) % 2 == 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2.0;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if(maxLeftX > minRightY) {
            // Move partition left
            right = partitionX - 1;
        } else {
            // Move partition right
            left = partitionX + 1;
        }
    }
    
    throw new IllegalArgumentException("Input arrays are not sorted");
}

// Alternative: Merge and find median (O(m+n) time)
public double findMedianSortedArraysMerge(int[] nums1, int[] nums2) {
    int m = nums1.length, n = nums2.length;
    int[] merged = new int[m + n];
    
    int i = 0, j = 0, k = 0;
    while(i < m && j < n) {
        if(nums1[i] <= nums2[j]) {
            merged[k++] = nums1[i++];
        } else {
            merged[k++] = nums2[j++];
        }
    }
    
    while(i < m) merged[k++] = nums1[i++];
    while(j < n) merged[k++] = nums2[j++];
    
    if((m + n) % 2 == 0) {
        return (merged[(m + n) / 2 - 1] + merged[(m + n) / 2]) / 2.0;
    } else {
        return merged[(m + n) / 2];
    }
}`,
        explanation: "The binary search approach partitions both arrays into left and right halves such that the left half contains (m+n+1)/2 elements. We use binary search on the smaller array to find the correct partition. The merge approach is simpler but less efficient. The binary search approach achieves the required O(log(m+n)) time complexity.",
        timeComplexity: "O(log(min(m,n))) - Binary Search, O(m+n) - Merge",
        spaceComplexity: "O(1) - Binary Search, O(m+n) - Merge"
      },
      {
        title: "Longest Consecutive Sequence",
        difficulty: "Medium",
        rating: 4.5,
        description: "Find the length of the longest consecutive elements sequence.",
        concepts: ["Hash Set", "Sequence Detection", "Optimization"],
        hints: [
          "Use HashSet for O(1) lookups",
          "Only start counting from the beginning of a sequence",
          "Check if current number - 1 exists in set",
          "Count consecutive numbers forward from current position"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/longest-consecutive-subsequence/" }
        ],
        javaSolution: `// Longest Consecutive Sequence - Hash Set
public int longestConsecutive(int[] nums) {
    if(nums == null || nums.length == 0) return 0;
    
    Set<Integer> set = new HashSet<>();
    for(int num : nums) {
        set.add(num);
    }
    
    int maxLength = 0;
    
    for(int num : set) {
        // Only start counting if this is the beginning of a sequence
        if(!set.contains(num - 1)) {
            int currentNum = num;
            int currentLength = 1;
            
            // Count consecutive numbers forward
            while(set.contains(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }
            
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    
    return maxLength;
}

// Alternative: Sorting approach (less efficient)
public int longestConsecutiveSort(int[] nums) {
    if(nums == null || nums.length == 0) return 0;
    
    Arrays.sort(nums);
    int maxLength = 1;
    int currentLength = 1;
    
    for(int i = 1; i < nums.length; i++) {
        if(nums[i] == nums[i-1] + 1) {
            currentLength++;
        } else if(nums[i] != nums[i-1]) {
            currentLength = 1;
        }
        // If nums[i] == nums[i-1], continue with same length
        
        maxLength = Math.max(maxLength, currentLength);
    }
    
    return maxLength;
}`,
        explanation: "The hash set approach is optimal. We only start counting from the beginning of a sequence (when num-1 doesn't exist). This ensures we don't count the same sequence multiple times. We then count forward to find the complete sequence length. The sorting approach is simpler but less efficient due to O(n log n) time complexity.",
        timeComplexity: "O(n) - Hash Set, O(n log n) - Sorting",
        spaceComplexity: "O(n)"
      },
      {
        title: "First Missing Positive",
        difficulty: "Hard",
        rating: 4.7,
        description: "Find the first missing positive integer in an unsorted array.",
        concepts: ["Array Marking", "In-place Algorithm", "Index Mapping"],
        hints: [
          "Use the array itself to mark visited positive numbers",
          "Mark visited numbers by making them negative",
          "Only consider numbers in range [1, n]",
          "First positive index with positive value is the answer"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/first-missing-positive/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/" }
        ],
        javaSolution: `// First Missing Positive - Array Marking
public int firstMissingPositive(int[] nums) {
    int n = nums.length;
    
    // Step 1: Mark numbers outside range [1, n] as n+1
    for(int i = 0; i < n; i++) {
        if(nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1;
        }
    }
    
    // Step 2: Mark visited numbers as negative
    for(int i = 0; i < n; i++) {
        int num = Math.abs(nums[i]);
        if(num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }
    
    // Step 3: Find first positive number
    for(int i = 0; i < n; i++) {
        if(nums[i] > 0) {
            return i + 1;
        }
    }
    
    return n + 1;
}

// Alternative: Using extra array
public int firstMissingPositiveExtra(int[] nums) {
    int n = nums.length;
    boolean[] present = new boolean[n + 1];
    
    // Mark present numbers
    for(int num : nums) {
        if(num > 0 && num <= n) {
            present[num] = true;
        }
    }
    
    // Find first missing positive
    for(int i = 1; i <= n; i++) {
        if(!present[i]) {
            return i;
        }
    }
    
    return n + 1;
}`,
        explanation: "The array marking approach is space-efficient and in-place. We first mark numbers outside the range [1, n] as n+1, then use negative marking to indicate which positive numbers we've seen. The first positive index with a positive value indicates the missing number. The extra array approach is simpler but uses O(n) space.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) - Array marking, O(n) - Extra array"
      }
    ]
  },
  {
    id: 'linked-lists',
    title: 'Linked Lists',
    icon: GitBranch,
    color: '#10B981',
    difficulty: 'Beginner',
    estimatedTime: '3-4 hours',
    concepts: 10,
    problems: 30,
    tags: ['Dynamic', 'Pointers', 'Memory'],
    description: 'Master dynamic data structures with pointers and node-based storage.',
    explanation: `
      <div class="explanation-content">
        <h3>What is a Linked List?</h3>
        <p>Imagine a treasure hunt where each clue leads to the next location. A linked list works similarly - each element (node) contains data and a "clue" (pointer) to find the next element. Unlike arrays where elements sit in numbered seats, linked list elements can be scattered anywhere in memory, connected by these pointers.</p>
        
        <div class="real-world-example">
          <h4>🔗 Real-World Analogy</h4>
          <p><strong>Train Cars:</strong> Think of a train where each car is connected to the next one:</p>
          <ul>
            <li>Each car (node) carries passengers (data)</li>
            <li>Each car has a coupling (pointer) to the next car</li>
            <li>The engine (head) leads the entire train</li>
            <li>The last car (tail) has no coupling (null pointer)</li>
            <li>You can add/remove cars anywhere in the train</li>
          </ul>
        </div>

        <h3>Why Use Linked Lists?</h3>
        <div class="key-concepts">
          <h4>🎯 Advantages over Arrays</h4>
          <ul>
            <li><strong>Dynamic Size:</strong> Grow/shrink during runtime (like adding train cars)</li>
            <li><strong>Efficient Insertion/Deletion:</strong> No need to shift elements</li>
            <li><strong>Memory Efficient:</strong> Allocate exactly what you need</li>
            <li><strong>No Memory Waste:</strong> Unlike fixed-size arrays</li>
          </ul>
        </div>

        <h3>Types of Linked Lists</h3>
        <h4>1. Singly Linked List</h4>
        <p>Like a one-way street - you can only move forward. Each node points to the next node.</p>
        
        <h4>2. Doubly Linked List</h4>
        <p>Like a two-way street - each node has pointers to both next and previous nodes.</p>
        
        <h4>3. Circular Linked List</h4>
        <p>Like a race track - the last node points back to the first, forming a circle.</p>

        <div class="comparison">
          <h4>Array vs Linked List</h4>
          <div class="comparison-grid">
            <div>
              <strong>Array (Apartment Building)</strong>
              <ul>
                <li>Fixed number of rooms</li>
                <li>Rooms numbered sequentially</li>
                <li>Fast access to any room</li>
                <li>Hard to add new rooms</li>
              </ul>
            </div>
            <div>
              <strong>Linked List (Train)</strong>
              <ul>
                <li>Add cars as needed</li>
                <li>Cars connected by couplings</li>
                <li>Must walk through cars to reach end</li>
                <li>Easy to add/remove cars</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    codeExamples: [
      {
        title: 'Singly Linked List Implementation',
        code: `// Node structure
class ListNode {
    int data;
    ListNode next;
    
    ListNode(int data) {
        this.data = data;
        this.next = null;
    }
}

// Linked List operations
class LinkedList {
    ListNode head;
    
    // Insert at beginning (O(1))
    void insertFirst(int data) {
        ListNode newNode = new ListNode(data);
        newNode.next = head;
        head = newNode;
    }
    
    // Search for element (O(n))
    boolean search(int target) {
        ListNode current = head;
        while(current != null) {
            if(current.data == target) return true;
            current = current.next;
        }
        return false;
    }
}`,
        visualization: <LinkedListVisual />,
        steps: [
          "Create node structure with data and next pointer",
          "Initialize head pointer to track first node",
          "For insertion: create new node and update pointers",
          "For search: traverse from head following next pointers",
          "Continue until target found or reach null (end)"
        ]
      }
    ],
    patterns: [
      {
        name: "Fast and Slow Pointers",
        difficulty: "Medium",
        description: "Use two pointers moving at different speeds to detect cycles and find middle elements.",
        whenToUse: [
          "Detecting cycles in linked lists",
          "Finding middle element",
          "Checking if list is palindrome"
        ],
        example: `// Detect cycle using Floyd's algorithm
ListNode slow = head, fast = head;
while(fast != null && fast.next != null) {
    slow = slow.next;        // Move 1 step
    fast = fast.next.next;   // Move 2 steps
    if(slow == fast) return true; // Cycle detected
}
return false;`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      }
    ],
    problemSet: [
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        rating: 4.3,
        description: "Reverse a singly linked list iteratively or recursively.",
        concepts: ["Pointers", "Iteration", "Recursion"],
        hints: [
          "Keep track of previous, current, and next nodes",
          "Reverse the link direction at each step",
          "Update pointers carefully to avoid losing nodes"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/reverse-linked-list/" }
        ],
        javaSolution: `// Reverse Linked List - Iterative
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;
    
    while(current != null) {
        ListNode next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}

// Reverse Linked List - Recursive
public ListNode reverseListRecursive(ListNode head) {
    if(head == null || head.next == null) {
        return head;
    }
    
    ListNode newHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
}`,
        explanation: "The iterative approach uses three pointers to reverse links one by one. The recursive approach reverses the rest of the list first, then adjusts the current node's links. Both approaches achieve O(n) time complexity.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) - Iterative, O(n) - Recursive (call stack)"
      },
      {
        title: "Detect Cycle in Linked List",
        difficulty: "Medium",
        rating: 4.3,
        description: "Determine if a linked list has a cycle using Floyd's Cycle Detection Algorithm.",
        concepts: ["Fast and Slow Pointers", "Cycle Detection"],
        hints: [
          "Use two pointers moving at different speeds",
          "If they meet, cycle exists",
          "If fast pointer reaches null, no cycle"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/linked-list-cycle/" }
        ],
        javaSolution: `// Detect Cycle - Floyd's Algorithm
public boolean hasCycle(ListNode head) {
    if(head == null || head.next == null) {
        return false;
    }
    
    ListNode slow = head;
    ListNode fast = head;
    
    while(fast != null && fast.next != null) {
        slow = slow.next;        // Move 1 step
        fast = fast.next.next;   // Move 2 steps
        
        if(slow == fast) {
            return true; // Cycle detected
        }
    }
    
    return false;
}

// Find cycle start node
public ListNode detectCycle(ListNode head) {
    if(head == null || head.next == null) {
        return null;
    }
    
    ListNode slow = head;
    ListNode fast = head;
    boolean hasCycle = false;
    
    // Detect cycle
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow == fast) {
            hasCycle = true;
            break;
        }
    }
    
    if(!hasCycle) return null;
    
    // Find cycle start
    slow = head;
    while(slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}`,
        explanation: "Floyd's algorithm uses two pointers moving at different speeds. If there's a cycle, they will eventually meet. The cycle start can be found by resetting one pointer to head and moving both at same speed until they meet again.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        rating: 4.2,
        description: "Merge two sorted linked lists into a single sorted list.",
        concepts: ["Two Pointers", "Merge Algorithm"],
        hints: [
          "Compare nodes from both lists",
          "Link smaller node to result",
          "Handle remaining nodes from either list"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/merge-two-sorted-lists/" }
        ],
        javaSolution: `// Merge Two Sorted Lists - Iterative
public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    
    while(l1 != null && l2 != null) {
        if(l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    // Attach remaining nodes
    current.next = (l1 != null) ? l1 : l2;
    
    return dummy.next;
}

// Merge Two Sorted Lists - Recursive
public ListNode mergeTwoListsRecursive(ListNode l1, ListNode l2) {
    if(l1 == null) return l2;
    if(l2 == null) return l1;
    
    if(l1.val <= l2.val) {
        l1.next = mergeTwoListsRecursive(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoListsRecursive(l1, l2.next);
        return l2;
    }
}`,
        explanation: "The iterative approach uses a dummy node and compares nodes from both lists, linking the smaller one to the result. The recursive approach chooses the smaller head and recursively merges the rest. Both maintain the sorted order.",
        timeComplexity: "O(n + m) where n, m are list lengths",
        spaceComplexity: "O(1) - Iterative, O(n + m) - Recursive (call stack)"
      },
      {
        title: "Remove Nth Node From End",
        difficulty: "Medium",
        rating: 4.1,
        description: "Remove the nth node from the end of the list using two pointers.",
        concepts: ["Two Pointers", "Distance Gap"],
        hints: [
          "Use two pointers with n+1 gap",
          "Move both pointers until fast reaches end",
          "Remove the node after slow pointer"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" }
        ],
        javaSolution: `// Remove Nth Node From End - Two Pointers
public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    
    ListNode slow = dummy;
    ListNode fast = dummy;
    
    // Move fast pointer n+1 steps ahead
    for(int i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Move both pointers until fast reaches end
    while(fast != null) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // Remove the nth node from end
    slow.next = slow.next.next;
    
    return dummy.next;
}

// Alternative: One pass with length calculation
public ListNode removeNthFromEndLength(ListNode head, int n) {
    int length = 0;
    ListNode current = head;
    
    // Calculate length
    while(current != null) {
        length++;
        current = current.next;
    }
    
    // Find position from beginning
    int position = length - n;
    
    if(position == 0) {
        return head.next;
    }
    
    current = head;
    for(int i = 0; i < position - 1; i++) {
        current = current.next;
    }
    
    current.next = current.next.next;
    return head;
}`,
        explanation: "The two-pointer approach creates a gap of n+1 between slow and fast pointers. When fast reaches the end, slow will be positioned just before the node to remove. This achieves O(n) time complexity in a single pass.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Add Two Numbers",
        difficulty: "Medium",
        rating: 4.4,
        description: "Add two numbers represented by linked lists where each node contains a single digit.",
        concepts: ["Linked List Traversal", "Carry Over", "Digit Manipulation"],
        hints: [
          "Traverse both lists simultaneously",
          "Handle carry over from previous addition",
          "Create new nodes for result",
          "Don't forget to handle remaining carry"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/add-two-numbers/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/add-two-numbers-represented-by-linked-lists/" }
        ],
        javaSolution: `// Add Two Numbers - Linked List Traversal
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    int carry = 0;
    
    while(l1 != null || l2 != null || carry > 0) {
        int sum = carry;
        
        if(l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        carry = sum / 10;
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    
    return dummy.next;
}

// Alternative: Recursive approach
public ListNode addTwoNumbersRecursive(ListNode l1, ListNode l2) {
    return addTwoNumbersHelper(l1, l2, 0);
}

private ListNode addTwoNumbersHelper(ListNode l1, ListNode l2, int carry) {
    if(l1 == null && l2 == null && carry == 0) {
        return null;
    }
    
    int sum = carry;
    if(l1 != null) sum += l1.val;
    if(l2 != null) sum += l2.val;
    
    ListNode result = new ListNode(sum % 10);
    result.next = addTwoNumbersHelper(
        l1 != null ? l1.next : null,
        l2 != null ? l2.next : null,
        sum / 10
    );
    
    return result;
}`,
        explanation: "The iterative approach traverses both lists simultaneously, adding corresponding digits and handling carry over. We create a dummy node to simplify the result list construction. The recursive approach is more elegant but uses O(max(m,n)) space for the call stack.",
        timeComplexity: "O(max(m,n))",
        spaceComplexity: "O(max(m,n))"
      },
      {
        title: "Remove Duplicates from Sorted List II",
        difficulty: "Medium",
        rating: 4.2,
        description: "Remove all nodes that have duplicate numbers, leaving only distinct numbers from the original list.",
        concepts: ["Linked List Traversal", "Duplicate Removal", "Two Pointers"],
        hints: [
          "Use dummy node to handle head deletion",
          "Compare current node with next node",
          "Skip all nodes with same value",
          "Update pointers carefully"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/remove-occurrences-duplicates-sorted-linked-list/" }
        ],
        javaSolution: `// Remove Duplicates II - Two Pointers
public ListNode deleteDuplicates(ListNode head) {
    if(head == null || head.next == null) return head;
    
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode prev = dummy;
    ListNode current = head;
    
    while(current != null && current.next != null) {
        if(current.val == current.next.val) {
            // Skip all nodes with same value
            int duplicateValue = current.val;
            while(current != null && current.val == duplicateValue) {
                current = current.next;
            }
            prev.next = current;
        } else {
            prev = current;
            current = current.next;
        }
    }
    
    return dummy.next;
}

// Alternative: Recursive approach
public ListNode deleteDuplicatesRecursive(ListNode head) {
    if(head == null || head.next == null) return head;
    
    if(head.val == head.next.val) {
        // Skip all nodes with same value
        while(head.next != null && head.val == head.next.val) {
            head = head.next;
        }
        return deleteDuplicatesRecursive(head.next);
    } else {
        head.next = deleteDuplicatesRecursive(head.next);
        return head;
    }
}`,
        explanation: "The two-pointer approach uses a dummy node to handle cases where the head needs to be deleted. We compare current node with next node and skip all nodes with the same value. The recursive approach is more elegant but uses O(n) space for the call stack.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) - Two Pointers, O(n) - Recursive"
      },
      {
        title: "Reorder List",
        difficulty: "Medium",
        rating: 4.3,
        description: "Reorder the list: L0→L1→...→Ln-1→Ln → L0→Ln→L1→Ln-1→L2→Ln-2→...",
        concepts: ["Fast and Slow Pointers", "List Reversal", "List Merging"],
        hints: [
          "Find middle of list using fast/slow pointers",
          "Reverse second half of list",
          "Merge first and reversed second half",
          "Alternate nodes from both halves"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/reorder-list/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/rearrange-a-given-linked-list-in-place/" }
        ],
        javaSolution: `// Reorder List - Three Steps
public void reorderList(ListNode head) {
    if(head == null || head.next == null) return;
    
    // Step 1: Find middle
    ListNode slow = head, fast = head;
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Step 2: Reverse second half
    ListNode second = reverseList(slow.next);
    slow.next = null;
    
    // Step 3: Merge two lists
    ListNode first = head;
    while(second != null) {
        ListNode temp1 = first.next;
        ListNode temp2 = second.next;
        
        first.next = second;
        second.next = temp1;
        
        first = temp1;
        second = temp2;
    }
}

private ListNode reverseList(ListNode head) {
    ListNode prev = null, current = head;
    while(current != null) {
        ListNode next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

// Alternative: Using Stack
public void reorderListStack(ListNode head) {
    if(head == null || head.next == null) return;
    
    Stack<ListNode> stack = new Stack<>();
    ListNode current = head;
    int count = 0;
    
    // Push all nodes to stack
    while(current != null) {
        stack.push(current);
        current = current.next;
        count++;
    }
    
    // Reorder list
    current = head;
    for(int i = 0; i < count / 2; i++) {
        ListNode next = current.next;
        ListNode fromStack = stack.pop();
        
        current.next = fromStack;
        fromStack.next = next;
        current = next;
    }
    
    if(count % 2 == 0) {
        current.next = null;
    } else {
        current.next = null;
    }
}`,
        explanation: "The optimal approach uses three steps: find middle using fast/slow pointers, reverse second half, and merge by alternating nodes. The stack approach is simpler but uses O(n) space. Both approaches achieve the required reordering pattern.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) - Three Steps, O(n) - Stack"
      },
      {
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        rating: 4.5,
        description: "Create a deep copy of a linked list where each node has a random pointer.",
        concepts: ["Hash Map", "Linked List Manipulation", "Deep Copy"],
        hints: [
          "Use HashMap to map original nodes to copies",
          "First pass: create copies without random pointers",
          "Second pass: set random pointers using HashMap",
          "Alternative: interweave original and copy nodes"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/a-linked-list-with-next-and-arbit-pointer/" }
        ],
        javaSolution: `// Copy List with Random Pointer - Hash Map
public Node copyRandomList(Node head) {
    if(head == null) return null;
    
    Map<Node, Node> map = new HashMap<>();
    Node current = head;
    
    // First pass: create copies
    while(current != null) {
        map.put(current, new Node(current.val));
        current = current.next;
    }
    
    // Second pass: set next and random pointers
    current = head;
    while(current != null) {
        Node copy = map.get(current);
        copy.next = map.get(current.next);
        copy.random = map.get(current.random);
        current = current.next;
    }
    
    return map.get(head);
}

// Alternative: Interweaving approach (O(1) space)
public Node copyRandomListInterweave(Node head) {
    if(head == null) return null;
    
    // Step 1: Interweave original and copy nodes
    Node current = head;
    while(current != null) {
        Node copy = new Node(current.val);
        copy.next = current.next;
        current.next = copy;
        current = copy.next;
    }
    
    // Step 2: Set random pointers
    current = head;
    while(current != null) {
        if(current.random != null) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }
    
    // Step 3: Separate original and copy lists
    Node dummy = new Node(0);
    Node copyCurrent = dummy;
    current = head;
    
    while(current != null) {
        copyCurrent.next = current.next;
        copyCurrent = copyCurrent.next;
        current.next = current.next.next;
        current = current.next;
    }
    
    return dummy.next;
}`,
        explanation: "The hash map approach is straightforward: we create copies in the first pass and set pointers in the second pass. The interweaving approach is more complex but uses O(1) space by temporarily linking original and copy nodes together.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n) - Hash Map, O(1) - Interweaving"
      },
      {
        title: "Reverse Nodes in k-Group",
        difficulty: "Hard",
        rating: 4.6,
        description: "Reverse the nodes of a linked list k at a time and return the modified list.",
        concepts: ["Linked List Reversal", "Group Processing", "Recursion"],
        hints: [
          "Reverse first k nodes using standard reversal",
          "Recursively reverse remaining nodes in groups of k",
          "Handle case where remaining nodes < k",
          "Connect reversed groups properly"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/reverse-a-linked-list-in-groups-of-given-size/" }
        ],
        javaSolution: `// Reverse Nodes in k-Group - Recursive
public ListNode reverseKGroup(ListNode head, int k) {
    if(head == null || head.next == null || k == 1) return head;
    
    // Check if we have k nodes
    int count = 0;
    ListNode current = head;
    while(current != null && count < k) {
        current = current.next;
        count++;
    }
    
    if(count < k) return head; // Not enough nodes
    
    // Reverse first k nodes
    ListNode prev = null;
    current = head;
    for(int i = 0; i < k; i++) {
        ListNode next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    // Recursively reverse remaining nodes
    head.next = reverseKGroup(current, k);
    
    return prev;
}

// Alternative: Iterative approach
public ListNode reverseKGroupIterative(ListNode head, int k) {
    if(head == null || head.next == null || k == 1) return head;
    
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode prev = dummy;
    
    while(prev.next != null) {
        ListNode start = prev.next;
        ListNode end = start;
        
        // Find end of current group
        for(int i = 1; i < k && end.next != null; i++) {
            end = end.next;
        }
        
        if(end.next == null && i < k) break; // Not enough nodes
        
        // Reverse current group
        ListNode next = end.next;
        end.next = null;
        
        ListNode reversed = reverseList(start);
        prev.next = reversed;
        start.next = next;
        prev = start;
    }
    
    return dummy.next;
}

private ListNode reverseList(ListNode head) {
    ListNode prev = null, current = head;
    while(current != null) {
        ListNode next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}`,
        explanation: "The recursive approach reverses the first k nodes and then recursively processes the remaining nodes. The iterative approach processes groups one by one, reversing each group and connecting them properly. Both approaches handle the case where remaining nodes are less than k.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n/k) - Recursive (call stack), O(1) - Iterative"
      },
      {
        title: "Palindrome Linked List",
        difficulty: "Easy",
        rating: 4.2,
        description: "Determine if a singly linked list is a palindrome.",
        concepts: ["Two Pointers", "List Reversal", "Middle of List"],
        hints: [
          "Find middle using fast/slow pointers",
          "Reverse second half",
          "Compare first and second halves",
          "Optionally restore the list"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/palindrome-linked-list/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/function-to-check-if-a-singly-linked-list-is-palindrome/" }
        ],
        javaSolution: `// Palindrome Linked List
public boolean isPalindrome(ListNode head) {
    if (head == null || head.next == null) return true;

    // 1) Find middle
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2) Reverse second half
    ListNode second = reverse(slow);

    // 3) Compare
    ListNode first = head;
    ListNode copySecond = second; // to optionally restore later
    boolean ok = true;
    while (second != null) {
        if (first.val != second.val) { ok = false; break; }
        first = first.next;
        second = second.next;
    }

    // 4) Optional: restore list
    reverse(copySecond);
    return ok;
}

private ListNode reverse(ListNode node) {
    ListNode prev = null, cur = node;
    while (cur != null) {
        ListNode nxt = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nxt;
    }
    return prev;
}`,
        explanation: "Use fast/slow pointers to find the midpoint, reverse the second half, compare values pairwise, and optionally restore the list.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Odd Even Linked List",
        difficulty: "Medium",
        rating: 4.1,
        description: "Group all odd-indexed nodes together followed by even-indexed nodes.",
        concepts: ["Pointer Rewiring", "In-place Reordering"],
        hints: [
          "Track odd and even heads",
          "Weave odd.next to next odd, even.next to next even",
          "Attach evenHead after odd tail"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/odd-even-linked-list/" }
        ],
        javaSolution: `// Odd Even Linked List
public ListNode oddEvenList(ListNode head) {
    if (head == null) return null;
    ListNode odd = head, even = head.next, evenHead = even;
    while (even != null && even.next != null) {
        odd.next = even.next; odd = odd.next;
        even.next = odd.next; even = even.next;
    }
    odd.next = evenHead;
    return head;
}`,
        explanation: "Maintain two sequences: odd and even. Stitch odds first, then append evens.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Partition List",
        difficulty: "Medium",
        rating: 4.2,
        description: "Partition list around value x so that nodes < x come before nodes >= x, preserving original relative order.",
        concepts: ["Stable Partition", "Two Lists"],
        hints: [
          "Build two lists: smaller and greaterOrEqual",
          "Append greaterOrEqual to end of smaller",
          "Take care to terminate tails"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/partition-list/" }
        ],
        javaSolution: `// Partition List
public ListNode partition(ListNode head, int x) {
    ListNode smallDummy = new ListNode(0), largeDummy = new ListNode(0);
    ListNode s = smallDummy, l = largeDummy, cur = head;
    while (cur != null) {
        if (cur.val < x) { s.next = cur; s = s.next; }
        else { l.next = cur; l = l.next; }
        cur = cur.next;
    }
    l.next = null;
    s.next = largeDummy.next;
    return smallDummy.next;
}`,
        explanation: "Stable partition via two accumulating lists, concatenated at the end.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Swap Nodes in Pairs",
        difficulty: "Medium",
        rating: 4.3,
        description: "Swap every two adjacent nodes and return its head.",
        concepts: ["Pointer Manipulation"],
        hints: [
          "Use a dummy head",
          "Process blocks of two nodes",
          "Advance pointers carefully"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/swap-nodes-in-pairs/" }
        ],
        javaSolution: `// Swap Nodes in Pairs
public ListNode swapPairs(ListNode head) {
    ListNode dummy = new ListNode(0); dummy.next = head; ListNode prev = dummy;
    while (head != null && head.next != null) {
        ListNode first = head, second = head.next;
        prev.next = second;
        first.next = second.next;
        second.next = first;
        prev = first;
        head = first.next;
    }
    return dummy.next;
}`,
        explanation: "Local rewiring of pairs using a dummy simplifies edge cases.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Remove Linked List Elements",
        difficulty: "Easy",
        rating: 3.9,
        description: "Remove all nodes of the linked list that have Node.val == val.",
        concepts: ["Dummy Head", "Traversal"],
        hints: [
          "Use dummy to simplify head deletions",
          "Traverse and skip nodes with target value"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/remove-linked-list-elements/" }
        ],
        javaSolution: `// Remove Linked List Elements
public ListNode removeElements(ListNode head, int val) {
    ListNode dummy = new ListNode(0); dummy.next = head; ListNode cur = dummy;
    while (cur.next != null) {
        if (cur.next.val == val) cur.next = cur.next.next;
        else cur = cur.next;
    }
    return dummy.next;
}`,
        explanation: "Classic dummy-head deletion pattern.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Rotate List",
        difficulty: "Medium",
        rating: 4.0,
        description: "Rotate the list to the right by k places.",
        concepts: ["Two Pointers", "Circular List"],
        hints: [
          "Find length and tail, connect tail to head",
          "Find new tail at (len - k % len - 1)",
          "Break the ring"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/rotate-list/" }
        ],
        javaSolution: `// Rotate List
public ListNode rotateRight(ListNode head, int k) {
    if (head == null || head.next == null || k == 0) return head;
    int len = 1; ListNode tail = head;
    while (tail.next != null) { tail = tail.next; len++; }
    tail.next = head; // make ring
    k %= len;
    int stepsToNewTail = len - k - 1;
    ListNode newTail = head;
    for (int i = 0; i < stepsToNewTail; i++) newTail = newTail.next;
    ListNode newHead = newTail.next; newTail.next = null;
    return newHead;
}`,
        explanation: "Convert to a ring, then cut at the correct position.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Intersection of Two Linked Lists",
        difficulty: "Easy",
        rating: 4.1,
        description: "Return the node at which the two lists intersect, or null.",
        concepts: ["Two Pointers", "Length Alignment"],
        hints: [
          "Use two pointers switching heads",
          "They traverse equal combined lengths and meet at intersection"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/intersection-of-two-linked-lists/" }
        ],
        javaSolution: `// Intersection of Two Linked Lists
public ListNode getIntersectionNode(ListNode a, ListNode b) {
    if (a == null || b == null) return null;
    ListNode p = a, q = b;
    while (p != q) {
        p = (p == null) ? b : p.next;
        q = (q == null) ? a : q.next;
    }
    return p;
}`,
        explanation: "Pointer switching equalizes path lengths without extra space.",
        timeComplexity: "O(n + m)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Sort List",
        difficulty: "Medium",
        rating: 4.4,
        description: "Sort a linked list in O(n log n) time and constant space (merge sort).",
        concepts: ["Merge Sort", "Divide and Conquer"],
        hints: [
          "Split list using slow/fast pointers",
          "Sort halves recursively",
          "Merge two sorted lists"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sort-list/" }
        ],
        javaSolution: `// Sort List (Merge Sort)
public ListNode sortList(ListNode head) {
    if (head == null || head.next == null) return head;
    ListNode slow = head, fast = head, prev = null;
    while (fast != null && fast.next != null) { prev = slow; slow = slow.next; fast = fast.next.next; }
    prev.next = null; // cut
    ListNode l1 = sortList(head);
    ListNode l2 = sortList(slow);
    return merge(l1, l2);
}

private ListNode merge(ListNode a, ListNode b) {
    ListNode dummy = new ListNode(0), cur = dummy;
    while (a != null && b != null) {
        if (a.val <= b.val) { cur.next = a; a = a.next; }
        else { cur.next = b; b = b.next; }
        cur = cur.next;
    }
    cur.next = (a != null) ? a : b;
    return dummy.next;
}`,
        explanation: "Classic top-down merge sort on linked lists.",
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(log n) recursion"
      },
      {
        title: "Linked List Cycle II",
        difficulty: "Medium",
        rating: 4.3,
        description: "Return the node where the cycle begins. If no cycle, return null.",
        concepts: ["Floyd's Algorithm", "Mathematical Proof"],
        hints: [
          "Use slow/fast to detect cycle",
          "Reset one pointer to head and move both one step",
          "Meeting point is cycle start"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/linked-list-cycle-ii/" }
        ],
        javaSolution: `// Linked List Cycle II
public ListNode detectCycleII(ListNode head) {
    if (head == null || head.next == null) return null;
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next; fast = fast.next.next;
        if (slow == fast) {
            ListNode p = head;
            while (p != slow) { p = p.next; slow = slow.next; }
            return p;
        }
    }
    return null;
}`,
        explanation: "After meeting inside the cycle, moving a pointer from head and one from meeting point yields the entrance.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Flatten a Multilevel Doubly Linked List",
        difficulty: "Medium",
        rating: 4.2,
        description: "Flatten a multilevel doubly linked list where nodes may have child pointers.",
        concepts: ["DFS", "Doubly Linked List", "Stack"],
        hints: [
          "Use stack to simulate DFS",
          "Connect child then next",
          "Maintain prev pointers correctly"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/" }
        ],
        javaSolution: `// Flatten Multilevel Doubly Linked List
class NodeD {
    public int val; public NodeD prev; public NodeD next; public NodeD child;
}

public NodeD flatten(NodeD head) {
    if (head == null) return null;
    Deque<NodeD> stack = new ArrayDeque<>();
    NodeD dummy = new NodeD(); NodeD prev = dummy; NodeD cur = head;
    stack.push(cur);
    while (!stack.isEmpty()) {
        cur = stack.pop();
        prev.next = cur; cur.prev = prev;
        if (cur.next != null) stack.push(cur.next);
        if (cur.child != null) { stack.push(cur.child); cur.child = null; }
        prev = cur;
    }
    dummy.next.prev = null; return dummy.next;
}`,
        explanation: "Preorder-like traversal with a stack, rewiring next/prev links and nulling child pointers.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
      }
    ]
  },
  {
    id: 'stacks',
    title: 'Stacks',
    icon: Layers,
    color: '#8B5CF6',
    difficulty: 'Beginner',
    estimatedTime: '2-3 hours',
    concepts: 6,
    problems: 20,
    tags: ['LIFO', 'Recursion', 'Memory'],
    description: 'Understand Last-In-First-Out (LIFO) data structure and its applications.',
    explanation: `
      <div class="explanation-content">
        <h3>What is a Stack?</h3>
        <p>A stack is like a stack of plates in a cafeteria. You can only add a new plate to the top, and you can only take a plate from the top. This "Last In, First Out" (LIFO) principle is fundamental to how stacks work in programming.</p>
        
        <div class="real-world-example">
          <h4>🍽️ Real-World Analogies</h4>
          <p><strong>Stack of Plates:</strong></p>
          <ul>
            <li>Add new plate on top (push operation)</li>
            <li>Remove plate from top (pop operation)</li>
            <li>Look at top plate without removing (peek/top)</li>
            <li>Check if stack is empty</li>
          </ul>
          
          <p><strong>Browser History:</strong></p>
          <ul>
            <li>Each new page visited is "pushed" onto history stack</li>
            <li>Back button "pops" the most recent page</li>
            <li>You always go back to the last page you visited</li>
          </ul>
        </div>

        <h3>Core Operations</h3>
        <div class="key-concepts">
          <h4>🔧 Essential Operations</h4>
          <ul>
            <li><strong>Push:</strong> Add element to top (like placing a plate)</li>
            <li><strong>Pop:</strong> Remove and return top element (like taking a plate)</li>
            <li><strong>Peek/Top:</strong> Look at top element without removing</li>
            <li><strong>isEmpty:</strong> Check if stack has no elements</li>
            <li><strong>Size:</strong> Count number of elements</li>
          </ul>
        </div>

        <h3>Why Are Stacks Important?</h3>
        <h4>Function Calls</h4>
        <p>When you call a function, the computer uses a stack to remember where to return. Each function call is "pushed" onto the call stack, and when the function finishes, it's "popped" off.</p>
        
        <h4>Undo Operations</h4>
        <p>Text editors use stacks to implement undo functionality. Each action is pushed onto a stack, and undo pops the most recent action.</p>
        
        <h4>Expression Evaluation</h4>
        <p>Calculators use stacks to evaluate mathematical expressions, especially those with parentheses.</p>

        <div class="comparison">
          <h4>Stack vs Queue</h4>
          <div class="comparison-grid">
            <div>
              <strong>Stack (LIFO)</strong>
              <ul>
                <li>Last In, First Out</li>
                <li>Like stack of plates</li>
                <li>Add/remove from same end (top)</li>
                <li>Used for: function calls, undo operations</li>
              </ul>
            </div>
            <div>
              <strong>Queue (FIFO)</strong>
              <ul>
                <li>First In, First Out</li>
                <li>Like line at store</li>
                <li>Add at back, remove from front</li>
                <li>Used for: scheduling, breadth-first search</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    codeExamples: [
      {
        title: 'Stack Implementation',
        code: `// Array-based stack implementation
class Stack {
    private int[] arr;
    private int top;
    private int capacity;
    
    public Stack(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;
    }
    
    // Push element (O(1))
    public void push(int item) {
        if(top == capacity - 1) {
            throw new RuntimeException("Stack Overflow");
        }
        arr[++top] = item;
    }
    
    // Pop element (O(1))
    public int pop() {
        if(isEmpty()) {
            throw new RuntimeException("Stack Underflow");
        }
        return arr[top--];
    }
    
    // Peek at top element (O(1))
    public int peek() {
        if(isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return arr[top];
    }
    
    public boolean isEmpty() {
        return top == -1;
    }
}`,
        visualization: <StackVisual />,
        steps: [
          "Initialize empty stack with fixed capacity",
          "Push: Increment top pointer and add element",
          "Pop: Return top element and decrement pointer",
          "Peek: Return top element without changing pointer",
          "Check bounds to prevent overflow/underflow"
        ]
      }
    ],
    patterns: [
      {
        name: "Monotonic Stack",
        difficulty: "Hard",
        description: "Maintain elements in monotonic (increasing/decreasing) order to solve range queries efficiently.",
        whenToUse: [
          "Next greater/smaller element problems",
          "Largest rectangle in histogram",
          "Stock span problems"
        ],
        example: `// Next greater element using monotonic stack
int[] nextGreater(int[] arr) {
    Stack<Integer> stack = new Stack<>();
    int[] result = new int[arr.length];
    
    for(int i = arr.length - 1; i >= 0; i--) {
        while(!stack.isEmpty() && stack.peek() <= arr[i]) {
            stack.pop();
        }
        result[i] = stack.isEmpty() ? -1 : stack.peek();
        stack.push(arr[i]);
    }
    return result;
}`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
      }
    ],
    problemSet: [
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        rating: 4.1,
        description: "Check if string of brackets is properly balanced using stack.",
        concepts: ["Stack", "String Processing"],
        hints: [
          "Push opening brackets onto stack",
          "Pop and match when encountering closing brackets",
          "Stack should be empty at the end for valid string"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/valid-parentheses/" }
        ],
        javaSolution: `// Valid Parentheses - Stack Solution
public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    
    for(char c : s.toCharArray()) {
        if(c == '(' || c == '{' || c == '[') {
            stack.push(c);
        } else {
            if(stack.isEmpty()) return false;
            
            char top = stack.pop();
            if((c == ')' && top != '(') ||
               (c == '}' && top != '{') ||
               (c == ']' && top != '[')) {
                return false;
            }
        }
    }
    
    return stack.isEmpty();
}

// Alternative: Using HashMap for cleaner code
public boolean isValidHashMap(String s) {
    Map<Character, Character> map = new HashMap<>();
    map.put(')', '(');
    map.put('}', '{');
    map.put(']', '[');
    
    Stack<Character> stack = new Stack<>();
    
    for(char c : s.toCharArray()) {
        if(!map.containsKey(c)) {
            stack.push(c);
        } else {
            if(stack.isEmpty() || stack.pop() != map.get(c)) {
                return false;
            }
        }
    }
    
    return stack.isEmpty();
}`,
        explanation: "The stack approach pushes opening brackets and pops them when encountering closing brackets. We check if the popped bracket matches the current closing bracket. The HashMap approach makes the code cleaner by mapping closing to opening brackets.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
      },
      {
        title: "Min Stack",
        difficulty: "Medium",
        rating: 4.0,
        description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
        concepts: ["Stack", "Design", "Auxiliary Data Structure"],
        hints: [
          "Use two stacks: one for elements, one for minimums",
          "Update min stack only when pushing smaller elements",
          "Pop from min stack when main stack is popped"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/min-stack/" }
        ],
        javaSolution: `// Min Stack Implementation
class MinStack {
    private Stack<Integer> stack;
    private Stack<Integer> minStack;
    
    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }
    
    public void push(int val) {
        stack.push(val);
        
        if(minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }
    
    public void pop() {
        if(stack.pop().equals(minStack.peek())) {
            minStack.pop();
        }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minStack.peek();
    }
}

// Alternative: Single stack with pairs
class MinStackSingle {
    private Stack<int[]> stack;
    
    public MinStackSingle() {
        stack = new Stack<>();
    }
    
    public void push(int val) {
        if(stack.isEmpty()) {
            stack.push(new int[]{val, val});
        } else {
            int min = Math.min(val, stack.peek()[1]);
            stack.push(new int[]{val, min});
        }
    }
    
    public void pop() {
        stack.pop();
    }
    
    public int top() {
        return stack.peek()[0];
    }
    
    public int getMin() {
        return stack.peek()[1];
    }
}`,
        explanation: "The two-stack approach maintains a separate stack for minimum values. The single-stack approach stores each element along with the minimum value seen so far. Both approaches achieve O(1) time complexity for all operations.",
        timeComplexity: "O(1) for all operations",
        spaceComplexity: "O(n)"
      },
      {
        title: "Evaluate Reverse Polish Notation",
        difficulty: "Medium",
        rating: 4.1,
        description: "Evaluate arithmetic expressions in Reverse Polish Notation (postfix notation).",
        concepts: ["Stack", "Expression Evaluation", "Postfix Notation"],
        hints: [
          "Push operands onto stack",
          "When encountering operator, pop two operands and apply operation",
          "Push result back onto stack"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" }
        ],
        javaSolution: `// Evaluate Reverse Polish Notation
public int evalRPN(String[] tokens) {
    Stack<Integer> stack = new Stack<>();
    
    for(String token : tokens) {
        if(isOperator(token)) {
            int b = stack.pop();
            int a = stack.pop();
            stack.push(applyOperation(a, b, token));
        } else {
            stack.push(Integer.parseInt(token));
        }
    }
    
    return stack.pop();
}

private boolean isOperator(String token) {
    return token.equals("+") || token.equals("-") || 
           token.equals("*") || token.equals("/");
}

private int applyOperation(int a, int b, String operator) {
    switch(operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: return 0;
    }
}

// Alternative: Using switch expression (Java 14+)
private int applyOperationModern(int a, int b, String operator) {
    return switch(operator) {
        case "+" -> a + b;
        case "-" -> a - b;
        case "*" -> a * b;
        case "/" -> a / b;
        default -> throw new IllegalArgumentException("Unknown operator: " + operator);
    };
}`,
        explanation: "Reverse Polish Notation eliminates the need for parentheses by placing operators after their operands. We use a stack to evaluate expressions: push operands, pop two operands when encountering an operator, apply the operation, and push the result back.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
      },
      {
        title: "Min Stack",
        difficulty: "Medium",
        rating: 4.3,
        description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
        concepts: ["Stack Design", "Auxiliary Stack", "Constant Time Operations"],
        hints: [
          "Use two stacks: one for elements, one for minimums",
          "Push minimum to auxiliary stack only when it changes",
          "Pop from auxiliary stack when main stack is popped",
          "Maintain minimum at top of auxiliary stack"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/min-stack/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/" }
        ],
        javaSolution: `// Min Stack - Two Stacks Approach
class MinStack {
    private Stack<Integer> stack;
    private Stack<Integer> minStack;
    
    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }
    
    public void push(int val) {
        stack.push(val);
        
        if(minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }
    
    public void pop() {
        if(stack.peek().equals(minStack.peek())) {
            minStack.pop();
        }
        stack.pop();
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minStack.peek();
    }
}

// Alternative: Single Stack with Pair
class MinStackPair {
    private Stack<int[]> stack; // [value, minSoFar]
    
    public MinStackPair() {
        stack = new Stack<>();
    }
    
    public void push(int val) {
        if(stack.isEmpty()) {
            stack.push(new int[]{val, val});
        } else {
            int minSoFar = Math.min(stack.peek()[1], val);
            stack.push(new int[]{val, minSoFar});
        }
    }
    
    public void pop() {
        stack.pop();
    }
    
    public int top() {
        return stack.peek()[0];
    }
    
    public int getMin() {
        return stack.peek()[1];
    }
}`,
        explanation: "The two-stack approach maintains a separate stack for minimum values. We only push to the min stack when we encounter a new minimum. The pair approach stores both the value and the minimum seen so far in each stack element. Both approaches achieve O(1) time complexity for all operations.",
        timeComplexity: "O(1) for all operations",
        spaceComplexity: "O(n)"
      },
      {
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",
        rating: 4.7,
        description: "Find the largest rectangle area in a histogram represented by an array of heights.",
        concepts: ["Monotonic Stack", "Area Calculation", "Optimization"],
        hints: [
          "Use monotonic increasing stack",
          "Calculate area when popping elements",
          "Width = current index - stack top index - 1",
          "Handle remaining elements after traversal"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/largest-rectangular-area-in-a-histogram-using-stack/" }
        ],
        javaSolution: `// Largest Rectangle in Histogram - Monotonic Stack
public int largestRectangleArea(int[] heights) {
    if(heights == null || heights.length == 0) return 0;
    
    Stack<Integer> stack = new Stack<>();
    int maxArea = 0;
    int n = heights.length;
    
    for(int i = 0; i <= n; i++) {
        int height = (i == n) ? 0 : heights[i];
        
        while(!stack.isEmpty() && heights[stack.peek()] > height) {
            int h = heights[stack.pop()];
            int w = stack.isEmpty() ? i : i - stack.peek() - 1;
            maxArea = Math.max(maxArea, h * w);
        }
        
        stack.push(i);
    }
    
    return maxArea;
}

// Alternative: Divide and Conquer (less efficient)
public int largestRectangleAreaDivide(int[] heights) {
    return largestRectangleAreaHelper(heights, 0, heights.length - 1);
}

private int largestRectangleAreaHelper(int[] heights, int start, int end) {
    if(start > end) return 0;
    if(start == end) return heights[start];
    
    int minIndex = start;
    for(int i = start; i <= end; i++) {
        if(heights[i] < heights[minIndex]) {
            minIndex = i;
        }
    }
    
    int area = heights[minIndex] * (end - start + 1);
    int leftArea = largestRectangleAreaHelper(heights, start, minIndex - 1);
    int rightArea = largestRectangleAreaHelper(heights, minIndex + 1, end);
    
    return Math.max(area, Math.max(leftArea, rightArea));
}`,
        explanation: "The monotonic stack approach maintains a stack of indices with increasing heights. When we encounter a smaller height, we pop elements and calculate areas. The width is determined by the difference between current index and the index below the popped element. The divide and conquer approach is less efficient but shows an alternative method.",
        timeComplexity: "O(n) - Monotonic Stack, O(n²) - Divide and Conquer",
        spaceComplexity: "O(n)"
      },
      {
        title: "Basic Calculator",
        difficulty: "Hard",
        rating: 4.5,
        description: "Implement a basic calculator to evaluate a simple expression string containing +, -, (, ), and non-negative integers.",
        concepts: ["Stack", "Expression Evaluation", "Parentheses Handling"],
        hints: [
          "Use two stacks: one for numbers, one for operators",
          "Handle parentheses by pushing/poping operators",
          "Process operators based on precedence",
          "Handle negative numbers and unary operators"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/basic-calculator/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/expression-evaluation/" }
        ],
        javaSolution: `// Basic Calculator - Stack Approach
public int calculate(String s) {
    Stack<Integer> stack = new Stack<>();
    int result = 0;
    int number = 0;
    int sign = 1;
    
    for(int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        
        if(Character.isDigit(c)) {
            number = number * 10 + (c - '0');
        } else if(c == '+') {
            result += sign * number;
            number = 0;
            sign = 1;
        } else if(c == '-') {
            result += sign * number;
            number = 0;
            sign = -1;
        } else if(c == '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if(c == ')') {
            result += sign * number;
            number = 0;
            result *= stack.pop(); // sign
            result += stack.pop(); // previous result
        }
    }
    
    if(number != 0) {
        result += sign * number;
    }
    
    return result;
}

// Alternative: Using two stacks
public int calculateTwoStacks(String s) {
    Stack<Integer> numbers = new Stack<>();
    Stack<Character> operators = new Stack<>();
    
    for(int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        
        if(Character.isDigit(c)) {
            int num = 0;
            while(i < s.length() && Character.isDigit(s.charAt(i))) {
                num = num * 10 + (s.charAt(i) - '0');
                i++;
            }
            i--;
            numbers.push(num);
        } else if(c == '(') {
            operators.push(c);
        } else if(c == ')') {
            while(operators.peek() != '(') {
                evaluate(numbers, operators);
            }
            operators.pop(); // remove '('
        } else if(c == '+' || c == '-') {
            while(!operators.isEmpty() && operators.peek() != '(') {
                evaluate(numbers, operators);
            }
            operators.push(c);
        }
    }
    
    while(!operators.isEmpty()) {
        evaluate(numbers, operators);
    }
    
    return numbers.pop();
}

private void evaluate(Stack<Integer> numbers, Stack<Character> operators) {
    int b = numbers.pop();
    int a = numbers.pop();
    char op = operators.pop();
    
    if(op == '+') {
        numbers.push(a + b);
    } else {
        numbers.push(a - b);
    }
}`,
        explanation: "The single stack approach tracks the current result and sign, pushing them onto the stack when encountering parentheses. The two-stack approach maintains separate stacks for numbers and operators, evaluating expressions based on operator precedence. Both approaches handle parentheses and operator precedence correctly.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
      },
      {
        title: "Simplify Path",
        difficulty: "Medium",
        rating: 4.1,
        description: "Given an absolute path for a file, simplify it to the canonical path.",
        concepts: ["Stack", "String Manipulation", "Path Processing"],
        hints: [
          "Split path by '/' and process each component",
          "Use stack to build canonical path",
          "Handle '.', '..', and empty components",
          "Join components with '/' at the end"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/simplify-path/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/simplify-directory-path-unix-like/" }
        ],
        javaSolution: `// Simplify Path - Stack Approach
public String simplifyPath(String path) {
    Stack<String> stack = new Stack<>();
    String[] components = path.split("/");
    
    for(String component : components) {
        if(component.equals(".") || component.isEmpty()) {
            continue;
        } else if(component.equals("..")) {
            if(!stack.isEmpty()) {
                stack.pop();
            }
        } else {
            stack.push(component);
        }
    }
    
    if(stack.isEmpty()) {
        return "/";
    }
    
    StringBuilder result = new StringBuilder();
    while(!stack.isEmpty()) {
        result.insert(0, "/" + stack.pop());
    }
    
    return result.toString();
}

// Alternative: Using ArrayList
public String simplifyPathArrayList(String path) {
    List<String> components = new ArrayList<>();
    String[] parts = path.split("/");
    
    for(String part : parts) {
        if(part.equals(".") || part.isEmpty()) {
            continue;
        } else if(part.equals("..")) {
            if(!components.isEmpty()) {
                components.remove(components.size() - 1);
            }
        } else {
            components.add(part);
        }
    }
    
    if(components.isEmpty()) {
        return "/";
    }
    
    return "/" + String.join("/", components);
}`,
        explanation: "The stack approach processes each path component, pushing directory names and popping when encountering '..'. The ArrayList approach is similar but uses list operations instead of stack operations. Both approaches handle edge cases like multiple slashes and root directory correctly.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
      },
      {
        title: "Next Greater Element I",
        difficulty: "Easy",
        rating: 4.0,
        description: "Find the next greater element for each element in nums1 in the corresponding positions in nums2.",
        concepts: ["Monotonic Stack", "Hash Map", "Element Mapping"],
        hints: [
          "Use monotonic decreasing stack for nums2",
          "Store next greater elements in HashMap",
          "Process nums2 from right to left",
          "Look up results for nums1 from HashMap"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/next-greater-element-i/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/next-greater-element/" }
        ],
        javaSolution: `// Next Greater Element I - Monotonic Stack
public int[] nextGreaterElement(int[] nums1, int[] nums2) {
    Map<Integer, Integer> nextGreater = new HashMap<>();
    Stack<Integer> stack = new Stack<>();
    
    // Process nums2 from right to left
    for(int i = nums2.length - 1; i >= 0; i--) {
        while(!stack.isEmpty() && stack.peek() <= nums2[i]) {
            stack.pop();
        }
        
        nextGreater.put(nums2[i], stack.isEmpty() ? -1 : stack.peek());
        stack.push(nums2[i]);
    }
    
    // Build result for nums1
    int[] result = new int[nums1.length];
    for(int i = 0; i < nums1.length; i++) {
        result[i] = nextGreater.get(nums1[i]);
    }
    
    return result;
}

// Alternative: Brute Force approach
public int[] nextGreaterElementBruteForce(int[] nums1, int[] nums2) {
    int[] result = new int[nums1.length];
    
    for(int i = 0; i < nums1.length; i++) {
        int target = nums1[i];
        int nextGreater = -1;
        boolean found = false;
        
        for(int j = 0; j < nums2.length; j++) {
            if(nums2[j] == target) {
                found = true;
            }
            if(found && nums2[j] > target) {
                nextGreater = nums2[j];
                break;
            }
        }
        
        result[i] = nextGreater;
    }
    
    return result;
}`,
        explanation: "The monotonic stack approach processes nums2 from right to left, maintaining a decreasing stack. For each element, we pop smaller elements and store the next greater element. The brute force approach searches for each element in nums1 within nums2, which is less efficient.",
        timeComplexity: "O(n) - Monotonic Stack, O(n²) - Brute Force",
        spaceComplexity: "O(n)"
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        rating: 4.2,
        description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        concepts: ["Stack", "Parentheses Matching", "String Validation"],
        hints: [
          "Use stack to track opening brackets",
          "Push opening brackets, pop when matching closing bracket",
          "Check if stack is empty at the end",
          "Handle mismatched brackets"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/valid-parentheses/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/" }
        ],
        javaSolution: `// Valid Parentheses - Stack Approach
public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    
    for(char c : s.toCharArray()) {
        if(c == '(' || c == '{' || c == '[') {
            stack.push(c);
        } else {
            if(stack.isEmpty()) return false;
            
            char top = stack.pop();
            if((c == ')' && top != '(') ||
               (c == '}' && top != '{') ||
               (c == ']' && top != '[')) {
                return false;
            }
        }
    }
    
    return stack.isEmpty();
}

// Alternative: Using HashMap for mapping
public boolean isValidHashMap(String s) {
    Map<Character, Character> map = new HashMap<>();
    map.put(')', '(');
    map.put('}', '{');
    map.put(']', '[');
    
    Stack<Character> stack = new Stack<>();
    
    for(char c : s.toCharArray()) {
        if(!map.containsKey(c)) {
            stack.push(c);
        } else {
            if(stack.isEmpty() || stack.pop() != map.get(c)) {
                return false;
            }
        }
    }
    
    return stack.isEmpty();
}`,
        explanation: "The stack approach pushes opening brackets and pops when encountering matching closing brackets. The HashMap approach uses a mapping to simplify the matching logic. Both approaches check if the stack is empty at the end to ensure all brackets are properly matched.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
      },
      {
        title: "Daily Temperatures",
        difficulty: "Medium",
        rating: 4.4,
        description: "Find the number of days you have to wait after the ith day to get a warmer temperature.",
        concepts: ["Monotonic Stack", "Temperature Tracking"],
        hints: [
          "Use monotonic decreasing stack",
          "Store indices, not temperatures",
          "Pop when current temperature is higher"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/daily-temperatures/" }
        ],
        javaSolution: `// Daily Temperatures - Monotonic Stack
public int[] dailyTemperatures(int[] temperatures) {
    int n = temperatures.length;
    int[] result = new int[n];
    Stack<Integer> stack = new Stack<>();
    
    for(int i = 0; i < n; i++) {
        while(!stack.isEmpty() && temperatures[stack.peek()] < temperatures[i]) {
            int prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    
    return result;
}`,
        explanation: "Maintain a decreasing stack of indices. When a warmer day is found, pop all cooler days and calculate waiting time.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
      },
      {
        title: "Asteroid Collision",
        difficulty: "Medium",
        rating: 4.2,
        description: "Simulate asteroid collisions where positive values move right, negative move left.",
        concepts: ["Stack", "Collision Simulation"],
        hints: [
          "Use stack to track asteroids",
          "Handle collisions when positive meets negative",
          "Destroy smaller asteroids"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/asteroid-collision/" }
        ],
        javaSolution: `// Asteroid Collision
public int[] asteroidCollision(int[] asteroids) {
    Stack<Integer> stack = new Stack<>();
    
    for(int asteroid : asteroids) {
        if(asteroid > 0) {
            stack.push(asteroid);
        } else {
            while(!stack.isEmpty() && stack.peek() > 0 && stack.peek() < -asteroid) {
                stack.pop();
            }
            if(stack.isEmpty() || stack.peek() < 0) {
                stack.push(asteroid);
            } else if(stack.peek() == -asteroid) {
                stack.pop();
            }
        }
    }
    
    int[] result = new int[stack.size()];
    for(int i = result.length - 1; i >= 0; i--) {
        result[i] = stack.pop();
    }
    return result;
}`,
        explanation: "Simulate collisions using stack. Positive asteroids go right, negative go left. Handle collisions by comparing sizes.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
      },
      {
        title: "Remove K Digits",
        difficulty: "Medium",
        rating: 4.3,
        description: "Remove k digits from the number so that the new number is the smallest possible.",
        concepts: ["Monotonic Stack", "Greedy"],
        hints: [
          "Use monotonic increasing stack",
          "Remove larger digits when possible",
          "Handle leading zeros"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/remove-k-digits/" }
        ],
        javaSolution: `// Remove K Digits
public String removeKdigits(String num, int k) {
    if(k >= num.length()) return "0";
    
    Stack<Character> stack = new Stack<>();
    
    for(char digit : num.toCharArray()) {
        while(k > 0 && !stack.isEmpty() && stack.peek() > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    
    // Remove remaining k digits from end
    while(k > 0) {
        stack.pop();
        k--;
    }
    
    // Build result
    StringBuilder result = new StringBuilder();
    while(!stack.isEmpty()) {
        result.insert(0, stack.pop());
    }
    
    // Remove leading zeros
    while(result.length() > 1 && result.charAt(0) == '0') {
        result.deleteCharAt(0);
    }
    
    return result.toString();
}`,
        explanation: "Use monotonic increasing stack to keep smallest digits. Remove larger digits when possible to minimize the result.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
      },
      {
        title: "Decode String",
        difficulty: "Medium",
        rating: 4.4,
        description: "Decode an encoded string with pattern k[encoded_string].",
        concepts: ["Stack", "String Parsing", "Recursion"],
        hints: [
          "Use two stacks: one for numbers, one for strings",
          "Handle nested brackets",
          "Build result string"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/decode-string/" }
        ],
        javaSolution: `// Decode String
public String decodeString(String s) {
    Stack<Integer> numStack = new Stack<>();
    Stack<StringBuilder> strStack = new Stack<>();
    StringBuilder current = new StringBuilder();
    int num = 0;
    
    for(char c : s.toCharArray()) {
        if(Character.isDigit(c)) {
            num = num * 10 + (c - '0');
        } else if(c == '[') {
            numStack.push(num);
            strStack.push(current);
            current = new StringBuilder();
            num = 0;
        } else if(c == ']') {
            int repeat = numStack.pop();
            StringBuilder temp = strStack.pop();
            for(int i = 0; i < repeat; i++) {
                temp.append(current);
            }
            current = temp;
        } else {
            current.append(c);
        }
    }
    
    return current.toString();
}`,
        explanation: "Use two stacks to handle nested brackets. One for numbers, one for strings. Build result by repeating strings.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
      },
      {
        title: "Next Greater Element II",
        difficulty: "Medium",
        rating: 4.1,
        description: "Find the next greater element for each element in a circular array.",
        concepts: ["Monotonic Stack", "Circular Array"],
        hints: [
          "Use monotonic decreasing stack",
          "Traverse array twice to handle circular nature",
          "Store indices in stack"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/next-greater-element-ii/" }
        ],
        javaSolution: `// Next Greater Element II
public int[] nextGreaterElements(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    Arrays.fill(result, -1);
    Stack<Integer> stack = new Stack<>();
    
    // Traverse twice to handle circular nature
    for(int i = 0; i < 2 * n; i++) {
        int num = nums[i % n];
        while(!stack.isEmpty() && nums[stack.peek()] < num) {
            result[stack.pop()] = num;
        }
        if(i < n) {
            stack.push(i);
        }
    }
    
    return result;
}`,
        explanation: "Traverse the array twice to handle circular nature. Use monotonic decreasing stack to find next greater elements.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
      }
    ]
  },
  {
    id: 'queues',
    title: 'Queues',
    icon: ArrowUpDown,
    color: '#F59E0B',
    difficulty: 'Beginner',
    estimatedTime: '2-3 hours',
    concepts: 7,
    problems: 18,
    tags: ['FIFO', 'BFS', 'Scheduling'],
    description: 'Learn First-In-First-Out (FIFO) data structure and its real-world applications.',
    explanation: `
      <div class="explanation-content">
        <h3>What is a Queue?</h3>
        <p>A queue is like a line of people waiting at a store checkout. The first person to join the line is the first person to be served. This "First In, First Out" (FIFO) principle is the foundation of queue data structures.</p>
        
        <div class="real-world-example">
          <h4>🏪 Real-World Analogies</h4>
          <p><strong>Store Checkout Line:</strong></p>
          <ul>
            <li>People join at the back of the line (enqueue)</li>
            <li>Cashier serves person at front (dequeue)</li>
            <li>Fair system - first come, first served</li>
            <li>Line can grow or shrink dynamically</li>
          </ul>
          
          <p><strong>Print Queue:</strong></p>
          <ul>
            <li>Documents sent to printer join the queue</li>
            <li>Printer processes documents in order received</li>
            <li>First document sent is first to be printed</li>
          </ul>
        </div>

        <h3>Core Operations</h3>
        <div class="key-concepts">
          <h4>🔧 Essential Operations</h4>
          <ul>
            <li><strong>Enqueue:</strong> Add element to rear/back of queue</li>
            <li><strong>Dequeue:</strong> Remove and return element from front</li>
            <li><strong>Front:</strong> Look at front element without removing</li>
            <li><strong>Rear:</strong> Look at rear element without removing</li>
            <li><strong>isEmpty:</strong> Check if queue has no elements</li>
            <li><strong>Size:</strong> Count number of elements</li>
          </ul>
        </div>

        <h3>Types of Queues</h3>
        <h4>1. Simple Queue</h4>
        <p>Basic FIFO queue with enqueue at rear and dequeue at front.</p>
        
        <h4>2. Circular Queue</h4>
        <p>Queue where rear connects back to front, preventing memory waste.</p>
        
        <h4>3. Priority Queue</h4>
        <p>Elements have priorities; highest priority element is dequeued first.</p>
        
        <h4>4. Double-ended Queue (Deque)</h4>
        <p>Can add/remove elements from both front and rear.</p>

        <h3>Applications</h3>
        <ul>
          <li><strong>CPU Scheduling:</strong> Operating systems use queues to manage processes</li>
          <li><strong>Breadth-First Search:</strong> Graph traversal algorithm uses queues</li>
          <li><strong>Buffer for Data Streams:</strong> Handle data at different rates</li>
          <li><strong>Call Center Systems:</strong> Manage incoming calls fairly</li>
        </ul>
      </div>
    `,
    codeExamples: [
      {
        title: 'Queue Implementation',
        code: `// Array-based circular queue
class Queue {
    private int[] arr;
    private int front, rear, size, capacity;
    
    public Queue(int capacity) {
        this.capacity = capacity;
        arr = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }
    
    // Enqueue element (O(1))
    public void enqueue(int item) {
        if(size == capacity) {
            throw new RuntimeException("Queue is full");
        }
        rear = (rear + 1) % capacity;
        arr[rear] = item;
        size++;
    }
    
    // Dequeue element (O(1))
    public int dequeue() {
        if(isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }
        int item = arr[front];
        front = (front + 1) % capacity;
        size--;
        return item;
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
}`,
        visualization: (
          <div className="queue-visual">
            <div className="queue-container">
              <div className="queue-item">10</div>
              <div className="queue-item">20</div>
              <div className="queue-item">30</div>
            </div>
            <div className="queue-pointers">
              <span>Front →</span>
              <span>← Rear</span>
            </div>
            <p>Elements added at rear, removed from front</p>
          </div>
        ),
        steps: [
          "Initialize circular queue with front and rear pointers",
          "Enqueue: Add element at rear position, increment rear",
          "Use modulo to wrap rear pointer in circular fashion",
          "Dequeue: Remove element from front, increment front",
          "Track size to detect full/empty conditions"
        ]
      }
    ],
    patterns: [
      {
        name: "BFS Traversal",
        difficulty: "Medium",
        description: "Use queue to explore nodes level by level in graphs and trees.",
        whenToUse: [
          "Finding shortest path in unweighted graphs",
          "Level-order tree traversal",
          "Finding connected components"
        ],
        example: `// BFS traversal using queue
void bfs(Graph graph, int start) {
    Queue<Integer> queue = new LinkedList<>();
    boolean[] visited = new boolean[graph.vertices];
    
    queue.offer(start);
    visited[start] = true;
    
    while(!queue.isEmpty()) {
        int vertex = queue.poll();
        System.out.print(vertex + " ");
        
        for(int neighbor : graph.getNeighbors(vertex)) {
            if(!visited[neighbor]) {
                visited[neighbor] = true;
                queue.offer(neighbor);
            }
        }
    }
}`,
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)"
      }
    ],
    problemSet: [
      {
        title: "Implement Queue using Stacks",
        difficulty: "Easy",
        rating: 4.0,
        description: "Design a queue using two stacks to achieve FIFO behavior.",
        concepts: ["Stack", "Queue", "Design"],
        hints: [
          "Use two stacks: one for enqueue, one for dequeue",
          "Transfer elements between stacks when needed",
          "Amortize the cost of transfers"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/implement-queue-using-stacks/" }
        ],
        javaSolution: `// Queue using Stacks - Two Stack Approach
class MyQueue {
    private Stack<Integer> stackNewest;
    private Stack<Integer> stackOldest;
    
    public MyQueue() {
        stackNewest = new Stack<>();
        stackOldest = new Stack<>();
    }
    
    public void push(int x) {
        stackNewest.push(x);
    }
    
    public int pop() {
        shiftStacks();
        return stackOldest.pop();
    }
    
    public int peek() {
        shiftStacks();
        return stackOldest.peek();
    }
    
    public boolean empty() {
        return stackNewest.isEmpty() && stackOldest.isEmpty();
    }
    
    private void shiftStacks() {
        if(stackOldest.isEmpty()) {
            while(!stackNewest.isEmpty()) {
                stackOldest.push(stackNewest.pop());
            }
        }
    }
}

// Alternative: Single Stack with Recursion
class MyQueueRecursive {
    private Stack<Integer> stack;
    
    public MyQueueRecursive() {
        stack = new Stack<>();
    }
    
    public void push(int x) {
        stack.push(x);
    }
    
    public int pop() {
        if(stack.size() == 1) {
            return stack.pop();
        }
        
        int item = stack.pop();
        int result = pop();
        stack.push(item);
        return result;
    }
    
    public int peek() {
        if(stack.size() == 1) {
            return stack.peek();
        }
        
        int item = stack.pop();
        int result = peek();
        stack.push(item);
        return result;
    }
    
    public boolean empty() {
        return stack.isEmpty();
    }
}`,
        explanation: "The two-stack approach maintains separate stacks for newest and oldest elements. When dequeuing, we transfer elements from newest to oldest stack. The recursive approach uses a single stack but has O(n) time complexity for dequeue operations.",
        timeComplexity: "O(1) amortized - Two Stacks, O(n) - Recursive",
        spaceComplexity: "O(n)"
      },
      {
        title: "Circular Queue Implementation",
        difficulty: "Medium",
        rating: 4.2,
        description: "Design and implement a circular queue data structure.",
        concepts: ["Queue", "Circular Buffer", "Array Implementation"],
        hints: [
          "Use array with front and rear pointers",
          "Handle wrap-around using modulo operation",
          "Track size to distinguish full from empty"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/design-circular-queue/" }
        ],
        javaSolution: `// Circular Queue Implementation
class MyCircularQueue {
    private int[] queue;
    private int front, rear, size, capacity;
    
    public MyCircularQueue(int k) {
        queue = new int[k];
        capacity = k;
        front = 0;
        rear = -1;
        size = 0;
    }
    
    public boolean enQueue(int value) {
        if(isFull()) return false;
        
        rear = (rear + 1) % capacity;
        queue[rear] = value;
        size++;
        return true;
    }
    
    public boolean deQueue() {
        if(isEmpty()) return false;
        
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    
    public int Front() {
        return isEmpty() ? -1 : queue[front];
    }
    
    public int Rear() {
        return isEmpty() ? -1 : queue[rear];
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public boolean isFull() {
        return size == capacity;
    }
}

// Alternative: Using LinkedList
class MyCircularQueueLinkedList {
    private LinkedList<Integer> queue;
    private int capacity;
    
    public MyCircularQueueLinkedList(int k) {
        queue = new LinkedList<>();
        capacity = k;
    }
    
    public boolean enQueue(int value) {
        if(isFull()) return false;
        queue.addLast(value);
        return true;
    }
    
    public boolean deQueue() {
        if(isEmpty()) return false;
        queue.removeFirst();
        return true;
    }
    
    public int Front() {
        return isEmpty() ? -1 : queue.getFirst();
    }
    
    public int Rear() {
        return isEmpty() ? -1 : queue.getLast();
    }
    
    public boolean isEmpty() {
        return queue.isEmpty();
    }
    
    public boolean isFull() {
        return queue.size() == capacity;
    }
}`,
        explanation: "The array-based implementation uses modulo arithmetic to handle wrap-around when reaching the end of the array. The LinkedList approach is simpler but uses more memory. Both maintain O(1) time complexity for enqueue and dequeue operations.",
        timeComplexity: "O(1) for enqueue, dequeue, front, rear",
        spaceComplexity: "O(n)"
      },
      {
        title: "Number of Recent Calls",
        difficulty: "Easy",
        rating: 3.8,
        description: "Count the number of requests in the last 3000 milliseconds using a queue.",
        concepts: ["Queue", "Sliding Window", "Time-based Filtering"],
        hints: [
          "Use queue to store request timestamps",
          "Remove timestamps older than 3000ms",
          "Return current queue size"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/number-of-recent-calls/" }
        ],
        javaSolution: `// Recent Counter using Queue
class RecentCounter {
    private Queue<Integer> queue;
    
    public RecentCounter() {
        queue = new LinkedList<>();
    }
    
    public int ping(int t) {
        queue.offer(t);
        
        // Remove timestamps older than 3000ms
        while(queue.peek() < t - 3000) {
            queue.poll();
        }
        
        return queue.size();
    }
}

// Alternative: Using Array with sliding window
class RecentCounterArray {
    private int[] requests;
    private int head, tail, count;
    private static final int WINDOW_SIZE = 3000;
    
    public RecentCounterArray() {
        requests = new int[10000]; // Assuming max 10000 requests
        head = tail = count = 0;
    }
    
    public int ping(int t) {
        requests[tail++] = t;
        count++;
        
        // Remove old requests
        while(head < tail && requests[head] < t - WINDOW_SIZE) {
            head++;
            count--;
        }
        
        return count;
    }
}`,
        explanation: "The queue approach naturally handles the sliding window by removing old timestamps. The array approach uses two pointers to maintain the window. Both approaches efficiently filter out requests older than 3000ms.",
        timeComplexity: "O(n) worst case, O(1) amortized",
        spaceComplexity: "O(n)"
      },
      {
        title: "Circular Queue Implementation",
        difficulty: "Medium",
        rating: 4.2,
        description: "Design and implement a circular queue data structure.",
        concepts: ["Circular Queue", "Array Implementation", "Modulo Operation"],
        hints: [
          "Use array with front and rear pointers",
          "Use modulo operation for circular behavior",
          "Handle full and empty conditions",
          "Track size to distinguish full from empty"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/design-circular-queue/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/" }
        ],
        javaSolution: `// Circular Queue Implementation
class MyCircularQueue {
    private int[] queue;
    private int front, rear, size, capacity;
    
    public MyCircularQueue(int k) {
        queue = new int[k];
        front = 0;
        rear = -1;
        size = 0;
        capacity = k;
    }
    
    public boolean enQueue(int value) {
        if(isFull()) return false;
        
        rear = (rear + 1) % capacity;
        queue[rear] = value;
        size++;
        return true;
    }
    
    public boolean deQueue() {
        if(isEmpty()) return false;
        
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    
    public int Front() {
        return isEmpty() ? -1 : queue[front];
    }
    
    public int Rear() {
        return isEmpty() ? -1 : queue[rear];
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public boolean isFull() {
        return size == capacity;
    }
}

// Alternative: Using LinkedList
class MyCircularQueueLinkedList {
    private LinkedList<Integer> queue;
    private int capacity;
    
    public MyCircularQueueLinkedList(int k) {
        queue = new LinkedList<>();
        capacity = k;
    }
    
    public boolean enQueue(int value) {
        if(isFull()) return false;
        queue.addLast(value);
        return true;
    }
    
    public boolean deQueue() {
        if(isEmpty()) return false;
        queue.removeFirst();
        return true;
    }
    
    public int Front() {
        return isEmpty() ? -1 : queue.getFirst();
    }
    
    public int Rear() {
        return isEmpty() ? -1 : queue.getLast();
    }
    
    public boolean isEmpty() {
        return queue.isEmpty();
    }
    
    public boolean isFull() {
        return queue.size() == capacity;
    }
}`,
        explanation: "The array implementation uses modulo arithmetic to create circular behavior. The front and rear pointers wrap around the array, and we track size to distinguish between full and empty states. The LinkedList approach is simpler but uses more memory.",
        timeComplexity: "O(1) for all operations",
        spaceComplexity: "O(n)"
      },
      {
        title: "Implement Queue using Stacks",
        difficulty: "Medium",
        rating: 4.1,
        description: "Implement a first in first out (FIFO) queue using only two stacks.",
        concepts: ["Stack", "Queue", "Data Structure Design"],
        hints: [
          "Use two stacks: input and output",
          "Push elements to input stack",
          "When dequeuing, transfer from input to output if output is empty",
          "Pop from output stack for dequeue operation"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/implement-queue-using-stacks/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/queue-using-stacks/" }
        ],
        javaSolution: `// Queue using Stacks - Two Stack Approach
class MyQueue {
    private Stack<Integer> input;
    private Stack<Integer> output;
    
    public MyQueue() {
        input = new Stack<>();
        output = new Stack<>();
    }
    
    public void push(int x) {
        input.push(x);
    }
    
    public int pop() {
        if(output.isEmpty()) {
            shiftStacks();
        }
        return output.pop();
    }
    
    public int peek() {
        if(output.isEmpty()) {
            shiftStacks();
        }
        return output.peek();
    }
    
    public boolean empty() {
        return input.isEmpty() && output.isEmpty();
    }
    
    private void shiftStacks() {
        while(!input.isEmpty()) {
            output.push(input.pop());
        }
    }
}

// Alternative: Single Stack with Recursion
class MyQueueRecursive {
    private Stack<Integer> stack;
    
    public MyQueueRecursive() {
        stack = new Stack<>();
    }
    
    public void push(int x) {
        stack.push(x);
    }
    
    public int pop() {
        if(stack.size() == 1) {
            return stack.pop();
        }
        
        int item = stack.pop();
        int result = pop();
        stack.push(item);
        return result;
    }
    
    public int peek() {
        if(stack.size() == 1) {
            return stack.peek();
        }
        
        int item = stack.pop();
        int result = peek();
        stack.push(item);
        return result;
    }
    
    public boolean empty() {
        return stack.isEmpty();
    }
}`,
        explanation: "The two-stack approach uses an input stack for push operations and an output stack for pop/peek operations. When output is empty, we transfer all elements from input to output. The recursive approach uses a single stack with recursion to simulate queue behavior.",
        timeComplexity: "O(1) amortized for all operations",
        spaceComplexity: "O(n)"
      },
      {
        title: "Number of Recent Calls",
        difficulty: "Easy",
        rating: 3.9,
        description: "Count the number of recent requests within a time window.",
        concepts: ["Queue", "Sliding Window", "Time Management"],
        hints: [
          "Use queue to store request timestamps",
          "Remove timestamps outside the time window",
          "Return size of queue as count",
          "Handle edge cases with empty queue"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/number-of-recent-calls/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-element-of-every-subarray-of-size-k/" }
        ],
        javaSolution: `// Number of Recent Calls - Queue Approach
class RecentCounter {
    private Queue<Integer> requests;
    
    public RecentCounter() {
        requests = new LinkedList<>();
    }
    
    public int ping(int t) {
        requests.offer(t);
        
        // Remove requests outside the 3000ms window
        while(!requests.isEmpty() && requests.peek() < t - 3000) {
            requests.poll();
        }
        
        return requests.size();
    }
}

// Alternative: Using ArrayList
class RecentCounterArrayList {
    private List<Integer> requests;
    
    public RecentCounterArrayList() {
        requests = new ArrayList<>();
    }
    
    public int ping(int t) {
        requests.add(t);
        
        // Remove requests outside the 3000ms window
        requests.removeIf(time -> time < t - 3000);
        
        return requests.size();
    }
}`,
        explanation: "The queue approach naturally handles the sliding window by removing old timestamps. The ArrayList approach uses removeIf to filter out old requests. Both approaches efficiently count recent requests within the time window.",
        timeComplexity: "O(n) worst case, O(1) amortized",
        spaceComplexity: "O(n)"
      },
      {
        title: "Design Hit Counter",
        difficulty: "Medium",
        rating: 4.3,
        description: "Design a hit counter which counts the number of hits received in the past 5 minutes.",
        concepts: ["Queue", "Time Series", "Data Structure Design"],
        hints: [
          "Use queue to store hit timestamps",
          "Remove hits older than 5 minutes",
          "Return queue size as hit count",
          "Handle high-frequency hits efficiently"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/design-hit-counter/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/design-a-hit-counter/" }
        ],
        javaSolution: `// Design Hit Counter - Queue Approach
class HitCounter {
    private Queue<Integer> hits;
    
    public HitCounter() {
        hits = new LinkedList<>();
    }
    
    public void hit(int timestamp) {
        hits.offer(timestamp);
    }
    
    public int getHits(int timestamp) {
        // Remove hits older than 5 minutes (300 seconds)
        while(!hits.isEmpty() && hits.peek() <= timestamp - 300) {
            hits.poll();
        }
        return hits.size();
    }
}

// Alternative: Using Array for better performance
class HitCounterArray {
    private int[] times;
    private int[] hits;
    
    public HitCounterArray() {
        times = new int[300];
        hits = new int[300];
    }
    
    public void hit(int timestamp) {
        int index = timestamp % 300;
        if(times[index] != timestamp) {
            times[index] = timestamp;
            hits[index] = 1;
        } else {
            hits[index]++;
        }
    }
    
    public int getHits(int timestamp) {
        int total = 0;
        for(int i = 0; i < 300; i++) {
            if(timestamp - times[i] < 300) {
                total += hits[i];
            }
        }
        return total;
    }
}`,
        explanation: "The queue approach stores all hit timestamps and removes old ones when getting hits. The array approach uses a circular buffer to store hits for each second in the 5-minute window, providing better performance for high-frequency hits.",
        timeComplexity: "O(n) - Queue, O(1) - Array",
        spaceComplexity: "O(n) - Queue, O(1) - Array"
      },
      {
        title: "Moving Average from Data Stream",
        difficulty: "Easy",
        rating: 4.0,
        description: "Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.",
        concepts: ["Queue", "Sliding Window", "Average Calculation"],
        hints: [
          "Use queue to maintain sliding window",
          "Keep track of current sum",
          "Remove old elements when window is full",
          "Calculate average as sum / window size"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/moving-average-from-data-stream/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/program-find-simple-moving-average/" }
        ],
        javaSolution: `// Moving Average - Queue Approach
class MovingAverage {
    private Queue<Integer> queue;
    private int size;
    private double sum;
    
    public MovingAverage(int size) {
        this.queue = new LinkedList<>();
        this.size = size;
        this.sum = 0.0;
    }
    
    public double next(int val) {
        queue.offer(val);
        sum += val;
        
        if(queue.size() > size) {
            sum -= queue.poll();
        }
        
        return sum / queue.size();
    }
}

// Alternative: Using Array with circular buffer
class MovingAverageArray {
    private int[] window;
    private int size, count, head;
    private double sum;
    
    public MovingAverageArray(int size) {
        this.window = new int[size];
        this.size = size;
        this.count = 0;
        this.head = 0;
        this.sum = 0.0;
    }
    
    public double next(int val) {
        if(count < size) {
            count++;
        } else {
            sum -= window[head];
        }
        
        window[head] = val;
        sum += val;
        head = (head + 1) % size;
        
        return sum / count;
    }
}`,
        explanation: "The queue approach naturally handles the sliding window by adding new elements and removing old ones. The array approach uses a circular buffer to store the window elements, providing better memory efficiency. Both approaches maintain a running sum for efficient average calculation.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(n)"
      },
      {
        title: "Open the Lock",
        difficulty: "Medium",
        rating: 4.3,
        description: "Find the minimum number of turns required to open a lock starting from '0000' to target.",
        concepts: ["BFS", "Queue", "State Space Search"],
        hints: [
          "Use BFS to explore all possible combinations",
          "Each turn changes one digit by ±1",
          "Avoid deadends and visited states",
          "Use queue for level-by-level exploration"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/open-the-lock/" }
        ],
        javaSolution: `// Open the Lock - BFS
public int openLock(String[] deadends, String target) {
    Set<String> dead = new HashSet<>(Arrays.asList(deadends));
    Set<String> visited = new HashSet<>();
    Queue<String> queue = new LinkedList<>();
    
    if(dead.contains("0000")) return -1;
    
    queue.offer("0000");
    visited.add("0000");
    int turns = 0;
    
    while(!queue.isEmpty()) {
        int size = queue.size();
        for(int i = 0; i < size; i++) {
            String current = queue.poll();
            if(current.equals(target)) return turns;
            
            // Try all 8 possible moves
            for(int j = 0; j < 4; j++) {
                for(int d = -1; d <= 1; d += 2) {
                    String next = turn(current, j, d);
                    if(!dead.contains(next) && !visited.contains(next)) {
                        visited.add(next);
                        queue.offer(next);
                    }
                }
            }
        }
        turns++;
    }
    
    return -1;
}

private String turn(String s, int i, int d) {
    char[] chars = s.toCharArray();
    chars[i] = (char)(((chars[i] - '0' + d + 10) % 10) + '0');
    return new String(chars);
}`,
        explanation: "Use BFS to explore all possible lock combinations level by level. Each level represents one turn. Avoid deadends and visited states.",
        timeComplexity: "O(10^4)",
        spaceComplexity: "O(10^4)"
      },
      {
        title: "Perfect Squares",
        difficulty: "Medium",
        rating: 4.2,
        description: "Find the least number of perfect square numbers that sum to n.",
        concepts: ["BFS", "Queue", "Dynamic Programming"],
        hints: [
          "Use BFS to find shortest path to 0",
          "Subtract perfect squares from current number",
          "Track visited numbers to avoid cycles",
          "Use queue for level-by-level exploration"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/perfect-squares/" }
        ],
        javaSolution: `// Perfect Squares - BFS
public int numSquares(int n) {
    Queue<Integer> queue = new LinkedList<>();
    Set<Integer> visited = new HashSet<>();
    
    queue.offer(n);
    visited.add(n);
    int level = 0;
    
    while(!queue.isEmpty()) {
        int size = queue.size();
        level++;
        
        for(int i = 0; i < size; i++) {
            int current = queue.poll();
            
            for(int j = 1; j * j <= current; j++) {
                int next = current - j * j;
                if(next == 0) return level;
                if(!visited.contains(next)) {
                    visited.add(next);
                    queue.offer(next);
                }
            }
        }
    }
    
    return level;
}`,
        explanation: "Use BFS to find the shortest path from n to 0 by subtracting perfect squares. Each level represents one perfect square used.",
        timeComplexity: "O(n * sqrt(n))",
        spaceComplexity: "O(n)"
      },
      {
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        rating: 4.6,
        description: "Find the maximum element in each sliding window of size k.",
        concepts: ["Monotonic Queue", "Sliding Window", "Deque"],
        hints: [
          "Use monotonic decreasing deque",
          "Remove smaller elements from back",
          "Remove elements outside window from front",
          "Front of deque always has maximum"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sliding-window-maximum/" }
        ],
        javaSolution: `// Sliding Window Maximum - Monotonic Queue
public int[] maxSlidingWindow(int[] nums, int k) {
    if(nums == null || nums.length == 0) return new int[0];
    
    Deque<Integer> deque = new LinkedList<>();
    int[] result = new int[nums.length - k + 1];
    
    for(int i = 0; i < nums.length; i++) {
        // Remove elements outside window
        while(!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
            deque.pollFirst();
        }
        
        // Remove smaller elements from back
        while(!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
            deque.pollLast();
        }
        
        deque.offerLast(i);
        
        if(i >= k - 1) {
            result[i - k + 1] = nums[deque.peekFirst()];
        }
    }
    
    return result;
}`,
        explanation: "Use a monotonic decreasing deque to maintain the maximum element in the current window. Remove elements outside the window and smaller elements.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(k)"
      },
      {
        title: "Implement Stack using Queues",
        difficulty: "Easy",
        rating: 3.9,
        description: "Implement a last-in-first-out (LIFO) stack using only two queues.",
        concepts: ["Queue", "Stack", "Data Structure Design"],
        hints: [
          "Use two queues: main and auxiliary",
          "Transfer all elements except last to auxiliary queue",
          "Return last element as pop result",
          "Swap queues after pop operation"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/implement-stack-using-queues/" }
        ],
        javaSolution: `// Stack using Queues
class MyStack {
    private Queue<Integer> q1;
    private Queue<Integer> q2;
    
    public MyStack() {
        q1 = new LinkedList<>();
        q2 = new LinkedList<>();
    }
    
    public void push(int x) {
        q2.offer(x);
        while(!q1.isEmpty()) {
            q2.offer(q1.poll());
        }
        Queue<Integer> temp = q1;
        q1 = q2;
        q2 = temp;
    }
    
    public int pop() {
        return q1.poll();
    }
    
    public int top() {
        return q1.peek();
    }
    
    public boolean empty() {
        return q1.isEmpty();
    }
}

// Alternative: Single Queue
class MyStackSingle {
    private Queue<Integer> queue;
    
    public MyStackSingle() {
        queue = new LinkedList<>();
    }
    
    public void push(int x) {
        queue.offer(x);
        int size = queue.size();
        for(int i = 0; i < size - 1; i++) {
            queue.offer(queue.poll());
        }
    }
    
    public int pop() {
        return queue.poll();
    }
    
    public int top() {
        return queue.peek();
    }
    
    public boolean empty() {
        return queue.isEmpty();
    }
}`,
        explanation: "The two-queue approach transfers elements to maintain LIFO order. The single-queue approach rotates elements after each push to simulate stack behavior.",
        timeComplexity: "O(1) - Two Queue, O(n) - Single Queue",
        spaceComplexity: "O(n)"
      },
      {
        title: "Queue Reconstruction by Height",
        difficulty: "Medium",
        rating: 4.4,
        description: "Reconstruct the queue based on people's height and number of people in front who are taller.",
        concepts: ["Sorting", "Queue", "Greedy"],
        hints: [
          "Sort by height (descending) and k (ascending)",
          "Insert people at position k in result list",
          "Use ArrayList for efficient insertion",
          "Taller people don't affect shorter people's k"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/queue-reconstruction-by-height/" }
        ],
        javaSolution: `// Queue Reconstruction by Height
public int[][] reconstructQueue(int[][] people) {
    // Sort by height descending, then by k ascending
    Arrays.sort(people, (a, b) -> {
        if(a[0] != b[0]) return b[0] - a[0];
        return a[1] - b[1];
    });
    
    List<int[]> result = new ArrayList<>();
    
    for(int[] person : people) {
        result.add(person[1], person);
    }
    
    return result.toArray(new int[people.length][]);
}`,
        explanation: "Sort people by height in descending order, then by k in ascending order. Insert each person at position k in the result list.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(n)"
      }
    ]
  },
  {
    id: 'trees',
    title: 'Trees',
    icon: TreePine,
    color: '#059669',
    difficulty: 'Intermediate',
    estimatedTime: '5-6 hours',
    concepts: 15,
    problems: 45,
    tags: ['Hierarchical', 'Recursion', 'Binary'],
    description: 'Explore hierarchical data structures and tree traversal algorithms.',
    explanation: `
      <div class="explanation-content">
        <h3>What is a Tree?</h3>
        <p>A tree is like a family tree or an organizational chart. It starts with one root (like a CEO or great-grandparent) and branches out into children, grandchildren, and so on. Each person (node) can have multiple children but only one parent, creating a hierarchical structure with no cycles.</p>
        
        <div class="real-world-example">
          <h4>🌳 Real-World Analogies</h4>
          <p><strong>Family Tree:</strong></p>
          <ul>
            <li>Root: Common ancestor (great-grandparent)</li>
            <li>Parent-Child relationships: Direct family connections</li>
            <li>Siblings: Children of same parent</li>
            <li>Leaves: Family members with no children</li>
            <li>Height: Number of generations</li>
          </ul>
          
          <p><strong>File System:</strong></p>
          <ul>
            <li>Root directory (C:\ or /)</li>
            <li>Folders contain subfolders and files</li>
            <li>Each file/folder has exactly one parent</li>
            <li>Path from root to any file is unique</li>
          </ul>
        </div>

        <h3>Tree Terminology</h3>
        <div class="key-concepts">
          <h4>🏗️ Essential Terms</h4>
          <ul>
            <li><strong>Root:</strong> Top node with no parent (CEO of company)</li>
            <li><strong>Parent:</strong> Node with children (manager with employees)</li>
            <li><strong>Child:</strong> Node with a parent (employee under manager)</li>
            <li><strong>Leaf:</strong> Node with no children (entry-level employee)</li>
            <li><strong>Height:</strong> Longest path from root to leaf</li>
            <li><strong>Depth:</strong> Distance from root to specific node</li>
            <li><strong>Subtree:</strong> Tree formed by node and all its descendants</li>
          </ul>
        </div>

        <h3>Types of Trees</h3>
        <h4>1. Binary Tree</h4>
        <p>Each node has at most 2 children (left and right). Like a decision tree where each question has yes/no answers.</p>
        
        <h4>2. Binary Search Tree (BST)</h4>
        <p>Binary tree with ordering property: left child < parent < right child. Like a sorted phone book for fast searching.</p>
        
        <h4>3. Balanced Trees (AVL, Red-Black)</h4>
        <p>Self-balancing trees that maintain optimal height for efficient operations.</p>

        <h3>Tree Traversals</h3>
        <p>Different ways to visit all nodes in a tree:</p>
        <ul>
          <li><strong>Inorder (Left-Root-Right):</strong> Gives sorted order in BST</li>
          <li><strong>Preorder (Root-Left-Right):</strong> Good for copying tree structure</li>
          <li><strong>Postorder (Left-Right-Root):</strong> Good for deleting trees</li>
          <li><strong>Level-order:</strong> Visit nodes level by level (BFS)</li>
        </ul>
      </div>
    `,
    codeExamples: [
      {
        title: 'Binary Tree Implementation',
        code: `// Binary tree node
class TreeNode {
    int data;
    TreeNode left, right;
    
    TreeNode(int data) {
        this.data = data;
        left = right = null;
    }
}

// Binary tree operations
class BinaryTree {
    TreeNode root;
    
    // Inorder traversal (Left-Root-Right)
    void inorder(TreeNode node) {
        if(node != null) {
            inorder(node.left);      // Visit left subtree
            System.out.print(node.data + " "); // Visit root
            inorder(node.right);     // Visit right subtree
        }
    }
    
    // Insert in BST
    TreeNode insert(TreeNode root, int data) {
        if(root == null) {
            return new TreeNode(data);
        }
        
        if(data < root.data) {
            root.left = insert(root.left, data);
        } else if(data > root.data) {
            root.right = insert(root.right, data);
        }
        
        return root;
    }
}`,
        visualization: <TreeVisual />,
        steps: [
          "Create tree node with data and left/right pointers",
          "For inorder: recursively visit left subtree first",
          "Process current node (print data)",
          "Recursively visit right subtree",
          "For BST insert: compare with current node and go left/right"
        ]
      }
    ],
    patterns: [
      {
        name: "Tree DFS",
        difficulty: "Medium",
        description: "Use recursion or stack to explore tree depth-first, going as deep as possible before backtracking.",
        whenToUse: [
          "Tree traversals (inorder, preorder, postorder)",
          "Finding paths in trees",
          "Tree validation problems"
        ],
        example: `// DFS to find maximum depth
int maxDepth(TreeNode root) {
    if(root == null) return 0;
    
    int leftDepth = maxDepth(root.left);
    int rightDepth = maxDepth(root.right);
    
    return 1 + Math.max(leftDepth, rightDepth);
}`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(h) where h is height"
      }
    ],
    problemSet: [
      {
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        rating: 4.4,
        description: "Find the maximum depth (height) of a binary tree.",
        concepts: ["Tree Traversal", "Recursion", "DFS"],
        hints: [
          "Use recursive approach",
          "Base case: null node has depth 0",
          "Return 1 + max of left and right subtree depths"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" }
        ]
      },
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        rating: 4.3,
        description: "Return the level order traversal of a binary tree's nodes (from left to right, level by level).",
        concepts: ["BFS", "Queue", "Level Order Traversal"],
        hints: [
          "Use BFS with queue",
          "Process nodes level by level",
          "Track level size for each iteration",
          "Add children to queue for next level"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/level-order-tree-traversal/" }
        ],
        javaSolution: `// Binary Tree Level Order Traversal - BFS
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if(root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while(!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> currentLevel = new ArrayList<>();
        
        for(int i = 0; i < levelSize; i++) {
            TreeNode current = queue.poll();
            currentLevel.add(current.val);
            
            if(current.left != null) {
                queue.offer(current.left);
            }
            if(current.right != null) {
                queue.offer(current.right);
            }
        }
        
        result.add(currentLevel);
    }
    
    return result;
}

// Alternative: DFS with level tracking
public List<List<Integer>> levelOrderDFS(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    levelOrderHelper(root, 0, result);
    return result;
}

private void levelOrderHelper(TreeNode node, int level, List<List<Integer>> result) {
    if(node == null) return;
    
    if(level == result.size()) {
        result.add(new ArrayList<>());
    }
    
    result.get(level).add(node.val);
    
    levelOrderHelper(node.left, level + 1, result);
    levelOrderHelper(node.right, level + 1, result);
}`,
        explanation: "The BFS approach uses a queue to process nodes level by level. We track the level size to know how many nodes to process in each iteration. The DFS approach uses recursion with level tracking to build the result. Both approaches achieve the same result but BFS is more intuitive for level order traversal.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
      },
      {
        title: "Invert Binary Tree",
        difficulty: "Easy",
        rating: 4.1,
        description: "Invert a binary tree by swapping every left node with its corresponding right node.",
        concepts: ["Tree Traversal", "Recursion", "Tree Manipulation"],
        hints: [
          "Use recursive approach",
          "Swap left and right children at each node",
          "Base case: null node",
          "Recursively invert left and right subtrees"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/invert-binary-tree/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/write-an-efficient-c-function-to-convert-a-tree-into-its-mirror-tree/" }
        ],
        javaSolution: `// Invert Binary Tree - Recursive
public TreeNode invertTree(TreeNode root) {
    if(root == null) return null;
    
    // Swap left and right children
    TreeNode temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    // Recursively invert subtrees
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
}

// Alternative: Iterative using BFS
public TreeNode invertTreeIterative(TreeNode root) {
    if(root == null) return null;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while(!queue.isEmpty()) {
        TreeNode current = queue.poll();
        
        // Swap children
        TreeNode temp = current.left;
        current.left = current.right;
        current.right = temp;
        
        // Add children to queue
        if(current.left != null) {
            queue.offer(current.left);
        }
        if(current.right != null) {
            queue.offer(current.right);
        }
    }
    
    return root;
}

// Alternative: Using Stack (DFS)
public TreeNode invertTreeStack(TreeNode root) {
    if(root == null) return null;
    
    Stack<TreeNode> stack = new Stack<>();
    stack.push(root);
    
    while(!stack.isEmpty()) {
        TreeNode current = stack.pop();
        
        // Swap children
        TreeNode temp = current.left;
        current.left = current.right;
        current.right = temp;
        
        // Push children to stack
        if(current.left != null) {
            stack.push(current.left);
        }
        if(current.right != null) {
            stack.push(current.right);
        }
    }
    
    return root;
}`,
        explanation: "The recursive approach is the most elegant - we swap the left and right children at each node and recursively invert the subtrees. The iterative approaches use BFS (queue) or DFS (stack) to traverse the tree and perform the same swapping operation. All approaches achieve the same result.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(h) - Recursive, O(n) - Iterative"
      },
      {
        title: "Same Tree",
        difficulty: "Easy",
        rating: 4.0,
        description: "Check if two binary trees are identical in structure and values.",
        concepts: ["Tree Comparison", "Recursion", "Tree Traversal"],
        hints: [
          "Use recursive approach",
          "Compare current nodes, then left and right subtrees",
          "Base case: both null (true) or one null (false)",
          "Check values and recursively check children"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/same-tree/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/write-c-code-to-determine-if-two-trees-are-identical/" }
        ],
        javaSolution: `// Same Tree - Recursive
public boolean isSameTree(TreeNode p, TreeNode q) {
    if(p == null && q == null) return true;
    if(p == null || q == null) return false;
    
    return p.val == q.val && 
           isSameTree(p.left, q.left) && 
           isSameTree(p.right, q.right);
}

// Alternative: Iterative using Stack
public boolean isSameTreeIterative(TreeNode p, TreeNode q) {
    Stack<TreeNode[]> stack = new Stack<>();
    stack.push(new TreeNode[]{p, q});
    
    while(!stack.isEmpty()) {
        TreeNode[] nodes = stack.pop();
        TreeNode node1 = nodes[0];
        TreeNode node2 = nodes[1];
        
        if(node1 == null && node2 == null) continue;
        if(node1 == null || node2 == null) return false;
        if(node1.val != node2.val) return false;
        
        stack.push(new TreeNode[]{node1.left, node2.left});
        stack.push(new TreeNode[]{node1.right, node2.right});
    }
    
    return true;
}

// Alternative: Using Queue (BFS)
public boolean isSameTreeBFS(TreeNode p, TreeNode q) {
    Queue<TreeNode[]> queue = new LinkedList<>();
    queue.offer(new TreeNode[]{p, q});
    
    while(!queue.isEmpty()) {
        TreeNode[] nodes = queue.poll();
        TreeNode node1 = nodes[0];
        TreeNode node2 = nodes[1];
        
        if(node1 == null && node2 == null) continue;
        if(node1 == null || node2 == null) return false;
        if(node1.val != node2.val) return false;
        
        queue.offer(new TreeNode[]{node1.left, node2.left});
        queue.offer(new TreeNode[]{node1.right, node2.right});
    }
    
    return true;
}`,
        explanation: "The recursive approach is the most straightforward - we compare the current nodes and recursively check left and right subtrees. The iterative approaches use stack (DFS) or queue (BFS) to traverse both trees simultaneously and compare corresponding nodes. All approaches have the same time complexity.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(h) - Recursive, O(n) - Iterative"
      },
      {
        title: "Symmetric Tree",
        difficulty: "Easy",
        rating: 4.2,
        description: "Check if a binary tree is a mirror of itself (symmetric around its center).",
        concepts: ["Tree Symmetry", "Recursion", "Tree Comparison"],
        hints: [
          "Check if left subtree is mirror of right subtree",
          "Compare left.left with right.right",
          "Compare left.right with right.left",
          "Use recursive helper function"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/symmetric-tree/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/symmetric-tree-tree-which-is-mirror-image-of-itself/" }
        ],
        javaSolution: `// Symmetric Tree - Recursive
public boolean isSymmetric(TreeNode root) {
    if(root == null) return true;
    return isMirror(root.left, root.right);
}

private boolean isMirror(TreeNode left, TreeNode right) {
    if(left == null && right == null) return true;
    if(left == null || right == null) return false;
    
    return left.val == right.val && 
           isMirror(left.left, right.right) && 
           isMirror(left.right, right.left);
}

// Alternative: Iterative using Queue
public boolean isSymmetricIterative(TreeNode root) {
    if(root == null) return true;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root.left);
    queue.offer(root.right);
    
    while(!queue.isEmpty()) {
        TreeNode left = queue.poll();
        TreeNode right = queue.poll();
        
        if(left == null && right == null) continue;
        if(left == null || right == null) return false;
        if(left.val != right.val) return false;
        
        queue.offer(left.left);
        queue.offer(right.right);
        queue.offer(left.right);
        queue.offer(right.left);
    }
    
    return true;
}

// Alternative: Using Stack
public boolean isSymmetricStack(TreeNode root) {
    if(root == null) return true;
    
    Stack<TreeNode> stack = new Stack<>();
    stack.push(root.left);
    stack.push(root.right);
    
    while(!stack.isEmpty()) {
        TreeNode right = stack.pop();
        TreeNode left = stack.pop();
        
        if(left == null && right == null) continue;
        if(left == null || right == null) return false;
        if(left.val != right.val) return false;
        
        stack.push(left.left);
        stack.push(right.right);
        stack.push(left.right);
        stack.push(right.left);
    }
    
    return true;
}`,
        explanation: "The recursive approach checks if the left subtree is a mirror of the right subtree by comparing corresponding nodes. The iterative approaches use queue (BFS) or stack (DFS) to traverse the tree and compare mirror nodes. All approaches check the same symmetry conditions.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(h) - Recursive, O(n) - Iterative"
      },
      {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        difficulty: "Medium",
        rating: 4.5,
        description: "Construct a binary tree from preorder and inorder traversal arrays.",
        concepts: ["Tree Construction", "Recursion", "Array Manipulation"],
        hints: [
          "First element of preorder is root",
          "Find root position in inorder to split left/right subtrees",
          "Recursively construct left and right subtrees",
          "Use HashMap for O(1) inorder lookups"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/construct-tree-from-given-inorder-and-preorder-traversal/" }
        ],
        javaSolution: `// Construct Binary Tree from Preorder and Inorder
public TreeNode buildTree(int[] preorder, int[] inorder) {
    Map<Integer, Integer> inorderMap = new HashMap<>();
    for(int i = 0; i < inorder.length; i++) {
        inorderMap.put(inorder[i], i);
    }
    
    return buildTreeHelper(preorder, 0, preorder.length - 1, 
                          inorder, 0, inorder.length - 1, inorderMap);
}

private TreeNode buildTreeHelper(int[] preorder, int preStart, int preEnd,
                                int[] inorder, int inStart, int inEnd,
                                Map<Integer, Integer> inorderMap) {
    if(preStart > preEnd || inStart > inEnd) return null;
    
    TreeNode root = new TreeNode(preorder[preStart]);
    int rootIndex = inorderMap.get(preorder[preStart]);
    int leftSubtreeSize = rootIndex - inStart;
    
    root.left = buildTreeHelper(preorder, preStart + 1, preStart + leftSubtreeSize,
                               inorder, inStart, rootIndex - 1, inorderMap);
    root.right = buildTreeHelper(preorder, preStart + leftSubtreeSize + 1, preEnd,
                                inorder, rootIndex + 1, inEnd, inorderMap);
    
    return root;
}

// Alternative: Without HashMap (less efficient)
public TreeNode buildTreeNoMap(int[] preorder, int[] inorder) {
    return buildTreeHelperNoMap(preorder, 0, preorder.length - 1,
                               inorder, 0, inorder.length - 1);
}

private TreeNode buildTreeHelperNoMap(int[] preorder, int preStart, int preEnd,
                                     int[] inorder, int inStart, int inEnd) {
    if(preStart > preEnd || inStart > inEnd) return null;
    
    TreeNode root = new TreeNode(preorder[preStart]);
    
    // Find root in inorder array
    int rootIndex = inStart;
    for(int i = inStart; i <= inEnd; i++) {
        if(inorder[i] == preorder[preStart]) {
            rootIndex = i;
            break;
        }
    }
    
    int leftSubtreeSize = rootIndex - inStart;
    
    root.left = buildTreeHelperNoMap(preorder, preStart + 1, preStart + leftSubtreeSize,
                                    inorder, inStart, rootIndex - 1);
    root.right = buildTreeHelperNoMap(preorder, preStart + leftSubtreeSize + 1, preEnd,
                                     inorder, rootIndex + 1, inEnd);
    
    return root;
}`,
        explanation: "The HashMap approach provides O(1) lookup time for finding the root position in the inorder array. We use the first element of preorder as the root and find its position in inorder to determine the left and right subtree boundaries. The no-map approach uses linear search but is less efficient.",
        timeComplexity: "O(n) - With HashMap, O(n²) - Without HashMap",
        spaceComplexity: "O(n)"
      },
      {
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        rating: 4.7,
        description: "Find the path with the maximum sum in a binary tree where a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections.",
        concepts: ["Tree Traversal", "Dynamic Programming", "Path Sum"],
        hints: [
          "Use recursive approach with global maximum",
          "For each node, calculate max path through it",
          "Return max path that can be extended to parent",
          "Update global maximum with complete paths"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/" }
        ],
        javaSolution: `// Binary Tree Maximum Path Sum
class Solution {
    private int maxSum = Integer.MIN_VALUE;
    
    public int maxPathSum(TreeNode root) {
        maxSum = Integer.MIN_VALUE;
        maxPathSumHelper(root);
        return maxSum;
    }
    
    private int maxPathSumHelper(TreeNode node) {
        if(node == null) return 0;
        
        // Get max path sums from left and right subtrees
        int leftSum = Math.max(0, maxPathSumHelper(node.left));
        int rightSum = Math.max(0, maxPathSumHelper(node.right));
        
        // Update global maximum with path through current node
        maxSum = Math.max(maxSum, node.val + leftSum + rightSum);
        
        // Return max path that can be extended to parent
        return node.val + Math.max(leftSum, rightSum);
    }
}

// Alternative: Without global variable
public int maxPathSumNoGlobal(TreeNode root) {
    int[] result = new int[]{Integer.MIN_VALUE};
    maxPathSumHelperNoGlobal(root, result);
    return result[0];
}

private int maxPathSumHelperNoGlobal(TreeNode node, int[] result) {
    if(node == null) return 0;
    
    int leftSum = Math.max(0, maxPathSumHelperNoGlobal(node.left, result));
    int rightSum = Math.max(0, maxPathSumHelperNoGlobal(node.right, result));
    
    result[0] = Math.max(result[0], node.val + leftSum + rightSum);
    
    return node.val + Math.max(leftSum, rightSum);
}`,
        explanation: "The recursive approach calculates the maximum path sum that can be extended to the parent node. For each node, we consider the maximum path through it (including left and right subtrees) and update the global maximum. We return the maximum path that can be extended upward to avoid double-counting.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(h) - Recursion depth"
      },
      {
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        rating: 4.6,
        description: "Design an algorithm to serialize and deserialize a binary tree.",
        concepts: ["Tree Serialization", "String Manipulation", "Tree Construction"],
        hints: [
          "Use preorder traversal with null markers",
          "Serialize null nodes as special characters",
          "Use comma-separated values for parsing",
          "Reconstruct tree using same traversal order"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/" }
        ],
        javaSolution: `// Serialize and Deserialize Binary Tree
public class Codec {
    private static final String NULL_MARKER = "null";
    private static final String DELIMITER = ",";
    
    // Encodes a tree to a single string
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        serializeHelper(root, sb);
        return sb.toString();
    }
    
    private void serializeHelper(TreeNode node, StringBuilder sb) {
        if(node == null) {
            sb.append(NULL_MARKER).append(DELIMITER);
            return;
        }
        
        sb.append(node.val).append(DELIMITER);
        serializeHelper(node.left, sb);
        serializeHelper(node.right, sb);
    }
    
    // Decodes your encoded data to tree
    public TreeNode deserialize(String data) {
        String[] values = data.split(DELIMITER);
        Queue<String> queue = new LinkedList<>(Arrays.asList(values));
        return deserializeHelper(queue);
    }
    
    private TreeNode deserializeHelper(Queue<String> queue) {
        String value = queue.poll();
        
        if(value.equals(NULL_MARKER)) {
            return null;
        }
        
        TreeNode node = new TreeNode(Integer.parseInt(value));
        node.left = deserializeHelper(queue);
        node.right = deserializeHelper(queue);
        
        return node;
    }
}

// Alternative: Using level order traversal
public class CodecLevelOrder {
    private static final String NULL_MARKER = "null";
    private static final String DELIMITER = ",";
    
    public String serialize(TreeNode root) {
        if(root == null) return "";
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        StringBuilder sb = new StringBuilder();
        
        while(!queue.isEmpty()) {
            TreeNode node = queue.poll();
            
            if(node == null) {
                sb.append(NULL_MARKER).append(DELIMITER);
            } else {
                sb.append(node.val).append(DELIMITER);
                queue.offer(node.left);
                queue.offer(node.right);
            }
        }
        
        return sb.toString();
    }
    
    public TreeNode deserialize(String data) {
        if(data.isEmpty()) return null;
        
        String[] values = data.split(DELIMITER);
        Queue<TreeNode> queue = new LinkedList<>();
        TreeNode root = new TreeNode(Integer.parseInt(values[0]));
        queue.offer(root);
        
        for(int i = 1; i < values.length; i++) {
            TreeNode parent = queue.poll();
            
            if(!values[i].equals(NULL_MARKER)) {
                TreeNode left = new TreeNode(Integer.parseInt(values[i]));
                parent.left = left;
                queue.offer(left);
            }
            
            i++;
            if(i < values.length && !values[i].equals(NULL_MARKER)) {
                TreeNode right = new TreeNode(Integer.parseInt(values[i]));
                parent.right = right;
                queue.offer(right);
            }
        }
        
        return root;
    }
}`,
        explanation: "The preorder approach is more compact and efficient. We serialize null nodes as 'null' markers and use comma-separated values. During deserialization, we reconstruct the tree using the same preorder traversal. The level order approach is more intuitive but produces longer serialized strings.",
        timeComplexity: "O(n) for both serialize and deserialize",
        spaceComplexity: "O(n)"
      }
    ]
  },
  {
    id: 'graphs',
    title: 'Graphs',
    icon: Network,
    color: '#DC2626',
    difficulty: 'Advanced',
    estimatedTime: '8-10 hours',
    concepts: 20,
    problems: 60,
    tags: ['Networks', 'Algorithms', 'Paths'],
    description: 'Master complex network structures and graph algorithms.',
    explanation: `
      <div class="explanation-content">
        <h3>What is a Graph?</h3>
        <p>A graph is like a social network or a map of cities connected by roads. It consists of vertices (nodes) representing entities and edges representing relationships or connections between them. Unlike trees, graphs can have cycles and multiple paths between nodes.</p>
        
        <div class="real-world-example">
          <h4>🌐 Real-World Analogies</h4>
          <p><strong>Social Network:</strong></p>
          <ul>
            <li>People are vertices (nodes)</li>
            <li>Friendships are edges (connections)</li>
            <li>Can have mutual friends (cycles)</li>
            <li>Multiple paths to connect with someone</li>
          </ul>
          
          <p><strong>City Road Network:</strong></p>
          <ul>
            <li>Cities are vertices</li>
            <li>Roads are edges</li>
            <li>Road lengths are edge weights</li>
            <li>Multiple routes between cities</li>
            <li>One-way streets (directed edges)</li>
          </ul>
        </div>

        <h3>Types of Graphs</h3>
        <div class="key-concepts">
          <h4>📊 Graph Classifications</h4>
          <ul>
            <li><strong>Directed vs Undirected:</strong> One-way vs two-way connections</li>
            <li><strong>Weighted vs Unweighted:</strong> Edges have costs/distances or not</li>
            <li><strong>Connected vs Disconnected:</strong> All nodes reachable or isolated groups</li>
            <li><strong>Cyclic vs Acyclic:</strong> Contains cycles or not (DAG)</li>
            <li><strong>Dense vs Sparse:</strong> Many edges vs few edges</li>
          </ul>
        </div>

        <h3>Graph Representation</h3>
        <h4>1. Adjacency Matrix</h4>
        <p>2D array where matrix[i][j] = 1 if edge exists between vertex i and j. Like a friendship table showing who knows whom.</p>
        
        <h4>2. Adjacency List</h4>
        <p>Array of lists where each vertex has a list of its neighbors. Like each person's contact list.</p>

        <h3>Common Graph Algorithms</h3>
        <ul>
          <li><strong>BFS (Breadth-First Search):</strong> Explore neighbors level by level</li>
          <li><strong>DFS (Depth-First Search):</strong> Go deep before exploring siblings</li>
          <li><strong>Dijkstra's Algorithm:</strong> Find shortest path in weighted graphs</li>
          <li><strong>Topological Sort:</strong> Order vertices in DAG</li>
          <li><strong>Union-Find:</strong> Detect cycles and connected components</li>
        </ul>

        <h3>Applications</h3>
        <ul>
          <li><strong>GPS Navigation:</strong> Finding shortest routes</li>
          <li><strong>Social Networks:</strong> Friend recommendations, influence analysis</li>
          <li><strong>Web Crawling:</strong> Following links between pages</li>
          <li><strong>Dependency Resolution:</strong> Build systems, package managers</li>
          <li><strong>Network Analysis:</strong> Internet routing, circuit design</li>
        </ul>
      </div>
    `,
    codeExamples: [
      {
        title: 'Graph Implementation and BFS',
        code: `// Graph using adjacency list
class Graph {
    private int vertices;
    private List<Integer>[] adjList;
    
    public Graph(int vertices) {
        this.vertices = vertices;
        adjList = new ArrayList[vertices];
        for(int i = 0; i < vertices; i++) {
            adjList[i] = new ArrayList<>();
        }
    }
    
    // Add edge
    public void addEdge(int src, int dest) {
        adjList[src].add(dest);
        adjList[dest].add(src); // For undirected graph
    }
    
    // BFS traversal
    public void bfs(int start) {
        boolean[] visited = new boolean[vertices];
        Queue<Integer> queue = new LinkedList<>();
        
        visited[start] = true;
        queue.offer(start);
        
        while(!queue.isEmpty()) {
            int vertex = queue.poll();
            System.out.print(vertex + " ");
            
            for(int neighbor : adjList[vertex]) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.offer(neighbor);
                }
            }
        }
    }
}`,
        visualization: (
          <div className="graph-visual">
            <div className="graph-container">
              <div className="graph-nodes">
                <div className="graph-node">0</div>
                <div className="graph-node">1</div>
                <div className="graph-node">2</div>
                <div className="graph-node">3</div>
              </div>
              <div className="graph-edges">
                <div className="edge">0 ↔ 1</div>
                <div className="edge">1 ↔ 2</div>
                <div className="edge">2 ↔ 3</div>
                <div className="edge">0 ↔ 3</div>
              </div>
            </div>
            <p>BFS visits nodes level by level using queue</p>
          </div>
        ),
        steps: [
          "Create adjacency list representation of graph",
          "Add edges to connect vertices bidirectionally",
          "Initialize visited array and queue for BFS",
          "Start from given vertex, mark as visited",
          "Process neighbors level by level using queue"
        ]
      }
    ],
    patterns: [
      {
        name: "Graph DFS",
        difficulty: "Medium",
        description: "Explore graph depth-first using recursion or stack, going as deep as possible before backtracking.",
        whenToUse: [
          "Detecting cycles in graphs",
          "Topological sorting",
          "Finding connected components",
          "Path finding problems"
        ],
        example: `// DFS to detect cycle in undirected graph
boolean hasCycleDFS(int vertex, boolean[] visited, int parent) {
    visited[vertex] = true;
    
    for(int neighbor : adjList[vertex]) {
        if(!visited[neighbor]) {
            if(hasCycleDFS(neighbor, visited, vertex)) {
                return true;
            }
        } else if(neighbor != parent) {
            return true; // Back edge found, cycle detected
        }
    }
    return false;
}`,
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)"
      }
    ],
    problemSet: [
      {
        title: "Number of Islands",
        difficulty: "Medium",
        rating: 4.3,
        description: "Count the number of islands in a 2D grid using DFS or BFS.",
        concepts: ["Graph Traversal", "DFS", "BFS", "Connected Components"],
        hints: [
          "Treat each cell as a graph node",
          "Use DFS/BFS to explore connected land cells",
          "Mark visited cells to avoid counting twice"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/number-of-islands/" }
        ]
      },
      {
        title: "Flood Fill",
        difficulty: "Easy",
        rating: 4.0,
        description: "Perform flood fill on an image starting from a given pixel.",
        concepts: ["DFS", "BFS", "Graph Traversal", "Image Processing"],
        hints: [
          "Use DFS or BFS to explore connected pixels",
          "Change color of current pixel and explore neighbors",
          "Check boundary conditions and color matching",
          "Mark visited pixels to avoid infinite loops"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/flood-fill/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/flood-fill-algorithm-implement-fill-paint/" }
        ],
        javaSolution: `// Flood Fill - DFS
public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
    if(image[sr][sc] == newColor) return image;
    
    int oldColor = image[sr][sc];
    dfs(image, sr, sc, oldColor, newColor);
    return image;
}

private void dfs(int[][] image, int r, int c, int oldColor, int newColor) {
    if(r < 0 || r >= image.length || c < 0 || c >= image[0].length || 
       image[r][c] != oldColor) {
        return;
    }
    
    image[r][c] = newColor;
    
    // Explore 4 directions
    dfs(image, r + 1, c, oldColor, newColor);
    dfs(image, r - 1, c, oldColor, newColor);
    dfs(image, r, c + 1, oldColor, newColor);
    dfs(image, r, c - 1, oldColor, newColor);
}

// Alternative: BFS approach
public int[][] floodFillBFS(int[][] image, int sr, int sc, int newColor) {
    if(image[sr][sc] == newColor) return image;
    
    int oldColor = image[sr][sc];
    Queue<int[]> queue = new LinkedList<>();
    queue.offer(new int[]{sr, sc});
    
    int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    
    while(!queue.isEmpty()) {
        int[] current = queue.poll();
        int r = current[0], c = current[1];
        
        if(r < 0 || r >= image.length || c < 0 || c >= image[0].length || 
           image[r][c] != oldColor) {
            continue;
        }
        
        image[r][c] = newColor;
        
        for(int[] dir : directions) {
            queue.offer(new int[]{r + dir[0], c + dir[1]});
        }
    }
    
    return image;
}`,
        explanation: "The DFS approach recursively explores connected pixels with the same color. The BFS approach uses a queue to explore pixels level by level. Both approaches change the color of visited pixels and explore their neighbors. DFS is more memory-efficient for deep regions, while BFS is better for wide regions.",
        timeComplexity: "O(m × n)",
        spaceComplexity: "O(m × n) - Worst case"
      },
      {
        title: "Course Schedule",
        difficulty: "Medium",
        rating: 4.4,
        description: "Determine if it is possible to finish all courses given prerequisites.",
        concepts: ["Topological Sort", "Cycle Detection", "DFS", "BFS"],
        hints: [
          "Use topological sort to detect cycles",
          "Build adjacency list from prerequisites",
          "Use DFS with visited states (0, 1, 2)",
          "Return false if cycle is detected"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/course-schedule/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/topological-sorting/" }
        ],
        javaSolution: `// Course Schedule - DFS with Cycle Detection
public boolean canFinish(int numCourses, int[][] prerequisites) {
    List<List<Integer>> graph = new ArrayList<>();
    for(int i = 0; i < numCourses; i++) {
        graph.add(new ArrayList<>());
    }
    
    // Build adjacency list
    for(int[] prereq : prerequisites) {
        graph.get(prereq[1]).add(prereq[0]);
    }
    
    // 0: unvisited, 1: visiting, 2: visited
    int[] visited = new int[numCourses];
    
    for(int i = 0; i < numCourses; i++) {
        if(visited[i] == 0 && hasCycle(graph, i, visited)) {
            return false;
        }
    }
    
    return true;
}

private boolean hasCycle(List<List<Integer>> graph, int course, int[] visited) {
    if(visited[course] == 1) return true; // Cycle detected
    if(visited[course] == 2) return false; // Already processed
    
    visited[course] = 1; // Mark as visiting
    
    for(int neighbor : graph.get(course)) {
        if(hasCycle(graph, neighbor, visited)) {
            return true;
        }
    }
    
    visited[course] = 2; // Mark as visited
    return false;
}

// Alternative: BFS with Kahn's Algorithm
public boolean canFinishBFS(int numCourses, int[][] prerequisites) {
    List<List<Integer>> graph = new ArrayList<>();
    int[] inDegree = new int[numCourses];
    
    for(int i = 0; i < numCourses; i++) {
        graph.add(new ArrayList<>());
    }
    
    // Build graph and calculate in-degrees
    for(int[] prereq : prerequisites) {
        graph.get(prereq[1]).add(prereq[0]);
        inDegree[prereq[0]]++;
    }
    
    Queue<Integer> queue = new LinkedList<>();
    for(int i = 0; i < numCourses; i++) {
        if(inDegree[i] == 0) {
            queue.offer(i);
        }
    }
    
    int count = 0;
    while(!queue.isEmpty()) {
        int course = queue.poll();
        count++;
        
        for(int neighbor : graph.get(course)) {
            inDegree[neighbor]--;
            if(inDegree[neighbor] == 0) {
                queue.offer(neighbor);
            }
        }
    }
    
    return count == numCourses;
}`,
        explanation: "The DFS approach uses three states to detect cycles: unvisited (0), visiting (1), and visited (2). If we encounter a node in visiting state, we've found a cycle. The BFS approach uses Kahn's algorithm with in-degree counting to perform topological sort. If we can't process all nodes, there's a cycle.",
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V + E)"
      },
      {
        title: "Redundant Connection",
        difficulty: "Medium",
        rating: 4.3,
        description: "Find the edge that can be removed to make the graph a tree.",
        concepts: ["Union Find", "Cycle Detection", "Graph Theory"],
        hints: [
          "Use Union Find to detect cycles",
          "Process edges in order",
          "Return first edge that creates a cycle",
          "Union Find tracks connected components"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/redundant-connection/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/union-find/" }
        ],
        javaSolution: `// Redundant Connection - Union Find
public int[] findRedundantConnection(int[][] edges) {
    int n = edges.length;
    UnionFind uf = new UnionFind(n + 1);
    
    for(int[] edge : edges) {
        if(!uf.union(edge[0], edge[1])) {
            return edge; // This edge creates a cycle
        }
    }
    
    return new int[0];
}

class UnionFind {
    private int[] parent;
    private int[] rank;
    
    public UnionFind(int n) {
        parent = new int[n];
        rank = new int[n];
        for(int i = 0; i < n; i++) {
            parent[i] = i;
        }
    }
    
    public int find(int x) {
        if(parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }
    
    public boolean union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        
        if(rootX == rootY) {
            return false; // Already connected, creates cycle
        }
        
        // Union by rank
        if(rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if(rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
        
        return true;
    }
}

// Alternative: DFS approach
public int[] findRedundantConnectionDFS(int[][] edges) {
    int n = edges.length;
    List<List<Integer>> graph = new ArrayList<>();
    
    for(int i = 0; i <= n; i++) {
        graph.add(new ArrayList<>());
    }
    
    for(int[] edge : edges) {
        int u = edge[0], v = edge[1];
        
        // Check if adding this edge creates a cycle
        if(hasCycle(graph, u, v, new boolean[n + 1])) {
            return edge;
        }
        
        graph.get(u).add(v);
        graph.get(v).add(u);
    }
    
    return new int[0];
}

private boolean hasCycle(List<List<Integer>> graph, int u, int v, boolean[] visited) {
    if(u == v) return true;
    
    visited[u] = true;
    for(int neighbor : graph.get(u)) {
        if(!visited[neighbor] && hasCycle(graph, neighbor, v, visited)) {
            return true;
        }
    }
    return false;
}`,
        explanation: "The Union Find approach is more efficient. We process edges in order and use Union Find to detect when adding an edge would create a cycle. The DFS approach checks for cycles by trying to find a path between the two vertices before adding the edge. Union Find is preferred for its O(α(n)) amortized time complexity.",
        timeComplexity: "O(n α(n)) - Union Find, O(n²) - DFS",
        spaceComplexity: "O(n)"
      },
      {
        title: "All Paths From Source to Target",
        difficulty: "Medium",
        rating: 4.2,
        description: "Find all possible paths from source node 0 to target node n-1 in a directed acyclic graph.",
        concepts: ["DFS", "Backtracking", "Graph Traversal"],
        hints: [
          "Use DFS with backtracking",
          "Track current path during traversal",
          "Add path to result when reaching target",
          "Remove current node when backtracking"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/all-paths-from-source-to-target/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-paths-given-source-destination/" }
        ],
        javaSolution: `// All Paths From Source to Target - DFS
public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
    List<List<Integer>> result = new ArrayList<>();
    List<Integer> path = new ArrayList<>();
    path.add(0);
    
    dfs(graph, 0, graph.length - 1, path, result);
    return result;
}

private void dfs(int[][] graph, int current, int target, 
                List<Integer> path, List<List<Integer>> result) {
    if(current == target) {
        result.add(new ArrayList<>(path));
        return;
    }
    
    for(int neighbor : graph[current]) {
        path.add(neighbor);
        dfs(graph, neighbor, target, path, result);
        path.remove(path.size() - 1); // Backtrack
    }
}

// Alternative: BFS approach
public List<List<Integer>> allPathsSourceTargetBFS(int[][] graph) {
    List<List<Integer>> result = new ArrayList<>();
    Queue<List<Integer>> queue = new LinkedList<>();
    queue.offer(Arrays.asList(0));
    
    while(!queue.isEmpty()) {
        List<Integer> path = queue.poll();
        int current = path.get(path.size() - 1);
        
        if(current == graph.length - 1) {
            result.add(path);
            continue;
        }
        
        for(int neighbor : graph[current]) {
            List<Integer> newPath = new ArrayList<>(path);
            newPath.add(neighbor);
            queue.offer(newPath);
        }
    }
    
    return result;
}

// Alternative: Using adjacency list
public List<List<Integer>> allPathsSourceTargetAdjList(int[][] graph) {
    List<List<Integer>> result = new ArrayList<>();
    boolean[] visited = new boolean[graph.length];
    
    dfsWithVisited(graph, 0, graph.length - 1, new ArrayList<>(), result, visited);
    return result;
}

private void dfsWithVisited(int[][] graph, int current, int target,
                           List<Integer> path, List<List<Integer>> result, 
                           boolean[] visited) {
    visited[current] = true;
    path.add(current);
    
    if(current == target) {
        result.add(new ArrayList<>(path));
    } else {
        for(int neighbor : graph[current]) {
            if(!visited[neighbor]) {
                dfsWithVisited(graph, neighbor, target, path, result, visited);
            }
        }
    }
    
    visited[current] = false;
    path.remove(path.size() - 1);
}`,
        explanation: "The DFS approach uses backtracking to explore all possible paths. We add the current node to the path, recursively explore neighbors, and remove the current node when backtracking. The BFS approach processes paths level by level. The visited array approach prevents cycles but may miss some paths in DAGs.",
        timeComplexity: "O(2^n × n)",
        spaceComplexity: "O(n)"
      },
      {
        title: "Word Ladder",
        difficulty: "Hard",
        rating: 4.6,
        description: "Find the shortest transformation sequence from beginWord to endWord using words from wordList.",
        concepts: ["BFS", "String Manipulation", "Graph Construction"],
        hints: [
          "Use BFS to find shortest path",
          "Build graph by connecting words that differ by one character",
          "Use HashSet for O(1) word lookup",
          "Track visited words to avoid cycles"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/word-ladder/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/word-ladder-length-of-shortest-chain-to-reach-a-target-word/" }
        ],
        javaSolution: `// Word Ladder - BFS
public int ladderLength(String beginWord, String endWord, List<String> wordList) {
    Set<String> wordSet = new HashSet<>(wordList);
    if(!wordSet.contains(endWord)) return 0;
    
    Queue<String> queue = new LinkedList<>();
    Set<String> visited = new HashSet<>();
    queue.offer(beginWord);
    visited.add(beginWord);
    
    int level = 1;
    while(!queue.isEmpty()) {
        int size = queue.size();
        
        for(int i = 0; i < size; i++) {
            String current = queue.poll();
            
            if(current.equals(endWord)) {
                return level;
            }
            
            // Generate all possible transformations
            char[] chars = current.toCharArray();
            for(int j = 0; j < chars.length; j++) {
                char original = chars[j];
                
                for(char c = 'a'; c <= 'z'; c++) {
                    chars[j] = c;
                    String newWord = new String(chars);
                    
                    if(wordSet.contains(newWord) && !visited.contains(newWord)) {
                        queue.offer(newWord);
                        visited.add(newWord);
                    }
                }
                
                chars[j] = original;
            }
        }
        
        level++;
    }
    
    return 0;
}

// Alternative: Bidirectional BFS
public int ladderLengthBidirectional(String beginWord, String endWord, List<String> wordList) {
    Set<String> wordSet = new HashSet<>(wordList);
    if(!wordSet.contains(endWord)) return 0;
    
    Set<String> beginSet = new HashSet<>();
    Set<String> endSet = new HashSet<>();
    Set<String> visited = new HashSet<>();
    
    beginSet.add(beginWord);
    endSet.add(endWord);
    visited.add(beginWord);
    visited.add(endWord);
    
    int level = 1;
    while(!beginSet.isEmpty() && !endSet.isEmpty()) {
        // Always work on smaller set
        if(beginSet.size() > endSet.size()) {
            Set<String> temp = beginSet;
            beginSet = endSet;
            endSet = temp;
        }
        
        Set<String> nextLevel = new HashSet<>();
        
        for(String word : beginSet) {
            char[] chars = word.toCharArray();
            
            for(int i = 0; i < chars.length; i++) {
                char original = chars[i];
                
                for(char c = 'a'; c <= 'z'; c++) {
                    chars[i] = c;
                    String newWord = new String(chars);
                    
                    if(endSet.contains(newWord)) {
                        return level + 1;
                    }
                    
                    if(wordSet.contains(newWord) && !visited.contains(newWord)) {
                        nextLevel.add(newWord);
                        visited.add(newWord);
                    }
                }
                
                chars[i] = original;
            }
        }
        
        beginSet = nextLevel;
        level++;
    }
    
    return 0;
}`,
        explanation: "The BFS approach finds the shortest path by exploring all possible transformations level by level. We generate all words that differ by one character and check if they exist in the word list. The bidirectional BFS approach starts from both ends and meets in the middle, which can be more efficient for large word lists.",
        timeComplexity: "O(26 × wordLength × wordListSize)",
        spaceComplexity: "O(wordListSize)"
      },
      {
        title: "Alien Dictionary",
        difficulty: "Hard",
        rating: 4.7,
        description: "Find the order of characters in an alien language given a sorted list of words.",
        concepts: ["Topological Sort", "Graph Construction", "Cycle Detection"],
        hints: [
          "Build graph from word comparisons",
          "Use topological sort to find character order",
          "Detect cycles for invalid dictionaries",
          "Compare adjacent words to find relationships"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/alien-dictionary/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/" }
        ],
        javaSolution: `// Alien Dictionary - Topological Sort
public String alienOrder(String[] words) {
    Map<Character, Set<Character>> graph = new HashMap<>();
    Map<Character, Integer> inDegree = new HashMap<>();
    
    // Initialize graph and in-degree
    for(String word : words) {
        for(char c : word.toCharArray()) {
            graph.putIfAbsent(c, new HashSet<>());
            inDegree.putIfAbsent(c, 0);
        }
    }
    
    // Build graph from word comparisons
    for(int i = 0; i < words.length - 1; i++) {
        String word1 = words[i];
        String word2 = words[i + 1];
        
        // Check for invalid case: "abc" comes after "ab"
        if(word1.length() > word2.length() && word1.startsWith(word2)) {
            return "";
        }
        
        // Find first different character
        for(int j = 0; j < Math.min(word1.length(), word2.length()); j++) {
            char c1 = word1.charAt(j);
            char c2 = word2.charAt(j);
            
            if(c1 != c2) {
                if(!graph.get(c1).contains(c2)) {
                    graph.get(c1).add(c2);
                    inDegree.put(c2, inDegree.get(c2) + 1);
                }
                break;
            }
        }
    }
    
    // Topological sort using BFS
    Queue<Character> queue = new LinkedList<>();
    for(char c : inDegree.keySet()) {
        if(inDegree.get(c) == 0) {
            queue.offer(c);
        }
    }
    
    StringBuilder result = new StringBuilder();
    while(!queue.isEmpty()) {
        char current = queue.poll();
        result.append(current);
        
        for(char neighbor : graph.get(current)) {
            inDegree.put(neighbor, inDegree.get(neighbor) - 1);
            if(inDegree.get(neighbor) == 0) {
                queue.offer(neighbor);
            }
        }
    }
    
    // Check if all characters are included
    return result.length() == inDegree.size() ? result.toString() : "";
}

// Alternative: DFS with cycle detection
public String alienOrderDFS(String[] words) {
    Map<Character, Set<Character>> graph = new HashMap<>();
    Map<Character, Integer> visited = new HashMap<>();
    
    // Initialize graph
    for(String word : words) {
        for(char c : word.toCharArray()) {
            graph.putIfAbsent(c, new HashSet<>());
            visited.putIfAbsent(c, 0);
        }
    }
    
    // Build graph
    for(int i = 0; i < words.length - 1; i++) {
        String word1 = words[i];
        String word2 = words[i + 1];
        
        if(word1.length() > word2.length() && word1.startsWith(word2)) {
            return "";
        }
        
        for(int j = 0; j < Math.min(word1.length(), word2.length()); j++) {
            char c1 = word1.charAt(j);
            char c2 = word2.charAt(j);
            
            if(c1 != c2) {
                graph.get(c1).add(c2);
                break;
            }
        }
    }
    
    StringBuilder result = new StringBuilder();
    for(char c : graph.keySet()) {
        if(visited.get(c) == 0 && !dfs(c, graph, visited, result)) {
            return ""; // Cycle detected
        }
    }
    
    return result.reverse().toString();
}

private boolean dfs(char c, Map<Character, Set<Character>> graph,
                   Map<Character, Integer> visited, StringBuilder result) {
    if(visited.get(c) == 1) return false; // Cycle
    if(visited.get(c) == 2) return true;  // Already processed
    
    visited.put(c, 1); // Visiting
    
    for(char neighbor : graph.get(c)) {
        if(!dfs(neighbor, graph, visited, result)) {
            return false;
        }
    }
    
    visited.put(c, 2); // Visited
    result.append(c);
    return true;
}`,
        explanation: "The BFS approach uses topological sort to find the character order. We build a graph by comparing adjacent words and finding the first different character. The DFS approach uses cycle detection to ensure the graph is a DAG. Both approaches handle invalid cases like 'abc' coming after 'ab'.",
        timeComplexity: "O(C) where C is total number of characters",
        spaceComplexity: "O(1) - Fixed alphabet size"
      }
    ]
  },
  {
    id: 'sorting',
    title: 'Sorting Algorithms',
    icon: BarChart3,
    color: '#7C3AED',
    difficulty: 'Intermediate',
    estimatedTime: '4-5 hours',
    concepts: 12,
    problems: 35,
    tags: ['Algorithms', 'Comparison', 'Optimization'],
    description: 'Learn various sorting techniques and their time complexities.',
    explanation: `
      <div class="explanation-content">
        <h3>What is Sorting?</h3>
        <p>Sorting is like organizing books on a shelf by height, or arranging playing cards by value. It's the process of rearranging elements in a specific order (usually ascending or descending) to make searching and processing more efficient.</p>
        
        <div class="real-world-example">
          <h4>📚 Real-World Analogies</h4>
          <p><strong>Library Books:</strong></p>
          <ul>
            <li>Books sorted alphabetically by title for easy finding</li>
            <li>Different sections (fiction, non-fiction) like different data types</li>
            <li>Librarian uses efficient methods to maintain order</li>
          </ul>
          
          <p><strong>Restaurant Kitchen:</strong></p>
          <ul>
            <li>Orders sorted by time received (FIFO)</li>
            <li>Ingredients organized by frequency of use</li>
            <li>Efficient organization speeds up service</li>
          </ul>
        </div>

        <h3>Why is Sorting Important?</h3>
        <div class="key-concepts">
          <h4>🎯 Benefits of Sorted Data</h4>
          <ul>
            <li><strong>Faster Searching:</strong> Binary search works only on sorted data</li>
            <li><strong>Better User Experience:</strong> Sorted lists are easier to navigate</li>
            <li><strong>Algorithm Efficiency:</strong> Many algorithms work better on sorted data</li>
            <li><strong>Data Analysis:</strong> Finding patterns, medians, ranges</li>
          </ul>
        </div>

        <h3>Categories of Sorting Algorithms</h3>
        <h4>1. Comparison-based Sorts</h4>
        <p>Compare elements to determine order (Bubble, Selection, Merge, Quick Sort)</p>
        
        <h4>2. Non-comparison Sorts</h4>
        <p>Use properties of data rather than comparisons (Counting, Radix, Bucket Sort)</p>
        
        <h4>3. Stable vs Unstable</h4>
        <p>Stable sorts preserve relative order of equal elements</p>
        
        <h4>4. In-place vs Out-of-place</h4>
        <p>In-place sorts use minimal extra memory</p>

        <h3>Time Complexity Comparison</h3>
        <div class="comparison">
          <div class="comparison-grid">
            <div>
              <strong>Simple Sorts O(n²)</strong>
              <ul>
                <li>Bubble Sort: Easy to understand</li>
                <li>Selection Sort: Minimal swaps</li>
                <li>Insertion Sort: Good for small/nearly sorted</li>
              </ul>
            </div>
            <div>
              <strong>Efficient Sorts O(n log n)</strong>
              <ul>
                <li>Merge Sort: Stable, predictable</li>
                <li>Quick Sort: Fast average case</li>
                <li>Heap Sort: Consistent performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    codeExamples: [
      {
        title: 'Quick Sort Implementation',
        code: `// Quick Sort - Divide and Conquer
public void quickSort(int[] arr, int low, int high) {
    if(low < high) {
        // Partition array and get pivot index
        int pivotIndex = partition(arr, low, high);
        
        // Recursively sort elements before and after partition
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

private int partition(int[] arr, int low, int high) {
    int pivot = arr[high]; // Choose last element as pivot
    int i = low - 1; // Index of smaller element
    
    for(int j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if(arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high); // Place pivot in correct position
    return i + 1;
}

private void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}`,
        visualization: (
          <div className="sort-visual">
            <div className="array-container">
              <div className="array-item pivot">64</div>
              <div className="array-item">34</div>
              <div className="array-item">25</div>
              <div className="array-item">12</div>
              <div className="array-item">22</div>
            </div>
            <p>Quick Sort: Partition around pivot, recursively sort subarrays</p>
            <div className="sort-steps">
              <div>1. Choose pivot (last element)</div>
              <div>2. Partition: smaller left, larger right</div>
              <div>3. Recursively sort both parts</div>
            </div>
          </div>
        ),
        steps: [
          "Choose pivot element (typically last element)",
          "Partition array: elements ≤ pivot go left, > pivot go right",
          "Place pivot in its correct final position",
          "Recursively apply quicksort to left and right subarrays",
          "Base case: subarrays of size 1 or 0 are already sorted"
        ]
      }
    ],
    patterns: [
      {
        name: "Divide and Conquer",
        difficulty: "Medium",
        description: "Break problem into smaller subproblems, solve recursively, then combine results.",
        whenToUse: [
          "Merge Sort and Quick Sort",
          "Binary Search",
          "Finding maximum subarray",
          "Closest pair of points"
        ],
        example: `// Merge Sort using divide and conquer
void mergeSort(int[] arr, int left, int right) {
    if(left < right) {
        int mid = left + (right - left) / 2;
        
        // Divide: Sort first and second halves
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        
        // Conquer: Merge the sorted halves
        merge(arr, left, mid, right);
    }
}`,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)"
      }
    ],
    problemSet: [
      {
        title: "Sort Colors",
        difficulty: "Medium",
        rating: 4.2,
        description: "Sort array containing only 0s, 1s, and 2s in-place (Dutch National Flag problem).",
        concepts: ["Three Pointers", "In-place Sorting"],
        hints: [
          "Use three pointers: low, mid, high",
          "Move 0s to beginning, 2s to end",
          "Process elements with mid pointer"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sort-colors/" }
        ],
        javaSolution: `// Sort Colors - Dutch National Flag Algorithm
public void sortColors(int[] nums) {
    int low = 0, mid = 0, high = nums.length - 1;
    
    while(mid <= high) {
        if(nums[mid] == 0) {
            swap(nums, low, mid);
            low++;
            mid++;
        } else if(nums[mid] == 1) {
            mid++;
        } else {
            swap(nums, mid, high);
            high--;
        }
    }
}

private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}`,
        explanation: "Use three pointers to partition the array: low (0s), mid (1s), high (2s). Move 0s to beginning and 2s to end while keeping 1s in the middle.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Merge Sort Implementation",
        difficulty: "Medium",
        rating: 4.3,
        description: "Implement merge sort algorithm to sort an array in O(n log n) time.",
        concepts: ["Divide and Conquer", "Recursion", "Merge Algorithm"],
        hints: [
          "Divide array into two halves recursively",
          "Merge sorted halves using two pointers",
          "Use auxiliary array for merging",
          "Base case: single element is sorted"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sort-an-array/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/merge-sort/" }
        ],
        javaSolution: `// Merge Sort Implementation
public void mergeSort(int[] arr) {
    if(arr.length <= 1) return;
    
    int mid = arr.length / 2;
    int[] left = Arrays.copyOfRange(arr, 0, mid);
    int[] right = Arrays.copyOfRange(arr, mid, arr.length);
    
    mergeSort(left);
    mergeSort(right);
    merge(arr, left, right);
}

private void merge(int[] arr, int[] left, int[] right) {
    int i = 0, j = 0, k = 0;
    
    while(i < left.length && j < right.length) {
        if(left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }
    
    while(i < left.length) {
        arr[k++] = left[i++];
    }
    
    while(j < right.length) {
        arr[k++] = right[j++];
    }
}

// In-place merge sort (more space efficient)
public void mergeSortInPlace(int[] arr, int left, int right) {
    if(left < right) {
        int mid = left + (right - left) / 2;
        mergeSortInPlace(arr, left, mid);
        mergeSortInPlace(arr, mid + 1, right);
        mergeInPlace(arr, left, mid, right);
    }
}

private void mergeInPlace(int[] arr, int left, int mid, int right) {
    int[] temp = new int[right - left + 1];
    int i = left, j = mid + 1, k = 0;
    
    while(i <= mid && j <= right) {
        if(arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    
    while(i <= mid) temp[k++] = arr[i++];
    while(j <= right) temp[k++] = arr[j++];
    
    for(i = 0; i < temp.length; i++) {
        arr[left + i] = temp[i];
    }
}`,
        explanation: "Merge sort uses divide-and-conquer strategy. Recursively divide array into halves, sort each half, then merge sorted halves. Guarantees O(n log n) time complexity.",
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)"
      },
      {
        title: "Quick Sort Implementation",
        difficulty: "Medium",
        rating: 4.4,
        description: "Implement quick sort algorithm with efficient partitioning strategy.",
        concepts: ["Divide and Conquer", "Partitioning", "Pivot Selection"],
        hints: [
          "Choose pivot element (first, last, or median)",
          "Partition array around pivot",
          "Recursively sort left and right partitions",
          "Handle duplicate elements properly"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sort-an-array/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/quick-sort/" }
        ],
        javaSolution: `// Quick Sort Implementation
public void quickSort(int[] arr) {
    quickSortHelper(arr, 0, arr.length - 1);
}

private void quickSortHelper(int[] arr, int low, int high) {
    if(low < high) {
        int pivotIndex = partition(arr, low, high);
        quickSortHelper(arr, low, pivotIndex - 1);
        quickSortHelper(arr, pivotIndex + 1, high);
    }
}

private int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for(int j = low; j < high; j++) {
        if(arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    
    swap(arr, i + 1, high);
    return i + 1;
}

private void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Quick sort with random pivot (better for sorted arrays)
public void quickSortRandom(int[] arr) {
    quickSortRandomHelper(arr, 0, arr.length - 1);
}

private void quickSortRandomHelper(int[] arr, int low, int high) {
    if(low < high) {
        int pivotIndex = partitionRandom(arr, low, high);
        quickSortRandomHelper(arr, low, pivotIndex - 1);
        quickSortRandomHelper(arr, pivotIndex + 1, high);
    }
}

private int partitionRandom(int[] arr, int low, int high) {
    int randomIndex = low + (int)(Math.random() * (high - low + 1));
    swap(arr, randomIndex, high);
    return partition(arr, low, high);
}`,
        explanation: "Quick sort uses partitioning to place pivot in correct position, then recursively sorts left and right partitions. Random pivot selection improves performance on sorted arrays.",
        timeComplexity: "O(n log n) average, O(n²) worst case",
        spaceComplexity: "O(log n) average"
      },
      {
        title: "Heap Sort Implementation",
        difficulty: "Hard",
        rating: 4.5,
        description: "Implement heap sort using binary heap data structure.",
        concepts: ["Heap Data Structure", "In-place Sorting", "Heapify"],
        hints: [
          "Build max heap from array",
          "Extract max element repeatedly",
          "Use heapify to maintain heap property",
          "Sort in-place using heap operations"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sort-an-array/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/heap-sort/" }
        ],
        javaSolution: `// Heap Sort Implementation
public void heapSort(int[] arr) {
    int n = arr.length;
    
    // Build max heap
    for(int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    // Extract elements from heap one by one
    for(int i = n - 1; i > 0; i--) {
        // Move current root to end
        swap(arr, 0, i);
        
        // Call heapify on reduced heap
        heapify(arr, i, 0);
    }
}

private void heapify(int[] arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    
    // If left child is larger than root
    if(left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    // If right child is larger than largest so far
    if(right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    // If largest is not root
    if(largest != i) {
        swap(arr, i, largest);
        heapify(arr, n, largest);
    }
}

private void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Priority Queue based heap sort
public void heapSortPQ(int[] arr) {
    PriorityQueue<Integer> pq = new PriorityQueue<>();
    
    // Add all elements to priority queue
    for(int num : arr) {
        pq.offer(num);
    }
    
    // Extract elements in sorted order
    for(int i = 0; i < arr.length; i++) {
        arr[i] = pq.poll();
    }
}`,
        explanation: "Heap sort uses binary heap to sort elements. Build max heap, then repeatedly extract maximum element. Provides consistent O(n log n) performance.",
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(1) - In-place"
      },
      {
        title: "Counting Sort Implementation",
        difficulty: "Medium",
        rating: 4.1,
        description: "Implement counting sort for integers with known range.",
        concepts: ["Non-comparison Sort", "Counting", "Range-based"],
        hints: [
          "Count frequency of each element",
          "Calculate cumulative counts",
          "Place elements in correct positions",
          "Useful for small range integers"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sort-an-array/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/counting-sort/" }
        ],
        javaSolution: `// Counting Sort Implementation
public void countingSort(int[] arr) {
    if(arr.length == 0) return;
    
    // Find range of elements
    int max = Arrays.stream(arr).max().getAsInt();
    int min = Arrays.stream(arr).min().getAsInt();
    int range = max - min + 1;
    
    int[] count = new int[range];
    int[] output = new int[arr.length];
    
    // Count frequency of each element
    for(int num : arr) {
        count[num - min]++;
    }
    
    // Calculate cumulative count
    for(int i = 1; i < range; i++) {
        count[i] += count[i - 1];
    }
    
    // Place elements in correct positions
    for(int i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    
    // Copy back to original array
    for(int i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

// Counting sort for characters
public void countingSortChars(char[] arr) {
    int[] count = new int[256];
    
    // Count frequency
    for(char c : arr) {
        count[c]++;
    }
    
    // Reconstruct array
    int index = 0;
    for(int i = 0; i < 256; i++) {
        while(count[i] > 0) {
            arr[index++] = (char)i;
            count[i]--;
        }
    }
}`,
        explanation: "Counting sort works by counting frequency of each element, then placing elements in correct positions. Excellent for small range integers or characters.",
        timeComplexity: "O(n + k) where k is range",
        spaceComplexity: "O(n + k)"
      },
      {
        title: "Radix Sort Implementation",
        difficulty: "Hard",
        rating: 4.3,
        description: "Implement radix sort for integers using counting sort as subroutine.",
        concepts: ["Non-comparison Sort", "Digit-based", "Stable Sort"],
        hints: [
          "Sort by least significant digit first",
          "Use counting sort for each digit",
          "Process digits from right to left",
          "Maintain stability during sorting"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sort-an-array/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/radix-sort/" }
        ],
        javaSolution: `// Radix Sort Implementation
public void radixSort(int[] arr) {
    if(arr.length == 0) return;
    
    // Find maximum number to know number of digits
    int max = Arrays.stream(arr).max().getAsInt();
    
    // Do counting sort for every digit
    for(int exp = 1; max / exp > 0; exp *= 10) {
        countingSortByDigit(arr, exp);
    }
}

private void countingSortByDigit(int[] arr, int exp) {
    int n = arr.length;
    int[] output = new int[n];
    int[] count = new int[10];
    
    // Count frequency of digits at current position
    for(int i = 0; i < n; i++) {
        count[(arr[i] / exp) % 10]++;
    }
    
    // Calculate cumulative count
    for(int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    
    // Build output array
    for(int i = n - 1; i >= 0; i--) {
        int digit = (arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }
    
    // Copy back to original array
    for(int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

// Radix sort for strings
public void radixSortStrings(String[] arr) {
    int maxLength = Arrays.stream(arr).mapToInt(String::length).max().getAsInt();
    
    for(int i = maxLength - 1; i >= 0; i--) {
        countingSortByChar(arr, i);
    }
}

private void countingSortByChar(String[] arr, int pos) {
    int n = arr.length;
    String[] output = new String[n];
    int[] count = new int[256];
    
    // Count frequency
    for(String s : arr) {
        char c = pos < s.length() ? s.charAt(pos) : 0;
        count[c]++;
    }
    
    // Cumulative count
    for(int i = 1; i < 256; i++) {
        count[i] += count[i - 1];
    }
    
    // Build output
    for(int i = n - 1; i >= 0; i--) {
        char c = pos < arr[i].length() ? arr[i].charAt(pos) : 0;
        output[count[c] - 1] = arr[i];
        count[c]--;
    }
    
    // Copy back
    for(int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}`,
        explanation: "Radix sort processes digits from least significant to most significant, using counting sort for each digit position. Excellent for integers and strings.",
        timeComplexity: "O(d * (n + k)) where d is number of digits",
        spaceComplexity: "O(n + k)"
      },
      {
        title: "Bubble Sort Implementation",
        difficulty: "Easy",
        rating: 3.8,
        description: "Implement bubble sort algorithm with optimization.",
        concepts: ["Comparison Sort", "Adjacent Swapping", "Optimization"],
        hints: [
          "Compare adjacent elements and swap if needed",
          "Use flag to detect if array is sorted",
          "Reduce range in each pass",
          "Stop early if no swaps occur"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sort-an-array/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/bubble-sort/" }
        ],
        javaSolution: `// Bubble Sort Implementation
public void bubbleSort(int[] arr) {
    int n = arr.length;
    boolean swapped;
    
    for(int i = 0; i < n - 1; i++) {
        swapped = false;
        
        for(int j = 0; j < n - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = true;
            }
        }
        
        // If no swapping occurred, array is sorted
        if(!swapped) break;
    }
}

private void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Optimized bubble sort with range tracking
public void bubbleSortOptimized(int[] arr) {
    int n = arr.length;
    int lastSwap = n - 1;
    
    while(lastSwap > 0) {
        int currentSwap = 0;
        
        for(int i = 0; i < lastSwap; i++) {
            if(arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                currentSwap = i;
            }
        }
        
        lastSwap = currentSwap;
    }
}`,
        explanation: "Bubble sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in wrong order. Simple but inefficient for large datasets.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Selection Sort Implementation",
        difficulty: "Easy",
        rating: 3.7,
        description: "Implement selection sort algorithm.",
        concepts: ["Comparison Sort", "Minimum Finding", "In-place"],
        hints: [
          "Find minimum element in unsorted portion",
          "Swap with first element of unsorted portion",
          "Reduce unsorted portion size",
          "Minimal number of swaps"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sort-an-array/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/selection-sort/" }
        ],
        javaSolution: `// Selection Sort Implementation
public void selectionSort(int[] arr) {
    int n = arr.length;
    
    for(int i = 0; i < n - 1; i++) {
        int minIndex = i;
        
        // Find minimum element in unsorted portion
        for(int j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap minimum element with first element of unsorted portion
        if(minIndex != i) {
            swap(arr, i, minIndex);
        }
    }
}

private void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Selection sort with both min and max
public void selectionSortOptimized(int[] arr) {
    int n = arr.length;
    int left = 0, right = n - 1;
    
    while(left < right) {
        int minIndex = left, maxIndex = right;
        
        // Find min and max in current range
        for(int i = left; i <= right; i++) {
            if(arr[i] < arr[minIndex]) minIndex = i;
            if(arr[i] > arr[maxIndex]) maxIndex = i;
        }
        
        // Place min at left, max at right
        if(minIndex != left) swap(arr, minIndex, left);
        if(maxIndex != right) {
            if(maxIndex == left) maxIndex = minIndex;
            swap(arr, maxIndex, right);
        }
        
        left++;
        right--;
    }
}`,
        explanation: "Selection sort finds the minimum element in unsorted portion and places it at the beginning. Simple algorithm with minimal swaps but O(n²) complexity.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Insertion Sort Implementation",
        difficulty: "Easy",
        rating: 3.9,
        description: "Implement insertion sort algorithm.",
        concepts: ["Comparison Sort", "In-place", "Adaptive"],
        hints: [
          "Build sorted array one element at a time",
          "Insert each element into correct position",
          "Shift elements to make space",
          "Good for small arrays or nearly sorted data"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sort-an-array/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/insertion-sort/" }
        ],
        javaSolution: `// Insertion Sort Implementation
public void insertionSort(int[] arr) {
    int n = arr.length;
    
    for(int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        
        // Move elements greater than key one position ahead
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
}

// Binary insertion sort (uses binary search)
public void binaryInsertionSort(int[] arr) {
    int n = arr.length;
    
    for(int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        
        // Find position using binary search
        int pos = binarySearch(arr, 0, j, key);
        
        // Shift elements to make space
        while(j >= pos) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
}

private int binarySearch(int[] arr, int left, int right, int key) {
    while(left <= right) {
        int mid = left + (right - left) / 2;
        if(arr[mid] <= key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}`,
        explanation: "Insertion sort builds the final sorted array one item at a time. It's adaptive and works well for small data sets or nearly sorted arrays.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
      },
      {
        title: "Bucket Sort Implementation",
        difficulty: "Medium",
        rating: 4.0,
        description: "Implement bucket sort for uniformly distributed data.",
        concepts: ["Non-comparison Sort", "Bucket Distribution", "Uniform Data"],
        hints: [
          "Create buckets based on value range",
          "Distribute elements into buckets",
          "Sort individual buckets",
          "Concatenate sorted buckets"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sort-an-array/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/bucket-sort-2/" }
        ],
        javaSolution: `// Bucket Sort Implementation
public void bucketSort(double[] arr) {
    int n = arr.length;
    if(n <= 0) return;
    
    // Create buckets
    List<Double>[] buckets = new List[n];
    for(int i = 0; i < n; i++) {
        buckets[i] = new ArrayList<>();
    }
    
    // Distribute elements into buckets
    for(double num : arr) {
        int bucketIndex = (int)(n * num);
        buckets[bucketIndex].add(num);
    }
    
    // Sort individual buckets
    for(int i = 0; i < n; i++) {
        Collections.sort(buckets[i]);
    }
    
    // Concatenate buckets
    int index = 0;
    for(int i = 0; i < n; i++) {
        for(double num : buckets[i]) {
            arr[index++] = num;
        }
    }
}

// Bucket sort for integers
public void bucketSortInt(int[] arr) {
    int n = arr.length;
    if(n <= 0) return;
    
    // Find range
    int max = Arrays.stream(arr).max().getAsInt();
    int min = Arrays.stream(arr).min().getAsInt();
    int range = max - min + 1;
    
    // Create buckets
    List<Integer>[] buckets = new List[n];
    for(int i = 0; i < n; i++) {
        buckets[i] = new ArrayList<>();
    }
    
    // Distribute elements
    for(int num : arr) {
        int bucketIndex = ((num - min) * (n - 1)) / range;
        buckets[bucketIndex].add(num);
    }
    
    // Sort buckets
    for(int i = 0; i < n; i++) {
        Collections.sort(buckets[i]);
    }
    
    // Concatenate
    int index = 0;
    for(int i = 0; i < n; i++) {
        for(int num : buckets[i]) {
            arr[index++] = num;
        }
    }
}`,
        explanation: "Bucket sort distributes elements into buckets, sorts each bucket, then concatenates them. Works best with uniformly distributed data.",
        timeComplexity: "O(n + k) average case",
        spaceComplexity: "O(n + k)"
      },
      {
        title: "Shell Sort Implementation",
        difficulty: "Medium",
        rating: 4.1,
        description: "Implement shell sort with different gap sequences.",
        concepts: ["Comparison Sort", "Gap Sequence", "Insertion Sort Variant"],
        hints: [
          "Use gap sequence to compare distant elements",
          "Reduce gap in each iteration",
          "Use insertion sort with gaps",
          "Choose efficient gap sequence"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sort-an-array/" },
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/shell-sort/" }
        ],
        javaSolution: `// Shell Sort Implementation
public void shellSort(int[] arr) {
    int n = arr.length;
    
    // Start with large gap, reduce it
    for(int gap = n / 2; gap > 0; gap /= 2) {
        // Do insertion sort for elements at gap intervals
        for(int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            
            for(j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            arr[j] = temp;
        }
    }
}

// Shell sort with Knuth's sequence
public void shellSortKnuth(int[] arr) {
    int n = arr.length;
    
    // Generate Knuth's sequence: 1, 4, 13, 40, 121, ...
    int gap = 1;
    while(gap < n / 3) {
        gap = 3 * gap + 1;
    }
    
    while(gap >= 1) {
        for(int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            
            for(j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            arr[j] = temp;
        }
        
        gap /= 3;
    }
}

// Shell sort with Sedgewick's sequence
public void shellSortSedgewick(int[] arr) {
    int n = arr.length;
    
    // Generate Sedgewick's sequence
    List<Integer> gaps = new ArrayList<>();
    int k = 0;
    while(true) {
        int gap1 = 9 * (1 << 2 * k) - 9 * (1 << k) + 1;
        int gap2 = (1 << 2 * k + 2) - 3 * (1 << k + 1) + 1;
        
        if(gap1 < n) gaps.add(gap1);
        if(gap2 < n) gaps.add(gap2);
        
        if(gap1 >= n && gap2 >= n) break;
        k++;
    }
    
    Collections.reverse(gaps);
    
    for(int gap : gaps) {
        for(int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            
            for(j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            arr[j] = temp;
        }
    }
}`,
        explanation: "Shell sort is an optimization of insertion sort that allows exchange of items that are far apart. Uses gap sequences to improve performance.",
        timeComplexity: "O(n^1.25) to O(n^1.5)",
        spaceComplexity: "O(1)"
      }
    ]
  },
  {
    id: 'searching',
    title: 'Searching Algorithms',
    icon: Search,
    color: '#0891B2',
    difficulty: 'Beginner',
    estimatedTime: '3-4 hours',
    concepts: 8,
    problems: 25,
    tags: ['Binary Search', 'Linear', 'Optimization'],
    description: 'Master efficient searching techniques for finding elements in data structures.',
    explanation: `
      <div class="explanation-content">
        <h3>What is Searching?</h3>
        <p>Searching is like looking for a specific book in a library or finding a contact in your phone. It's the process of finding a particular element or checking if it exists in a collection of data. The efficiency of searching can make the difference between instant results and waiting forever.</p>
        
        <div class="real-world-example">
          <h4>🔍 Real-World Analogies</h4>
          <p><strong>Phone Book Search:</strong></p>
          <ul>
            <li>Linear Search: Check every name from A to Z</li>
            <li>Binary Search: Open to middle, eliminate half based on alphabetical order</li>
            <li>Hash Search: Direct lookup using phone number index</li>
          </ul>
          
          <p><strong>Library Book Search:</strong></p>
          <ul>
            <li>Unsorted shelf: Check every book (linear search)</li>
            <li>Sorted by title: Use alphabetical order to narrow down (binary search)</li>
            <li>Card catalog: Direct reference system (hash table)</li>
          </ul>
        </div>

        <h3>Types of Searching</h3>
        <div class="key-concepts">
          <h4>🎯 Search Algorithm Categories</h4>
          <ul>
            <li><strong>Linear Search:</strong> Check every element one by one</li>
            <li><strong>Binary Search:</strong> Divide and conquer on sorted data</li>
            <li><strong>Hash-based Search:</strong> Direct access using hash functions</li>
            <li><strong>Tree-based Search:</strong> Navigate tree structure efficiently</li>
          </ul>
        </div>

        <h3>When to Use Each Algorithm</h3>
        <h4>Linear Search</h4>
        <ul>
          <li>Unsorted data</li>
          <li>Small datasets</li>
          <li>Simple implementation needed</li>
        </ul>
        
        <h4>Binary Search</h4>
        <ul>
          <li>Sorted data</li>
          <li>Large datasets</li>
          <li>Need O(log n) performance</li>
        </ul>
        
        <h4>Hash-based Search</h4>
        <ul>
          <li>Need O(1) average case</li>
          <li>Exact match searches</li>
          <li>Memory is not a constraint</li>
        </ul>

        <h3>Binary Search Deep Dive</h3>
        <p>Binary search is like the "guess my number" game where you always guess the middle value. If your guess is too high, you eliminate the upper half; if too low, eliminate the lower half. This halving process continues until you find the target.</p>
        
        <div class="comparison">
          <h4>Search Algorithm Comparison</h4>
          <div class="comparison-grid">
            <div>
              <strong>Linear Search</strong>
              <ul>
                <li>Time: O(n)</li>
                <li>Space: O(1)</li>
                <li>Works on unsorted data</li>
                <li>Simple to implement</li>
              </ul>
            </div>
            <div>
              <strong>Binary Search</strong>
              <ul>
                <li>Time: O(log n)</li>
                <li>Space: O(1) iterative</li>
                <li>Requires sorted data</li>
                <li>Much faster for large datasets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    codeExamples: [
      {
        title: 'Binary Search Implementation',
        code: `// Iterative Binary Search
public int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    
    while(left <= right) {
        int mid = left + (right - left) / 2; // Avoid overflow
        
        if(arr[mid] == target) {
            return mid; // Found target
        }
        else if(arr[mid] < target) {
            left = mid + 1; // Search right half
        }
        else {
            right = mid - 1; // Search left half
        }
    }
    
    return -1; // Target not found
}

// Recursive Binary Search
public int binarySearchRecursive(int[] arr, int target, int left, int right) {
    if(left > right) {
        return -1; // Base case: not found
    }
    
    int mid = left + (right - left) / 2;
    
    if(arr[mid] == target) {
        return mid;
    }
    else if(arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    }
    else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}`,
        visualization: (
          <div className="search-visual">
            <div className="array-container">
              {[2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78].map((value, index) => (
                <div key={index} className={`array-item ${index === 5 ? 'target' : ''}`}>
                  {value}
                </div>
              ))}
            </div>
            <div className="search-pointers">
              <span>Left</span>
              <span>Mid</span>
              <span>Right</span>
            </div>
            <p>Binary Search: Eliminate half the search space in each iteration</p>
          </div>
        ),
        steps: [
          "Initialize left and right pointers to array bounds",
          "Calculate middle index (avoid integer overflow)",
          "Compare middle element with target value",
          "If found, return index; if target is smaller, search left half",
          "If target is larger, search right half; repeat until found or exhausted"
        ]
      }
    ],
    patterns: [
      {
        name: "Binary Search Variations",
        difficulty: "Medium",
        description: "Modify binary search to find first/last occurrence, insertion point, or search in rotated arrays.",
        whenToUse: [
          "Finding first/last occurrence of element",
          "Search in rotated sorted array",
          "Finding insertion position",
          "Peak element problems"
        ],
        example: `// Find first occurrence of target
int findFirst(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    int result = -1;
    
    while(left <= right) {
        int mid = left + (right - left) / 2;
        
        if(arr[mid] == target) {
            result = mid;
            right = mid - 1; // Continue searching left
        }
        else if(arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return result;
}`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
      }
    ],
    problemSet: [
      {
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        rating: 4.1,
        description: "Search for target in a rotated sorted array using modified binary search.",
        concepts: ["Binary Search", "Array Rotation"],
        hints: [
          "One half of array is always sorted",
          "Determine which half is sorted first",
          "Check if target lies in sorted half"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" }
        ]
      }
    ]
  },
  {
    id: 'hashing',
    title: 'Hashing',
    icon: Hash,
    color: '#DB2777',
    difficulty: 'Intermediate',
    estimatedTime: '4-5 hours',
    concepts: 10,
    problems: 30,
    tags: ['Hash Tables', 'Maps', 'Fast Lookup'],
    description: 'Learn hash tables, hash functions, and collision resolution techniques.',
    explanation: `
      <div class="explanation-content">
        <h3>What is Hashing?</h3>
        <p>Hashing is like having a magical filing cabinet where you can instantly find any document by its name. Instead of searching through folders, you use a special formula (hash function) that tells you exactly which drawer contains your document. This makes finding, adding, and removing items incredibly fast.</p>
        
        <div class="real-world-example">
          <h4>🗃️ Real-World Analogies</h4>
          <p><strong>Library Card Catalog:</strong></p>
          <ul>
            <li>Book title → Card drawer number (hash function)</li>
            <li>Each drawer contains cards for books (hash table)</li>
            <li>Multiple books might map to same drawer (collision)</li>
            <li>Use additional organization within drawer (collision resolution)</li>
          </ul>
          
          <p><strong>Restaurant Table Assignment:</strong></p>
          <ul>
            <li>Party size → Table number calculation</li>
            <li>Host uses simple rule: "Party of N sits at table N%10"</li>
            <li>If table occupied, find next available (collision handling)</li>
          </ul>
        </div>

        <h3>Core Components</h3>
        <div class="key-concepts">
          <h4>🔧 Hash Table Elements</h4>
          <ul>
            <li><strong>Hash Function:</strong> Converts key to array index</li>
            <li><strong>Hash Table:</strong> Array that stores key-value pairs</li>
            <li><strong>Collision:</strong> When two keys map to same index</li>
            <li><strong>Load Factor:</strong> Ratio of filled slots to total slots</li>
          </ul>
        </div>

        <h3>Hash Functions</h3>
        <h4>Good Hash Function Properties:</h4>
        <ul>
          <li><strong>Deterministic:</strong> Same input always gives same output</li>
          <li><strong>Uniform Distribution:</strong> Spreads keys evenly across table</li>
          <li><strong>Fast Computation:</strong> Quick to calculate</li>
          <li><strong>Avalanche Effect:</strong> Small input change causes big output change</li>
        </ul>

        <h3>Collision Resolution</h3>
        <h4>1. Chaining (Separate Chaining)</h4>
        <p>Each table slot contains a linked list of all elements that hash to that index.</p>
        
        <h4>2. Open Addressing</h4>
        <ul>
          <li><strong>Linear Probing:</strong> Check next slot if occupied</li>
          <li><strong>Quadratic Probing:</strong> Check slots at quadratic intervals</li>
          <li><strong>Double Hashing:</strong> Use second hash function for probing</li>
        </ul>

        <h3>Applications</h3>
        <ul>
          <li><strong>Database Indexing:</strong> Fast record lookup</li>
          <li><strong>Caching:</strong> Store frequently accessed data</li>
          <li><strong>Password Storage:</strong> Secure password verification</li>
          <li><strong>Compiler Symbol Tables:</strong> Variable and function lookup</li>
          <li><strong>Blockchain:</strong> Proof of work and data integrity</li>
        </ul>
      </div>
    `,
    codeExamples: [
      {
        title: 'Hash Table with Chaining',
        code: `// Hash Table implementation using chaining
class HashTable {
    private static final int DEFAULT_CAPACITY = 16;
    private LinkedList<Entry>[] table;
    private int size;
    
    static class Entry {
        String key;
        int value;
        
        Entry(String key, int value) {
            this.key = key;
            this.value = value;
        }
    }
    
    public HashTable() {
        table = new LinkedList[DEFAULT_CAPACITY];
        for(int i = 0; i < DEFAULT_CAPACITY; i++) {
            table[i] = new LinkedList<>();
        }
        size = 0;
    }
    
    // Simple hash function
    private int hash(String key) {
        int hash = 0;
        for(char c : key.toCharArray()) {
            hash = (hash * 31 + c) % table.length;
        }
        return Math.abs(hash);
    }
    
    // Insert key-value pair
    public void put(String key, int value) {
        int index = hash(key);
        LinkedList<Entry> chain = table[index];
        
        // Check if key already exists
        for(Entry entry : chain) {
            if(entry.key.equals(key)) {
                entry.value = value; // Update existing
                return;
            }
        }
        
        // Add new entry
        chain.add(new Entry(key, value));
        size++;
    }
    
    // Get value by key
    public Integer get(String key) {
        int index = hash(key);
        LinkedList<Entry> chain = table[index];
        
        for(Entry entry : chain) {
            if(entry.key.equals(key)) {
                return entry.value;
            }
        }
        return null; // Key not found
    }
}`,
        visualization: (
          <div className="hash-visual">
            <div className="hash-table">
              <div className="hash-slot">
                <div className="slot-index">0</div>
                <div className="chain">["apple"→5]</div>
              </div>
              <div className="hash-slot">
                <div className="slot-index">1</div>
                <div className="chain">["banana"→3] → ["cherry"→8]</div>
              </div>
              <div className="hash-slot">
                <div className="slot-index">2</div>
                <div className="chain">[]</div>
              </div>
            </div>
            <p>Hash Table with Chaining: Collisions handled by linked lists</p>
          </div>
        ),
        steps: [
          "Calculate hash value for key using hash function",
          "Use hash value as index into hash table array",
          "If slot empty, create new linked list with entry",
          "If collision occurs, add to existing chain",
          "For retrieval, hash key and search through chain"
        ]
      }
    ],
    patterns: [
      {
        name: "Hash Map for Frequency Counting",
        difficulty: "Easy",
        description: "Use hash map to count occurrences of elements efficiently.",
        whenToUse: [
          "Counting character/word frequencies",
          "Finding duplicates",
          "Anagram detection",
          "Most frequent elements"
        ],
        example: `// Count character frequencies
Map<Character, Integer> countFrequency(String s) {
    Map<Character, Integer> freq = new HashMap<>();
    
    for(char c : s.toCharArray()) {
        freq.put(c, freq.getOrDefault(c, 0) + 1);
    }
    
    return freq;
}`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(k) where k is unique elements"
      }
    ],
    problemSet: [
      {
        title: "Two Sum",
        difficulty: "Easy",
        rating: 4.2,
        description: "Find two numbers that add up to target using hash map for O(n) solution.",
        concepts: ["Hash Map", "Complement Search"],
        hints: [
          "Store complement of each number in hash map",
          "Check if target - current exists in map",
          "Return indices when found"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/two-sum/" }
        ]
      }
    ]
  },
  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming',
    icon: Zap,
    color: '#EA580C',
    difficulty: 'Advanced',
    estimatedTime: '8-12 hours',
    concepts: 18,
    problems: 50,
    tags: ['Optimization', 'Memoization', 'Recursion'],
    description: 'Master optimization technique using memoization and tabulation.',
    explanation: `
      <div class="explanation-content">
        <h3>What is Dynamic Programming?</h3>
        <p>Dynamic Programming (DP) is like solving a jigsaw puzzle by remembering which pieces you've already tried. Instead of repeatedly attempting the same piece combinations, you keep notes about what works and what doesn't. This "memory" helps you solve complex problems by breaking them into simpler subproblems and reusing solutions.</p>
        
        <div class="real-world-example">
          <h4>🧩 Real-World Analogies</h4>
          <p><strong>Climbing Stairs with Memory:</strong></p>
          <ul>
            <li>You can climb 1 or 2 steps at a time</li>
            <li>Instead of recalculating ways to reach each step</li>
            <li>Remember: ways(n) = ways(n-1) + ways(n-2)</li>
            <li>Build solution from bottom up or memoize top down</li>
          </ul>
          
          <p><strong>Recipe Optimization:</strong></p>
          <ul>
            <li>Making multiple dishes with shared ingredients</li>
            <li>Remember cost of common ingredient combinations</li>
            <li>Reuse calculations instead of starting from scratch</li>
            <li>Find optimal ingredient purchasing strategy</li>
          </ul>
        </div>

        <h3>When to Use Dynamic Programming</h3>
        <div class="key-concepts">
          <h4>🎯 DP Problem Characteristics</h4>
          <ul>
            <li><strong>Optimal Substructure:</strong> Optimal solution contains optimal solutions to subproblems</li>
            <li><strong>Overlapping Subproblems:</strong> Same subproblems solved multiple times</li>
            <li><strong>No Aftereffects:</strong> Future decisions don't affect past choices</li>
          </ul>
        </div>

        <h3>DP Approaches</h3>
        <h4>1. Memoization (Top-Down)</h4>
        <p>Start with original problem, break into subproblems, store results in memory (usually recursion + cache).</p>
        
        <h4>2. Tabulation (Bottom-Up)</h4>
        <p>Start with smallest subproblems, build up to original problem using iterative approach.</p>

        <h3>Common DP Patterns</h3>
        <ul>
          <li><strong>Linear DP:</strong> 1D problems (Fibonacci, climbing stairs)</li>
          <li><strong>Grid DP:</strong> 2D problems (unique paths, minimum path sum)</li>
          <li><strong>Interval DP:</strong> Problems on ranges (matrix chain multiplication)</li>
          <li><strong>Tree DP:</strong> Problems on trees (diameter, maximum path sum)</li>
          <li><strong>Bitmask DP:</strong> Problems with subsets (traveling salesman)</li>
        </ul>

        <h3>Steps to Solve DP Problems</h3>
        <ol>
          <li><strong>Identify:</strong> Check for optimal substructure and overlapping subproblems</li>
          <li><strong>Define State:</strong> What parameters uniquely identify a subproblem?</li>
          <li><strong>Write Recurrence:</strong> How does current state relate to previous states?</li>
          <li><strong>Base Cases:</strong> What are the simplest cases?</li>
          <li><strong>Implement:</strong> Choose memoization or tabulation</li>
          <li><strong>Optimize:</strong> Reduce space complexity if possible</li>
        </ol>
      </div>
    `,
    codeExamples: [
      {
        title: 'Fibonacci with Memoization',
        code: `// Fibonacci using memoization (top-down DP)
class FibonacciDP {
    private Map<Integer, Long> memo = new HashMap<>();
    
    public long fibonacci(int n) {
        if(n <= 1) return n;
        
        if(memo.containsKey(n)) {
            return memo.get(n); // Return cached result
        }
        
        long result = fibonacci(n-1) + fibonacci(n-2);
        memo.put(n, result); // Cache the result
        return result;
    }
}

// Fibonacci using tabulation (bottom-up DP)
public long fibonacciTabulation(int n) {
    if(n <= 1) return n;
    
    long[] dp = new long[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    
    for(int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}

// Space-optimized version
public long fibonacciOptimized(int n) {
    if(n <= 1) return n;
    
    long prev2 = 0, prev1 = 1;
    
    for(int i = 2; i <= n; i++) {
        long current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}`,
        visualization: (
          <div className="dp-visual">
            <div className="dp-table">
              <div className="dp-cell">F(0)=0</div>
              <div className="dp-cell">F(1)=1</div>
              <div className="dp-cell">F(2)=1</div>
              <div className="dp-cell">F(3)=2</div>
              <div className="dp-cell">F(4)=3</div>
              <div className="dp-cell">F(5)=5</div>
            </div>
            <p>DP Table: Build solution incrementally, reuse previous results</p>
            <div className="complexity-info">
              <div>Without DP: O(2^n) - exponential</div>
              <div>With DP: O(n) - linear</div>
            </div>
          </div>
        ),
        steps: [
          "Identify base cases: F(0)=0, F(1)=1",
          "Define recurrence: F(n) = F(n-1) + F(n-2)",
          "Memoization: Cache results to avoid recomputation",
          "Tabulation: Build table from bottom up",
          "Space optimization: Only keep last two values"
        ]
      }
    ],
    patterns: [
      {
        name: "Knapsack Pattern",
        difficulty: "Hard",
        description: "Choose items with maximum value while staying within weight/capacity constraint.",
        whenToUse: [
          "0/1 Knapsack problem",
          "Subset sum problems",
          "Partition problems",
          "Resource allocation"
        ],
        example: `// 0/1 Knapsack problem
int knapsack(int[] weights, int[] values, int capacity) {
    int n = weights.length;
    int[][] dp = new int[n + 1][capacity + 1];
    
    for(int i = 1; i <= n; i++) {
        for(int w = 1; w <= capacity; w++) {
            if(weights[i-1] <= w) {
                // Max of including or excluding current item
                dp[i][w] = Math.max(
                    values[i-1] + dp[i-1][w - weights[i-1]], // Include
                    dp[i-1][w] // Exclude
                );
            } else {
                dp[i][w] = dp[i-1][w]; // Can't include
            }
        }
    }
    return dp[n][capacity];
}`,
        timeComplexity: "O(n * capacity)",
        spaceComplexity: "O(n * capacity)"
      }
    ],
    problemSet: [
      {
        title: "Climbing Stairs",
        difficulty: "Easy",
        rating: 4.3,
        description: "Count number of ways to climb n stairs taking 1 or 2 steps at a time.",
        concepts: ["Dynamic Programming", "Fibonacci Sequence"],
        hints: [
          "Similar to Fibonacci sequence",
          "ways(n) = ways(n-1) + ways(n-2)",
          "Base cases: ways(1)=1, ways(2)=2"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/climbing-stairs/" }
        ]
      }
    ]
  },
  {
    id: 'greedy',
    title: 'Greedy Algorithms',
    icon: Target,
    color: '#16A34A',
    difficulty: 'Intermediate',
    estimatedTime: '4-6 hours',
    concepts: 12,
    problems: 35,
    tags: ['Optimization', 'Local Choice', 'Algorithms'],
    description: 'Learn algorithms that make locally optimal choices for global optimization.',
    explanation: `
      <div class="explanation-content">
        <h3>What are Greedy Algorithms?</h3>
        <p>Greedy algorithms are like a hungry person at a buffet who always picks the most appealing dish available at the moment, without considering what might come later. These algorithms make the locally optimal choice at each step, hoping to find a global optimum. Sometimes this works perfectly, sometimes it doesn't!</p>
        
        <div class="real-world-example">
          <h4>🍽️ Real-World Analogies</h4>
          <p><strong>Making Change (Cashier):</strong></p>
          <ul>
            <li>Always give largest denomination possible</li>
            <li>For $0.67 change: give quarter (25¢), quarter (50¢), dime (60¢), nickel (65¢), penny (66¢), penny (67¢)</li>
            <li>Locally optimal choice leads to globally optimal solution</li>
          </ul>
          
          <p><strong>Traffic Light Strategy:</strong></p>
          <ul>
            <li>Always choose the route with green light ahead</li>
            <li>Might not be globally optimal (could lead to longer route)</li>
            <li>But simple and often works well in practice</li>
          </ul>
        </div>

        <h3>When Do Greedy Algorithms Work?</h3>
        <div class="key-concepts">
          <h4>🎯 Required Properties</h4>
          <ul>
            <li><strong>Greedy Choice Property:</strong> Local optimal choice leads to global optimal solution</li>
            <li><strong>Optimal Substructure:</strong> Optimal solution contains optimal solutions to subproblems</li>
            <li><strong>No Dependencies:</strong> Current choice doesn't affect future choices negatively</li>
          </ul>
        </div>

        <h3>Greedy vs Dynamic Programming</h3>
        <div class="comparison">
          <div class="comparison-grid">
            <div>
              <strong>Greedy Algorithm</strong>
              <ul>
                <li>Makes irrevocable choices</li>
                <li>Never reconsiders decisions</li>
                <li>Usually faster and simpler</li>
                <li>Works for specific problem types</li>
              </ul>
            </div>
            <div>
              <strong>Dynamic Programming</strong>
              <ul>
                <li>Considers all possibilities</li>
                <li>Can backtrack and reconsider</li>
                <li>More general but complex</li>
                <li>Guaranteed optimal for more problems</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>Common Greedy Algorithms</h3>
        <ul>
          <li><strong>Activity Selection:</strong> Choose maximum non-overlapping activities</li>
          <li><strong>Fractional Knapsack:</strong> Fill knapsack with highest value-to-weight ratio items</li>
          <li><strong>Huffman Coding:</strong> Build optimal prefix-free codes</li>
          <li><strong>Dijkstra's Algorithm:</strong> Find shortest paths in weighted graphs</li>
          <li><strong>Minimum Spanning Tree:</strong> Connect all vertices with minimum total edge weight</li>
        </ul>

        <h3>Proving Greedy Correctness</h3>
        <ol>
          <li><strong>Greedy Choice:</strong> Show that greedy choice is safe</li>
          <li><strong>Optimal Substructure:</strong> Show that after greedy choice, remaining problem has optimal substructure</li>
          <li><strong>Induction:</strong> Prove that greedy algorithm produces optimal solution</li>
        </ol>
      </div>
    `,
    codeExamples: [
      {
        title: 'Activity Selection Problem',
        code: `// Activity Selection - Choose maximum non-overlapping activities
class Activity {
    int start, finish;
    
    Activity(int start, int finish) {
        this.start = start;
        this.finish = finish;
    }
}

public List<Activity> activitySelection(Activity[] activities) {
    // Sort by finish time (greedy choice)
    Arrays.sort(activities, (a, b) -> a.finish - b.finish);
    
    List<Activity> selected = new ArrayList<>();
    selected.add(activities[0]); // Always select first activity
    
    int lastFinishTime = activities[0].finish;
    
    for(int i = 1; i < activities.length; i++) {
        // If current activity starts after last selected finishes
        if(activities[i].start >= lastFinishTime) {
            selected.add(activities[i]);
            lastFinishTime = activities[i].finish;
        }
    }
    
    return selected;
}

// Fractional Knapsack - Greedy by value-to-weight ratio
class Item {
    int value, weight;
    double ratio;
    
    Item(int value, int weight) {
        this.value = value;
        this.weight = weight;
        this.ratio = (double) value / weight;
    }
}

public double fractionalKnapsack(Item[] items, int capacity) {
    // Sort by value-to-weight ratio (descending)
    Arrays.sort(items, (a, b) -> Double.compare(b.ratio, a.ratio));
    
    double totalValue = 0;
    int remainingCapacity = capacity;
    
    for(Item item : items) {
        if(remainingCapacity >= item.weight) {
            // Take whole item
            totalValue += item.value;
            remainingCapacity -= item.weight;
        } else {
            // Take fraction of item
            totalValue += item.ratio * remainingCapacity;
            break;
        }
    }
    
    return totalValue;
}`,
        visualization: (
          <div className="greedy-visual">
            <div className="activity-timeline">
              <div className="activity selected">A1: [1,3]</div>
              <div className="activity rejected">A2: [2,5]</div>
              <div className="activity selected">A3: [4,6]</div>
              <div className="activity selected">A4: [7,9]</div>
            </div>
            <p>Activity Selection: Always choose activity that finishes earliest</p>
            <div className="greedy-steps">
              <div>1. Sort by finish time</div>
              <div>2. Select first activity</div>
              <div>3. Select next non-overlapping activity</div>
            </div>
          </div>
        ),
        steps: [
          "Sort activities by finish time (greedy choice criterion)",
          "Always select first activity (earliest finish time)",
          "For remaining activities, select if start time ≥ last finish time",
          "This greedy choice guarantees maximum number of activities",
          "Proof: Any optimal solution can be modified to include our greedy choices"
        ]
      }
    ],
    patterns: [
      {
        name: "Interval Scheduling",
        difficulty: "Medium",
        description: "Select maximum number of non-overlapping intervals using greedy approach.",
        whenToUse: [
          "Activity selection problems",
          "Meeting room scheduling",
          "Job scheduling with deadlines",
          "Resource allocation"
        ],
        example: `// Meeting rooms - find minimum rooms needed
int minMeetingRooms(int[][] intervals) {
    int[] starts = new int[intervals.length];
    int[] ends = new int[intervals.length];
    
    for(int i = 0; i < intervals.length; i++) {
        starts[i] = intervals[i][0];
        ends[i] = intervals[i][1];
    }
    
    Arrays.sort(starts);
    Arrays.sort(ends);
    
    int rooms = 0, endPtr = 0;
    
    for(int start : starts) {
        if(start < ends[endPtr]) {
            rooms++; // Need new room
        } else {
            endPtr++; // Reuse room
        }
    }
    
    return rooms;
}`,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)"
      }
    ],
    problemSet: [
      {
        title: "Jump Game",
        difficulty: "Medium",
        rating: 4.1,
        description: "Determine if you can reach the last index by jumping at most nums[i] steps from index i.",
        concepts: ["Greedy", "Array", "Reachability"],
        hints: [
          "Keep track of farthest reachable position",
          "Update farthest position at each step",
          "Check if current position is reachable"
        ],
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/jump-game/" }
        ]
      }
    ]
  }
];