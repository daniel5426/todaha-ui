export interface Layout
{
  id: string | null;
  inputStyle: string;
  colorScheme: ColorScheme;
  theme: string;
  ripple: boolean;
  menuMode: MenuMode;
  scale: number;
  menuTheme: MenuColorScheme;

  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
  sidebarActive: boolean;
  anchored: boolean;

}

export  const isOverlay =   (layout: Layout) => {
  return layout.menuMode === 'overlay';
};

export const isDesktop =  () => {
    return window.innerWidth > 991;
}

export const isSlim = (layout: Layout) => {
    return layout.menuMode === 'slim';
}

export const isSlimPlus =  (layout: Layout) => {
    return layout.menuMode === 'slim-plus';
}

export const isHorizontal =  (layout: Layout) => {
    return layout.menuMode === 'horizontal';
}

export const isMobile = () => {
  return !isDesktop();
}



export type MenuMode =
    | 'static'
    | 'overlay'
    | 'horizontal'
    | 'slim'
    | 'slim-plus'
    | 'reveal'
    | 'drawer';


export type ColorScheme = 'light' | 'dark' | 'dim';

export type MenuColorScheme = 'colorScheme' | 'primaryColor' | 'transparent';


