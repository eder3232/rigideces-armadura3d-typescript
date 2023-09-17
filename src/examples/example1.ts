const raw = [
  {
    name: 'a',
    coordinates: { x: 0, y: 0, z: 0 },
    forces: { x: 0, y: 0, z: 0 },
    displacements: { x: 0, y: 0, z: 0 },
    isRestrained: { x: true, y: true, z: true },
  },
  {
    name: 'b',
    coordinates: { x: 3.5, y: 0, z: 0 },
    forces: { x: 0, y: 0, z: 0 },
    displacements: { x: 0, y: 0, z: -0.01 },
    isRestrained: { x: true, y: true, z: true },
  },
  {
    name: 'c',
    coordinates: { x: 3.5, y: 2, z: 0 },
    forces: { x: 0, y: 0, z: 0 },
    displacements: { x: 0, y: 0, z: -0.01 },
    isRestrained: { x: false, y: false, z: true },
  },
  {
    name: 'd',
    coordinates: { x: 1.5, y: 2, z: 3 },
    forces: { x: 0, y: 0, z: -25 },
    displacements: { x: 0, y: 0, z: -0.01 },
    isRestrained: { x: false, y: false, z: false },
  },
]
