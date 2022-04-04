import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbWindowRef, NbWindowService } from '@nebular/theme';
import { User } from '../../../core/models/user.model';

const ButtonGroups = {
  VIEW: 1,
  EDIT: 2
}

interface Record<T> {
  data: T;
  children?: T,
  expanded?: boolean;
}

interface UserEntry {
  firstName: string;
  middleName: string;
  lastName: string;
  email?: string;
  phoneNumber?: number;
  role?: string;
  address?: string;
  date?: string;
  actions?: number
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() allColumns;
  allCols;
  buttonGroups = ButtonGroups;
  isEdit: boolean;

  data: Record<UserEntry>[] = [
    {
      data: { firstName: 'Vardha', middleName: '-', lastName: 'Jain', email: 'vardha.jain@sourcefuse.com', phoneNumber: 122435346646, role: '1', address: 'leimakhong', date: '', actions: this.buttonGroups.VIEW },
      expanded: false
    }
  ];
  addData: Record<UserEntry>[] = [];
  userForm: FormGroup;
  windowRef;
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;

  constructor(public fb: FormBuilder, private windowService: NbWindowService) {
  }

  ngOnInit(): void {
    this.allCols = this.allColumns.map((ele) => { return ele.key ? ele?.key : null });
  }

  initForm(userData?) {
    this.userForm = this.buildForm(this.allColumns, userData)
  }

  buildForm(data, userData?) {
    let group = {};
    data.forEach((ele) => {
      group[ele.key] = new FormControl(userData ? userData[ele.key] : '')
    });
    return this.fb.group(group);
  }

  addUser() {
    console.log("user form", this.userForm.value)
    let record = {
      data: { ...new User(this.userForm.value), actions: this.buttonGroups.VIEW },
      expanded: false
    }
    this.data = [...this.data, record];
    this.close();
  }

  editRow(i?) {
    this.initForm(this.data[i].data)
    // this.isEdit = true
    // this.data[i].data.actions = this.buttonGroups.EDIT
    this.windowRef = this.windowService.open(
      this.contentTemplate,
      { title: 'Edit User', hasBackdrop: false, context: { index: i } }
    );
  }

  saveChanges(i?) {
    console.log(i, this.data)
    this.data[i].data = { ...new User(this.userForm.value), actions: this.buttonGroups.VIEW };
    this.data = [...this.data]
    this.close();
  }

  cancel(index?) {
    this.data.splice(index, 1);
    this.data = [...this.data]
  }

  deleteRow(i?) {
    console.log(i)
    this.data.splice(i, 1);
    this.data = [...this.data]

  }

  openWindow() {
    this.initForm()
    this.windowRef = this.windowService.open(
      this.contentTemplate,
      { title: 'Add New User' },
    );
  }


  refreshData() {
    this.data = [...this.data]
  }
  close() {
    this.windowRef.close();
  }

}
