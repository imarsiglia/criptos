import { modalLoadingSetter } from "./store"

export async function loadingWrapperPromise<T>(promise: Promise<T>) {
  modalLoadingSetter({ loadingVisible: true })
  const res = await promise
  modalLoadingSetter({ loadingVisible: false })
  return res
}
