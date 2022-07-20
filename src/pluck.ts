interface Point {
  x: number;
  y: number;
  label: string;
}
const myPoint_A: Point = { x: 1, y: 2, label: "start" };
const myPoint_B: Point = { x: 2, y: 3, label: "mid" };
const myPoint_C: Point = { x: 3, y: 4, label: "end" };

const pluck = (key: string, ...points: Point[]): string[] => {
  return points.map((item) => item[key]);
};

console.log(pluck("label", myPoint_A, myPoint_B, myPoint_C));
// [ 'start', 'mid', 'end' ]
