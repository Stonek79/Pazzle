/* eslint-disable no-multi-spaces */

export const branch1 = ['A', [ //   A
  ['B', [               //   |
    ['C'],              //   B
    ['D'],              //  / \
  ]],                   // C   D
]];

export const branch2 = ['B', [ //   B
  ['D', [               //   |
    ['E'],              //   D
    ['F'],              //  / \
  ]],                   // E   F
]];

export const branch3 = ['I', [ //   I
  ['A', [               //   |
    ['B', [             //   A
      ['C'],            //   |
      ['H'],            //   B
    ]],                 //  / \
  ]],                   // C   H
]];

export const result = ['A', [      //     A
  ['B', [                   //    / \
    ['C'],                  //   B   I
    ['D', [                 //  /|\
      ['E'],                // C D H
      ['F'],                //  / \
    ]],                     // E   F
    ['H'],
  ]],
  ['I'],
]];
