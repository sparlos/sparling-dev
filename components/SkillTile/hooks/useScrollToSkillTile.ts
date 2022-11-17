import { MutableRefObject, useEffect, useRef } from 'react'

type UseScrollToSkillTileOptions = {
  scrollContainerRef?: MutableRefObject<HTMLDivElement>
  isSelected: boolean
}

export default function useScrollToSkillTile({
  scrollContainerRef,
  isSelected,
}: UseScrollToSkillTileOptions) {
  const ref = useRef() as MutableRefObject<HTMLDivElement>
  const initialTop = useRef<number>(0)

  useEffect(() => {
    initialTop.current = ref.current.getBoundingClientRect().top
  }, [])

  const handleScrollTo = (callback?: () => void) => {
    if (initialTop.current && scrollContainerRef && !isSelected) {
      const scrollContainerBoundingBox =
        scrollContainerRef.current.getBoundingClientRect()

      scrollContainerRef.current.scrollTo({
        top: initialTop.current - scrollContainerBoundingBox.height / 2 + 100,
        behavior: 'smooth',
      })
    }
    callback && callback()
  }

  return {
    ref,
    handleScrollTo,
  }
}
