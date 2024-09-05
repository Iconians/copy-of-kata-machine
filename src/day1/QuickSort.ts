function partition(arr: number[], lo: number, hi: number) {
  const pivot = arr[hi]
  let index = lo - 1

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      index++
      const tmp = arr[i] 
      arr[i] = arr[index]
      arr[index] = tmp
    }
  }
  index++
  arr[hi] = arr[index]
  arr[index] = pivot
  return index
}

function qs(arr: number[], lo: number, hi: number) {
  if (lo >= hi) return

  const pivotIndex = partition(arr, lo, hi)

  qs(arr, lo, pivotIndex - 1)
  qs(arr, pivotIndex + 1, hi)
}

export default function quick_sort(arr: number[]): void {
  console.log(qs(arr, 0, arr.length - 1))
  qs(arr, 0, arr.length - 1)
}