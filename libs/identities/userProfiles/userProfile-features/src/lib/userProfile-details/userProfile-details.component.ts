import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { select, Store } from '@ngrx/store';
import {  UserUpdaterModelContract,  } from '@guppy/identities/openapi';
import {
  selectLoadingValue,
  selectMessageValue,
  selectReaderModelValue,
  UserProfileDetailActions
} from '@guppy/identities/userProfile/state';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ChipModule } from 'primeng/chip';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { TranslateModule } from '@ngx-translate/core';
import { RippleModule } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { TabViewModule } from 'primeng/tabview';
import { MessageService } from 'primeng/api';
import { BlockUIModule } from 'primeng/blockui';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'lib-user-profile-details',
  standalone: true,
  imports: [CommonModule, ImageModule, ReactiveFormsModule, FormsModule, InputTextModule, CalendarModule, ChipModule, DropdownModule, CardModule, TranslateModule, RippleModule, NgOptimizedImage, TabViewModule, BlockUIModule, ToastModule, PasswordModule, CheckboxModule, InputSwitchModule],
  templateUrl: './userProfile-details.component.html',
  styleUrl: './userProfile-details.component.scss',
})

export class UserProfileDetailsComponent implements OnInit{

  writer: UserUpdaterModelContract = {};
  submitted = false;
  form : FormGroup = this.formBuilder.group({
    firstname: ['',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)],],
    lastname: ['', [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)]],
    language: ['', Validators.required],
    locale: [''],
    dateOfBirth: [Date,Validators.required ],
    properties: [{}],
    password: ['' ],
    phoneNumber: ['',[Validators.required]],
    twoFactorEnabled: [false, Validators.required],
  });
  loading = false;
  languages: Language[] = [
    { name: 'English', code: 'en' },
    { name: 'French', code: 'fr' },
    { name: 'German', code: 'de' }
  ];


  constructor(private store: Store,
  private messageService: MessageService,
              private formBuilder: FormBuilder) {

    this.store.pipe(select(selectReaderModelValue)).subscribe((user) => {
      if (user != null) {
        this.form.patchValue({'firstname': user.firstname});
        this.form.patchValue({'lastname': user.lastname});
        this.form.patchValue({'language': user.language});
        this.form.patchValue({'locale': user.locale});
        /*this.form.patchValue({'password': user.avatar});*/
        this.form.patchValue({'phoneNumber': user.phoneNumber});
        this.form.patchValue({'twoFactorEnabled': user.twoFactorEnabled});

        this.writer = {...user as UserUpdaterModelContract};
        if(user.dateOfBirth){
          const date = new Date(user.dateOfBirth);
          const timeZoneDifference = (date.getTimezoneOffset() / 60) * -1;
          this.form.patchValue({'dateOfBirth': new Date((date.getTime() + (timeZoneDifference * 60) * 60 * 1000))})
        }
        }
      console.log(this.form.getRawValue());
    });
    this.store.pipe(select(selectMessageValue)).subscribe((message) => {
      console.log(message);
      if (message != null) {
        this.messageService.add({
          severity: message.severity,
          summary: message.summary,
          detail: message.detail,
          life: 10000,
        });
      }
    });
    this.store.pipe(select(selectLoadingValue)).subscribe((loading) => {
      this.loading = loading;
    });
  }

  ngOnInit() {
    console.log('UserProfileDetailsComponent ngOnInit');
    this.store.dispatch(UserProfileDetailActions.initialize({currentId: '1'}));
  }
validate(){
  console.log('UserProfileDetailsComponent validate');
  this.submitted = true;
  if (this.form.valid) {
    this.writer.firstname = this.form?.get('firstname')?.value;
    this.writer.lastname = this.form?.get('lastname')?.value;
    this.writer.language = this.form?.get('language')?.value;
    this.writer.dateOfBirth = this.form?.get('dateOfBirth')?.value.toISOString();
    this.writer.phoneNumber = this.form?.get('phoneNumber')?.value;
    this.writer.twoFactorEnabled = this.form?.get('twoFactorEnabled')?.value;
/*
    this.store.dispatch(UserProfileDetailActions.update({writerModel: this.writer}));
*/
    this.submitted = false;
  }


}
cancel() {
  console.log('UserProfileDetailsComponent cancel');
  this.form.reset();
  this.submitted = false;
  this.store.dispatch(UserProfileDetailActions.initialize({currentId: '1'}));
}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

}
interface Language {
  name: string;
  code: string;
}
