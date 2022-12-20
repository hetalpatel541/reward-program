export function getRandomNumberBetweenRange(min = 1, max = Number.MAX_SAFE_INTEGER) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


export function getDateBeforeDays(days = 0) {
  if (typeof days !== 'number') throw new Error("Invalid number of days provided");
  
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000)  
}


export function getMonthName(month = 0) {
  const names = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }
  
  return names[month];
}


export function calculatePoints(amount = 0) {
  if (amount < 50) return 0;
  else if (amount >= 50 && amount <= 100) return amount;
  
  return (amount - 100) * 2 + 50;
}

/**
 * @param {number} count No of mock users needs to be created
 * 
 * - returns {USER[]} Array of users with id, name 
 */
export function createMockUser(count = 1) {
  /**
   * 
   * @param {string} id unique identifier
   * 
   */
  function createUser(id) {
    return {
      id,
      name: `User ${id}`
    }
  }
  
  return Array.from({ length: count }).map((_, index) => createUser(`${index}`));
}


/**
 * @param {number} count No of mock transaction needs to be created
 * 
 * - returns {TRANSACTION[]} Array of transaction with id, name 
 */
export function createMockTransaction(users, count = 1) {
  const MIN_AMOUNT = 10, MAX_AMOUNT = 100;
  
  function createTransaction(id) {
    const userIndex = getRandomNumberBetweenRange(0, users.length - 1);
    const randomUser = users[userIndex];
    
    return {
      id,
      identifier: `Transaction ${id}`,
      amount: getRandomNumberBetweenRange(MIN_AMOUNT, MAX_AMOUNT),
      initiatedBy: randomUser?.name,
      status: 'completed',
      createdAt: getDateBeforeDays(getRandomNumberBetweenRange(0, 365))
    }
  }
  
  return Array.from({ length: count }).map((_, index) => createTransaction(index));
}


