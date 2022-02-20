export const showIcon = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const modalAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};
