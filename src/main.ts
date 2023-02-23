import "zone.js/dist/zone";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { CheckboxModule } from "primeng/checkbox";
import { DragDropModule } from "primeng/dragdrop";
import { bootstrapApplication } from "@angular/platform-browser";
import customers from "./customers.json";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "my-app",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    TableModule,
    CheckboxModule,
  ],
  template: `
    <div>
      <div class="field-checkbox">
        <p-checkbox
          name="group1"
          value="name"
          [(ngModel)]="frozenColumns"
          inputId="name"
        ></p-checkbox>
        <label for="name">Name</label>
      </div>
      <div class="field-checkbox">
        <p-checkbox
          name="group1"
          value="id"
          [(ngModel)]="frozenColumns"
          inputId="id"
        ></p-checkbox>
        <label for="id">Id</label>
      </div>
      <div class="field-checkbox">
        <p-checkbox
          name="group1"
          value="country"
          [(ngModel)]="frozenColumns"
          inputId="country"
        ></p-checkbox>
        <label for="country">Country (freeze)</label>
      </div>
      <div class="field-checkbox">
        <p-checkbox
          name="group1"
          value="date"
          [(ngModel)]="frozenColumns"
          inputId="date"
        ></p-checkbox>
        <label for="ch">Date</label>
      </div>
    </div>
    <p-table
      [columns]="cols"
      [value]="customers"
      [scrollable]="true"
      [resizableColumns]="true"
      columnResizeMode="expand"
    >
      <ng-template pTemplate="header" let-columns>
        <tr>
          <th
            *ngFor="let col of columns"
            pFrozenColumn
            pResizableColumn
            [frozen]="isFrozen(col.field)"
          >
            {{ col.header }}
          </th>
        </tr>
      </ng-template>

      <ng-template pTemplate="body" let-customer let-columns="columns">
        <tr>
          <td
            *ngFor="let col of columns"
            pFrozenColumn
            [frozen]="isFrozen(col.field)"
          >
            {{ customer[col.field] }}
          </td>
        </tr>
      </ng-template>
    </p-table>
  `,
})
export class App {
  name = "Angular";
  customers = customers;
  cols = [
    {
      field: "name",
      header: "Name",
    },
    {
      field: "id",
      header: "Id",
    },
    {
      field: "country",
      header: "Country",
    },
    {
      field: "date",
      header: "Date",
    },
    {
      field: "company",
      header: "Company",
    },
    {
      field: "status",
      header: "Status",
    },
    {
      field: "activity",
      header: "Activity",
    },
    {
      field: "representative",
      header: "Representative",
    },
    {
      field: "balance",
      header: "Balance",
    },
  ];
  frozenColumns: string[] = [];
  isFrozen = (column: string) => this.frozenColumns.includes(column);
}

bootstrapApplication(App);
