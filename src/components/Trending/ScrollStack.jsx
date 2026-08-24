import { useLayoutEffect, useRef, useCallback } from "react";

import "./ScrollStack.css";

export const ScrollStackItem = ({ children, itemClassName = "" }) => {
  return (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>
      {children}
    </div>
  );
};

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 140,
  itemScale = 0,
  itemStackDistance = 24,
  stackPosition = "12%",
  scaleEndPosition = "10%",
  baseScale = 1,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete,
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const positionsRef = useRef([]);
  const tickingRef = useRef(false);
  const completedRef = useRef(false);

  const parsePercentage = useCallback((value, height) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * height;
    }

    return Number(value);
  }, []);

  const applyStickyPositions = useCallback(() => {
    const cards = cardsRef.current;

    if (!cards.length) {
      return;
    }

    const viewportHeight = window.innerHeight;

    const stackPositionPx = parsePercentage(stackPosition, viewportHeight);

    cards.forEach((card, index) => {
      card.style.top = `${stackPositionPx + itemStackDistance * index}px`;

      card.style.zIndex = String(index + 1);
    });
  }, [itemStackDistance, parsePercentage, stackPosition]);

  const effectsEnabled =
    itemScale !== 0 ||
    rotationAmount !== 0 ||
    blurAmount > 0 ||
    Boolean(onStackComplete);

  const calculateCardPositions = useCallback(() => {
    const cards = cardsRef.current;

    if (!cards.length) {
      return;
    }

    positionsRef.current = cards.map((card) => {
      const rect = card.getBoundingClientRect();
      return rect.top + window.scrollY;
    });
  }, []);

  const updateEffects = useCallback(() => {
    tickingRef.current = false;

    const cards = cardsRef.current;
    const positions = positionsRef.current;

    if (!cards.length || !positions.length) {
      return;
    }

    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    const stackPositionPx = parsePercentage(stackPosition, viewportHeight);

    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      viewportHeight,
    );

    cards.forEach((card, index) => {
      const cardTop = positions[index];

      const pinStart = cardTop - stackPositionPx - itemStackDistance * index;

      const triggerEnd = cardTop - scaleEndPositionPx;

      let progress = 0;

      if (scrollTop <= pinStart) {
        progress = 0;
      } else if (scrollTop >= triggerEnd) {
        progress = 1;
      } else {
        progress = (scrollTop - pinStart) / (triggerEnd - pinStart);
      }

      const targetScale = baseScale + index * itemScale;
      const scale = 1 - progress * (1 - targetScale);
      const rotation = rotationAmount * index * progress;
      const blur = blurAmount > 0 ? blurAmount * index * progress : 0;

      card.style.transform = `scale(${scale}) rotate(${rotation}deg)`;

      card.style.filter = blur > 0 ? `blur(${blur}px)` : "none";
    });

    if (onStackComplete && !completedRef.current) {
      const lastIndex = cards.length - 1;
      const lastPinStart =
        positions[lastIndex] - stackPositionPx - itemStackDistance * lastIndex;

      if (scrollTop >= lastPinStart) {
        completedRef.current = true;
        onStackComplete();
      } else {
        completedRef.current = false;
      }
    }
  }, [
    baseScale,
    blurAmount,
    itemScale,
    itemStackDistance,
    onStackComplete,
    parsePercentage,
    rotationAmount,
    scaleEndPosition,
    stackPosition,
  ]);

  const requestEffectsUpdate = useCallback(() => {
    if (tickingRef.current) {
      return;
    }

    tickingRef.current = true;

    requestAnimationFrame(() => {
      updateEffects();
    });
  }, [updateEffects]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const cards = Array.from(scroller.querySelectorAll(".scroll-stack-card"));

    cardsRef.current = cards;

    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
    });

    applyStickyPositions();

    const handleResize = () => {
      applyStickyPositions();
      if (effectsEnabled) {
        calculateCardPositions();
        requestEffectsUpdate();
      }
    };

    window.addEventListener("resize", handleResize);

    let cleanupEffects = () => {};

    if (effectsEnabled) {
      calculateCardPositions();
      requestEffectsUpdate();

      const recalcOnLoad = () => {
        calculateCardPositions();
        requestEffectsUpdate();
      };

      window.addEventListener("load", recalcOnLoad);

      if (document.fonts?.ready) {
        document.fonts.ready.then(recalcOnLoad);
      }

      const images = scroller.querySelectorAll("img");
      images.forEach((img) => {
        if (!img.complete) {
          img.addEventListener("load", recalcOnLoad);
        }
      });

      window.addEventListener("scroll", requestEffectsUpdate, {
        passive: true,
      });

      cleanupEffects = () => {
        window.removeEventListener("scroll", requestEffectsUpdate);
        window.removeEventListener("load", recalcOnLoad);
        images.forEach((img) => {
          img.removeEventListener("load", recalcOnLoad);
        });
      };
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      cleanupEffects();
      cardsRef.current = [];
      positionsRef.current = [];
    };
  }, [
    itemDistance,
    applyStickyPositions,
    effectsEnabled,
    calculateCardPositions,
    requestEffectsUpdate,
  ]);

  return (
    <div
      ref={scrollerRef}
      className={`scroll-stack-scroller ${className}`.trim()}
    >
      <div className="scroll-stack-inner">
        {children}

        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
