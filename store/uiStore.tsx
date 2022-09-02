import create from 'zustand'

export type BackgroundIcon = 'user' | 'code' | 'mail' | null

type UIStore = {
  backgroundIcon: BackgroundIcon
  setBackgroundIcon: (newIcon: BackgroundIcon) => void
}

const useUIStore = create<UIStore>((set) => ({
  backgroundIcon: null,
  setBackgroundIcon: (newIcon: BackgroundIcon) =>
    set(() => ({ backgroundIcon: newIcon })),
}))

export default useUIStore