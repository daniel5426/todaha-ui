import { Breadcrumb, Layout } from "@guppy/layout/layout-domain";
import { MenuItem } from "primeng/api";




export interface LayoutState {
  layout: Layout;
  menuItemActivedKey: string;
  breadcrumbs:Breadcrumb[];
  menuItems: MenuItem[];
  profileSideBarMenuItems: MenuItem[];
  currentMenuItem: MenuItem;
  layoutLoading: boolean;
  menuItemsLoading: boolean;
  errorMessage: string | null;
  menuBarVisible: boolean;
  profileSideBarVisible: boolean;
  currentRole: string | null;
}


