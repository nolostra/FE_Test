declare module 'react-slick' {
    import * as React from 'react';
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      centerMode?: boolean;
      centerPadding?: string;
      focusOnSelect?: boolean;
    }
    class Slider extends React.Component<Settings> {}
    export default Slider;
  }
  