import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {Layout,  Breadcrumb} from "@guppy/layout/layout-domain";
import { MenuItem } from 'primeng/api';

export const LayoutComponentActions = createActionGroup({
  source: 'Layout component',
  events: {
    'Load MenuItems': emptyProps(),
    'Load Layout': emptyProps(),
    'Update Layout': props<{ layout: Layout }>(),
    'Update Breadcrumb': props<{ breadcrumb: Breadcrumb }>(),
    'OnMouseOverMenuItem': props<{ key: string }>(),
    'OnMenuBarToggleButtonClick': props<{ visible: boolean }>(),
    'OnProfileSideBarToggleButtonClick': props<{ visible: boolean }>(),
    'SetProfileSideBarVisibility': props<{ visible: boolean }>(),
  },
});

export const LayoutServicesActions = createActionGroup({
  source: 'Layout Services',
  events: {
    'MenuItem Loaded Success': props<{ menuItems: MenuItem[] }>(),
    'MenuItem Loaded Fail': props<{ message: string }>(),
    'Layout Loaded Success': props<{ layout: Layout }>(),
    'Layout Loaded Fail': props<{ message: string }>(),
    'Layout Updated Success': props<{ layout: Layout }>(),
    'Layout Updated Fail': props<{ message: string }>(),
  }
});

export const SidebarComponentActions = createActionGroup({
  source: 'Sidebar component',
  events: {
    'Change Role': props<{ role: string }>()
  }
});

export const ProfileSidebarComponentActions = createActionGroup({
  source: 'Profile Sidebar component',
  events: {
    'Load MenuItems': emptyProps()
  }
});

export const ProfileSidebarServicesActions = createActionGroup({
  source: 'Profile Sidebar component',
  events: {
    'MenuItem Loaded Success': props<{ menuItems: MenuItem[] }>(),
    'MenuItem Loaded Fail': props<{ message: string }>()
  }
});

