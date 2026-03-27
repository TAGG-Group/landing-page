"use client";

/**
 * @author: @dorianbaffier
 * @description: Card Stack
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  specs: Specification[];
  description?: string;
  link?: string;
}

interface CardProps {
  product: Product;
  index: number;
  totalCards: number;
  isDistributed: boolean;
  isFocused: boolean;
  onFocus: () => void;
}

const Card = ({ product, index, totalCards, isDistributed, isFocused, onFocus }: CardProps) => {
  const centerOffset = (totalCards - 1) * 5;
  const defaultX = index * 10 - centerOffset;
  const defaultY = index * 2;
  const defaultRotate = index * 1.5;
  const defaultScale = 1;

  const cardWidth = 320;
  const cardOverlap = 240;
  const totalExpandedWidth = cardWidth + (totalCards - 1) * (cardWidth - cardOverlap);
  const expandedCenterOffset = totalExpandedWidth / 2;

  const spreadX = index * (cardWidth - cardOverlap) - expandedCenterOffset + cardWidth / 2;
  const spreadY = 0;
  const spreadRotate = index * 5 - (totalCards - 1) * 2.5;
  const spreadScale = 1;

  return (
    <motion.div
      onClick={(e) => {
        e.stopPropagation();
        onFocus();
      }}
      whileHover={{ 
        scale: isFocused ? 1.1 : 1.05, 
        y: isFocused ? 0 : (isDistributed ? -15 : defaultY - 10),
        rotate: isFocused ? 0 : (isDistributed ? spreadRotate * 1.05 : defaultRotate),
        zIndex: 100 
      }}
      animate={{
        x: isFocused ? 0 : (isDistributed ? spreadX : defaultX),
        y: isFocused ? 0 : (isDistributed ? spreadY : defaultY),
        rotate: isFocused ? 0 : (isDistributed ? spreadRotate : defaultRotate),
        scale: isFocused ? 1.1 : (isDistributed ? spreadScale : defaultScale),
        zIndex: isFocused ? 100 : totalCards - index,
      }}
      className={cn(
        "absolute inset-0 w-full rounded-2xl p-6",
        "bg-white/60 dark:bg-neutral-900/60 backdrop-blur-2xl",
        "border border-white/30 dark:border-white/10 shadow-2xl",
        isFocused ? "border-[#2BA99B] border-2 shadow-[#2BA99B]30" : "hover:border-[#2BA99B]/50",
        "transition-colors duration-300",
        "transform-gpu overflow-hidden cursor-pointer"
      )}
      initial={{ x: defaultX, y: defaultY, rotate: defaultRotate, scale: defaultScale }}
      style={{
        maxWidth: "320px",
        transformStyle: "preserve-3d",
        perspective: "2000px",
        left: "50%",
        marginLeft: "-160px",
        transform: (isDistributed || isFocused)
          ? ""
          : `translateY(${index * 10}px) translateX(${index * 1}px) rotate(${index * 3}deg) scale(${1 - index * 0.02})`,
        zIndex: isFocused ? 100 : totalCards - index,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.8 }}
    >
      <div className="absolute inset-1 rounded-xl border border-neutral-200/50 bg-neutral-50/50 backdrop-blur-sm dark:border-neutral-700/50 dark:bg-neutral-900/50" />
      <div className="relative z-10 h-full flex flex-col">
        {/* Link Overlay */}
        {product.link && (isDistributed || isFocused) && (
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-0 right-0 p-2 bg-white/50 dark:bg-black/50 rounded-full hover:scale-110 transition-transform z-20"
            title="Voir le site"
          >
            <ExternalLink size={16} className="text-[#2BA99B]" />
          </a>
        )}
        
        <dl className="mb-4 grid grid-cols-4 justify-center gap-2">
          {product.specs.map((spec) => (
            <div className="flex flex-col items-start text-left text-[10px]" key={spec.label}>
              <dd className="w-full text-left font-medium text-gray-500 dark:text-gray-400">{spec.value}</dd>
              <dt className="mb-0.5 w-full text-left text-gray-900 dark:text-gray-100">{spec.label}</dt>
            </div>
          ))}
        </dl>
        <div className="aspect-[16/11] w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 shadow-inner">
          <img alt={product.title} className="h-full w-full object-cover" src={product.image} />
        </div>
        <div className="mt-4">
          <div className="space-y-1 text-left">
            <h2 className="font-bold text-2xl text-gray-900 tracking-tight dark:text-white">{product.title}</h2>
            <span className="block bg-gradient-to-r from-gray-500 to-gray-700 dark:from-gray-300 dark:to-white bg-clip-text font-semibold text-lg text-transparent">
              {product.subtitle}
            </span>
          </div>
          <p className="mt-2 text-left text-gray-500 text-xs dark:text-gray-400 line-clamp-2">
            {product.description || "Solution digitale innovante réalisée par TÀGG Group."}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

interface CardStackProps {
  items: Product[];
  className?: string;
}

export function CardStack({ items, className }: CardStackProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "relative mx-auto min-h-[480px] w-full flex items-center justify-center",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setFocusedIndex(null);
      }}
    >
      {items.map((product, index) => (
        <Card
          index={index}
          isDistributed={isHovered}
          isFocused={focusedIndex === index}
          onFocus={() => setFocusedIndex(focusedIndex === index ? null : index)}
          key={product.id}
          product={product}
          totalCards={items.length}
        />
      ))}
    </div>
  );
}

