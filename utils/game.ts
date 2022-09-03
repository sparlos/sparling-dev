export type Position = [number, number]

export const getRandomPosition = (width: number, height: number): Position => {
  return [
    Math.round(Math.max(Math.random(), 0.05) * (width - 20)),
    // make sure items do not spawn inside joystick area
    Math.round(Math.max(Math.random(), 0.05) * (height - 210)),
  ]
}
