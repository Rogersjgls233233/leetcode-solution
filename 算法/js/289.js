// 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

// 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
// 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
// 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
// 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
// 根据当前状态，写一个函数来计算面板上所有细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/game-of-life
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const dx = [0, 1, 0, -1, -1, -1, 1, 1];
  const dy = [1, 0, -1, 0, 1, -1, 1, -1];

  const CopyBoard = board.map(ary => {
    return [...ary];
  });
  for (let i = 0; i < CopyBoard.length; i++) {
    for (let j = 0; j < CopyBoard[i].length; j++) {
      let liveAccount = 0;
      for (let index = 0; index < 8; index++) {
        let x = i + dx[index];
        let y = j + dy[index];
        if (
          x < 0 ||
          y < 0 ||
          x >= CopyBoard.length ||
          y >= CopyBoard[i].length
        ) {
          continue;
        }
        liveAccount += CopyBoard[x][y];
      }
      if (liveAccount < 2 || liveAccount > 3) {
        board[i][j] = 0;
      } else if (liveAccount <= 3 && CopyBoard[i][j]) {
        board[i][j] = 1;
      } else if (liveAccount === 3 && !CopyBoard[i][j]) {
        board[i][j] = 1;
      }
    }
  }
};
