import {  createReducer, on } from '@ngrx/store';
import { LayoutComponentActions, LayoutServicesActions, ProfileSidebarComponentActions, SidebarComponentActions, ProfileSidebarServicesActions } from './layout.actions';
import { LayoutState } from './layout.state';
import { MenuItem } from 'primeng/api';


export const initialState: LayoutState = {
  layout: {
    ripple: false,
    inputStyle: 'outlined',
    menuMode: 'static',
    colorScheme: 'dim',
    theme: '#6366F1',
    scale: 12,
    menuTheme: 'colorScheme',
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
    sidebarActive: false,
    anchored: false,
    id: null,
  },
  menuItemActivedKey: '',
  currentMenuItem: {} as MenuItem,
  menuItems: [],
  layoutLoading: false,
  menuItemsLoading: false,
  breadcrumbs: [],
  errorMessage: null,
  menuBarVisible: true,
  profileSideBarVisible: false,
  currentRole: null,
  profileSideBarMenuItems: []
};

export const layoutReducer = createReducer(
  initialState,
  on(SidebarComponentActions.changeRole, (state, { role }) => ({ ...state, currentRole:role })),
  on(LayoutComponentActions.loadLayout,state => ({ ...state, layoutLoading: true })),
  on(LayoutComponentActions.loadMenuItems,state => ({ ...state, menuItemsLoading: true })),
  on(LayoutComponentActions.updateLayout, state => ({ ...state, layoutLoading: true })),
  on(LayoutComponentActions.updateBreadcrumb, (state, { breadcrumb }) => ({ ...state, breadcrumb:breadcrumb })),
  on(LayoutComponentActions.onMouseOverMenuItem, (state, { key }) => ({ ...state, menuItemActivedKey:key })),
  on(LayoutComponentActions.onMenuBarToggleButtonClick, (state, { visible }) => ({ ...state, menuBarVisible:visible })),
  on(LayoutComponentActions.onProfileSideBarToggleButtonClick, (state, { visible }) => ({ ...state, profileSideBarVisible:visible })),
  on(LayoutComponentActions.setProfileSideBarVisibility, (state, { visible }) => ({ ...state, profileSideBarVisible:visible })),
  on(LayoutServicesActions.layoutLoadedSuccess, (state, { layout }) => ({ ...state, layoutLoading: false, layout:layout })),
  on(LayoutServicesActions.layoutUpdatedFail, (state, { message }) => ({ ...state, layoutLoading: false, errorMessage:message })),
  on(LayoutServicesActions.menuItemLoadedSuccess, (state, { menuItems }) => ({ ...state, menuItemsLoading: false, menuItems:menuItems })),
  on(LayoutServicesActions.menuItemLoadedFail, (state, { message }) => ({ ...state, menuItemsLoading: false, errorMessage:message })),
  on(LayoutServicesActions.layoutUpdatedSuccess, (state, { layout }) => ({ ...state, layoutLoading: false, layout:layout })),
  on(LayoutServicesActions.layoutUpdatedFail, (state, { message }) => ({ ...state, layoutLoading: false, errorMessage:message })),
  on(ProfileSidebarComponentActions.loadMenuItems,state => ({ ...state, menuItemsLoading: true })),
  on(ProfileSidebarServicesActions.menuItemLoadedSuccess,(state, { menuItems })  => ({ ...state, profileSideBarMenuItems: menuItems }))
);




