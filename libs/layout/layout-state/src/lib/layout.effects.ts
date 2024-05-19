import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LayoutComponentActions, LayoutServicesActions, ProfileSidebarComponentActions, ProfileSidebarServicesActions, SidebarComponentActions } from './layout.actions';
import { concatMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LayoutEffects {
  constructor(

    private actions$: Actions
  ) {}


  ngrxOnInitEffects() {
    LayoutComponentActions.loadLayout();
    LayoutComponentActions.loadMenuItems();
    return ProfileSidebarComponentActions.loadMenuItems();
  }


  loadLayout$ = createEffect(() =>
  this.actions$.pipe(
    ofType(LayoutComponentActions.loadLayout),
    concatMap(async () => LayoutServicesActions.layoutLoadedSuccess({
      layout: {
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'indigo',
        scale: 14,
        menuTheme: 'colorScheme',
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false,
        sidebarActive: false,
        anchored: false,
        id: null
      }
    })
    )

  )
);

changeRole$ = createEffect(() =>
this.actions$.pipe(
  ofType(SidebarComponentActions.changeRole),
  concatMap(async (values) => {

        if (values.role == 'SUPER_ADMIN') {
          return LayoutServicesActions.menuItemLoadedSuccess({
            menuItems: [
              {
                label: 'Super Admin',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                  {
                    label: 'Topics',
                    icon: 'pi pi-fw pi-tag',
                    routerLink: ['app/topics', {referenceItemRoute:'topics', title:'TOPIC'}]
                  },
                  {
                    label: 'Levels',
                    icon: 'pi pi-fw pi-plus',
                    routerLink: ['app/levels', {referenceItemRoute:'levels', title:'LEVEL'}]
                  },
                  {
                    label: 'Skills',
                    icon: 'pi pi-fw pi-link',
                    routerLink: ['app/skills', {referenceItemRoute:'skills', title:'SKILL'}]
                  },
                  {
                    label: 'Languages',
                    icon: 'pi pi-fw pi-language',
                    routerLink: ['app/languages', {referenceItemRoute:'languages', title:'LANGUAGE'}]
                  },
                  {
                    label: 'Languages de programmation',
                    icon: 'pi pi-fw pi-code',
                    routerLink: ['app/programmingLanguages', {referenceItemRoute:'programmingLanguages', title:'PROGRAMING_LANGUAGE'}]
                  },
                  {
                    label: 'Environnements de développement',
                    icon: 'pi pi-fw pi-hashtag',
                    routerLink: ['app/developmentEnvironments', {referenceItemRoute:'developmentEnvironments', title:'DEVELOPMENT_ENVIRONMENT'}]
                  },
                  {
                    label: 'Categories de questions',
                    icon: 'pi pi-fw pi-table',
                    routerLink: ['app/questionCategories', {referenceItemRoute:'questionCategories', title:'QUESTION_CATEGORY'}]
                  },
                  {
                    label: 'Review Item Categories',
                    icon: 'pi pi-fw pi-thumbs-up',
                    routerLink: ['app/reviewItemCategories', {referenceItemRoute:'reviewItemCategories', title:'REVIEW_ITEM_CATEGORY'}]
                  },
                ],
              },
            ]
          });
        }

        if (values.role == 'ADMIN') {
          return LayoutServicesActions.menuItemLoadedSuccess({
            menuItems: [
              {
                label: 'Admin',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                  {
                    label: 'Questions',
                    icon: 'pi pi-fw pi-question-circle',
                    routerLink: ['app/questions']
                  },
                  {
                    label: 'Challenge definitions',
                    icon: 'pi pi-fw pi-calendar-plus',
                    routerLink: ['app/challengeDefinitions']
                  },
                  {
                    label: 'Quizz definitions',
                    icon: 'pi pi-fw pi-eye',
                    routerLink: ['app/quizzDefinitions']
                  }
                ],
              },
            ]
          });
        }

        if (values.role == 'MANAGER') {
          return LayoutServicesActions.menuItemLoadedSuccess({
            menuItems: [
              {
                label: 'Manager',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                  {
                    label: 'Candidates',
                    icon: 'pi pi-fw pi-users',
                    routerLink: ['app/questions']
                  },
                  {
                    label: 'Sessions',
                    icon: 'pi pi-fw pi-th-large',
                    routerLink: ['app/challenge-definitions']
                  }
                ],
              },
            ]
          });
        }

        if (values.role == 'USER') {
          return LayoutServicesActions.menuItemLoadedSuccess({
            menuItems: [
              {
                label: 'User',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                  {
                    label: 'My sessions',
                    icon: 'pi pi-fw pi-circle-off',
                    routerLink: ['app/sessions']
                  }
                ],
              },
            ]
          });
        }

        return LayoutServicesActions.menuItemLoadedSuccess({
          menuItems: []
        });
      }
    )
  )
);

profileSidebarLoadMenuItems$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ProfileSidebarComponentActions.loadMenuItems),
    concatMap(async () => {
      return ProfileSidebarServicesActions.menuItemLoadedSuccess({
        menuItems: [
          {
            label: 'Profile',
            icon: 'pi pi-user',
            routerLink: ['app/userProfile']
          },
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            routerLink: ['app/settings']
          },
          {
            label: 'Sign out',
            icon: 'pi pi-power-off',
            routerLink: ['app/signout']
          }
        ]
      });
    }
  )
)
);

loadMenuItems$ = createEffect(() =>
this.actions$.pipe(
  ofType(LayoutComponentActions.loadMenuItems),
  concatMap(async () => LayoutServicesActions.menuItemLoadedSuccess({
    menuItems: []
  })
  )
)
);
}
