export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
}

export type BuildMode = 'production' | 'development';

export type BuildTarget = 'browserslist' | 'web';

export interface BuildOptions {
    port: number;
    paths: BuildPaths;
    mode: BuildMode;
    target: BuildTarget;
    analyzer?: boolean;
}
