export const fade = (node, { delay = 0, duration = 400  }) => {
  const opacity =+ getComputedStyle(node).opacity;

  return {
    delay,
    duration,
    css: t => `opacity: ${t * opacity}`
  };
}
