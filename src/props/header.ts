// The Props Interface For The Header View
export interface HeaderProps {
  // Is The Menu Open
  open: boolean;

  // Toggles The Menu State
  toggleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
