import { useState } from "react";
// When you create a hook , make sure it starts with "use", We do not return a UI/component from a custom state component, we return the state(visible in this case) and functions(toggle function in this case) that we will use from other components
export const useToggle = (initial = false) => {
  const [visible, setVisible] = useState(initial);

  const toggle = () => {
    setVisible((prev) => !prev);
  };
  // We need both the visible object and the toggle fuction for other components so return those
  return [visible, toggle];
};