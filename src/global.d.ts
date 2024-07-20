declare module '@ap.cx/react-fullpage' {
    import { FC, HTMLAttributes } from 'react'
    export const Fullpage: FC<HTMLAttributes<HTMLDivElement>>
    export const FullPageSections: FC<HTMLAttributes<HTMLDivElement>>
    export const FullpageSection: FC<HTMLAttributes<HTMLDivElement>>
};

declare module "tailwindcss/lib/util/flattenColorPalette"