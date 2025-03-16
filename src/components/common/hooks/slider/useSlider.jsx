import { useState, useRef } from "react";

export function useSlider(sliderSetting) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleArrowClick = (direction) => {
    const newIndex =
      direction === "left"
        ? Math.max(currentIndex - sliderSetting.moveLength, 0)
        : Math.min(
            currentIndex + sliderSetting.moveLength,
            sliderSetting.total - sliderSetting.columnCount
          );

    setCurrentIndex(newIndex);
    sliderRef.current.scrollLeft =
      newIndex * (sliderRef.current.offsetWidth / sliderSetting.columnCount +
        sliderSetting.gap / 4);
  };

  return {
    sliderRef,
    currentIndex,
    handleArrowClick,
  };
}
