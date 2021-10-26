import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { TableModule } from "primeng/table";
import { VirtualScrollerModule } from "primeng/virtualscroller";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { HttpClientModule } from "@angular/common/http";
import {DialogModule} from 'primeng/dialog';
import { InputTextModule } from "primeng/inputtext";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    TableModule,
    VirtualScrollerModule,
    ToastModule,
    ToolbarModule,
    HttpClientModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    ConfirmDialogModule,
    TableModule,
    VirtualScrollerModule,
    ToastModule,
    ToolbarModule,
    HttpClientModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
