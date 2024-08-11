declare module 'react-burger-menu' {
    import * as React from 'react';
  
    interface MenuStyles {
      bmBurgerButton?: React.CSSProperties;
      bmBurgerBars?: React.CSSProperties;
      bmBurgerBarsHover?: React.CSSProperties;
      bmCrossButton?: React.CSSProperties;
      bmCross?: React.CSSProperties;
      bmMenu?: React.CSSProperties;
      bmMorphShape?: React.CSSProperties;
      bmItemList?: React.CSSProperties;
      bmItem?: React.CSSProperties;
      bmOverlay?: React.CSSProperties;
    }
  
    export class Menu extends React.Component<{
      styles?: MenuStyles;
      right?: boolean;
      customBurgerIcon?: React.ReactNode;
      customCrossIcon?: React.ReactNode;
      children: React.ReactNode; // Add children prop
    }> {}
  }
  