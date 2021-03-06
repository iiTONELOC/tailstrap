type ColorVariants =
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'default'
    | 'success-outline'
    | 'danger-outline'
    | 'warning-outline'
    | 'info-outline'
    | 'light-outline'
    | 'dark-outline'
    //  'default outline is just `outline`'
    | 'outline';

type PageVariants =
    | 'center'
    | 'start'
    | 'center-start'
    | 'start-center'
    | undefined;

type BoxVariants =
    | 'row'
    | 'col'
    | 'grid'
    | 'flex'
    | 'block'
    | 'inline'
    | 'inline-flex'
    | 'inline-grid'
    | 'inline-block'
    | undefined;
export type { ColorVariants, BoxVariants, PageVariants };