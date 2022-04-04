import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule, NbTreeGridModule, NbWindowModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    NbTreeGridModule,
    NbCardModule, NbInputModule, NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbWindowModule.forChild(),
    NbSelectModule
  ],
  exports: [
    TableComponent,
    NbButtonModule, NbCardModule, NbInputModule, NbIconModule, FormsModule, ReactiveFormsModule
  ]
})
export class SharedModule { }
