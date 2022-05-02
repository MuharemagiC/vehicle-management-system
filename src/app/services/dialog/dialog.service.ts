import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { IDialogConfig } from 'src/app/interfaces/global';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openAddDialog(): void {
    this.dialog.open(DialogComponent, {
      ...this.getDefaultDialogStyle(),
    });
  }

  openEditDialog(id: string): void {
    this.dialog.open(DialogComponent, {
      ...this.getDefaultDialogStyle(),
      data: { id },
    });
  }

  openDeleteDialog(isDeleteDialog: boolean, id: string): void {
    this.dialog.open(DialogComponent, {
      ...this.getDeleteDialogStyle(),
      data: {
        isDeleteDialog,
        id,
      },
    });
  }

  getDeleteDialogStyle(): IDialogConfig {
    return {
      width: '360px',
      height: '288px',
      panelClass: 'delete-dialog',
    };
  }

  getDefaultDialogStyle(): IDialogConfig {
    return {
      width: '50%',
      height: '100vh',
      position: {
        right: '0',
      },
      panelClass: 'default-dialog',
    };
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
