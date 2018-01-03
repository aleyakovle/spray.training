import * as THREE from 'three';
import { global } from './global.js';

export const weapons = {
  // rifles
  'ak47': {
    name: 'AK-47',
    audio: {
      shoot: [
        new Howl({
          src: ['audio/weapons/ak47/ak47_01.wav'],
          volume: 0.2,
        }),
      ],
      reload: [
        new Howl({
          src: ['audio/weapons/ak47/ak47_clipout.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/ak47/ak47_clipin.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/ak47/ak47_boltpull.wav'],
          volume: 0.2,
        })
      ],
      audioDelay: [750, 1500],
    },
    spray: [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 14, 7),
      new THREE.Vector3(0, 51, 0),
      new THREE.Vector3(0, 109, 5),
      new THREE.Vector3(0, 170, 7),
      new THREE.Vector3(0, 235, -18),
      new THREE.Vector3(0, 290, -34),
      new THREE.Vector3(0, 329, -60),
      new THREE.Vector3(0, 358, -27),
      new THREE.Vector3(0, 350, 57),
      new THREE.Vector3(0, 355, 101),
      new THREE.Vector3(0, 377, 75),
      new THREE.Vector3(0, 389, 106),
      new THREE.Vector3(0, 372, 158),
      new THREE.Vector3(0, 382, 164),
      new THREE.Vector3(0, 385, 84),
      new THREE.Vector3(0, 399, 49),
      new THREE.Vector3(0, 420, 18),
      new THREE.Vector3(0, 417, -36),
      new THREE.Vector3(0, 399, -102),
      new THREE.Vector3(0, 394, -61),
      new THREE.Vector3(0, 400, -73),
      new THREE.Vector3(0, 419, -61),
      new THREE.Vector3(0, 426, -43),
      new THREE.Vector3(0, 420, -81),
      new THREE.Vector3(0, 430, -94), 
      new THREE.Vector3(0, 429, -52),
      new THREE.Vector3(0, 423, 13),
      new THREE.Vector3(0, 381, 104),
      new THREE.Vector3(0, 381, 132),
    ],
    magazine: 30,
    rpm: 600,
    reload: 2500,
  },
  'm4a1': {
    name: 'M4A4',
    audio: {
      shoot: [
        new Howl({
          src: ['audio/weapons/m4a1/m4a1_01.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/m4a1/m4a1_02.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/m4a1/m4a1_03.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/m4a1/m4a1_04.wav'],
          volume: 0.2,
        }),
      ],
      reload: [
        new Howl({
          src: ['audio/weapons/m4a1/m4a1_clipout.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/m4a1/m4a1_clipin.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/m4a1/m4a1_cliphit.wav'],
          volume: 0.2,
        })
      ],
      audioDelay: [750, 1500],
    },
    spray: [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 13, -3),
      new THREE.Vector3(0, 31, -3),
      new THREE.Vector3(0, 63, 8),
      new THREE.Vector3(0, 105, -4),
      new THREE.Vector3(0, 152, 12),
      new THREE.Vector3(0, 205, 21),
      new THREE.Vector3(0, 236, -11),
      new THREE.Vector3(0, 261, -32),
      new THREE.Vector3(0, 271, -75),
      new THREE.Vector3(0, 293, -67),
      new THREE.Vector3(0, 305, -32),
      new THREE.Vector3(0, 296, 28),
      new THREE.Vector3(0, 296, 76),
      new THREE.Vector3(0, 284, 128),
      new THREE.Vector3(0, 292, 128),
      new THREE.Vector3(0, 302, 110),
      new THREE.Vector3(0, 303, 132),
      new THREE.Vector3(0, 297, 162),
      new THREE.Vector3(0, 301, 156),
      new THREE.Vector3(0, 302, 87),
      new THREE.Vector3(0, 315, 67),
      new THREE.Vector3(0, 320, 14),
      new THREE.Vector3(0, 324, -4),
      new THREE.Vector3(0, 325, -27),
      new THREE.Vector3(0, 324, -5),
      new THREE.Vector3(0, 334, -16),
      new THREE.Vector3(0, 344, -24),
      new THREE.Vector3(0, 345, -30),
      new THREE.Vector3(0, 343, -39),
    ],
    magazine: 30,
    rpm: 666,
    reload: 3100,
  },
  'm4a1_silencer': {
    name: 'M4A1-S',
    audio: {
      shoot: [
        new Howl({
          src: ['audio/weapons/m4a1/m4a1_silencer_01.wav'],
          volume: 0.2,
        }),
      ],
      reload: [
        new Howl({
          src: ['audio/weapons/m4a1/m4a1_clipout.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/m4a1/m4a1_clipin.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/m4a1/m4a1_cliphit.wav'],
          volume: 0.2,
        })
      ],
      audioDelay: [750, 1500],
    },
    spray: [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 11, -2),
      new THREE.Vector3(0, 21, -2),
      new THREE.Vector3(0, 48, 6),
      new THREE.Vector3(0, 84, -3),
      new THREE.Vector3(0, 126, 9),
      new THREE.Vector3(0, 173, 17),
      new THREE.Vector3(0, 202, -10),
      new THREE.Vector3(0, 225, -26),
      new THREE.Vector3(0, 236, -62),
      new THREE.Vector3(0, 255, -54),
      new THREE.Vector3(0, 266, -25),
      new THREE.Vector3(0, 259, 24),
      new THREE.Vector3(0, 260, 63),
      new THREE.Vector3(0, 253, 106),
      new THREE.Vector3(0, 258, 105),
      new THREE.Vector3(0, 266, 89),
      new THREE.Vector3(0, 268, 108),
      new THREE.Vector3(0, 264, 133),
      new THREE.Vector3(0, 267, 127),
    ],
    magazine: 20,
    rpm: 600,
    reload: 3100,
  },
  'galilar': {
    name: 'Galil',
    audio: {
      shoot: [
        new Howl({
          src: ['audio/weapons/galilar/galil_01.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/galilar/galil_02.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/galilar/galil_03.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/galilar/galil_04.wav'],
          volume: 0.2,
        }),
      ],
      reload: [
        new Howl({
          src: ['audio/weapons/galilar/galil_clipout.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/galilar/galil_clipin.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/galilar/galil_boltforward.wav'],
          volume: 0.2,
        })
      ],
      audioDelay: [750, 1500],
    },
    spray: [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 9, -8),
      new THREE.Vector3(0, 18, -3),
      new THREE.Vector3(0, 39, -16),
      new THREE.Vector3(0, 67, -40),
      new THREE.Vector3(0, 109, -38),
      new THREE.Vector3(0, 158, -41),
      new THREE.Vector3(0, 192, -54),
      new THREE.Vector3(0, 210, -76),
      new THREE.Vector3(0, 237, -67),
      new THREE.Vector3(0, 255, -23),
      new THREE.Vector3(0, 247, 37),
      new THREE.Vector3(0, 225, 95),
      new THREE.Vector3(0, 238, 113),
      new THREE.Vector3(0, 244, 137),
      new THREE.Vector3(0, 244, 149),
      new THREE.Vector3(0, 246, 150),
      new THREE.Vector3(0, 261, 142),
      new THREE.Vector3(0, 275, 91),
      new THREE.Vector3(0, 282, 64),
      new THREE.Vector3(0, 275, 14),
      new THREE.Vector3(0, 259, -48),
      new THREE.Vector3(0, 264, -59),
      new THREE.Vector3(0, 271, -36),
      new THREE.Vector3(0, 267, -61),
      new THREE.Vector3(0, 265, -82),
      new THREE.Vector3(0, 259, -114),
      new THREE.Vector3(0, 268, -95),
      new THREE.Vector3(0, 257, -31),
      new THREE.Vector3(0, 252, 19),
      new THREE.Vector3(0, 263, 46),
      new THREE.Vector3(0, 279, 34),
      new THREE.Vector3(0, 272, 63),
      new THREE.Vector3(0, 244, 110),
      new THREE.Vector3(0, 241, 138),
    ],
    magazine: 35,
    rpm: 666,
    reload: 3000,
  },
  'sg556': {
    name: 'SG 553',
    audio: {
      shoot: [
        new Howl({
          src: ['audio/weapons/sg556/sg556_01.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/sg556/sg556_02.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/sg556/sg556_03.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/sg556/sg556_04.wav'],
          volume: 0.2,
        }),
      ],
      reload: [
        new Howl({
          src: ['audio/weapons/sg556/sg556_clipout.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/sg556/sg556_clipin.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/sg556/sg556_cliphit.wav'],
          volume: 0.2,
        })
      ],
      audioDelay: [750, 1500],
    },
    spray: [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 15, 7),
      new THREE.Vector3(0, 47, 34),
      new THREE.Vector3(0, 96, 50),
      new THREE.Vector3(0, 154, 64),
      new THREE.Vector3(0, 218, 79),
      new THREE.Vector3(0, 288, 93),
      new THREE.Vector3(0, 317, 133),
      new THREE.Vector3(0, 351, 105),
      new THREE.Vector3(0, 376, 121),
      new THREE.Vector3(0, 391, 153),
      new THREE.Vector3(0, 401, 162),
      new THREE.Vector3(0, 410, 151),
      new THREE.Vector3(0, 423, 166),
      new THREE.Vector3(0, 444, 162),
      new THREE.Vector3(0, 434, 190),
      new THREE.Vector3(0, 398, 230),
      new THREE.Vector3(0, 382, 265),
      new THREE.Vector3(0, 376, 281),
      new THREE.Vector3(0, 383, 200),
      new THREE.Vector3(0, 372, 87),
      new THREE.Vector3(0, 371, 1),
      new THREE.Vector3(0, 390, -34),
      new THREE.Vector3(0, 408, -63),
      new THREE.Vector3(0, 421, -75),
      new THREE.Vector3(0, 415, -118),
      new THREE.Vector3(0, 408, -174),
      new THREE.Vector3(0, 423, -161),
      new THREE.Vector3(0, 433, -134),
      new THREE.Vector3(0, 423, -56),
    ],
    magazine: 30,
    rpm: 666,
    reload: 2800,
  },
  'famas': {
    name: 'FAMAS',
    audio: {
      shoot: [
        new Howl({
          src: ['audio/weapons/famas/famas_01.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/famas/famas_02.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/famas/famas_03.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/famas/famas_04.wav'],
          volume: 0.2,
        }),
      ],
      reload: [
        new Howl({
          src: ['audio/weapons/famas/famas_clipout.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/famas/famas_clipin.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/famas/famas_cliphit.wav'],
          volume: 0.2,
        })
      ],
      audioDelay: [750, 1500],
    },
    spray: [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 9, 8),
      new THREE.Vector3(0, 17, 6),
      new THREE.Vector3(0, 37, 19),
      new THREE.Vector3(0, 70, 21),
      new THREE.Vector3(0, 112, 20),
      new THREE.Vector3(0, 148, -8),
      new THREE.Vector3(0, 171, -40),
      new THREE.Vector3(0, 195, -27),
      new THREE.Vector3(0, 210, 12),
      new THREE.Vector3(0, 222, 45),
      new THREE.Vector3(0, 225, 71),
      new THREE.Vector3(0, 236, 62),
      new THREE.Vector3(0, 244, 16),
      new THREE.Vector3(0, 255, -8),
      new THREE.Vector3(0, 249, -47),
      new THREE.Vector3(0, 251, -58),
      new THREE.Vector3(0, 250, -88),
      new THREE.Vector3(0, 260, -94),
      new THREE.Vector3(0, 266, -85),
      new THREE.Vector3(0, 263, -35),
      new THREE.Vector3(0, 269, -30),
      new THREE.Vector3(0, 267, -51),
      new THREE.Vector3(0, 254, -81),
      new THREE.Vector3(0, 233, -112),
    ],
    magazine: 25,
    rpm: 666,
    reload: 3300,
  },
  'aug': {
    name: 'AUG',
    audio: {
      shoot: [
        new Howl({
          src: ['audio/weapons/aug/aug_01.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/aug/aug_02.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/aug/aug_03.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/aug/aug_04.wav'],
          volume: 0.2,
        }),
      ],
      reload: [
        new Howl({
          src: ['audio/weapons/aug/aug_clipout.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/aug/aug_clipin.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/aug/aug_cliphit.wav'],
          volume: 0.2,
        })
      ],
      audioDelay: [750, 1500],
    },
    spray: [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 12, -9),
      new THREE.Vector3(0, 38, -9),
      new THREE.Vector3(0, 81, 0),
      new THREE.Vector3(0, 134, 14),
      new THREE.Vector3(0, 191, 3),
      new THREE.Vector3(0, 252, -14),
      new THREE.Vector3(0, 293, -41),
      new THREE.Vector3(0, 324, -55),
      new THREE.Vector3(0, 349, -81), 
      new THREE.Vector3(0, 372, -49),
      new THREE.Vector3(0, 384, -39),
      new THREE.Vector3(0, 383, -66),
      new THREE.Vector3(0, 397, -68),
      new THREE.Vector3(0, 404, -22),
      new THREE.Vector3(0, 382, 51),
      new THREE.Vector3(0, 357, 114),
      new THREE.Vector3(0, 369, 120),
      new THREE.Vector3(0, 380, 131),
      new THREE.Vector3(0, 379, 147),
      new THREE.Vector3(0, 381, 99),
      new THREE.Vector3(0, 388, 36),
      new THREE.Vector3(0, 399, 6),
      new THREE.Vector3(0, 401, 16),
      new THREE.Vector3(0, 396, -17),
      new THREE.Vector3(0, 375, -76),
      new THREE.Vector3(0, 375, -114),
      new THREE.Vector3(0, 385, -82),
      new THREE.Vector3(0, 391, -48),
      new THREE.Vector3(0, 394, -41),
    ],
    magazine: 30,
    rpm: 666,
    reload: 3800,
  },
  // submachine guns
  'mac10': {
    name: 'MAC-10',
    audio: {
      shoot: [
        new Howl({
          src: ['audio/weapons/mac10/mac10_01.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mac10/mac10_02.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mac10/mac10_03.wav'],
          volume: 0.2,
        }),
      ],
      reload: [
        new Howl({
          src: ['audio/weapons/mac10/mac10_clipout.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mac10/mac10_clipin.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mac10/mac10_boltforward.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mac10/mac10_boltback.wav'],
          volume: 0.2,
        })
      ],
      audioDelay: [750, 1500, 1750],
    },
    spray: [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 6, 9),
      new THREE.Vector3(0, 13, 12),
      new THREE.Vector3(0, 25, 6),
      new THREE.Vector3(0, 52, -2),
      new THREE.Vector3(0, 85, -22),
      new THREE.Vector3(0, 133, -45),
      new THREE.Vector3(0, 174, -62),
      new THREE.Vector3(0, 208, -51),
      new THREE.Vector3(0, 228, -68),
      new THREE.Vector3(0, 250, -76),
      new THREE.Vector3(0, 272, -85),
      new THREE.Vector3(0, 287, -80),
      new THREE.Vector3(0, 295, -76),
      new THREE.Vector3(0, 301, -57),
      new THREE.Vector3(0, 302, -16),
      new THREE.Vector3(0, 289, 42),
      new THREE.Vector3(0, 288, 45),
      new THREE.Vector3(0, 281, 68),
      new THREE.Vector3(0, 281, 55),
      new THREE.Vector3(0, 276, 67),
      new THREE.Vector3(0, 275, 91),
      new THREE.Vector3(0, 279, 112),
      new THREE.Vector3(0, 281, 80),
      new THREE.Vector3(0, 285, 54),
      new THREE.Vector3(0, 286, 23),
      new THREE.Vector3(0, 283, -20),
      new THREE.Vector3(0, 291, -25),
      new THREE.Vector3(0, 281, 17),
      new THREE.Vector3(0, 279, 12),
    ],
    magazine: 30,
    rpm: 800,
    reload: 2600,
  },
  'mp7': {
    name: 'MP7',
    audio: {
      shoot: [
        new Howl({
          src: ['audio/weapons/mp7/mp7_01.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mp7/mp7_02.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mp7/mp7_03.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mp7/mp7_04.wav'],
          volume: 0.2,
        }),
      ],
      reload: [
        new Howl({
          src: ['audio/weapons/mp7/mp7_clipout.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mp7/mp7_clipin.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mp7/mp7_slideforward.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mp7/mp7_slideback.wav'],
          volume: 0.2,
        })
      ],
      audioDelay: [750, 1500, 1750],
    },
    spray: [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 8, 0),
      new THREE.Vector3(0, 15, 2),
      new THREE.Vector3(0, 21, 8),
      new THREE.Vector3(0, 40, 19),
      new THREE.Vector3(0, 68, 37),
      new THREE.Vector3(0, 102, 36),
      new THREE.Vector3(0, 127, 55),
      new THREE.Vector3(0, 153, 61),
      new THREE.Vector3(0, 160, 82),
      new THREE.Vector3(0, 167, 94),
      new THREE.Vector3(0, 184, 77),
      new THREE.Vector3(0, 192, 39),
      new THREE.Vector3(0, 195, 3),
      new THREE.Vector3(0, 196, -26),
      new THREE.Vector3(0, 206, -28),
      new THREE.Vector3(0, 217, -16),
      new THREE.Vector3(0, 219, -8),
      new THREE.Vector3(0, 223, -1),
      new THREE.Vector3(0, 228, -8),
      new THREE.Vector3(0, 236, -4),
      new THREE.Vector3(0, 230, 26),
      new THREE.Vector3(0, 211, 66),
      new THREE.Vector3(0, 211, 74),
      new THREE.Vector3(0, 206, 92),
      new THREE.Vector3(0, 202, 88),
      new THREE.Vector3(0, 198, 90),
      new THREE.Vector3(0, 202, 90),
      new THREE.Vector3(0, 203, 100),
      new THREE.Vector3(0, 209, 101),
    ],
    magazine: 30,
    rpm: 750,
    reload: 3100,
  },
  'ump45': {
    name: 'UMP-45',
    audio: {
      shoot: [
        new Howl({
          src: ['audio/weapons/ump45/ump45_02.wav'],
          volume: 0.2,
        }),
      ],
      reload: [
        new Howl({
          src: ['audio/weapons/ump45/ump45_clipout.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/ump45/ump45_clipin.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/ump45/ump45_boltforward.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/ump45/ump45_boltback.wav'],
          volume: 0.2,
        })
      ],
      audioDelay: [750, 1500, 1750],
    },
    spray: [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 13, 2),
      new THREE.Vector3(0, 29, 9),
      new THREE.Vector3(0, 63, 12),
      new THREE.Vector3(0, 107, 21),
      new THREE.Vector3(0, 152, 40),
      new THREE.Vector3(0, 204, 45),
      new THREE.Vector3(0, 238, 23),
      new THREE.Vector3(0, 262, 31),
      new THREE.Vector3(0, 288, 13),
      new THREE.Vector3(0, 305, -24),
      new THREE.Vector3(0, 314, -52),
      new THREE.Vector3(0, 321, -51),
      new THREE.Vector3(0, 333, -60),
      new THREE.Vector3(0, 344, -60),
      new THREE.Vector3(0, 338, -78),
      new THREE.Vector3(0, 333, -89),
      new THREE.Vector3(0, 344, -64),
      new THREE.Vector3(0, 348, -26),
      new THREE.Vector3(0, 344, -27),
      new THREE.Vector3(0, 332, -54),
      new THREE.Vector3(0, 328, -87),
      new THREE.Vector3(0, 332, -79),
      new THREE.Vector3(0, 330, -36),
      new THREE.Vector3(0, 327, -29),
    ],
    magazine: 25,
    rpm: 666,
    reload: 3500,
  },
  'bizon': {
    name: 'PP-Bizon',
    spray: [],
    magazine: 64,
    rpm: 750,
    reload: 2400,
  },
  'p90': {
    name: 'P90',
    audio: {
      shoot: [
        new Howl({
          src: ['audio/weapons/p90/p90_01.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/p90/p90_02.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/p90/p90_03.wav'],
          volume: 0.2,
        }),
      ],
      reload: [
        new Howl({
          src: ['audio/weapons/p90/p90_clipout.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/p90/p90_clipin.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/p90/p90_boltforward.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/p90/p90_boltback.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/p90/p90_cliphit.wav'],
          volume: 0.2,
        }),
      ],
      audioDelay: [750, 1500, 1750, 2000],
    },
    spray: [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 7, 6),
      new THREE.Vector3(0, 15, 5),
      new THREE.Vector3(0, 25, 1),
      new THREE.Vector3(0, 48, 7),
      new THREE.Vector3(0, 78, 29),
      new THREE.Vector3(0, 102, 53),
      new THREE.Vector3(0, 136, 73),
      new THREE.Vector3(0, 164, 56),
      new THREE.Vector3(0, 190, 36),
      new THREE.Vector3(0, 213, 32),
      new THREE.Vector3(0, 237, 26),
      new THREE.Vector3(0, 251, 32),
      new THREE.Vector3(0, 252, 57),
      new THREE.Vector3(0, 258, 68),
      new THREE.Vector3(0, 263, 82),
      new THREE.Vector3(0, 263, 102),
      new THREE.Vector3(0, 266, 78),
      new THREE.Vector3(0, 269, 46),
      new THREE.Vector3(0, 272, 25),
      new THREE.Vector3(0, 274, 5),
      new THREE.Vector3(0, 272, 23),
      new THREE.Vector3(0, 266, -52),
      new THREE.Vector3(0, 265, -43),
      new THREE.Vector3(0, 267, -52),
      new THREE.Vector3(0, 268, -29),
      new THREE.Vector3(0, 267, 0),
      new THREE.Vector3(0, 263, 41),
      new THREE.Vector3(0, 266, 46),
      new THREE.Vector3(0, 273, 35),
      new THREE.Vector3(0, 276, 43),
      new THREE.Vector3(0, 280, 51),
      new THREE.Vector3(0, 284, 40),
      new THREE.Vector3(0, 283, 10),
      new THREE.Vector3(0, 281, -7),
      new THREE.Vector3(0, 283, 1),
      new THREE.Vector3(0, 284, 5),
      new THREE.Vector3(0, 282, 29),
      new THREE.Vector3(0, 278, 53),
      new THREE.Vector3(0, 282, 49),
      new THREE.Vector3(0, 282, 24),
      new THREE.Vector3(0, 273, -14),
      new THREE.Vector3(0, 270, -32),
      new THREE.Vector3(0, 269, -56),
      new THREE.Vector3(0, 263, -87),
      new THREE.Vector3(0, 264, -104),
      new THREE.Vector3(0, 257, -127),
      new THREE.Vector3(0, 263, -119),
      new THREE.Vector3(0, 269, -95),
      new THREE.Vector3(0, 266, -104),
    ],
    magazine: 50,
    rpm: 857,
    reload: 3300,
  },
  'mp9': {
    name: 'MP9',
    audio: {
      shoot: [
        new Howl({
          src: ['audio/weapons/mp9/mp9_01.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mp9/mp9_02.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mp9/mp9_03.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mp9/mp9_04.wav'],
          volume: 0.2,
        }),
      ],
      reload: [
        new Howl({
          src: ['audio/weapons/mp9/mp9_clipout.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mp9/mp9_clipin.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mp9/mp9_boltforward.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/mp9/mp9_boltback.wav'],
          volume: 0.2,
        })
      ],
      audioDelay: [750, 1500, 1750],
    },
    spray: [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 11, 1),
      new THREE.Vector3(0, 20, 6),
      new THREE.Vector3(0, 42, 0),
      new THREE.Vector3(0, 77, 3),
      new THREE.Vector3(0, 120, -16),
      new THREE.Vector3(0, 161, -14),
      new THREE.Vector3(0, 206, 2),
      new THREE.Vector3(0, 234, -19),
      new THREE.Vector3(0, 253, -61),
      new THREE.Vector3(0, 253, -105),
      new THREE.Vector3(0, 241, -156),
      new THREE.Vector3(0, 260, -154),
      new THREE.Vector3(0, 282, -156),
      new THREE.Vector3(0, 297, -109),
      new THREE.Vector3(0, 315, -83),
      new THREE.Vector3(0, 330, -47),
      new THREE.Vector3(0, 342, -19),
      new THREE.Vector3(0, 340, 23),
      new THREE.Vector3(0, 319, 83),
      new THREE.Vector3(0, 324, 73),
      new THREE.Vector3(0, 329, 40),
      new THREE.Vector3(0, 332, -1),
      new THREE.Vector3(0, 336, -7),
      new THREE.Vector3(0, 332, 27),
      new THREE.Vector3(0, 317, 80),
      new THREE.Vector3(0, 324, 92),
      new THREE.Vector3(0, 334, 113),
      new THREE.Vector3(0, 345, 94),
      new THREE.Vector3(0, 355, 84),
    ],
    magazine: 30,
    rpm: 857,
    reload: 2100,
  },
  //machine guns
  'm249': {
    name: 'M249',
    spray: [],
    magazine: 100,
    rpm: 750,
    reload: 5700,
  },
  //pistols
  'cz75a': {
    name: 'CZ75-Auto',
    audio: {
      shoot: [
        new Howl({
          src: ['audio/weapons/cz75a/cz75_01.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/cz75a/cz75_02.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/cz75a/cz75_03.wav'],
          volume: 0.2,
        }),
      ],
      reload: [
        new Howl({
          src: ['audio/weapons/p250/p250_clipout.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/p250/p250_clipin.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/p250/p250_sliderelease.wav'],
          volume: 0.2,
        }),
        new Howl({
          src: ['audio/weapons/p250/p250_slideback.wav'],
          volume: 0.2,
        })
      ],
      audioDelay: [750, 1500, 1750],
    },
    spray: [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 2, 12),
      new THREE.Vector3(0, 21, 1),
      new THREE.Vector3(0, 15, 9),
      new THREE.Vector3(0, 9, -9),
      new THREE.Vector3(0, 30, -48),
      new THREE.Vector3(0, 31, -1),
      new THREE.Vector3(0, 57, 22),
      new THREE.Vector3(0, 77, 78),
      new THREE.Vector3(0, 120, 29),
      new THREE.Vector3(0, 162, 80),
      new THREE.Vector3(0, 206, 91),
    ],
    magazine: 12,
    rpm: 600,
    reload: 2700,
  },
};
