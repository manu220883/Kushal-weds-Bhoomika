import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  type: 'rose' | 'marigold' | 'jasmine';
}

interface FlowerShowerProps {
  active: boolean;
  onComplete?: () => void;
}

export const FlowerShower: React.FC<FlowerShowerProps> = ({ active, onComplete }) => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    if (!active) {
      setPetals([]);
      return;
    }

    const count = 45;
    const colors = [
      '#e11d48', // rose red
      '#f43f5e', // deep pink
      '#fbbf24', // marigold gold
      '#f59e0b', // marigold orange
      '#fffbeb', // jasmine white/cream
    ];

    const newPetals: Petal[] = Array.from({ length: count }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100, // percentage
      size: Math.floor(Math.random() * 16) + 14,
      duration: Math.random() * 3 + 3.5,
      delay: Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: i % 3 === 0 ? 'rose' : i % 3 === 1 ? 'marigold' : 'jasmine',
    }));

    setPetals(newPetals);

    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 6500);

    return () => clearTimeout(timer);
  }, [active, onComplete]);

  if (!active || petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="animate-petal"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
          }}
        >
          <svg
            viewBox="0 0 30 40"
            fill={petal.color}
            className="drop-shadow-sm opacity-90 transform rotate-12"
          >
            {petal.type === 'rose' ? (
              <path d="M15 0 C25 10 30 25 15 40 C0 25 5 10 15 0 Z" />
            ) : petal.type === 'marigold' ? (
              <path d="M15 2 C22 2 28 10 28 20 C28 30 20 38 15 38 C10 38 2 30 2 20 C2 10 8 2 15 2 Z" />
            ) : (
              <path d="M15 5 C22 15 25 30 15 35 C5 30 8 15 15 5 Z" />
            )}
          </svg>
        </div>
      ))}
    </div>
  );
};
