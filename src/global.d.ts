declare module '*.module.(s)css' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

// Doesn't work?
declare module '*.svg' {
    import * as React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;

    export default SVG;
}
