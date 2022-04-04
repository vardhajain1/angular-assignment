import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbThemeService } from '@nebular/theme';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NbLayoutModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: UsersComponent
        },
        {
          path: 'users',
          component: UsersComponent
        },
      ]
    ),
  ],
  exports: [RouterModule]
})
export class UsersModule {

  constructor(private themeService: NbThemeService) { }

  ngOnInit() {
    this.themeService.changeTheme('corporate');
  }
}
