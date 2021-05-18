
// CUBE

export const NUMBER_CUBE_BOXES = 27;

// INPUT

export const MOUSE_LEFT_CLICK = 0;
export const SPEED_CUBE_ROTATION = 0.006;

// COLORS

export const COLOR_RIGHT = 0x00FF00;
export const COLOR_LEFT = 0x0000FF;
export const COLOR_UP = 0xFFFF00;
export const COLOR_DOWN = 0xFFFFFF;
export const COLOR_FRONT = 0xFF0000;
export const COLOR_BACK = 0xFF4400;
export const COLOR_HIDE = 0x000000;


// ROTATIONS
export const ROTATION_ANGLE = 1.57;
export const ROTATION_ANGLE_PER_FRAME = 0.02;

export const ROTATIONS = {
  'UP': { labels: ['U'], axis: 'y', location: 1, rotation: 1 },
  'UP2': { labels: [ 'U\'', 'U2' ], axis: 'y', location: 1, rotation: -1 },
  'DOWN': { labels: ['D'], axis: 'y', location: -1, rotation: 1 },
  'DOWN2': { labels: [ 'D\'', 'D2' ], axis: 'y', location: -1, rotation: -1 },
  'RIGHT': { labels: ['R'], axis: 'z', location: 1, rotation: 1 },
  'RIGHT2': { labels: [ 'R\'', 'R2' ], axis: 'z', location: 1, rotation: -1 },
  'LEFT': { labels: ['L'], axis: 'z', location: -1, rotation: 1 },
  'LEFT2': { labels: [ 'L\'', 'L2' ], axis: 'z', location: -1, rotation: -1 },
  'FRONT': { labels: ['F'], axis: 'x', location: -1, rotation: 1 },
  'FRONT2': { labels: [ 'F\'', 'F2' ], axis: 'x', location: -1, rotation: -1 },
  'BACK': { labels: ['B'], axis: 'x', location: 1, rotation: 1 },
  'BACK2': { labels: [ 'B\'', 'B2' ], axis: 'x', location: 1, rotation: -1 },
};
