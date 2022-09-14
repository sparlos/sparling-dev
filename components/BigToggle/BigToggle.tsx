import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  getButtonBackgroundAnimation,
  getDividerAnimation,
  getLeftButtonAnimation,
  getRightButtonAnimation,
  getToggleContainerAnimation,
} from '../../utils/animations/bigToggle'
import BigToggleButton from './components/BigToggleButton'

export type BigToggleState = 'left' | 'right' | null

type BigToggleProps = {
  toggleState: BigToggleState
  shrinkOnSelect?: boolean
  setToggleState: (newState: BigToggleState) => void
  toggleLeftText: string
  toggleRightText: string
  isPreToggled: boolean
}

export default function BigToggle({
  toggleState,
  shrinkOnSelect = true,
  setToggleState,
  toggleLeftText,
  toggleRightText,
  isPreToggled,
}: BigToggleProps) {
  const [hoveredState, setHoveredState] = useState<BigToggleState>(null)
  const isSmall = shrinkOnSelect && toggleState

  return (
    <motion.div
      {...getToggleContainerAnimation(!!isSmall, isPreToggled)}
      className="relative flex max-w-full"
    >
      <BigToggleButton
        buttonAnimation={getLeftButtonAnimation(!!isSmall, isPreToggled)}
        backgroundAnimation={getButtonBackgroundAnimation(
          toggleState === 'left',
          hoveredState === 'left',
          isPreToggled
        )}
        position="left"
        setHoveredState={setHoveredState}
        toggleState={toggleState}
        setToggleState={setToggleState}
        text={toggleLeftText}
      />
      <motion.div
        {...getDividerAnimation(!!isSmall, isPreToggled)}
        className="z-10 h-[115%] w-px rotate-[30deg] bg-gray-200 dark:bg-white"
      />
      <BigToggleButton
        buttonAnimation={getRightButtonAnimation(!!isSmall, isPreToggled)}
        backgroundAnimation={getButtonBackgroundAnimation(
          toggleState === 'right',
          hoveredState === 'right',
          isPreToggled
        )}
        position="right"
        setHoveredState={setHoveredState}
        toggleState={toggleState}
        setToggleState={setToggleState}
        text={toggleRightText}
      />
    </motion.div>
  )
}
